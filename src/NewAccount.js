import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native';

export default function NewAccount() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [isSelected, setSelection] = useState(false);

    const handleClickLinks = () => {
        console.log('function handleClickTerms')
        //navigation.navigate('NewAccount')
    }

    const handleClickLogin = () => {
        navigation.navigate('Login')
    }

    const checkBoxChanged = () => {  
        setSelection(!isSelected);
    }

    return(
        <View>
            <Text style={styles.labelNewAccount}>Create your account</Text>
            <View style={styles.contentFields}>
                <Text style={styles.labelInputNewAccount}>Fisrt Name</Text>
                <TextInput style={styles.textInputNewAccount}>john</TextInput>
                
                <Text style={styles.labelInputNewAccount}>Last Name</Text>
                <TextInput style={styles.textInputNewAccount}>Smith</TextInput>

                <Text style={styles.labelInputNewAccount}>Email</Text>
                <TextInput style={styles.textInputNewAccount}>joe.smith@crb.com.br</TextInput>  

                <Text style={styles.labelInputNewAccount}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput  secureTextEntry={!showPassword} style={styles.textInputNewAccount} 
                                placeholder='Minimum 8 characters' 
                                placeholderTextColor={'#CFCFCF'} />
                </View>

                <View style={styles.newAccountContent}>
                    <CheckBox style={styles.checkbox} value={isSelected} onValueChange={() => checkBoxChanged()} boxType='square'  />
                    <Text style={styles.newAccountText}>
                        Iam over 18 years of age and i have read and agree to the
                        <Text style={styles.newAccountTextLink} onPress={handleClickLinks}> Terms of Service </Text>
                        and
                        <Text style={styles.newAccountTextLink} onPress={handleClickLinks} > Privacy policy </Text>
                    </Text>        
                </View>   

                <TouchableOpacity style={styles.buttonNewAccount} >
                    <Text style={styles.buttonTextNewAccount}>Create account</Text>
                </TouchableOpacity> 

                <View style={styles.newAccountContent}>
                    <Text style={styles.newAccountText}>
                        Already have an account?
                        <Text style={styles.newAccountTextLogIn} onPress={handleClickLogin}> Log in Here</Text>
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
        //border: '2px solid #E6E6E6',
        //borderRadius: 2
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

})