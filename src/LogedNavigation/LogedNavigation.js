import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Catalogo from "../Catalogo/Catalogo";
import Carrinho from "../Carrinho/Carrinho";
import Configuracoes from "../Configuracoes/Configuracoes";
import { Text, View } from "react-native"

const Tab = createBottomTabNavigator();

export default function LogedNavigation() {
    return (
        <Tab.Navigator tabBarOptions={{showLabel:false,style:{position:"absolute",bottom:15,elevation:0,backgroundColor:"#F7F9FA"}}}>
            <Tab.Screen name="Catalogo" component={Catalogo}/>
            <Tab.Screen name="Carrinho" component={Carrinho}/>
            <Tab.Screen name="Configuracoes" component={Configuracoes}/>
        </Tab.Navigator>
    )
}