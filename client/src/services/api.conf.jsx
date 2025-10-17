import axios from "axios";

const api = axios.create({
  baseURL: "https://entairtainment-app.onrender.com",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    console.log("la requette original", original);
    if (error.response?.status == "401" && !original._retry) {
      original._retry = true;
      const refreshtoken = localStorage.getItem("refreshtoken");
      if (refreshtoken) {
        try {
          axios.defaults.withCredentials = true;
          const data = await axios(
            "https://entairtainment-app.onrender.com/auth/refresh",
            {
              refreshToken: refreshtoken,
            }
          );
          return api(original);
        } catch (error) {
          localStorage.removeItem("refreshtoken");
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);
export const login = async (email, password, navigate, setAuthuser) => {
  try {
    const response = await api.post("/auth/login", {
      email: email,
      password: password,
    });
    if (response.status == 200) {
      console.log(response.data);
      localStorage.setItem("refreshtoken", response.data.refreshToken);
      setAuthuser(response.data.user);
      navigate(-1);
    }
  } catch (error) {
    console.log("Error server", error);
  }
};

export const register = async (email, password, navigate) => {
  try {
    const response = await api.post("/auth/register", {
      email: email,
      password: password,
    });
    console.log(response);
    if (response.status == 201) navigate("/login");
  } catch (error) {
    console.log("Error server", error);
  }
};
