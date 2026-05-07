import {access, mkdir} from 'node:fs/promises'
import {constants} from 'node:fs'
import {join} from 'node:path'
import {execFile} from 'node:child_process'
import {promisify} from 'node:util'

const execFileAsync = promisify(execFile)

const rootDir = join(import.meta.dir, '../..')
const targetDir = join(rootDir, 'target')
const outputDir = join(rootDir, 'output')

const targetPdfPath = join(targetDir, 'target.pdf')
const generatedPdfPath = join(outputDir, 'resume.pdf')

const targetBasePath = join(targetDir, 'target-page')
const generatedBasePath = join(targetDir, 'generated-page')

const targetPngPath = `${targetBasePath}.png`
const generatedPngPath = `${generatedBasePath}.png`
const overlayPngPath = join(targetDir, 'overlay.png')
const diffPngPath = join(targetDir, 'diff.png')

const assertFileExists = async (filePath: string) => {
	await access(filePath, constants.F_OK)
}

const run = async (
	command: string,
	args: string[],
	options?: {allowFailure?: boolean}
) => {
	try {
		const result = await execFileAsync(command, args)

		if (result.stdout) {
			console.info(result.stdout)
		}

		if (result.stderr) {
			console.info(result.stderr)
		}

		return result
	} catch (error) {
		if (options?.allowFailure) {
			return
		}

		throw error
	}
}

const renderFirstPageToPng = async (
	pdfPath: string,
	outputBasePath: string
) => {
	await run('pdftoppm', [
		'-png',
		'-singlefile',
		'-f',
		'1',
		'-l',
		'1',
		'-r',
		'300',
		pdfPath,
		outputBasePath
	])
}

const createOverlay = async () => {
	await run('magick', [
		generatedPngPath,
		'(',
		targetPngPath,
		'-alpha',
		'set',
		'-channel',
		'A',
		'-evaluate',
		'multiply',
		'0.2',
		'+channel',
		')',
		'-compose',
		'over',
		'-composite',
		overlayPngPath
	])
}

const createDiff = async () => {
	await run('magick', [
		targetPngPath,
		generatedPngPath,
		'-compose',
		'difference',
		'-composite',
		'-auto-level',
		diffPngPath
	])
}

const main = async () => {
	await mkdir(targetDir, {recursive: true})
	await mkdir(outputDir, {recursive: true})

	await assertFileExists(targetPdfPath)
	await assertFileExists(generatedPdfPath)

	console.info('Rendering PDFs to PNG...')
	await renderFirstPageToPng(targetPdfPath, targetBasePath)
	await renderFirstPageToPng(generatedPdfPath, generatedBasePath)

	console.info('Creating overlay...')
	await createOverlay()

	console.info('Creating diff...')
	await createDiff()

	console.info('Done.')
	console.info(`Target PNG: ${targetPngPath}`)
	console.info(`Generated PNG: ${generatedPngPath}`)
	console.info(`Overlay PNG: ${overlayPngPath}`)
	console.info(`Diff PNG: ${diffPngPath}`)
}

await main()
