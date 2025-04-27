import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

const RegisterForm = () => {
        const [name, setName]= useState("");
        const [email, setEmail]=useState("");
        const[emailError,setEmailError]=useState("");
        const[contact, setContact]=useState("");
        const[contactError, setContactError ]=useState("");
        const [address, setAddress] = useState(""); 
        const [addressError, setAddressError] = useState("");
        const [password, setPassword] = useState('');
        const [passwordError, setPasswordError]=useState([]);
        const [confirmPassword, setConfirmPassword] = useState(""); 
        const [confirmPasswordError, setConfirmPasswordError] = useState("");
        const [joiningDate, setJoiningdate] = useState(new Date());
        const [showDatePicker, setShowDatePicker] = useState(false);
        const [formattedDate, setFormattedDate] = useState("Select Joining Date");
        const [studentLevel, setStudentLevel]=useState("");

        const navigation = useNavigation();

        const validateEmail =(text) =>{
            setEmail(text);
            const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(text)){
                setEmailError("Invalid Email Format!");
            }else{
                setEmailError("");
            }
            
          };

        const validateContact = (text) => {
            setContact(text);
        
            if (text.trim().length === 0) {
                setContactError("Contact number cannot be empty!");
                return;
            }
    
            if (!/^\d{10}$/.test(text)) {
                setContactError("Enter a valid 10-digit number");
            } else {
                setContactError("");
            }
        };
        
        const validateAddress = (text) => {
            setAddress(text);
            if (text.trim().length === 0) {
              setAddressError("Address cannot be empty!");
            } else {
              setAddressError("");
            }
        };

        const validatePassword = (text) => {
            setPassword(text);
            let errors = [];

             if (text.length < 6) {
             errors.push("Password must be at least 6 characters long.");
            }
             if (!/[a-z]/.test(text)) {
             errors.push("Password must contain at least one lowercase letter.");
            }
             if (!/[A-Z]/.test(text)) {
             errors.push("Password must contain at least one uppercase letter.");
             }
             if (!/\d/.test(text)) {
             errors.push("Password must contain at least one number.");
             }
             if (!/[@$!%*?&]/.test(text)) {
             errors.push("Password must contain at least one special character (@$!%*?&).");
             }

    setPasswordError(errors);
        };

        const [date, setDate] = useState(new Date());

        const onChangeDate = (event, selectedDate) => {
            setShowDatePicker(false); 
            if (selectedDate) {
                setJoiningdate(selectedDate);
                setFormattedDate(selectedDate.toDateString()); 
            }
        };

        const validateConfirmPassword = (text) => {
            setConfirmPassword(text);
            if (text !== password) {
              setConfirmPasswordError("Passwords do not match!");
            } else {
              setConfirmPasswordError("");
            }
        };

        const handleSubmit = () => {
            
            if (!name.trim()) {
                alert("Name cannot be empty!");
                return;
            }
        
            if (!email.trim() || emailError) {
                alert("Please enter a valid email!");
                return;
            }
        
            if (!contact.trim() || contactError) {
                alert("Please enter a valid 10-digit contact number!");
                return;
            }
        
            if (!address.trim()) {
                alert("Address cannot be empty!");
                return;
            }
        
            if (!password || passwordError <0 ) {
                alert("Please fix password errors before submitting!");
                return;
            }
        
            if (!confirmPassword || confirmPasswordError) {
                alert("Passwords do not match!");
                return;
            }
        
            if (!formattedDate || formattedDate === "Select Joining Date") {
                alert("Please select a joining date!");
                return;
            }
            alert("Registration Successful!");
        };
        
      return (
        <View style={styles.container}>
            <Image source={require('../Beats/Images/logobackremoverd.png')} style={styles.logo}/>
            <Text style={styles.title}>Register</Text>
          <TextInput style={styles.input} placeholder="Enter Name"
          
          value={name} onChangeText={(text)=> setName(text)}/>

        <TextInput style={styles.input}
        placeholder='Enter Email'
        value={email}
        onChangeText={validateEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        />

        { emailError ? <Text style={styles.error}>{emailError} </Text>:null}

         <TextInput 
         style={styles.input}
         placeholder='Enter Contact Number'
         value={contact}
         onChangeText={validateContact}
         keyboardType='numeric'
         maxLength={10}
         />
         {contactError ? <Text style={styles.error}>{contactError} </Text>: null}

        <TextInput
        style={[styles.input, styles.addressInput]}
        placeholder="Enter Address"
        value={address}
        onChangeText={validateAddress}
        multiline={true} // Allows multi-line input
        numberOfLines={3} />
        {addressError ? <Text style={styles.error}>{addressError}</Text> : null}

        <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={validatePassword}
        secureTextEntry={true}
        />
        {/* {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null} */}
        {passwordError.length > 0 &&
        passwordError.map((error, index) => (
        <Text key={index} style={styles.error}>{error}</Text>
        ))
        }

        <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={validateConfirmPassword}
        secureTextEntry={true} 
        />
        {confirmPasswordError ? (
        <Text style={styles.error}>{confirmPasswordError}</Text>
        ) : null}

        <TouchableOpacity style={styles.datePickerButton} onPress={()=> setShowDatePicker(true)}>
            <Text style={styles.datePickerText}>{formattedDate}</Text>
        </TouchableOpacity>

        {showDatePicker &&(

            <DateTimePicker 
            value={joiningDate}
            mode='date'
            display='default'
            minimumDate={new Date()}
            onChange={onChangeDate}
            />
        )}
       
        <View style={styles.pickerContainer}>
            <Picker 
             selectedValue={studentLevel}
             onValueChange={(itemValue)=> setStudentLevel(itemValue)} style={styles.picker}
            >
                <Picker.Item label="Choose level" value="" enabled={false} /> 
                <Picker.Item label="Beginner" value='Beginner'/>
                <Picker.Item label="Intermediate" value='Intermediate'/>
                <Picker.Item label="Advanced" value='Advanced'/>
            </Picker>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Already Registered? Login */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already registered? Login</Text>
        </TouchableOpacity>

        </View>
      );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 25,
        backgroundColor: '#0A0A0A', 
    },
    logo:{
        width:100,
        height:80,
        marginBottom:20,
        resizeMode:"contain",
        alignSelf:'center',

    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00A3E0',
        textAlign: 'center',
        marginBottom: 20,
        textShadowColor: 'rgba(0, 163, 224, 0.6)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    input: {
        height: 50,
        borderWidth: 2,
        borderColor: '#00D4FF', 
        backgroundColor: 'rgba(255,255,255,0.1)',
        placeholderTextColor: "#A0A0A0",
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
        color: '#fff',
        marginBottom: 12,
    },
    error: {
        color: "#FF4C4C",
        fontSize: 14,
        fontWeight: "600",
        backgroundColor: 'rgba(255, 76, 76, 0.1)',
        padding: 5,
        borderRadius: 5,
    },
    datePickerButton: {
        backgroundColor: '#1E1E1E',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 12,
        borderColor: '#00A3E0',
        borderWidth: 2,
    },
    datePickerText: {
        color: '#fff',
        fontSize: 16,
    },
    pickerContainer: {
        borderWidth: 2,
        borderColor: '#00A3E0',
        borderRadius: 10,
        backgroundColor: '#1E1E1E', 
        marginBottom: 12,
        overflow: 'hidden', 
    },
    picker: {
        color: '#fff', 
        height: 50, 
    },
    submitButton: {
        backgroundColor: '#00A3E0',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 15,
        shadowColor: 'rgba(0, 163, 224, 0.4)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 5,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1.2,
    },
    loginButton: {
        marginTop: 15,
        alignItems: 'center',
    },
    loginText: {
        color: '#00A3E0',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default RegisterForm;