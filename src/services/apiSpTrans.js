import axios from "axios";

const apiSpTrans = axios.create({
  baseURL: "https://api.olhovivo.sptrans.com.br/v2.1"
});

export default apiSpTrans;
