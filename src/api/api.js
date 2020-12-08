import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.filltext.com/'
});

export const getSmallData = () => {
  return api.get('?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
}

export const getBigData = () => {
  return api.get('?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
}