import React, { Component } from "react";
import validator from "email-validator";
import api from "../../services/api";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

// import styles from './styles';

export default class Register extends Component {
  constructor() {
    super();
    this.trocaTela = this.trocaTela.bind(this);
  }

  state = {
    nomeInvalido: false,
    nomeVazio: false,
    emailInvalido: false,
    emailVazio: false,
    senhaInvalida: false,
    confirmaSenhaInvalida: false,
    senhaNaoCorresponde: false,
    nome: null,
    email: null,
    senha: null,
    confirmaSenha: null
  };

  handleInputNameChange = nome => {
    this.setState({ nome, nomeInvalido: false, nomeVazio: false });
    this.validaNome();
  };

  handleInputEmailChange = email => {
    this.setState({ email, emailInvalido: false, emailVazio: false });
    this.validaEmail();
  };

  handleInputPassChange = senha => {
    this.setState({ senha, senhaInvalida: false });
    this.validaSenha();
  };

  handleInputConfirmPassChange = confirmaSenha => {
    this.setState({ confirmaSenha, confirmaSenhaInvalida: false });
    this.validaConfirmaSenha();
  };

  validaEmail() {
    if (this.state.email == "" || this.state.email == null) {
      this.setState({ emailVazio: true });
      return false;
    }
    if (!validator.validate(this.state.email)) {
      // console.log("tr0000000000000");
      this.setState({ emailInvalido: true });
      return false;
    }
    return true;
  }

  validaNome() {
    if (this.state.nome == "" || this.state.nome == null) {
      this.setState({ nomeVazio: true });
      // console.log("oi");
      return false;
    }
    if (this.state.nome.split(" ").length < 2) {
      this.setState({ nomeInvalido: true });
      // console.log("oie");
      return false;
    }
    return true;
  }

  validaSenha() {
    if (this.state.senha == "" || this.state.senha == null) {
      this.setState({ senhaInvalida: true });
      return false;
    }
    return true;
  }

  validaConfirmaSenha() {
    if (this.state.confirmaSenha == "" || this.state.confirmaSenha == null) {
      this.setState({ confirmaSenhaInvalida: true });
      return false;
    }
    // if (this.state.confirmaSenha != this.state.senha) {
    //   this.setState({ senhaNaoCorresponde: true });
    //   return false;
    // }
    return true;
  }
  trocaTela() {}

  async register() {
    // if (!this.validaNome()) return;
    // if (!this.validaEmail()) return;
    // if (!this.validaSenha()) return;
    // if (!this.validaConfirmaSenha()) return;
    console.log("Leonardo, meu querido, tu eh retardado");

    const response = await api.post("/register", {
      nome: "teste 2",
      senha: "123456",
      email: "teste15@teste.com"
    });

    console.log("chegou aqui");
    if (response.status === 200) {
      console.log("agora chegou aqui");
      this.props.navigation.navigate("Login");
      console.log(response);
    } else {
      console.log(response);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome"
          style={styles.input}
          value={this.state.nome}
          onChangeText={this.handleInputNameChange}
        />
        {this.state.nomeInvalido ? (
          <Text style={styles.err}>Por favor digite seu nome completo</Text>
        ) : null}

        {this.state.nomeVazio ? (
          <Text style={styles.err}>Por favor digite seu nome</Text>
        ) : null}

        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="Digite o email"
          style={styles.input}
          value={this.state.email}
          onChangeText={this.handleInputEmailChange}
        />
        {this.state.emailInvalido ? (
          <Text style={styles.err}>Por favor digite um email valido</Text>
        ) : null}

        {this.state.emailVazio ? (
          <Text style={styles.err}>Por favor digite seu email</Text>
        ) : null}

        <Text style={styles.text}>Senha</Text>
        <TextInput
          placeholder="Digite a senha"
          style={styles.input}
          value={this.state.senha}
          onChangeText={this.handleInputPassChange}
        />

        {this.state.senhaInvalida ? (
          <Text style={styles.err}>Por favor digite uma senha valida</Text>
        ) : null}

        <Text style={styles.text}>Confirme a Senha</Text>
        <TextInput
          placeholder="Confirme a senha"
          style={styles.input}
          value={this.state.confirmaSenha}
          onChangeText={this.handleInputConfirmPassChange}
        />

        {this.state.confirmaSenhaInvalida ? (
          <Text style={styles.err}>
            Por favor digite a confirmaçao de senha
          </Text>
        ) : null}

        {this.state.senhaNaoCorresponde ? (
          <Text style={styles.err}>Suas senhas nao correspondem</Text>
        ) : null}

        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => {
              this.register();
            }}
          >
            <Text style={styles.txtCadastro}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000"
  },
  text: {
    fontSize: 16,
    margin: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc"
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
  },
  btnRegister: {
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
