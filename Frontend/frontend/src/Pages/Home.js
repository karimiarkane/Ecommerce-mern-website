import React, { useEffect, useState } from "react";

const Home = () => {
   const [state, setState] = useState("karim");

  useEffect(() => {
    const fetchSomething = async function () {
      const repence = await fetch("http://localhost:3001/api/auth/walo");
          
      if (repence.ok) {
        const data = await repence.json();
        console.log(data)
        setState(data.walo)
      }else{
        throw Error(`errro with status code ${repence.status}`)
      }
    }
    fetchSomething()
  });
  return (
    <div>
      <div>Home </div>
      <div>{state} </div>
    </div>
  );
};

export default Home;
