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
				'Architected and maintained a large React / Next.js / TypeScript codebase with complex product surfaces including chat, maps, notifications, onboarding, settings, and social feeds.',
				'Built and maintained backend services and APIs using Node.js, Express, and AWS serverless technologies.',
				'Implemented real-time application features using AppSync subscriptions and WebSocket-based data synchronization patterns.',
				'Built and maintained cloud infrastructure using DynamoDB, AppSync, Lambda, S3, CloudFront, CloudFormation, CDK, and Amplify.',
				'Configured engineering systems including linting, CI/CD workflows, build processes, deployment pipelines, and internal developer tooling.',
				'Implemented proprietary geospatial and map-overlay technology using WebGL, Pixi.js, custom shaders, and performance-sensitive animation systems.',
				'Improved rendering and animation performance through profiling, architectural changes, and cross-device debugging on iOS Safari, Android Chrome, macOS Chrome, and Safari.',
				'Developed internal tools including custom VS Code extensions and project navigation utilities to support development in a large codebase.',
				'Collaborated directly with product leadership on technical tradeoffs, feature feasibility, architecture decisions, and production debugging while mentoring a junior engineer through code reviews and technical guidance.'
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
	skills: [
		{
			items: [
				'React',
				'Next.js',
				'TypeScript',
				'JavaScript',
				'Pixi.js',
				'WebGL'
			],
			label: 'Frontend'
		},
		{
			items: [
				'Node.js',
				'Express',
				'AWS',
				'DynamoDB',
				'AppSync',
				'Lambda',
				'S3',
				'CloudFront',
				'CDK',
				'Amplify',
				'WebSockets'
			],
			label: 'Backend / Cloud'
		},
		{
			items: [
				'CI/CD',
				'Performance profiling',
				'Custom tooling',
				'Shaders',
				'PWA development',
				'Production debugging'
			],
			label: 'Systems'
		}
	],
	summary:
		'Software engineer with 5+ years of experience building production web applications, cloud infrastructure, and performance-sensitive visualization systems. Strong background in React, TypeScript, WebGL, geospatial rendering, AWS serverless architecture, real-time systems, and production debugging. Experienced owning technical systems end-to-end in fast-moving startup environments, from architecture and implementation to deployment, testing, and cross-device troubleshooting.',
	title: 'Senior Software Engineer'
}
