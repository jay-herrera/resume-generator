import '@/pdf/fonts'
import {Document, Image, Page, Text, View} from '@react-pdf/renderer'

import {ExperienceItem} from '@/pdf/components/ExperienceItem'
import {Header} from '@/pdf/components/Header'
import {Section} from '@/pdf/components/Section'
import {SkillList} from '@/pdf/components/SkillList'
import {styles} from '@/pdf/styles'
import {Sidebar} from '@/pdf/components/Sidebar'

import type {ResumeData} from '@/types/resume'

type ResumeDocumentProps = {
	resume: ResumeData
}

export const ResumeDocument = ({resume}: ResumeDocumentProps) => {
	return (
		<Document
			author={resume.name}
			subject='Resume'
			title={`${resume.name} Resume`}
		>
			<Page size='A4' style={styles.page}>
				<Image
					src='src/assets/top-right-blob.png'
					style={styles.backgroundBlobTopRight}
				/>
				<Image
					src='src/assets/side-blob.png'
					style={styles.backgroundBlobSide}
				/>
				<Image
					src='src/assets/bottom-blob.png'
					style={styles.backgroundBlobBottom}
				/>
				<View style={styles.container}>
					<View style={styles.contentLayout}>
						<View style={styles.mainColumn}>
							<Header resume={resume} />

							<View style={styles.summarySection}>
								{resume.summary
									.split('\n')
									.filter((paragraph) => {
										return paragraph.trim().length > 0
									})
									.map((paragraph) => {
										return (
											<Text key={paragraph} style={styles.summaryParagraph}>
												{paragraph}
											</Text>
										)
									})}
							</View>

							<Section title='Employment History'>
								{resume.experience.map((experience) => {
									return (
										<ExperienceItem
											key={`${experience.company}-${experience.role}`}
											experience={experience}
										/>
									)
								})}
							</Section>

							<Section title='Education'>
								{resume.education.map((education) => {
									return (
										<View key={education.school} style={styles.educationItem}>
											<View style={styles.itemHeader}>
												<Text style={styles.itemTitle}>
													{education.location
														? `${education.degree} at ${education.school}, ${education.location}`
														: `${education.degree} at ${education.school}`}
												</Text>
											</View>

											{education.start || education.end ? (
												<Text style={styles.dateText}>
													{[education.start, education.end]
														.filter(Boolean)
														.join(' — ')
														.toUpperCase()}
												</Text>
											) : null}
										</View>
									)
								})}
							</Section>
						</View>

						<Sidebar resume={resume} />
					</View>
				</View>
			</Page>
		</Document>
	)
}
