import { StyleSheet, Text, View, Image } from 'react-native'

import Logo from '../assets/img/berr.png'

const Home = () => { 
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Welcome</Text>

      <Text style={{marginTop: 5, marginBottom: 20}}>
        IT3R9
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
  img: {
  width: 150,   
  height: 150,  
  marginVertical: 20,
  
  },
  card:{
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 3,
    boxShadow: '4px 4px rgba(0,0,0,0.1)'
  }
})