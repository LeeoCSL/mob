import React, { Component } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity } from "react-native";
import keySpTrans from "../../constantes";
// import styles from './styles';
import * as Animatable from "react-native-animatable";
const apiSpTrans = axios.create({
  baseURL: "http://api.olhovivo.sptrans.com.br/v2.1",
  timeout: 5000
});
export default class Teste extends Component {
  allHailSatan = async () => {
    console.log("PRESTA ATENÇAO NO LINK, CARALHO");
    return await apiSpTrans
      .post(
        "/Login/Autenticar?token=0feeeef149075369c5f2a9daad12a6b21262627cf523adda81f4741e6e8857e9"
      )
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
    // .then(console.log("FUNCIONOU :D"))
    // .then(console.log(JSON.stringify(response)))
    // .catch(console.log("funcionou caralho, mas deu erro"));
  };

  Hail = async () => {
    console.log("PRESTA ATENÇAO NO LINK, CARALHO");
    return await apiSpTrans
      .get("/Parada/BuscarParadasPorLinha?codigoLinha=2506")
      // .then(res => {
      //   console.log(res);
      // })
      // .catch(e => {
      //   console.log(e);
      // });
      .then(console.log("FUNCIONOU :D"))
      .then(console.log(JSON.stringify(response)))
      .catch(console.log("funcionou caralho, mas deu erro"));
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.allHailSatan()}>
          <Text style={{ fontSize: 40 }}>auth</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.Hail()}>
          <Text style={{ fontSize: 40 }}>BuscaLinha</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
