import {Text, View} from '@react-pdf/renderer'

import {styles} from '@/pdf/styles'

import type {SkillGroup} from '@/types/resume'

type SkillListProps = {
	skills: SkillGroup[]
}

export const SkillList = ({skills}: SkillListProps) => {
	return (
		<View>
			{skills.map((skillGroup) => {
				return (
					<View key={skillGroup.label} style={styles.skillGroup}>
						<Text style={styles.skillLabel}>{skillGroup.label}</Text>
						<Text style={styles.skillItems}>{skillGroup.items.join(', ')}</Text>
					</View>
				)
			})}
		</View>
	)
}
