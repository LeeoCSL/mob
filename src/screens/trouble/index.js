import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

// import styles from './styles';

const radio_props = [
  { label: "Usuário na via", value: 0 },
  { label: "Falta de energia", value: 1 },
  { label: "Velocidade reduzida", value: 2 },
  { label: "Super lotação", value: 3 }
];

export default class Trouble extends Component {
  state = {
    value: 0
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Qual o problema nessa estação?</Text>

        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={value => {
            this.setState({ value: value });
          }}
          style={styles.RB}
        />
        <Text style={styles.problema}>
          {radio_props[this.state.value].label}
        </Text>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.props.navigation.navigate("Map")}
          >
            <Text style={styles.textBotao}>Pronto</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  RB: {
    alignSelf: "center",
    marginTop: 40
  },
  problema: {
    alignSelf: "center",
    fontSize: 32,
    marginTop: 20
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end"
  },
  botao: {
    alignSelf: "center",
    marginBottom: 12,
    borderWidth: 1,
    padding: 5
  },
  textBotao: {
    fontSize: 24
  }
});
