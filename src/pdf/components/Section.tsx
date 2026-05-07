import {Text, View} from '@react-pdf/renderer'

import {styles} from '@/pdf/styles'

type SectionProps = {
	children: React.ReactNode
	title: string
}

export const Section = ({children, title}: SectionProps) => {
	return (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>{title}</Text>
			{children}
		</View>
	)
}
