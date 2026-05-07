import type {ResumeData} from '@/types/resume'

export const resumeData: ResumeData = {
	education: [
		{
			degree: 'B.S. Computer Science',
			end: '2020',
			location: 'City, State',
			school: 'University Name',
			start: '2016'
		}
	],
	email: 'you@example.com',
	experience: [
		{
			bullets: [
				'Built and maintained production React and TypeScript applications.',
				'Improved application performance, reliability, and developer experience.',
				'Collaborated across product, design, and engineering to ship user-facing features.'
			],
			company: 'Company Name',
			end: 'Present',
			location: 'Remote',
			role: 'Software Engineer',
			start: '2021'
		}
	],
	links: [
		{
			label: 'Portfolio',
			url: 'https://example.com'
		},
		{
			label: 'GitHub',
			url: 'https://github.com/example'
		},
		{
			label: 'LinkedIn',
			url: 'https://linkedin.com/in/example'
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
			items: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'HTML', 'CSS'],
			label: 'Frontend'
		},
		{
			items: ['Bun', 'Node.js', 'AWS', 'GraphQL', 'DynamoDB'],
			label: 'Backend / Infra'
		},
		{
			items: ['Performance profiling', 'PDF generation', 'UI architecture'],
			label: 'Other'
		}
	],
	summary:
		'With over four years of experience managing the engineering department of a software company, I have a proven track record of architecting innovative solutions and leading high-performing teams. I excel in creating and maintaining complex (yet, organized) environments, leveraging my strong technical skills and strategic mindset.\nMy ability to think creatively allows me to identify and solve even the most challenging problems, driving continuous improvement and efficiency gains. As a dedicated leader, I foster collaboration and empower my team to achieve their full potential, while employing humility in respecting the chain of command. I am passionate about delivering tangible results and am eager to leverage my expertise to drive success in a new role.',
	title: 'Software Engineer'
}
