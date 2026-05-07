import {StyleSheet} from '@react-pdf/renderer'

export const styles = StyleSheet.create({
	bullet: {
		fontSize: 9,
		lineHeight: 1.3,
		marginBottom: 2
	},
	bulletRow: {
		display: 'flex',
		flexDirection: 'row',
		gap: 4,
		marginLeft: 7,
		marginTop: -2
	},
	bulletSymbol: {
		fontSize: 7.5,
		lineHeight: 1.3,
		width: 6
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
		color: '#6F87DB',
		fontSize: 7.5,
		fontWeight: 'bold',
		letterSpacing: 0.6,
		marginBottom: 1
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
		marginBottom: 2
	},
	itemMeta: {
		color: '#444444',
		fontSize: 11.5,
		marginBottom: 2
	},
	itemTitle: {
		color: '#111111',
		fontSize: 11.5,
		fontWeight: 'bold',
		marginBottom: 2
	},
	link: {
		color: '#6F87DB',
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
		marginBottom: 16
	},
	section: {
		marginBottom: 6
	},
	sectionTitle: {
		color: '#00326E',
		fontSize: 14.5,
		fontWeight: 'bold',
		letterSpacing: 0.5,
		marginBottom: 4,
		paddingBottom: 3
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
		marginBottom: 17
	},
	summary: {
		fontSize: 11.5,
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
		width: 135,
		paddingTop: 200
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
		color: '#6F87DB',
		fontSize: 9.5,
		lineHeight: 1.35,
		marginBottom: 3,
		textDecoration: 'none'
	}
})
