import axios from "axios";

export const searchSimilarCallingCodes = async (callingcode) => {
  try {
    const res = await axios.get(
      `https://restcountries.com/v2/callingcode/${callingcode}`
    );
    return { error: false, data: res.data };
  } catch (error) {
    return { error: true, data: null };
  }
};

export default searchSimilarCallingCodes;
