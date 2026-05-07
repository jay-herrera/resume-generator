import {StyleSheet} from '@react-pdf/renderer'

export const styles = StyleSheet.create({
	bullet: {
		fontSize: 9.5,
		lineHeight: 1.35,
		marginBottom: 3
	},
	bulletRow: {
		display: 'flex',
		flexDirection: 'row',
		gap: 4
	},
	bulletSymbol: {
		fontSize: 9.5,
		lineHeight: 1.35,
		width: 8
	},
	contactLine: {
		color: '#333333',
		fontSize: 9,
		marginTop: 5
	},
	container: {
		color: '#111111',
		fontFamily: 'Literal',
		fontSize: 10,
		lineHeight: 1.35,
		paddingBottom: 36,
		paddingHorizontal: 42,
		paddingTop: 23
	},
	dateText: {
		color: '#444444',
		fontSize: 9
	},
	educationItem: {
		marginBottom: 7
	},
	header: {
		color: '#00326E',
		marginBottom: 2,
		paddingBottom: 3
	},
	itemHeader: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 2
	},
	itemMeta: {
		color: '#444444',
		fontSize: 9,
		marginBottom: 3
	},
	itemTitle: {
		fontSize: 10.5,
		fontWeight: 'bold'
	},
	link: {
		color: '#111111',
		textDecoration: 'none'
	},
	name: {
		fontSize: 44,
		fontWeight: 'bold',
		letterSpacing: 0.4,
		lineHeight: 1
	},

	page: {
		backgroundColor: '#F6F6FE',
		position: 'relative'
	},

	backgroundBlobBottom: {
		bottom: 0,
		left: 0,
		position: 'absolute',
		width: 595.28
	},

	backgroundBlobSide: {
		position: 'absolute',
		right: 0,
		top: 390,
		width: 73.68
	},

	backgroundBlobTopRight: {
		position: 'absolute',
		right: 0,
		top: 0,
		width: 258
	},
	projectItem: {
		marginBottom: 8
	},
	section: {
		marginBottom: 11
	},
	sectionTitle: {
		fontSize: 10,
		fontWeight: 'bold',
		letterSpacing: 0.7,
		marginBottom: 6,
		paddingBottom: 2,
		textTransform: 'uppercase'
	},
	skillGroup: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 3
	},
	skillItems: {
		flex: 1,
		fontSize: 9.5
	},
	skillLabel: {
		fontSize: 9.5,
		fontWeight: 'bold',
		width: 82
	},
	summarySection: {
		marginBottom: 18
	},
	summary: {
		fontSize: 10,
		lineHeight: 1.4
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		lineHeight: 1.2,
		marginTop: 12
	},
	contentLayout: {
		display: 'flex',
		flexDirection: 'row',
		gap: 28
	},

	mainColumn: {
		flex: 1
	},

	sidebarColumn: {
		width: 125,
		paddingTop: 260
	},

	sidebarSection: {
		marginBottom: 18
	},

	sidebarTitle: {
		color: '#00326E',
		fontSize: 11,
		fontWeight: 'bold',
		marginBottom: 7
	},

	sidebarText: {
		color: '#111111',
		fontSize: 9.5,
		lineHeight: 1.35,
		marginBottom: 3
	},

	sidebarLink: {
		color: '#111111',
		fontSize: 9.5,
		lineHeight: 1.35,
		marginBottom: 3,
		textDecoration: 'none'
	}
})
