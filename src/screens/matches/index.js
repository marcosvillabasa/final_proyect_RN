import { Button, StyleSheet, Text, View } from 'react-native';

export default MatchesScreen = ({navigation}) =>  {
  return (
    <View style={styles.container}>
      <Text>Matches</Text>
      <Button title='Go Matches Details' onPress={() => navigation.navigate('Match')}/>
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
