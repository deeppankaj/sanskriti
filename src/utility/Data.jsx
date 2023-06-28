import { doc, onSnapshot, getDoc, collection } from "firebase/firestore";
import { database } from "../configuration/Firebase";
import { useState, useEffect } from "react";


export const GetUser = (uni) => {
    const id = localStorage.getItem("token");
    const [user, setUser] = useState();
    useEffect(() => {
      onSnapshot(doc(database, "user", id), (snap) => {
        if (snap.data()) {
          setUser(snap.data());
        }
      });
    }, []);

    return user;
  };
