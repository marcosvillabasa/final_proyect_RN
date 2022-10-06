import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LiveMatchesScreen } from '../screens'

const Stack = createNativeStackNavigator()

export default LiveMatchesStack = () => {
	return (
		<Stack.Navigator initialRouteName='Matches'>
			<Stack.Screen name='LiveMatches' component={LiveMatchesScreen} />
		</Stack.Navigator>
	)
}