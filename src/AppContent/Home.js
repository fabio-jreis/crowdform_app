import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from "react-native"
import Perfil from "../../assets/images/perfil.png"
import Bell from "../../assets/images/bell.png"
import ArrowDown from "../../assets/images/arrow_down.png"
import ArrowUp from "../../assets/images/arrow_up.png"
import EarnRewards from "../../assets/images/earn-rewards.png"

const Header = () => {
    return(
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={Perfil} style={styles.perfilImg} />
                </View>
                <View style={{flex: 9, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <Text style={styles.acountNumber}>Account: $1,457.23</Text>
                    <Image source={ArrowDown} />
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={Bell} />
                </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 30, marginTop: 15}}>
                <View style={{flex: 2, alignItems: 'flex-start'}}>
                    <Text style={styles.potifolio}>Portifolio</Text>
                    
                    <Text>
                        <Text style={styles.portifolioNumber}>$1,245.23 </Text>
                        <Image source={ArrowUp} />
                        <Text style={styles.portifolioPercentage}> 31.82%</Text>
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Image source={EarnRewards} />
                </View>
            </View>
        </View> 
    )
}

export default function Home() {
    return(
        <View style={styles.contentHome}>
            <Header />
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
      },
    contentHome: {
        marginTop: 55,
        marginLeft: 20,
        marginRight: 20
    },
    perfilImg: {
        width: 32,
        height: 32
    },
    acountNumber: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 18,   
        letterSpacing: -0.02,
        color: '#000000'    
    },
    potifolio: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
        textAlign: 'center',
        letterSpacing: -0.02,
        color: '#000000'
    },
    portifolioNumber: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',
        letterSpacing: -0.02,
        color: '#000000',
    },
    portifolioPercentage: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 18,        
        letterSpacing: -0.02,
        color: '#0FDF8F',
        marginLeft: 20   
    },
})