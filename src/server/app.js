import axios from 'axios';

const person = [];

export default axios.get(`https://cdn.startupbase.com.br/uploads/hack-pocket/abstartups-data.json`).then(res => {
  const person = res.data;
});