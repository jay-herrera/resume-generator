import {Text, View} from '@react-pdf/renderer'

import {styles} from '@/pdf/styles'

import type {ResumeData} from '@/types/resume'

type HeaderProps = {
	resume: Pick<ResumeData, 'email' | 'links' | 'location' | 'name' | 'title'>
}

export const Header = ({resume}: HeaderProps) => {
	return (
		<View style={styles.header}>
			<Text style={styles.name}>{resume.name}</Text>
			<Text style={styles.title}>{resume.title}</Text>
		</View>
	)
}
