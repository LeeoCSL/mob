import React, { Component } from "react";
import api from "../../services/api";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

// import styles from './styles';

export default class login extends Component {
  state = {
    erroEmail: false,
    erroSenha: false,
    email: "teste1@teste.com",
    senha: "123456"
  };

  static navigationOptions = {
    header: null
  };

  async login() {
    console.log(this.state.erroEmail);
    console.log(this.state.email);
    if (this.state.email == "" || this.state.email.length < 10) {
      this.setState({ erroEmail: true });
    }
    if (this.state.senha == "") {
      this.setState({ erroSenha: true });
    } else {
      const response = await api.post("/auth", {
        email: this.state.email,
        senha: this.state.senha
      });

      if (response.status == 200) {
        console.log("ok", response);
        this.props.navigation.navigate("Map");
      } else {
        console.log(response);
      }
    }
  }

  register() {
    this.props.navigation.navigate("Register");
  }

  handleInputEmailChange = email => {
    this.setState({ email, erroEmail: false });
  };
  handleInputSenhaChange = senha => {
    this.setState({ senha, erroSenha: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mobilidade</Text>
        <TextInput
          style={styles.inputLogin}
          placeholder="Email"
          value={this.state.email}
          onChangeText={this.handleInputEmailChange}
          returnKeyType="next"
          onSubmitEditing={() => {
            this.senhaInput.focus();
          }}
        />
        {this.state.erroEmail ? (
          <Text style={styles.err}>Digite um email valido</Text>
        ) : null}
        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
          value={this.state.senha}
          ref={input => {
            this.senhaInput = input;
          }}
          onChangeText={this.handleInputSenhaChange}
          returnKeyType="next"
          onSubmitEditing={this.login}
        />
        {this.state.erroSenha ? (
          <Text style={styles.err}>Digite uma senha valida</Text>
        ) : null}

        <TouchableOpacity style={styles.btnLogin} onPress={() => this.login()}>
          <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.btnCadastro}
            onPress={() => this.register()}
          >
            <Text style={styles.txtCadastro}>Cadastrar-se</Text>
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
    fontSize: 28,
    alignSelf: "center",
    marginTop: 10,
    color: "#000"
  },
  inputLogin: {
    margin: 20,
    borderWidth: 1,
    borderColor: "#aaa",
    margin: 10,
    fontSize: 20
  },
  inputSenha: {
    margin: 20,
    borderWidth: 1,
    borderColor: "#aaa",
    margin: 10,
    fontSize: 20
  },
  btnLogin: {
    width: 80,
    borderWidth: 2,
    alignSelf: "center",
    marginTop: 20,
    fontSize: 30,
    padding: 10
  },
  txtLogin: {
    textAlign: "center",
    fontSize: 18
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 24
  },
  btnCadastro: {
    width: 130,
    borderWidth: 2,
    alignSelf: "center",
    fontSize: 30,
    padding: 10
  },
  txtCadastro: {
    textAlign: "center",
    fontSize: 18
  },
  err: {
    fontSize: 14,
    color: "#f00",
    marginLeft: 20
  }
});
