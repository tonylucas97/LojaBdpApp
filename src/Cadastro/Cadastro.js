import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function TabNavigationLogin() {

    const [email, setEmail] = useState()
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [confirmaSenha, setConfirmaSenha] = useState()

    const register = async () => {
        
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
            <View style={{ width: "76%" }}>
                <View style={{ flexDirection: "column", marginBottom: 10 }}>
                    <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 29, color: "#1C6879" }}>Olá,</Text>
                    <Text style={{ fontFamily: "Montserrat-SemiBold", color: "#868686", marginTop: 10, fontSize: 19 }}>Cadastre-se e comece </Text>
                    <Text style={{ fontFamily: "Montserrat-SemiBold", color: "#868686", fontSize: 19 }}>suas compras </Text>
                </View>
                <View style={{ flexDirection: "column" }}>
                    <TextInput placeholder="Nome Completo" style={style.input} onChangeText={text => setNome(text)}/>
                    <TextInput placeholder="Email" style={style.input} onChangeText={text => setEmail(text)}/>
                    <TextInput placeholder="Senha" style={style.input} secureTextEntry={true} onChangeText={text => setSenha(text)}/>
                    <TextInput placeholder="Confirmar Senha" style={style.input} secureTextEntry={true} onChangeText={text => setConfirmaSenha(text)}/>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-end", marginTop: 20 }}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text style={{ backgroundColor: "#F18B31", color: "white", paddingTop: 13, paddingBottom: 13, paddingLeft: 24, paddingRight: 24, borderRadius: 3 }}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = {
    input: {
        backgroundColor: "#F5F5F5", borderRadius: 4, marginTop: 18, paddingLeft: 20
    }
}