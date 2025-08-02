import { Alert } from "react-native";

const { useEffect, useState } = require("react");

const useServer = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fn();
      setIsLoading(true);

      setData(response);
    } catch (error) {
      Alert.alert("error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // setIsLoading(true);

    // setTimeout(()=>{

    fetchData();
    // },500)
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, refetch };
};

export default useServer;
