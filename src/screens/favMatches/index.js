import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Match } from '../../components/match'

export default FavMatchesScreen = ({ navigation }) => {
	const matchesFav = useSelector((state) => state.matches.matchesFav)
	const renderItem = ({ item }) => <Match item={item} />

	return (
		<FlatList
			data={matchesFav}
			renderItem={renderItem}
			keyExtractor={(item) => item.fixture.id.toString()}
		/>
	)
}
