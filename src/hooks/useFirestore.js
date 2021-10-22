import { useState, useEffect } from "react";
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) =>{
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc') //tjis is how they'll be ordered, according to time and in descending order
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id:doc.id}) //this pushes the data and the docs id into the array above
            });
            setDocs(documents);
        });

        return () => unsub(); //this will unsubscribe from the collection when we dont need it anymore
    }, [collection])

    return { docs };
}

export default useFirestore;