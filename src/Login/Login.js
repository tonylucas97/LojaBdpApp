import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity } from "react-native"
import Svg, { Path } from "react-native-svg"

export default function Login({ navigation }) {

    const [isActive,setIsActive] = useState(true)

    return (
        <React.Fragment>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                <View style={{ width: "76%" }}>
                    <Text style={{ fontFamily: "Montserrat-Black", color: "#1C6879", fontSize: 25.5 }}>Faça Login</Text>
                    <Text style={{ fontFamily: "Montserrat-Light", color: "black", fontSize: 19, marginTop: 10 }}>Na sua Conta</Text>
                    <View style={{ flexDirection: "column", width: "100%" }}>
                        <TextInput style={{ backgroundColor: "#F5F5F5", borderRadius: 4, marginTop: 23, paddingLeft: 20 }} placeholder="Email" />
                        <TextInput style={{ backgroundColor: "#F5F5F5", borderRadius: 4, marginTop: 23, paddingLeft: 20 }} placeholder="Senha" />
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontFamily: "Montserrat-Regular", marginTop: 20, }}>Esqueceu a senha ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("LogedNavigation")} activeOpacity={0.8}><Text style={{ marginTop: 20, borderRadius: 4, paddingRight: 25, paddingLeft: 25, paddingTop: 15, paddingBottom: 15, backgroundColor: "#F18B31", color: "white", fontSize: 16, fontFamily: "Montserrat-Regular" }}>
                            <Svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M12.142 6.59a.715.715 0 00-.38.627v4.066H3.734A.726.726 0 003 12c0 .396.329.717.734.717h8.028v4.066c0 .262.146.502.38.627.234.127.52.119.745-.02l7.77-4.783A.714.714 0 0021 12a.714.714 0 00-.343-.607l-7.77-4.783a.754.754 0 00-.745-.02z"
                                    fill="#fff"
                                />
                            </Svg>
                        </Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </React.Fragment>
    )
}

const style = {
    ativo: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 19,
        color: "black"
    },
    inativo: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 19,
        opacity: 0.3
    }
}