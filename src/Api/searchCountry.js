import axios from "axios";

const searchCountriesV3 = async (name) => {
  try {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    return { error: false, data: res.data };
  } catch (error) {
    return { error: true, data: null };
  }
};
export const searchCountriesV2 = async (name) => {
  try {
    const res = await axios.get(`https://restcountries.com/v2/name/${name}`);
    return { error: false, data: res.data };
  } catch (error) {
    return { error: true, data: null };
  }
};

export default searchCountriesV3;
