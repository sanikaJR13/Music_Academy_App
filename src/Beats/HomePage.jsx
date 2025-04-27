import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text>HomePage</Text> */}
      <Image source={require('./Images/logobackremoverd.png')} style={styles.logo} />
      <TouchableOpacity style={styles.CurrentStudent} onPress={() => navigation.navigate('CurrentStudent')}>
              <Text style={styles.CurrentStudentText}>Current Student </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.AddNewStudent} onPress={() => navigation.navigate('AddNewStudent')}>
              <Text style={styles.AddNewStudentText}>Add New Registration</Text>
      </TouchableOpacity>

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0A0A0A',
        justifyContent: "center",
        padding: 25,
        

    },
    logo:{
        width:80,
        height:60,
        //marginTop:10,
        resizeMode:"contain",
        alignSelf:'flex-start',
        position:'absolute',
        top:10,
        left:10,
    },

    CurrentStudent:{
      backgroundColor:'#00A3E0',
        paddingVertical:18,
        width: '85%',
        alignSelf: 'center',
        borderRadius:25,
        alignItems:'center',
        marginTop: 10,
        shadowColor: '#00A3E0',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,


    },

    CurrentStudentText:{
      color:'#FFFFFF',
        fontSize:18,
        fontWeight:'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.2,

    },
    AddNewStudent:{
      backgroundColor:'#00A3E0',
        paddingVertical:18,
        width: '85%',
        alignSelf: 'center',
        borderRadius:25,
        alignItems:'center',
        marginTop: 10,
        shadowColor: '#00A3E0',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,


    },

    AddNewStudentText:{
      color:'#FFFFFF',
        fontSize:18,
        fontWeight:'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.2,

    },




})
