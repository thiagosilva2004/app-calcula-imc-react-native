import React, {useState} from "react";
import { Text,TextInput,TouchableOpacity, View, Vibration, Pressable, Keyboard} from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(){

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator(){
    let heightFormat = height.replace(",",".");
    let weightFormat = weight.replace(",",".");
    return setImc((weightFormat/(heightFormat * heightFormat)).toFixed(2));
  } 

  function verificationIMC(){
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("campo obrigatório");
    }
  }

  function validationImc() {
    if (weight != null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
      return;
    }
      verificationIMC();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha altura e peso");    
    
  }

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
           <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="1.75" keyboardType="numeric"></TextInput>
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="80" keyboardType="numeric"></TextInput>
            <TouchableOpacity  style={styles.buttonCalculator} onPress={() => validationImc()}>
              <Text style={styles.textButtonCalculator}>{textButton}</Text>
            </TouchableOpacity>
          </View> 
          <ResultIMC ResultIMC={imc} messageResultIMC={messageIMC}></ResultIMC>
        </Pressable>
    );
}