import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Image, Button } from 'react-native';
import Icon, {MaterialCommunityIcons} from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();



import eye from "../assets/images/eye.png"

import { useTogglePasswordVisibility } from "./hook/useTogglePasswordVisibility"

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleClickSignUp = () => {
        console.log('it works!');
    }
          

    return(
        <View>
            <Text style={styles.labelLogin}>Login</Text>
            <View style={styles.contentFields}>
                <Text style={styles.labelInputLogin}>E-mail</Text>
                <TextInput style={styles.textInputLogin}>john@doe.com</TextInput>

                <Text style={styles.labelInputLogin}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput  secureTextEntry={!showPassword} style={styles.textInputLogin} 
                                placeholder='Minimum 8 characters' 
                                placeholderTextColor={'#CFCFCF'} />  

                    {/* <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.visibilityBtn}
                    onPress={togglePasswordVisibility}>
                    <Image
                        source={
                        showPassword
                            ? require('../assets/images/eye.png')
                            : require('../assets/images/eye.png')
                        }
                        style={styles.btnImage}
                    />
                    </TouchableOpacity> */}

                    {/* <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Pressable onPress={handlePasswordVisibility}>
                                <Icon name={rightIcon} size={22} color="#232323" />
                        </Pressable>
                        </TouchableOpacity> */}
                    

                </View>
                <TouchableOpacity style={styles.buttonLogin} >
                    <Text style={styles.buttonTextLogin}>Login</Text>
                </TouchableOpacity>
                <View style={styles.signupContent}>
                    <Text style={styles.signupText}>
                        Don't have an account?
                        <Text style={styles.signupTextLink} onPress={handleClickSignUp}> Sign up </Text>
                        here
                    </Text>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    labelLogin: {
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
    textInputLogin: {
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
    labelInputLogin: {
        fontFamily: 'Sintony',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 14,
        letterSpacing: -0.02,
        color: '#A0A0A0',
        marginTop: 20   
    },
    buttonLogin: {
        marginTop: 37,
        backgroundColor: '#770FDF',
        height: 58,
        bordeRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextLogin: {
        fontFamily: 'Sitara',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 26,        
        color: '#FFFFFF'      
    },
    signupContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupText: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.02,
        color: '#A0A0A0',
        marginTop: 13       
    },
    signupTextLink: {
        textDecorationLine: 'underline'       
    }
        
        

  });