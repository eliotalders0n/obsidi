import {useState, useEffect} from 'react';
import firebase from "../../firebase";


const useGetOrders = (id) => {
    const [docs, setdocs] = useState([])

    useEffect(() => {
      firebase
        .firestore()
        .collection("orders")
        .doc(id)
        .onSnapshot((doc) => {
           if (doc.exists) {
          setdocs(doc.data());
        } else {
          setdocs({}); // Document doesn't exist, set docs to an empty object
        }
        });
    }, [id]);
    return { docs };
  };

export default useGetOrders;
