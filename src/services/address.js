import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const fetchAddress = async (setAddress) => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}/address`);
    setAddress(data[0].address);
  } catch (error) {}
};
