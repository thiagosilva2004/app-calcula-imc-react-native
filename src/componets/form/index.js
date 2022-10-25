import React, {useState} from "react";
import { Text,TextInput,TouchableOpacity, View} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(){

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator(){
    return setImc((weight/(height * height)).toFixed(2));
  } 

  function validationImc() {
    if (weight != null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha altura e peso");
  }

    return(
        <View style={styles.formContext}>
           <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="1.75" keyboardType="numeric"></TextInput>
            <Text style={styles.formLabel}>Peso</Text>
            <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="80" keyboardType="numeric"></TextInput>
            <TouchableOpacity style={styles.buttonCalculator}  onPress={() => validationImc()}>
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View> 
          <ResultIMC ResultIMC={imc} messageResultIMC={messageIMC}></ResultIMC>
        </View>
    );
}