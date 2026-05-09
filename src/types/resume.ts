// define minimal types used in the project
export type ExperienceItem = {
	bullets: string[]
	company: string
	end?: string
	location?: string
	role: string
	start: string
}

export type EducationItem = {
	degree: string
	end?: string
	location?: string
	school: string
	start?: string
}

export type SkillGroup = {
	items: string[]
	label: string
}

export type ResumeLink = {
	label: string
	url: string
}

export type ProjectItem = {
	bullets: string[]
	name: string
	url?: string
}

export type ResumeData = {
	education: EducationItem[]
	email: string
	experience: ExperienceItem[]
	links: ResumeLink[]
	location: string
	name: string
	skills: SkillGroup[]
	summary: string
	title: string
}
