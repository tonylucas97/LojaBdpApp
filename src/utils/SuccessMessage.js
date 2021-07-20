import React, { useState } from "react"
import { View, Text } from "react-native"
import * as Animatable from 'react-native-animatable';

export default function SuccessMessage(props) {

    const [isActive, setIsActive] = useState(props.show || false)

    if (isActive) {
        return (
            <View style={{flexDirection:"column",width:"100%",height:"100%",position:"absolute",alignItems:"center",justifyContent:"center"}}>
                <Text>aluruurururu</Text>
            </View>
        )
    }
}