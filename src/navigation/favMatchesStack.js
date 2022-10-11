import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FavMatchesScreen } from '../screens'

const Stack = createNativeStackNavigator()

export default FavMatchesStack = () => {
	return (
		<Stack.Navigator initialRouteName='Matches'>
			<Stack.Screen name='FavMatches' component={FavMatchesScreen} />
		</Stack.Navigator>
	)
}