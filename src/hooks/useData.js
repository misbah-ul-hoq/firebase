import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const useAxios = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useData = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    useAxios.interceptors.response.use(
      (success) => {
        return success;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signOutUser().then(() => {
            navigate("/login");
          });
        }
      }
    );
  }, [signOutUser, navigate]);
  return useAxios;
};

export default useData;
