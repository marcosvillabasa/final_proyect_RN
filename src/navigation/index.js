import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import MatchesStack from './matchesStack';


const MatchesNavigator = () => {
  return (
    <NavigationContainer>
        <MatchesStack />
    </NavigationContainer>
  )
}

export default MatchesNavigator