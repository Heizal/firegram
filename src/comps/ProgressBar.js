import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile}) =>{
    const { url, progress} = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null); //this basically ensures that when the image if fully laoded the progress bar goes off coz we have setFile to null
        }

    }, [url, setFile] )
    
    return (
        <motion.div className="progress-bar"
           initial={{width: 0}}
           animate={{width: progress + '%'}}
        
        ></motion.div>
    )
}

export default ProgressBar;
