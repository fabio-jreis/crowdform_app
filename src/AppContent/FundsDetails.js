// Asset details
// - Screen to present details of the selected asset/fund. 
// The layout is an illustration of the information that should appear. 
// Use your creativity and you can use images of your choice to compose the details

import React, { useState } from 'react'
import { Text, View, StyleSheet } from "react-native"
import { useSelector } from 'react-redux'
import {useRoute} from "@react-navigation/native"

export default function FundsDetails() {

    const index = useRoute().params.index;
    const funds = useSelector(states => states.data);
    const fundDetail = funds[index];

    return(
        <View style={styles.contentHome}>
            <Text style={styles.fundsTitle}>{fundDetail.title}</Text>

            <Text style={styles.info}>Info & Status</Text>
            <View>
                <View style={{flexDirection: "row",  marginBottom: 18, marginTop: 20}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.infoDetailsLabel}>AUM</Text>
                        <Text>{fundDetail.aum}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.infoDetailsLabel}>Issue Date</Text>
                        <Text>{fundDetail.issueDate}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginBottom: 18}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.infoDetailsLabel}>Vintage Range</Text>
                        <Text>{fundDetail.vintageRange}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.infoDetailsLabel}>TER</Text>
                        <Text>{fundDetail.ter}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.infoDetailsLabel}>Price at Close</Text>
                        <Text>{fundDetail.priceAtCost}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.infoDetailsLabel}>Price at Open</Text>
                        <Text>{fundDetail.priceAtOpen}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    contentHome: {
        marginTop: 55,
        marginLeft: 20,
        marginRight: 20
    },
    info: {
        marginTop: 20,
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 21,
        letterSpacing: -0.02,
        color: '#000000' 
    },
    infoDetailsLabel: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        letterSpacing: -0.02,     
        color: '#A0A0A0'   
    },
    infoResults: {
        fontFamily: 'Sora',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.02',        
        color: '#000000'       
    }
})
