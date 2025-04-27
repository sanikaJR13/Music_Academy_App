import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from '@react-native-picker/picker';
//import { useNavigation } from '@react-navigation/native';

const AddNewStudent = () => {
    
        const [name, setName]= useState("");
        // birth date 
        const [birthDate, setBirthDate] = useState(new Date());
        const [showBirthDatePicker, setShowBirthDatePicker] = useState(false);
        const [formattedBirthDate, setFormattedBirthDate] = useState("Select Birthdate");
        const [email, setEmail]=useState("");
        const[emailError,setEmailError]=useState("");
        const[contact, setContact]=useState("");
        const[contactError, setContactError ]=useState("");
        const [address, setAddress] = useState(""); 
        const [addressError, setAddressError] = useState("");
        // Parent 
        const [parentName, setParentName] = useState("");
        const [parentContact, setParentContact] = useState("");
        const [parentContactError, setParentContactError] = useState("");
        const [parentEmail, setParentEmail] = useState("");
        const [parentEmailError, setParentEmailError] = useState("");
        // Have you played guitar before? 
        const [hasPlayedGuitar, setHasPlayedGuitar] = useState(false);


        const [joiningDate, setJoiningdate] = useState(new Date());
        const [showDatePicker, setShowDatePicker] = useState(false);
        const [formattedDate, setFormattedDate] = useState("Select Joining Date");
        const [studentLevel, setStudentLevel]=useState("");
        const [modeOfLearning, setmodeOfLearning] = useState("");
        const [batchTime, setbatchTime]= useState("");

        // payments mode 
        const [selectedPayment, setSelectedPayment] = useState("");
        const [installmentDetails, setInstallmentDetails] = useState("");

        // Funcations.............
        const validateEmail =(text) =>{
            setEmail(text);
            const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(text)){
                setEmailError("Invalid Email Format!");
            }else{
                setEmailError("");
            }
        };

        const validateEmailCheck = (text) => {
            console.log("Student Email changed:", text);
            setEmail(text);
        };
        
        const validateParentEmailCheck = (text) => {
            console.log("Parent Email changed:", text);
            setParentEmail(text);
        };
        


        
        const onChangeBirthDate = (event, selectedDate) => {
            setShowBirthDatePicker(false);
            if (selectedDate) {
                setBirthDate(selectedDate);
                setFormattedBirthDate(selectedDate.toDateString()); 
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

        const onChangeDate = (event, selectedDate) => {
            setShowDatePicker(false); 
            if (selectedDate) {
                setJoiningdate(selectedDate);
                setFormattedDate(selectedDate.toDateString()); 
            }
        };

        const validateParentEmail =(text) =>{
            setParentEmail(text);
            const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(text)){
                setParentEmailError("Invalid Parent Email Format!");
            } else{
                setParentEmailError("");
            }

        };

        const validateParentContact =(text)=>{
            setParentContact(text);
            if(text.trim().length===0){
                setParentContactError("Parent Contact cannot be empty!");
            } else if(!/^\d{10}$/.test(text)){
                setParentContactError("Enter a valid 10-digit number");
            } else{
                setParentContactError("");
            }
        };
        
        const handleSubmit = () => {
            
            if (!name.trim()) {
                alert("Name cannot be empty!");
                return;
            }
            if (!formattedBirthDate || formattedBirthDate === "Select Birthdate") {
                alert("Please select a birthdate!");
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
            if (!parentName.trim()) {
                alert("Parent's Name cannot be empty!");
                return;
            }
            
            if (!parentContact.trim() || parentContactError) {
                alert("Please enter a valid Parent Contact Number!");
                return;
            }
            
            if (!parentEmail.trim() || parentEmailError) {
                alert("Please enter a valid Parent Email!");
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
        <KeyboardAvoidingView behavior='padding' style={{flex:1}} >
            <ScrollView>
          <Text style={styles.title}>Register</Text>
          <TextInput style={styles.input} placeholder="Enter Name"
          
          value={name} onChangeText={(text)=> setName(text)}/>
        
        <TouchableOpacity style={styles.datePickerButton} onPress={()=> setShowBirthDatePicker(true)}>
            <Text style={styles.datePickerText}>{formattedBirthDate} </Text>
        </TouchableOpacity>
        {showBirthDatePicker &&(
            <DateTimePicker
                value={birthDate}
                mode='date'
                display='default'
                maximumDate={new Date()}
                onChange={onChangeBirthDate}
                />
        )}

        <TextInput style={styles.input}
        placeholder='Enter Email'
        value={email}
        onChangeText={validateEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        />

        { emailError ? <Text style={styles.error}>{emailError}</Text>:null}

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
        {/* *************************Parent Name  */}
        <TextInput 
        style={styles.input}
        placeholder="Parent's Name"
        value={parentName}
        onChangeText={setParentName}
        />

        {/* *************************Parent's Contact Number */}
        <TextInput style={styles.input}
        placeholder='Parent Contact Number'
        value={parentContact}
        onChangeText={validateParentContact}
        keyboardType='numeric'
        maxLength={10} 
        /> {parentContactError ? <Text style={styles.error}>{parentContactError} </Text>:null }
        {/* *************************Parent's Email */}
        <TextInput 
         style={styles.input}
         placeholder='Parent Email'
         value={parentEmail}
         onChangeText={validateParentEmail}
         keyboardType='email-address'
         autoCapitalize='none'
        /> {parentEmailError ? <Text style={styles.error}>{parentEmailError} </Text>: null}

        {/* ****************Have you played guitar before? */}
        <View style={styles.switchContainer}>
             <Text style={styles.switchLabel}>Have you played guitar before?</Text>
             <View style={styles.switchWrapper}> 
             <Switch
                value={hasPlayedGuitar}
                onValueChange={(newValue) => setHasPlayedGuitar(newValue)}
                trackColor={{ false: "#767577", true: "#00A3E0" }}
                thumbColor={hasPlayedGuitar ? "#ffffff" : "#f4f3f4"}
            />
            </View>
        </View>

        
       
        <View style={styles.pickerContainer}>
            <Picker 
             selectedValue={studentLevel}
             onValueChange={(itemValue)=> setStudentLevel(itemValue)} style={styles.picker}>
                <Picker.Item label="Choose level" value="Select" enabled={false}/> 
                <Picker.Item label="Beginner" value='Beginner'/>
                <Picker.Item label="Intermediate" value='Intermediate'/>
                <Picker.Item label="Advanced" value='Advanced'/>
            </Picker>
        </View>
        {/* //  const [modeOfLearning, setmodeOfLearning] = useState("");
        const [batchTime, setbatchTime]= useState(""); */}

        <View style={styles.pickerContainer}>
        <Picker 
             selectedValue={modeOfLearning}
             onValueChange={(itemValue)=> setmodeOfLearning(itemValue)} style={styles.picker}>
                <Picker.Item label=" Mode Of Learning" value="Select" enabled={false}/> 
                <Picker.Item label="Online" value='Online'/>
                <Picker.Item label="Offline" value='Offline'/>
            </Picker>

        </View>

        <View style={styles.pickerContainer}>
            <Picker 
             selectedValue={batchTime}
             onValueChange={(itemValue)=> setbatchTime(itemValue)} style={styles.picker}>
                <Picker.Item label="Choose Batch Time" value="Select" enabled={false}/> 
                <Picker.Item label="Morning" value='Morning'/>
                <Picker.Item label="Afternoon" value='Afternoon'/>
                <Picker.Item label="Evening" value='Evening'/>
            </Picker>
        </View>



        {/* *****************joiningDate */}
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

        {/* Payment    RadioButton  */}

        <View style={styles.container}>
            <Text style={styles.title}>Mode Of Payment</Text>

            {/**Payment mode option */}
            <TouchableOpacity style={[styles.option, selectedPayment === "Cash" && styles.selectedOption]}
            onPress={() => setSelectedPayment("Cash")} >
                <Text style={styles.optionText}> Cash</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.option, selectedPayment === "Online" && styles.selectedOption]}
            onPress={() => setSelectedPayment("Online")} >
                <Text style={styles.optionText}> Online</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.option, selectedPayment === "Installments" && styles.selectedOption]}
            onPress={() => setSelectedPayment("Installments")} >
                <Text style={styles.optionText}> Installments</Text>
            </TouchableOpacity>

            {selectedPayment === "Installments" &&(
                <TextInput style={styles.input}
                placeholder='Enter installment Details'
                placeholderTextColor="#A0A0A0"
                value={installmentDetails}
                onChangeText={setInstallmentDetails} />
            )}
        </View>

        

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </ScrollView>  
        </KeyboardAvoidingView>
        
        </View>
      );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: '#121212', // Darker background for a sleek look
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#00E5FF', // Brighter neon color for contrast
        textAlign: 'center',
        marginBottom: 15,
    },
    input: {
        height: 55,
        borderWidth: 1,
        borderColor: '#00E5FF',
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingHorizontal: 15,
        borderRadius: 12,
        fontSize: 17,
        color: '#fff',
        marginBottom: 12,
    },
    error: {
        color: "#FF5252",
        fontSize: 14,
        backgroundColor: 'rgba(255, 82, 82, 0.1)',
        padding: 6,
        borderRadius: 6,
        marginTop: -8,
        marginBottom: 10,
    },
    datePickerButton: {
        backgroundColor: '#1A1A1A',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
        borderColor: '#00E5FF',
        borderWidth: 1.5,
        marginBottom: 15,
    },
    datePickerText: {
        color: '#FFF',
        fontSize: 16,
    },
    pickerContainer: {
        borderWidth: 1.5,
        borderColor: '#00E5FF',
        borderRadius: 12,
        backgroundColor: '#1A1A1A',
        marginBottom: 15,
        overflow: 'hidden',
    },
    picker: {
        color: '#FFF',
        height: 50,
    },
    submitButton: {
        backgroundColor: '#00E5FF',
        paddingVertical: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 15,
        shadowColor: '#00E5FF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    submitButtonText: {
        color: '#121212', // Dark text for contrast
        fontSize: 19,
        fontWeight: 'bold',
    },
    option: {
        padding: 15,
        borderWidth: 1.5,
        borderColor: "#00E5FF",
        borderRadius: 12,
        backgroundColor: "#1A1A1A",
        marginBottom: 12,
        alignItems: 'center',
    },
    selectedOption: {
        backgroundColor: "#00E5FF",
    },
    optionText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
        borderWidth: 1.5,
        borderColor: "#00E5FF",
        borderRadius: 12,
        padding: 10,
    },
    switchLabel: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "600",
    },
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         padding: 25,
//         backgroundColor: '#0A0A0A', 
//     },
//     logo:{
//         width:100,
//         height:80,
//         marginBottom:20,
//         resizeMode:"contain",
//         alignSelf:'center',

//     },
//     title: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         color: '#00A3E0',
//         textAlign: 'center',
//         marginBottom: 10,
//         textShadowColor: 'rgba(0, 163, 224, 0.6)',
//         textShadowOffset: { width: 0, height: 2 },
//         textShadowRadius: 4,
//     },
//     input: {
//         height: 50,
//         borderWidth: 2,
//         borderColor: '#00D4FF', 
//         backgroundColor: 'rgba(255,255,255,0.1)',
//         placeholderTextColor: "#A0A0A0",
//         padding: 12,
//         borderRadius: 10,
//         fontSize: 16,
//         color: '#fff',
//         marginBottom: 10,
//         marginTop: 10,
//     },
//     error: {
//         color: "#FF4C4C",
//         fontSize: 14,
//         fontWeight: "600",
//         backgroundColor: 'rgba(255, 76, 76, 0.1)',
//         padding: 5,
//         borderRadius: 5,
//     },
//     datePickerButton: {
//         backgroundColor: '#1E1E1E',
//         padding: 12,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginBottom: 12,
//         borderColor: '#00A3E0',
//         borderWidth: 2,
//     },
//     datePickerText: {
//         color: '#fff',
//         fontSize: 16,
//     },
//     pickerContainer: {
//         borderWidth: 2,
//         borderColor: '#00A3E0',
//         borderRadius: 10,
//         backgroundColor: '#1E1E1E', 
//         marginBottom: 12,
//         overflow: 'hidden', 
//     },
//     picker: {
//         color: '#fff', 
//         height: 50, 
//     },
//     submitButton: {
//         backgroundColor: '#00A3E0',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginVertical: 15,
//         shadowColor: 'rgba(0, 163, 224, 0.4)',
//         shadowOffset: { width: 0, height: 4 },
//         shadowOpacity: 1,
//         shadowRadius: 6,
//         elevation: 5,
//     },
//     submitButtonText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//         letterSpacing: 1.2,
//     },
//     loginButton: {
//         marginTop: 15,
//         alignItems: 'center',
//     },
//     loginText: {
//         color: '#00A3E0',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textDecorationLine: 'underline',
//     },
//     option: {
//         padding: 12,
//         borderWidth: 2,
//         borderColor: "#00D4FF",
//         borderRadius: 10,
//         backgroundColor: "#1E1E1E",
//         marginBottom: 10,
//     },
//     selectedOption: {
//         backgroundColor: "#00A3E0",
//     },
//     optionText: {
//         color: "#fff",
//         fontSize: 16,
//     },
//     switchContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: 12,
//         borderWidth: 2, // Border thickness
//         borderColor: "#00A3E0", // Border color
//         borderRadius: 10, // Rounded corners
//         padding: 3,
//     },
//     switchLabel: {
//         color: "#fff",
//         fontSize: 16,
//         fontWeight: "600",
//     },
//     SwitchWrapper: {
//         // Some padding inside the border
//     },
    
// });

export default AddNewStudent;