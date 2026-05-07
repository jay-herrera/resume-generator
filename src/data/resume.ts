import type {ResumeData} from '@/types/resume'

export const resumeData: ResumeData = {
	education: [
		{
			degree: 'Computer Science',
			end: 'May 2017',
			location: 'Boulder',
			school: 'University of Colorado Boulder',
			start: 'July 2016'
		},
		{
			degree: 'Computer Science',
			end: 'May 2021',
			location: 'Denver',
			school: 'Metropolitan State University',
			start: 'July 2017'
		}
	],
	email: 'che.bird.herrera@gmail.com',
	experience: [
		{
			bullets: [
				'Scaffolded large projects with thousands of files in an organized fashion',
				'Worked with CEO to choose appropriate long-lasting technologies',
				'Configured all DevOps for the company, from linting rules to a custom CI/CD workflow',
				'Developed a custom build solution utilizing AWS Amplify, Cloudformation, and CDK',
				'Implemented proprietary mapping technologies using WebGL and shaders',
				'Wrote internal software, such as custom VSCode extensions'
			],
			company: 'Glowstik',
			end: 'Present',
			location: 'Denver',
			role: 'Head of Engineering',
			start: 'October 2020'
		},
		{
			bullets: [],
			company: 'Geek Squad',
			end: 'October 2020',
			location: 'Denver',
			role: 'Advanced Repair Agent',
			start: 'April 2019'
		}
	],
	links: [
		{
			label: 'GitHub',
			url: 'https://github.com/jay-herrera'
		}
	],
	location: 'Denver, CO',
	name: 'Jay Herrera',
	projects: [
		{
			bullets: [
				'Created a custom PDF resume generator using Bun, TypeScript, and React PDF.',
				'Separated resume data from layout components to make future formatting changes easier.'
			],
			name: 'Resume Generator'
		}
	],
	skills: [
		{
			items: [
				'Javascript (Typescript)',
				'React (NextJS)',
				'NoSQL',
				'AWS Architecture',
				'Elasticsearch'
			],
			label: 'Skills'
		}
	],
	summary:
		'With over four years of experience managing the engineering department of a software company, I have a proven track record of architecting innovative solutions and leading high-performing teams. I excel in creating and maintaining complex (yet, organized) environments, leveraging my strong technical skills and strategic mindset.\nMy ability to think creatively allows me to identify and solve even the most challenging problems, driving continuous improvement and efficiency gains. As a dedicated leader, I foster collaboration and empower my team to achieve their full potential, while employing humility in respecting the chain of command. I am passionate about delivering tangible results and am eager to leverage my expertise to drive success in a new role.\n',
	title: 'Software Engineer'
}
