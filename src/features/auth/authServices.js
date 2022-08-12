import axios from "axios";

const apiUrl = "/api/user";

//register user
const register = async (user) => {
  const response = await axios.post(apiUrl, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export default { register };
