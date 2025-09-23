import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setService } from "../store/serviceSlice";

const useFetchDataAndSaveDataToStore = () => {
  const dispatch = useDispatch();
  const getServiceData = async () => {
    const data = await fetch(
      "https://mocki.io/v1/4331fb8c-0116-436e-9a2e-dbf2b768ed95",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_TOKEN_HERE",
          Accept: "application/json",
        },
      }
    );
    return await data.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServiceData();

      dispatch(setService(data));
    };
    fetchData();
  }, []);
  return null;
};

export default useFetchDataAndSaveDataToStore;
