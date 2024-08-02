import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default function HomeScreen() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);

  let mensagem = "";
  if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 === num2) {
      mensagem = "Os números são iguais!";
    } else {
      const maior = num1 > num2 ? num1 : num2;
      mensagem = `O maior número entre ${num1} e ${num2} é: ${maior}`;
    }
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.Titulo}>
        Vamos descobrir qual o maior entre os números!
      </Text>
      <Text style={styles.Info}>Número 1:</Text>
      <TextInput
        style={styles.Input}
        placeholder="Digite o primeiro número"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <Text style={styles.Info}>Número 2:</Text>
      <TextInput
        style={styles.Input}
        placeholder="Digite o segundo número"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      <Text style={styles.Result}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#3d3d3d",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  Input: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
    paddingLeft: 10,
    width: "20%",
    height: 40,
    fontSize: 24,
  },
  Result: {
    padding: 20,
    borderWidth: 8,
    borderRadius: 10,
    borderColor: "#fff",
    color: "#fff",
    fontSize: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: "30%",
    marginTop: 60,
  },
  Info: {
    marginBottom: 20,
    color: "#fff",
    fontSize: 24,
  },
  Titulo: {
    marginBottom: 60,
    color: "#fff",
    fontSize: 45,
  },
});
