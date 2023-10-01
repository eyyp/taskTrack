import { ScrollView, View,StyleSheet,TouchableOpacity,Text,Image,FlatList,Modal} from "react-native";

const Welcome = () =>{
    return(
      <View style={styles.Body}>
        <Image
          style={styles.image}
          source={require('./src/Assets/image/welcome.png')}
        />
        <Text style={styles.title}>TaskTrackr</Text>
        <Text style={styles.description}>Yapılacak tüm {'\n'}işlerini planla!</Text>
        <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Hemen Başla</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  Body:{
    flex:1,
    backgroundColor:'#0C0C0C',
    paddingTop:95,
    paddingBottom:60,
  },
  image:{
    alignSelf:'center'
  },
  title:{
    color:'#C4EC91',
    fontSize:39,
    fontFamily:'Alatsi-Regular',
    lineHeight:50,
    marginTop:80,
    marginLeft:30
  },
  description:{
    color:'#FFF',
    fontSize:39,
    lineHeight:50,
    marginLeft:30,
    fontFamily:'Alatsi-Regular',
  },
  button:{
    backgroundColor:'#FFF',
    borderRadius:10,
    width:310,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:180
  },
  buttonText:{
    color:'#000',
    fontSize:16,
    fontWeight:'400',
    lineHeight:25,
  }
})

export default Welcome;

