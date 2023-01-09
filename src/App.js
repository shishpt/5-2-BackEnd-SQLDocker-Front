
import {useEffect, useState} from 'react';
function App() {
  //Call 2 items
  const [greeting, setGreeting] = useState("");
  useEffect(()=> {
    //Create async function
    const getGreeting = async()=>{
      //fetch data from api
      const response = await fetch("http://localhost:5001");
      //Receive array of JSON data
      const data = await response.json();
      //String from greeting into greeting state
      setGreeting(data[1].greeting);
    }
    getGreeting();
  }, [])
  return (
    <div>
         {greeting}
    </div>
  );
}

export default App;
