import React from "react"
import { Text,View } from "react-native"

export default function Login({navigation}){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <View style={{width:"90%"}}>
                <Text style={{fontFamily:"Montserrat-Bold"}}>Faça Login</Text>
            </View>
        </View>
    )
}