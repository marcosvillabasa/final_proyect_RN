import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Match } from '../../components/match'

export default MatchesScreen = ({ navigation }) => {
	const matches = useSelector((state) => state.matches.matches)

	const renderItem = ({ item }) => <Match item={item} />

	return (
		<View>
			<FlatList
				data={matches}
				renderItem={renderItem}
				keyExtractor={(item) => item.fixture.id.toString()}
			/>
		</View>
	)
}
