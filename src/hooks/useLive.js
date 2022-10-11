import React, { useEffect } from 'react'
import matchesDB from '../api/matchesDB'

const useLive = () => {
	const [liveMatches, setLiveMatches] = useState([])

	const getMatches = async () => {
		const resp = await matchesDB.get('/fixtures?live=all')
		setLiveMatches(resp.data.response)
	}
	useEffect(() => {
		getMatches()
	}, [])
	return <div>useLive</div>
}

export default useLive
