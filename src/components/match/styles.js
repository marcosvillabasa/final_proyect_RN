import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardContainer: {
		backgroundColor: colors.white,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		minHeight: 100,
		marginHorizontal: 20,
		marginVertical: 10,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: colors.primary,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	team: {
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 50,
		height: 50,
	},
})
