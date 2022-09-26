import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MatchesScreen, MatchDetailScreen, TeamScreen } from '../screens'

const Stack = createNativeStackNavigator()

export default MatchesStack = () => {
	return (
		<Stack.Navigator initialRouteName='Matches'>
			<Stack.Screen name='Matches' component={MatchesScreen} />
			<Stack.Screen name='Match' component={MatchDetailScreen} />
			<Stack.Screen name='Team' component={TeamScreen} />
		</Stack.Navigator>
	)
}
