import axios from "axios";

export const searchByCurrency = async (currency) => {
  try {
    const res = await axios.get(
      `https://restcountries.com/v2/currency/${currency}`
    );
    return { error: false, data: res.data };
  } catch (error) {
    return { error: true, data: null };
  }
};

export default searchByCurrency;
