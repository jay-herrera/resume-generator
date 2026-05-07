import {Link, Text, View} from '@react-pdf/renderer'

import {styles} from '@/pdf/styles'

import type {ResumeData} from '@/types/resume'

type SidebarProps = {
	resume: ResumeData
}

export const Sidebar = ({resume}: SidebarProps) => {
	return (
		<View style={styles.sidebarColumn}>
			<View style={styles.sidebarSection}>
				<Text style={styles.sidebarTitle}>Details</Text>
				<Text style={styles.sidebarText}>{resume.location}</Text>
				<Text style={styles.sidebarText}>{resume.email}</Text>
			</View>

			<View style={styles.sidebarSection}>
				<Text style={styles.sidebarTitle}>Links</Text>

				{resume.links.map((link) => {
					return (
						<Link key={link.url} src={link.url} style={styles.sidebarLink}>
							{link.label}
						</Link>
					)
				})}
			</View>

			<View style={styles.sidebarSection}>
				<Text style={styles.sidebarTitle}>Skills</Text>

				{resume.skills
					.flatMap((skillGroup) => {
						return skillGroup.items
					})
					.map((skill) => {
						return (
							<Text key={skill} style={styles.sidebarText}>
								{skill}
							</Text>
						)
					})}
			</View>

			<View style={styles.sidebarSection}>
				<Text style={styles.sidebarTitle}>References</Text>
				<Text style={styles.sidebarText}>
					References available upon request
				</Text>
			</View>
		</View>
	)
}
