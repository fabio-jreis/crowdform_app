// Home
// - Present at least 3 different types of assets/funds, with mock graphics and values
// - Bottom menu with 3 options - (Home, Trade and Portfolio) - Trade and Portfolio can lead to a blank page containing a title and lorem ipsum text

import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity, Alert } from "react-native"
import Perfil from "../../assets/images/perfil.png"
import Bell from "../../assets/images/bell.png"
import ArrowDown from "../../assets/images/arrow_down.png"
import ArrowUp from "../../assets/images/arrow_up.png"
import EarnRewards from "../../assets/images/earn-rewards.png"
import Bs from "../../assets/images/bs.png"
import Wind from "../../assets/images/wind.png"
import Sun from "../../assets/images/sun_icon.png"
import Nature from "../../assets/images/nature_icon.png"
import Chart from "../../assets/images/chart.png"

import { useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native"

const Header = ({user}) => {
    return(
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={Perfil} style={styles.perfilImg} />
                </View>
                <View style={{flex: 9, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                    <Text style={styles.acountNumber}>Account: {user.accountValue}</Text>
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
                        <Text style={styles.portifolioNumber}>{user.portifolio}</Text>
                        <Image source={ArrowUp} />
                        <Text style={styles.portifolioPercentage}>{user.portifolioPercentage}</Text>
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                    <Image source={EarnRewards} />
                </View>
            </View>
        </View> 
    )
}

const ScrollableCards = ({funds}) => {

    const navigation = useNavigation(); 

    return (
        <View>
            <FlatList horizontal data={funds} style={styles.containerCards} renderItem={({item, index}) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('FundsDetails', {index})}
                style={styles.card}>
                    <View style={styles.wrapedCard}>
                        <Image style={{marginBottom: 7}} source={item.icon === 'Wind' ? Wind : item.icon === 'Sun' ? Sun : Nature} />
                        <Text style={styles.fundsCardsLabel}>{item.title}</Text>
                        <Image style={{marginBottom: 14}} source={Chart}/>
                        <Text>
                            <Text>{item.price}</Text>
                            <Image source={ArrowUp} />
                            <Text style={styles.wrapedCardPercent}>{item.percentage}</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            )} />
        </View>
      )

}

export default function Home() {
    
    const funds = useSelector(states => states.FundsReducer.data);
    const user = useSelector(states => states.UserReducer.data[0]); //get the unic user

    return(
        <View style={styles.contentHome}>
            <Header user={user} />
            <ScrollView>
                <Text style={styles.fundsTitle}>Funds</Text> 
                <ScrollableCards funds={funds} />
                <View style={styles.cardLearnMore}>
                    <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={styles.cardLeranMoreText}>Lear more about</Text>
                        <Text style={styles.cardLeranMoreText}>carbon credits</Text>
                        <Text style={styles.cardLearnMoreText2}>Check out our top tips!</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Text style={styles.cardLeranMoreText}>
                            <Image source={Bs} />
                        </Text>
                    </View>                    
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.cardsInvest}>
                        <Text style={styles.cardsInvestText}>Why should you{'\n'} invest here?</Text>
                    </View>
                    <View style={styles.cardsInvest}>
                        <Text style={styles.cardsInvestText}>Card2</Text>
                    </View>
                </View>
            </ScrollView>
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
    fundsTitle: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 18,
        lineHeight: 23,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.02,
        color: '#000000'   
    },
    heading: {
        fontSize: 40,
        paddingHorizontal: 10
    },
    containerCards: {
        paddingRight: 8,
        paddingTop: 8
    },
    card: {
        flex: 1,
        width: 140,
        height: 145,     
        borderWidth: 0.3,
        borderColor: 'E6E6E6', 
        borderRadius: 4,
        marginRight: 15,
    },
    cardLearnMore: {
        backgroundColor: '#770FDF',
        marginTop: 20,
        height: 105,
        flexDirection: 'row'
    },
    cardLeranMoreText: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: -0.02,
        color: '#FFFFFF',
        paddingLeft: 20
    },
    cardLearnMoreText2: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.02,
        color: '#FFFFFF',
        marginTop: 10,
        paddingLeft: 20
    },
    cardsInvest: {
        width: 159,
        height: 215,
        backgroundColor: '#F4F4F4',
        borderRadius: 10,
        marginTop: 20,
        marginRight: 17
    },
    cardsInvestText: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.02,
        color: '#000000',
        marginLeft: 12,
        marginTop: 20
    },
    fundsCardsLabel: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 15,
        letterSpacing: -0.02,
        color: '#000000',
        marginBottom: 14        
    },
    wrapedCard: {
        marginTop: 12,
        marginLeft: 12
    },
    wrapedCardPercent: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'right',
        letterSpacing: -0.02,
        color: '#0FDF8F',
        marginLeft: 2  
    }
})