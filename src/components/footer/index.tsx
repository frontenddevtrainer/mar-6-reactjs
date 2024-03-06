import { useEffect, useState } from "react";

const Footer = ({ counter }) => {

    const [multiplyByTwo, setMultiplyByTwo] = useState(counter * 2)

    // ComponentDidMount
    useEffect(()=>{
        console.log("ComponentDidMount")
    }, [])

    useEffect(()=>{ console.log("counter updated") }, [counter])

    // useEffect(()=>{ }, [prop2])

    // useEffect(()=>{ }, [prop3])

    // ComponentWillUnmount
    useEffect(()=>{
        return ()=>{
            console.log("ComponentWillUnmount")
        }
    }, [])

  return (
    <footer className="bg-gray-800 text-white p-4">
      <p className="text-center">Copyright 2023, Music Store | counter is at {counter} | {multiplyByTwo}</p>
    </footer>
  );
};

export default Footer;