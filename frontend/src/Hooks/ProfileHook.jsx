import { useEffect } from "react";
import USER_API_ENDPOINT from "../utils/contant";
import { useDispatch } from "react-redux";
import { callprofile } from "../redux/UserSlice.jsx";
import axios from "axios";

const useGetProfile = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/getprofile/${id}`, {
          withCredentials: true,
        });
        dispatch(callprofile(res?.data?.user));
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Server Error:", error.response.data);
          console.log("Status Code:", error.response.status);
          console.log("Response Headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.log("Error:", error.message);
        }
        // You can also dispatch an action to update Redux state with the error information
        // dispatch(setError(error.message));
      }
    };

    if (id) {
      fetchProfile();
    }
  }, [id, dispatch]);

  return; // Optionally return any values you might want to expose from this hook
};

export default useGetProfile;
