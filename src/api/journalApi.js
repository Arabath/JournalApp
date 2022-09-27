import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-bbb7a-default-rtdb.firebaseio.com',
    headers: {
    "Access-Control-Allow-Origin": "*"
  }})


export default journalApi