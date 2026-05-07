import {Text, View} from '@react-pdf/renderer'

import {styles} from '@/pdf/styles'

import type {ExperienceItem as ExperienceItemType} from '@/types/resume'

type ExperienceItemProps = {
	experience: ExperienceItemType
}

export const ExperienceItem = ({experience}: ExperienceItemProps) => {
	const heading = experience.location
		? `${experience.role} at ${experience.company}, ${experience.location}`
		: `${experience.role} at ${experience.company}`

	const dateRange = [experience.start, experience.end]
		.filter(Boolean)
		.join(' — ')

	return (
		<View style={styles.projectItem}>
			<View style={styles.itemHeader}>
				<Text style={styles.itemTitle}>{heading}</Text>
			</View>

			{dateRange ? (
				<Text style={styles.dateText}>{dateRange.toUpperCase()}</Text>
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
