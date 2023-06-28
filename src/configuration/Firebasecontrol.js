import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import {toast} from "react-toastify"
import { database } from "./Firebase";
import { useEffect, useState } from "react";

export const addFirebaseDoc  = async (docData,name,docId) => {
    debugger
    try {
      await setDoc(doc(database, name, docId), {
        docData
      });
      toast.success(`${docId} is saved in ${name} collectiion Sucessfully`)
    } catch (error) {
      toast.error(error.message)
    }
  }


  export const GetDoc  =  (name,docId) => {
    // debugger
    const [data, setdata] = useState();
    useEffect(() => {
      onSnapshot(doc(database, name, docId), (snap) => {
        if (snap.data()) {
          setdata(snap.data().docData);
        }
      });
    }, []);

    return data;
  }
  export const GetCollection  =  (name) => {
    // debugger
    const [data, setdata] = useState();
    useEffect(() => {
        onSnapshot(collection(database, name), (snapshot) => {
            const docsofsnap = snapshot.docs
            let docu = []
            docsofsnap.forEach((ele) => {
                docu.push(ele.data().docData)
                return (<></>)
            });
            setdata(docu)

        });
    }, []);

    return data;
  }