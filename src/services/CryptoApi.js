const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-woZEzjuEyTa6Lt3AMUNrJyGQ";

const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
};

export default getCoinList;
