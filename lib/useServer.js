import { Alert } from "react-native";

const { useEffect, useState } = require("react");

const useServer=(fn)=>{

const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);


const fetchData = async () => {
try {
const response = await fn();
// console.log('response: ', response);
setData(response);
} catch (error) {
Alert.alert("error", error.message);
// console.log(" error.message: ", error.message);
} finally {
setIsLoading(false);
}
};
useEffect(() => {

setIsLoading(true);

fetchData();
}, []);

const refetch = () => fetchData();


console.log('data: ', data);
return {data , isLoading , refetch}
}

export default useServer
