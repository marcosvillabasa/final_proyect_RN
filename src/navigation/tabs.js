import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../constants/colors'
import MatchesNavigator from './matchesStack'
import FavMatchesStack from './favMatchesStack'

const BottomTab = createBottomTabNavigator()

const Tabs = () => {
	return (
		<BottomTab.Navigator
			initialRouteName='Matches'
			screenOptions={{
				headerShown: false,
				tabBarLabelStyle: {
					color: colors.primary,
				},
			}}
		>
			<BottomTab.Screen
				name='MatchesTab'
				component={MatchesNavigator}
				options={{
					title: 'Matches',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'football' : 'football-outline'}
							size={22}
							color={colors.primary}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name='FavMatchesTab'
				component={FavMatchesStack}
				options={{
					title: 'Fav Matches',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
							size={22}
							color={colors.primary}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	)
}

export default Tabs
