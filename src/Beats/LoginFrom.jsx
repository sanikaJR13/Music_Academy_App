import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { NavigationContainer } from '@react-navigation/native';
const LoginFrom = () => {
    const navigation = useNavigation();
    const[email,setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError ]=useState('');
    const [passwordError, setPasswordError]=useState('');

    const validateEmail =(email) =>{
      const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const handleLogin= () => {
      let isValid= true;
      if(!email){
        setEmailError('Email is required');
        isValid =false;
      } else if (!validateEmail(email)){
        setEmailError('Enter a valid email');
        isValid=false;
      } else {
        setEmailError('');
      }

      if(!password){
        setPasswordError('Password is required');
        isValid= false;
      } else if(password.length<6){
        setPasswordError('Password must be at least 6 characters');
        isValid=false;
      } else if (!/[A-Z]/.test(password)) {
        setPasswordError('Password must contain at least one uppercase letter');
        isValid = false;
      }else if (!/[0-9]/.test(password)) {
        setPasswordError('Password must contain at least one number');
        isValid = false;
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setPasswordError('Password must contain at least one special character');
        isValid = false;
      } else{
        setPasswordError('');
      }

      if (isValid) {
        Alert.alert('Login Successful!', `Email: ${email}`, [
          {
            text: "OK",
            onPress: () => navigation.navigate('Home') // Navigate to Home
          }
        ])};
      };

  return (
    <View style={styles.container}>
      <Image source={require("../Beats/Images/logobackremoverd.png")} style={styles.logo}/>
      <Text style={styles.heading}>Login</Text>
      <TextInput 
      style={[styles.input, emailError ? styles.errorInput: null]}
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize='none'
      placeholderTextColor="#888"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput 
      style={[styles.input, passwordError ? styles.errorInput : null]}
      placeholder='Password'
      
      value={password}
      onChangeText={setPassword}
      placeholderTextColor="#888"
      secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity style={ styles.button} onPress={handleLogin} > 
        <Text style={ styles.buttonText} activeOpacity={0.7}> Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('Register')}>
      <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerLink}>Register</Text></Text>
      </TouchableOpacity>

    </View>
  );
};

const styles =StyleSheet.create({
    
    container :{
        flex:1,
        justifyContent:'center', 
        paddingHorizontal:20, 
        paddingTop:40, 
        backgroundColor:'#0D0D0D',
        alignContent:'center',
        
    }, 
    logo:{
      height: 180,
      width: 180,
      alignSelf: 'center',
      marginBottom: 20,
    },
    heading :{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:30,
        textAlign:'center',
        color:'#FFFFFF',
        letterSpacing: 1.5,
    },
    input:{
        height:50,
        borderColor:'#00A3E0',
        borderWidth:1,
        marginBottom:15,
        paddingHorizontal:18,
        paddingVertical: 12,
        borderRadius:25, 
        backgroundColor:'#1A1A1A',
        fontSize:16,
        color:'#FFFFFF',
        shadowColor: '#00A3E0',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 5,
    },
    errorInput: {
      borderColor: 'red',
      borderWidth: 2, 
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginBottom: 10,
    },
    button :{
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
    buttonText :{
        color:'#FFFFFF',
        fontSize:18,
        fontWeight:'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    registerText: {
      marginTop: 25,
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '600',
    },
    registerLink: {
      color: '#FFD700',
      //color: '#00A3E0', 

      fontWeight: 'bold',
      textDecorationLine: 'underline',
      textAlign: 'center',
      marginTop: 5,
    },

});
export default LoginFrom;