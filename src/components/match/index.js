import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { colors } from '../../constants/colors'
import { useDispatch } from 'react-redux'
import { styles } from './styles'

export const Match = ({ item, onSelectFav }) => {
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
						onPress={() => dispatch(onSelectFav(item.fixture.id))}
					/>
				</View>
			</View>
		</TouchableOpacity>
	)
}
