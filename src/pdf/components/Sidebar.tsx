import {Link, Text, View} from '@react-pdf/renderer'

import {SkillList} from '@/pdf/components/SkillList'
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
				<Text style={styles.sidebarText}>720-202-0255</Text>
				<Link src={`mailto:${resume.email}`} style={styles.sidebarLink}>
					{resume.email}
				</Link>
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
				<SkillList skills={resume.skills} />
			</View>

			<View style={styles.sidebarSection}>
				<Text style={styles.sidebarTitle}>References</Text>
				<Text style={styles.sidebarTextBold}>
					References available upon request
				</Text>
			</View>
		</View>
	)
}
