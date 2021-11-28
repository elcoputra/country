import axios from "axios";

const searchCountries = async (name) => {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return { error: false, data: res.data };
  } catch (error) {
    return { error: true, data: null };
  }
};

export default searchCountries;
