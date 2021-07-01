import React from "react";
import Login from "../Login/Login";
import Cadastro from "../Cadastro/Cadastro"
import { TabView, SceneMap } from 'react-native-tab-view';
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigationLogin() {

    return (
        <Tab.Navigator tabBar={({navigation,props}) => {
            return (
                <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "center",paddingTop:30}}>
                    <View style={{flexDirection:"row",justifyContent:"flex-start",width:"76%"}}>
                        <Text onPress={() => navigation.navigate("Login")} style={{fontFamily:"Montserrat-SemiBold",fontSize:20}}>Login</Text>
                        <Text onPress={() => navigation.navigate("Cadastro")} style={{marginLeft:15,fontFamily:"Montserrat-SemiBold",fontSize:20}}>Cadastro</Text>
                    </View>
                </View>
            )
        }}>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
        </Tab.Navigator>
    )
}