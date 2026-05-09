import type {ResumeData} from '@/types/resume'

export const resumeData: ResumeData = {
	education: [
		{
			degree: 'Computer Science Coursework',
			end: 'May 2017',
			location: 'Boulder, CO',
			school: 'University of Colorado Boulder',
			start: 'July 2016'
		},
		{
			degree: 'Computer Science Coursework',
			end: 'May 2021',
			location: 'Denver, CO',
			school: 'Metropolitan State University',
			start: 'July 2017'
		}
	],
	email: 'che.bird.herrera@gmail.com',
	experience: [
		{
			bullets: [
				'Led engineering for an early-stage social platform, owning frontend, backend, cloud infrastructure, internal tooling, and deployment workflows.',
				'Architected and maintained a large React / Next.js codebase with complex product surfaces including chat, maps, notifications, onboarding, settings, and social feeds.',
				'Built and maintained serverless AWS infrastructure using DynamoDB, AppSync, Lambda, S3, CloudFront, CloudFormation, CDK, and Amplify.',
				'Configured engineering systems including linting, CI/CD workflows, build processes, deployment pipelines, and internal developer tooling.',
				'Implemented proprietary geospatial and map-overlay technology using WebGL, Pixi.js, custom shaders, and performance-sensitive animation systems.',
				'Improved rendering and animation performance through profiling, architectural changes, and cross-device debugging on iOS Safari, Android Chrome, macOS Chrome, and Safari.',
				'Developed internal tools including custom VS Code extensions and project navigation utilities to support development in a large codebase.',
				'Collaborated directly with product leadership on technical tradeoffs, feature feasibility, architecture decisions, and production debugging.'
			],
			company: 'Glowstik',
			end: 'April 2026',
			location: 'Denver, CO',
			role: 'Head of Engineering / Founding Engineer',
			start: 'October 2020'
		},
		{
			bullets: [
				'Diagnosed and repaired hardware, software, operating system, and device performance issues in a high-volume technical support environment.',
				'Communicated technical issues clearly to customers and team members while balancing service quality, accuracy, and operational efficiency.',
				'Built strong troubleshooting habits through hands-on repair workflows across consumer devices, operating systems, and networking issues.'
			],
			company: 'Geek Squad',
			end: 'October 2020',
			location: 'Denver, CO',
			role: 'Advanced Repair Agent',
			start: 'April 2019'
		}
	],
	links: [
		{
			label: 'GitHub',
			url: 'https://github.com/jay-herrera'
		},
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/jay-herrera'
		}
	],
	location: 'Denver, CO',
	name: 'Che Herrera',
	projects: [
		{
			bullets: [
				'Built a custom PDF resume generator using Bun, TypeScript, React, and React PDF.',
				'Separated resume data from rendering components to support reusable layouts, faster iteration, and consistent PDF generation.'
			],
			name: 'Resume Generator'
		}
	],
	skills: [
		{
			items: [
				'React',
				'Next.js',
				'TypeScript',
				'JavaScript',
				'Pixi.js',
				'React PDF'
			],
			label: 'Frontend'
		},
		{
			items: [
				'AWS',
				'DynamoDB',
				'AppSync',
				'Lambda',
				'S3',
				'CloudFront',
				'CDK',
				'Amplify'
			],
			label: 'Backend / Cloud'
		},
		{
			items: [
				'CI/CD',
				'Performance profiling',
				'Custom tooling',
				'WebGL',
				'Shaders',
				'PWA development'
			],
			label: 'Systems'
		}
	],
	summary:
		'Full-stack software engineer with 5+ years of experience leading engineering for an early-stage social platform. Strong background in React, Next.js, TypeScript, AWS serverless infrastructure, performance-sensitive UI, geospatial systems, internal tooling, and production debugging. Experienced working across the full product stack in fast-moving startup environments, from architecture and implementation to deployment, testing, and cross-device troubleshooting.',
	title: 'Software Engineer'
}
