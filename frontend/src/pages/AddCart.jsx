import React, { useEffect } from 'react'
import { useAuthStore } from "../store/authStore";

export default function AddCart() {

  //   const { user, logout } = useAuthStore();
    
  //     const handleLogout = () => {
  //       logout();
  //     };

  // const [sendData, setSendData] = useState("");
  // const [getData, setGetData] = useState("");

  // const addData = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/auth/total-price", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({total: sendData}),
  //     });
  //     if(response.ok){
  //       const {sendData} = await response.json();
  //       setGetData([...getData, sendData]);
  //       setSendData("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/auth/take-price");
  //       if(response.ok){
  //         const {getData} = await response.json();
  //         setGetData(getData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }
  // , []);
    
  return (
    <div className='flex justify-center items-center flex-col text-xl underline h-[80%]'>
      Add Cart Coming Soon
    </div>
  )
}
