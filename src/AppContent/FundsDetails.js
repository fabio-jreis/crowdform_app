import React, { useState } from 'react'
import { Text } from "react-native"
import { useSelector } from 'react-redux'
import {useRoute} from "@react-navigation/native"

export default function FundsDetails() {

    const index = useRoute().params.index;
    const funds = useSelector(states => states.data);
    const fundDetail = funds[index];

    return(
        <Text>{fundDetail.title}</Text>
    )
}