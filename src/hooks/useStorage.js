import { useState, useEffect } from "react";
import {projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0); //progress from the upload
    const [error, setError] = useState(null); //errors from the upload
    const [url, setUrl] = useState(null); //image urls
    
    useEffect (() =>{
        //references
        const storageRef = projectStorage.ref(file.name);

        const collectionRef = projectFirestore.collection('images'); //stores images in db

        storageRef.put(file).on('state_changed', (snap) =>{
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //this will be the %age of the upload
            setProgress(percentage);
        }, (err) => {
            setError(err); //this function will fire incase there is an error with the upload
        }, async () => {
            const url = await storageRef.getDownloadURL(); //THIS GETS THE FILE WE JUST UPLOADED, GETS ITS DOWLOAD URL AND STORES ITS URL
            const createdAt = timestamp(); //timestamp function brought in from config file
            collectionRef.add({url, createdAt }); //stores the images url plus their timestamps
            setUrl(url);
        }) //this puts the file in the storageRef
    }, [file]) //everytime someone selects a new file. the code in this function will run

    return{progress, url, error}

}

export default useStorage;