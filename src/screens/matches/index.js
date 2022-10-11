import { FlatList, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Match } from '../../components/match'
import { selectMatch } from '../../store/actions'

export default MatchesScreen = ({ navigation }) => {
	const matches = useSelector((state) => state.matches.matches)
	const dispatch = useDispatch()

	const renderItem = ({ item }) => <Match item={item} onSelectFav={selectMatch}/>

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
