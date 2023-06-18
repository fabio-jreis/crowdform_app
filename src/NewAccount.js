import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native';
import Eye from "../assets/images/eye.png"

export default function NewAccount() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(true);
    const [isSelected, setSelection] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    const handleClickLinks = (type) => {
        console.log('function handleClickTerms')

        if(type === 'Terms') {
            navigation.navigate('Terms')
        } else {
            navigation.navigate('Privacy')
        }
    }

    const handleClickLogin = () => {
        navigation.navigate('Login')
    }

    const checkBoxChanged = () => {  
        setSelection(!isSelected);
    }

    const handleCreateAccount = () => {
        console.log("F: ", firstName)
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

        if(firstName === '') {
            alert('Enter first name')
            return false;
        } else if(lastName === '') {
            alert('Enter last name')
            return false;
        } else if(!strongRegex.test(email)) {
            alert('Email is not correct')
            return false;
        } else if(password.length < 8) {
            alert('The password needs to have a minimum of 8 characters.')
            return false;
        } else if(!isSelected) {
            alert('Select Terms of service and Privacy policy')
            return false;
        }

        navigation.navigate('Login')        
    }    

    return(
        <View>
            <Text style={styles.labelNewAccount}>Create your account</Text>
            <View style={styles.contentFields}>
                <Text style={styles.labelInputNewAccount}>Fisrt Name</Text>
                <TextInput 
                    style={styles.textInputNewAccount}
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}></TextInput>
                
                <Text style={styles.labelInputNewAccount}>Last Name</Text>
                <TextInput 
                    style={styles.textInputNewAccount}
                    value={lastName}
                    onChangeText={(text) => setLastName(text)}></TextInput>

                <Text style={styles.labelInputNewAccount}>Email</Text>
                <TextInput 
                    style={styles.textInputNewAccount}
                    value={email}
                    onChangeText={(text) => setEmail(text)}></TextInput>  

                <Text style={styles.labelInputNewAccount}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput  
                        secureTextEntry={!showPassword} 
                        style={styles.textInputNewAccount} 
                        placeholder='Minimum 8 characters' 
                        value={password}
                        placeholderTextColor={'#CFCFCF'}
                        onChangeText={(text) => setPassword(text)} />
                    <TouchableOpacity
                    style={styles.wrapperIcon}
                    onPress={() => setShowPassword(!showPassword)}>
                        <Image source={showPassword ? Eye : null} style={styles.icon} />
                    </TouchableOpacity>   


                </View>

                <View style={styles.newAccountContent}>
                    <CheckBox style={styles.checkbox} value={isSelected} onValueChange={() => checkBoxChanged()} boxType='square'  />
                    <Text style={styles.newAccountText}>
                        Iam over 18 years of age and i have read and agree to the
                        <Text style={styles.newAccountTextLink} onPress={() => handleClickLinks('Terms')}> Terms of Service </Text>
                        and
                        <Text style={styles.newAccountTextLink} onPress={() => handleClickLinks('Privacy')} > Privacy policy </Text>
                    </Text>        
                </View>   

                <TouchableOpacity style={styles.buttonNewAccount} >
                    <Text style={styles.buttonTextNewAccount} onPress={() => handleCreateAccount()}>Create account</Text>
                </TouchableOpacity> 

                <View style={styles.newAccountContent}>
                    <Text style={styles.newAccountText}>
                        Already have an account?
                        <Text style={styles.newAccountTextLogIn} onPress={() => handleClickLogin()}> Log in Here</Text>
                    </Text>
                </View>                                          
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    labelNewAccount: {
        marginTop: 32,
        paddingHorizontal: 24,
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: -0.02,    
        color: '#000000'
      },
      contentFields: {
        marginLeft: 20,
        marginRight: 20,
    },
    textInputNewAccount: {
        backgroundColor: '#F4F4F4',
        borderRadius: 4,
        height: 48,
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,      
        letterSpacing: -0.02,  
        color: '#000000'    
    }, 
    labelInputNewAccount: {
        fontFamily: 'Sintony',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 14,
        letterSpacing: -0.02,
        color: '#A0A0A0',
        marginTop: 20   
    },
    newAccountContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    newAccountText: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.02,
        color: '#A0A0A0',
        marginTop: 13       
    },    
    newAccountTextLink: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.02,
        color: '#000000',
        marginTop: 13       
    },
    checkbox: {
        marginTop: 11,
        marginRight: 1,
        transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }]
    },
    buttonNewAccount: {
        marginTop: 37,
        backgroundColor: '#770FDF',
        height: 58,
        bordeRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextNewAccount: {
        fontFamily: 'Sitara',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 26,        
        color: '#FFFFFF'      
    },
    newAccountTextLogIn: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.02,
        color: '#000000',
        marginTop: 13,
        textDecorationLine: 'underline'          
    },            
    icon: {
        width: 30,
        height: 24,
    },   
    wrapperIcon: {
        position: 'absolute',
        right: 0,
        padding: 10,
    }, 

})