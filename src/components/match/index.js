import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../constants/colors'
import { useDispatch } from 'react-redux'
import { selectMatch } from '../../store/actions'

export const Match = ({ item }) => {
	const dispatch = useDispatch()
	return (
		<TouchableOpacity>
			<View style={styles.cardContainer}>
				<View style={styles.team}>
					<Image source={{ uri: item.teams.home.logo }} style={styles.image} />
					<Text>{item.teams.home.name}</Text>
					<Text>{item.goals.home}</Text>
				</View>
				<View style={styles.team}>
					<Image source={{ uri: item.teams.away.logo }} style={styles.image} />
					<Text>{item.teams.away.name}</Text>
					<Text>{item.goals.away}</Text>
				</View>
				<View style={styles.cardHeader}>
					<Ionicons
						name={'heart'}
						size={22}
						color={colors.secondary}
						onPress={() => dispatch(selectMatch(item.fixture.id))}
					/>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
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
