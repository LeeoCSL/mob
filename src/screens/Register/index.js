import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// import styles from './styles';

export default class Register extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.text}>Nome</Text>
            <TextInput placeholder='Digite seu nome'
              style={styles.input}
            />

            <Text style={styles.text}>Email</Text>
            <TextInput placeholder='Digite o email'
              style={styles.input}
            />
            
            <Text style={styles.text}>Senha</Text>
            <TextInput placeholder='Digite a senha'
              style={styles.input}
            />
            
            <Text style={styles.text}>Confirme a Senha</Text>
            <TextInput placeholder='Confirme a senha'
              style={styles.input}
            />

            <View style={styles.bottom}>
              <TouchableOpacity style={styles.btnRegister}>
                <Text>Register</Text>
              </TouchableOpacity>
            </View>

        </View>
            );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16
  },
  title:{
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000'
  },
  text:{
    fontSize: 16,
    margin: 5
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc'
  },
   bottom:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  btnRegister:{
    alignSelf: 'center',
    borderWidth: 2,

  }
})