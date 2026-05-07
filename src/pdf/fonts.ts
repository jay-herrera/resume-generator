import {Font} from '@react-pdf/renderer'

Font.register({
	family: 'Literal',
	fonts: [
		{
			src: 'src/assets/fonts/Literal-Regular.otf',
			fontWeight: 'normal'
		},
		{
			src: 'src/assets/fonts/Literal-Bold.otf',
			fontWeight: 'bold'
		},
		{
			src: 'src/assets/fonts/Literal-Light.otf',
			fontWeight: 'light'
		}
	]
})
