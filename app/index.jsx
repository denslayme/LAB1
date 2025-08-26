import { StyleSheet, Text, View, } from 'react-native'

const Home = () => { 
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome</Text>

      <Text style={{marginTop: 5, marginBottom: 20}}>
        Section: IT3R9
      </Text>

      <View>
        <Text style={styles.card}>Denzey Mae B. Acosta</Text>
      </View>

    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  card:{
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }
})