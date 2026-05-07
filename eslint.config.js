import js from '@eslint/js'
import {createTypeScriptImportResolver} from 'eslint-import-resolver-typescript'
import importX, {createNodeResolver} from 'eslint-plugin-import-x'
import sortKeysFix from 'eslint-plugin-sort-keys-fix'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,

	{
		ignores: ['dist', 'build', 'output', 'node_modules', '.cache', '.vscode']
	},

	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.node
			},
			parserOptions: {
				tsconfigRootDir: import.meta.dirname
			},
			sourceType: 'module'
		},
		plugins: {
			'import-x': importX,
			'sort-keys-fix': sortKeysFix
		},
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					vars: 'all',
					varsIgnorePattern: '^_'
				}
			],

			'arrow-body-style': ['warn', 'always'],

			'import-x/no-duplicates': 'warn',
			'import-x/no-unresolved': 'error',
			'import-x/order': [
				'warn',
				{
					alphabetize: {
						caseInsensitive: true,
						order: 'asc'
					},
					distinctGroup: false,
					groups: [
						'builtin',
						'external',
						['internal', 'parent', 'sibling', 'index'],
						'unknown'
					],
					'newlines-between': 'always',
					pathGroups: [
						{
							group: 'external',
							pattern: 'react',
							position: 'before'
						},
						{
							group: 'internal',
							pattern: '@/**',
							position: 'before'
						}
					],
					pathGroupsExcludedImportTypes: ['react']
				}
			],

			'no-console': ['warn', {allow: ['warn', 'error', 'info']}],
			'no-empty': 'off',

			'padding-line-between-statements': [
				'warn',
				{
					blankLine: 'always',
					next: 'multiline-block-like',
					prev: '*'
				},
				{
					blankLine: 'always',
					next: 'multiline-const',
					prev: '*'
				},
				{
					blankLine: 'always',
					next: 'multiline-expression',
					prev: '*'
				},
				{
					blankLine: 'always',
					next: 'multiline-let',
					prev: '*'
				},
				{
					blankLine: 'always',
					next: 'return',
					prev: '*'
				},
				{
					blankLine: 'any',
					next: 'expression',
					prev: '*'
				}
			],

			'sort-imports': [
				'warn',
				{
					ignoreCase: true,
					ignoreDeclarationSort: true
				}
			],

			'sort-keys-fix/sort-keys-fix': [
				'warn',
				'asc',
				{
					caseSensitive: false,
					natural: true
				}
			]
		},
		settings: {
			'import-x/resolver-next': [
				createTypeScriptImportResolver({
					alwaysTryTypes: true,
					project: ['./tsconfig.json']
				}),
				createNodeResolver({
					extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
				})
			]
		}
	},

	{
		files: ['*.config.{js,ts,mjs,mts}', 'eslint.config.{js,mjs}'],
		languageOptions: {
			globals: {
				...globals.node
			}
		}
	}
)
