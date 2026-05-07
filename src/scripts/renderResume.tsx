import {mkdir} from 'node:fs/promises'

import {renderToFile} from '@react-pdf/renderer'

import {resumeData} from '@/data/resume'
import {ResumeDocument} from '@/pdf/ResumeDocument'

const outputDirectory = 'output'
const outputPath = `${outputDirectory}/resume.pdf`

await mkdir(outputDirectory, {recursive: true})

await renderToFile(<ResumeDocument resume={resumeData} />, outputPath)

console.info(`Generated ${outputPath}`)
