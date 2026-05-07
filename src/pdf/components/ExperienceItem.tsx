import {Text, View} from '@react-pdf/renderer'

import {styles} from '@/pdf/styles'

import type {ExperienceItem as ExperienceItemType} from '@/types/resume'

type ExperienceItemProps = {
	experience: ExperienceItemType
}

export const ExperienceItem = ({experience}: ExperienceItemProps) => {
	return (
		<View style={styles.projectItem}>
			<View style={styles.itemHeader}>
				<Text style={styles.itemTitle}>
					{experience.role}, {experience.company}
				</Text>
				<Text style={styles.dateText}>
					{experience.start} – {experience.end}
				</Text>
			</View>

			{experience.location ? (
				<Text style={styles.itemMeta}>{experience.location}</Text>
			) : null}

			{experience.bullets.map((bullet) => {
				return (
					<View key={bullet} style={styles.bulletRow}>
						<Text style={styles.bulletSymbol}>•</Text>
						<Text style={styles.bullet}>{bullet}</Text>
					</View>
				)
			})}
		</View>
	)
}
