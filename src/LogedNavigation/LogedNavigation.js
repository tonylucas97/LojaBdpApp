import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Catalogo from "../Catalogo/Catalogo";
import Carrinho from "../Carrinho/Carrinho";
import Configuracoes from "../Configuracoes/Configuracoes";
import { Text, View } from "react-native"
import Svg, { Path } from "react-native-svg"

const Tab = createBottomTabNavigator();

export default function LogedNavigation() {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false, style: { height:"10%",borderRadius:5,position: "absolute",left:20,right:20, bottom: 15, elevation: 0, backgroundColor: "#F7F9FA" } }}>
            <Tab.Screen name="Catalogo" component={Catalogo} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Text>
                                <Svg
                                    width={24}
                                    height={26}
                                    viewBox="0 0 24 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Path
                                        d="M8.418 23.967v-3.822c0-.976.797-1.767 1.78-1.767h3.593c.472 0 .924.186 1.258.517.334.332.521.781.521 1.25v3.822c-.003.405.158.795.445 1.083.288.288.68.45 1.089.45h2.45a4.325 4.325 0 003.055-1.249 4.262 4.262 0 001.266-3.029V10.334a3.09 3.09 0 00-1.12-2.378l-8.337-6.611a3.872 3.872 0 00-4.936.089L1.334 7.956a3.092 3.092 0 00-1.209 2.378V21.21c0 2.369 1.934 4.289 4.32 4.289H6.84a1.54 1.54 0 001.545-1.522l.033-.011z"
                                        fill={focused ? "#279DB7" : "#9FA6AE"}
                                    />
                                </Svg>
                            </Text>
                        </View>
                    )
                }
            }} />
            <Tab.Screen name="Carrinho" component={Carrinho} options={{
                tabBarIcon: ({ focused }) => (
                    <Text>
                        <Svg
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.652 12.041h3.46a.946.946 0 00.936-.956.938.938 0 00-.937-.957h-3.46a.938.938 0 00-.936.957c0 .523.412.956.937.956zM23.22 5.41c.762 0 1.261.268 1.76.855.5.587.588 1.429.475 2.193l-1.186 8.368c-.225 1.609-1.574 2.794-3.16 2.794H7.483c-1.661 0-3.035-1.3-3.173-2.984L3.161 2.729l-1.886-.331A.959.959 0 01.513 1.3.956.956 0 011.6.51L4.58.969a.956.956 0 01.774.867l.238 2.858c.037.41.362.715.762.715H23.22zM7.283 21.635c-1.05 0-1.899.867-1.899 1.939 0 1.059.85 1.926 1.899 1.926 1.037 0 1.886-.867 1.886-1.926 0-1.072-.85-1.94-1.886-1.94zm14.051 0c-1.049 0-1.898.867-1.898 1.939 0 1.059.85 1.926 1.898 1.926 1.037 0 1.887-.867 1.887-1.926 0-1.072-.85-1.94-1.887-1.94z"
                                fill={focused ? "#279DB7" : "#9FA6AE"}

                            />
                        </Svg>
                    </Text>
                )
            }} />
            <Tab.Screen name="Configuracoes" component={Configuracoes} options={{
                tabBarIcon: ({ focused }) => (
                    <Text>
                        <Svg
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M25.503 16.975c.447.238.792.613 1.035.988.472.775.434 1.725-.026 2.562l-.894 1.5c-.473.8-1.354 1.3-2.261 1.3-.447 0-.946-.125-1.354-.375-.332-.212-.716-.287-1.125-.287-1.264 0-2.325 1.037-2.363 2.275 0 1.437-1.175 2.562-2.644 2.562h-1.738c-1.481 0-2.657-1.125-2.657-2.562-.025-1.238-1.085-2.275-2.35-2.275-.422 0-.805.075-1.124.287-.409.25-.92.375-1.354.375-.92 0-1.802-.5-2.274-1.3l-.882-1.5c-.472-.812-.498-1.787-.025-2.562.204-.375.587-.75 1.022-.988.357-.175.587-.462.805-.8.638-1.075.255-2.487-.83-3.125a2.555 2.555 0 01-.946-3.537l.856-1.475a2.656 2.656 0 013.602-.95c1.112.6 2.555.2 3.207-.863.204-.35.319-.725.293-1.1-.025-.487.115-.95.358-1.325a2.743 2.743 0 012.261-1.3h1.801c.946 0 1.802.525 2.274 1.3.23.375.383.838.345 1.325-.025.375.09.75.294 1.1.651 1.063 2.095 1.463 3.22.863a2.64 2.64 0 013.589.95l.856 1.475a2.534 2.534 0 01-.946 3.537c-1.085.638-1.469 2.05-.817 3.125.204.338.434.625.792.8zm-14.116-1.962c0 1.962 1.622 3.525 3.628 3.525 2.006 0 3.59-1.563 3.59-3.525 0-1.963-1.584-3.538-3.59-3.538s-3.628 1.575-3.628 3.538z"
                                fill={focused ? "#279DB7" : "#9FA6AE"}
                            />
                        </Svg>
                    </Text>
                )
            }} />
        </Tab.Navigator>
    )
}