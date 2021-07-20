import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg"
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator, Colors } from 'react-native-paper';
import SuccessMessage from "../utils/SuccessMessage";
import { useFocusEffect } from '@react-navigation/native';

export default function TabNavigationLogin({ navigation }) {

    const [email, setEmail] = useState()
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [confirmaSenha, setConfirmaSenha] = useState()
    const [isErro, setIsErro] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [finished,setFinished] = useState(false)

    useFocusEffect(
        React.useCallback(() => {
          // Do something when the screen is focused
    
          return () => {
            
          };
        }, [])
      );

    const register = async () => {
        
        setIsLoading(true)
        if (email && senha && nome && confirmaSenha) {
            const result = await fetch("https://apibaldosplasticos.herokuapp.com/usuario/cadastro", {
                method: "POST",
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ email: email, senha: confirmaSenha, nome: nome })
            });
            const json = await result.json();
            if(json.success){
                navigation.navigate("Login")
            }
        } else {
            setIsErro(false);
            setIsErro(true);
            setTimeout(() => {
                setIsErro(false);
            }, 3000)
        }
        setIsLoading(false);
    }

    return (
        <React.Fragment>
            <View style={{ flex: 1, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                <View style={{ width: "76%" }}>
                    <View style={{ flexDirection: "column", marginBottom: 10 }}>
                        <Text style={{ fontFamily: "Montserrat-Bold", fontSize: 29, color: "#1C6879" }}>Olá,</Text>
                        <Text style={{ fontFamily: "Montserrat-SemiBold", color: "#868686", marginTop: 10, fontSize: 19 }}>Cadastre-se e comece </Text>
                        <Text style={{ fontFamily: "Montserrat-SemiBold", color: "#868686", fontSize: 19 }}>suas compras </Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <TextInput placeholder="Nome Completo" style={style.input} onChangeText={text => setNome(text)} />
                        <TextInput placeholder="Email" style={style.input} onChangeText={text => setEmail(text)} />
                        <TextInput placeholder="Senha" style={style.input} secureTextEntry={true} onChangeText={text => setSenha(text)} />
                        <TextInput placeholder="Confirmar Senha" style={style.input} secureTextEntry={true} onChangeText={text => setConfirmaSenha(text)} />
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-end", marginTop: 20 }}>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => register()}>
                            <Text style={{ backgroundColor: "#F18B31", color: "white", paddingTop: 13, paddingBottom: 13, paddingLeft: 24, paddingRight: 24, borderRadius: 3 }}>
                                {!isLoading && (
                                    <Text>Finalizar</Text>
                                )}
                                {isLoading && (
                                    <ActivityIndicator animating={isLoading} color="#fff"/>
                                )}
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {isErro && (

                <View style={{ flexDirection: "row", position: "absolute", bottom: -9, width: "100%", justifyContent: "center", alignItems: "center", marginBottom: 30 }}>

                    <Animatable.View animation="bounceInRight" style={{ borderRadius: 7, backgroundColor: "#FED045", paddingTop: 10, paddingBottom: 10, paddingLeft: 18, paddingRight: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 16h.01M12 8v4"
                                stroke="#fff"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Svg>
                        <Text style={{ marginLeft: 15, fontFamily: "Montserrat-Bold", color: "white" }}>Preencha todos os campos</Text>
                    </Animatable.View>


                </View>

            )}
            
        </React.Fragment>
    )
}

const style = {
    input: {
        backgroundColor: "#F5F5F5", borderRadius: 4, marginTop: 18, paddingLeft: 20
    }
}