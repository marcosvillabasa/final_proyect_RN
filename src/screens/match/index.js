import { Button, StyleSheet, Text, View } from 'react-native';

export default MatchDetailScreen = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <Text>MatchDetail</Text>
      <Button title='Go Team Info' onPress={() => navigation.navigate('Team')}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
