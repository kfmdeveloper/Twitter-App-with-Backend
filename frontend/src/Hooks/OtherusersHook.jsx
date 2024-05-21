import { useEffect } from "react";
import USER_API_ENDPOINT from "../utils/contant";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getotherusers } from "../redux/UserSlice";

const useGetOtherusers = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const Otherusersfetch = async () => {
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/otherusers/${id}`, {
          withCredentials: true,
        });

        dispatch(getotherusers(res?.data?.OtherUsers));
      } catch (error) {
        console.log(error);
      }
    };

    Otherusersfetch();
  }, []); // Added dispatch to dependency array
};

export default useGetOtherusers;
