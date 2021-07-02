import React, { useState } from "react";
import Login from "../Login/Login";
import Cadastro from "../Cadastro/Cadastro"
import { TabView, SceneMap } from 'react-native-tab-view';
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigationLogin() {

    const [isActive, setIsActive] = useState(true)

    const onPressLogin = (props) => {

        setIsActive(true)
        props.navigate("Login")

    }

    const onPressCadastro = (props) => {
        setIsActive(false)
        props.navigate("Cadastro")
    }

    return (
        <Tab.Navigator swipeEnabled={false} tabBar={({ navigation, props }) => {
            return (
                <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "center", paddingTop: 30 }}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", width: "76%" }}>
                        <View>
                            <Text onPress={() => onPressLogin(navigation)} style={isActive ? style.ativo : style.inativo}>Login</Text>
                        </View>
                        <View style={{ marginLeft: 16 }}>
                            <Text onPress={() => onPressCadastro(navigation)} style={isActive ? style.inativo : style.ativo}>Cadastro</Text>
                        </View>
                    </View>
                </View>
            )
        }}>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
        </Tab.Navigator>
    )
}

const style = {
    ativo: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        color: "black"
    },
    inativo: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 20,
        color: "black",
        opacity: 0.3
    }
}