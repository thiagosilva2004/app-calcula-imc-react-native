import React from "react";
import {View,Text} from "react-native";
import styles from "./style";

export default function ResultIMC(props){

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
            <Text style={styles.information} >{props.messageResultIMC}</Text>
            <Text style={styles.numberImc}>{props.ResultIMC}</Text>
            <Text style={styles.numberImc} >{statusImc}</Text>
        </View>
    );
}