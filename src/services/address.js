import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export const fetchAddress = async (setAddress) => {
  try {
    const { data } = await axios.get(`${REACT_APP_API_URL}/address`);
    setAddress(data[0].address);
  } catch (error) {}
};

export const updateAddress = async (address) => {
  try {
    await axios.post(`${REACT_APP_API_URL}/address`, {
      address,
    });
  } catch (error) {
    console.log(error);
  }
};
