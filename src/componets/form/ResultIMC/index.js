import React from "react";
import {View,Text, Share, TouchableOpacity} from "react-native";
import styles from "./style";

export default function ResultIMC(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu imc hoje é: " + props.ResultIMC,
        });
    }

    if(props.ResultIMC == null){
        var statusImc = '';
    }
    else if (props.ResultIMC >= 40) {
        var statusImc = 'obesidade extrema';
    }else if(props.ResultIMC >= 35){
        var statusImc = 'obesidade grau 2';
    }
    else if(props.ResultIMC >= 30){
        var statusImc = 'obesidade grau 1';
    }
    else if(props.ResultIMC >= 25){
        var statusImc = 'sobrepeso';
    }
    else if(props.ResultIMC >= 25){
        var statusImc = 'peso adequado';
    }
    else{
        var statusImc = 'baixo peso';
    }

    return(
        <View style={styles.resultImc}> 
            <View style={styles.boxShareButton}>
                { props.ResultIMC != null &&
                <TouchableOpacity onPress={onShare} style={styles.share}>
                    <Text style={styles.sharedText}>Compratilhar</Text>
                </TouchableOpacity>
                }
            </View>

            <Text style={styles.information} >{props.messageResultIMC}</Text>
            <Text style={styles.numberImc}>{props.ResultIMC}</Text>
            <Text style={styles.numberImc} >{statusImc}</Text>
        </View>
    );
}