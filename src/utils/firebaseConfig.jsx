import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

/*
const firebaseConfig = {
  apiKey: "AIzaSyAYzl8nw_RqqV-0jJNVipnRcVZQWHg4V2E",
  authDomain: "fermin-proyect-b804a.firebaseapp.com",
  projectId: "fermin-proyect-b804a",
  storageBucket: "fermin-proyect-b804a.appspot.com",
  messagingSenderId: "412885064957",
  appId: "1:412885064957:web:3e90feafc7c83411657294",
};
*/

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "categories"))
      .then((querySnapshot) => {
        const categories = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(categories);
        resolve(categories);
      })
      .catch((err) => {
        reject(`Error obteniendo categorias: ${err}`);
      });
  });
};

export const getCategoriesTwo = () => {
  return new Promise((resolve, reject) => {
    getDocs(collection(db, "categoriesTwo"))
      .then((querySnapshot) => {
        const categories = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        console.log(categories);
        resolve(categories);
      })
      .catch((err) => {
        reject(`Error obteniendo categorias: ${err}`);
      });
  });
};

export const getData = (key, operator, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery =
      key && operator && value
        ? query(collection(db, "items"), where(key, operator, value))
        : collection(db, "items");
    getDocs(collectionQuery)
      .then((querySnapshot) => {
        const links = querySnapshot.docs.map((doc) => {
          // console.log(doc);
          return { id: doc.id, ...doc.data() };
        });
        console.log(links);

        resolve(links);
      })
      .catch((err) => {
        reject(
          `Error obteniendo itemData ${value ? "por categoria" : ""}: ${err}`
        );
      });
  });
};

export const getLinks = (key, operator, value) => {
  return new Promise((resolve, reject) => {
    const collectionQuery =
      key && operator && value
        ? query(collection(db, "enlaces"), where(key, operator, value))
        : collection(db, "enlaces");
    getDocs(collectionQuery)
      .then((querySnapshot) => {
        const links = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(links);
        console.log(links);
      })
      .catch((err) => {
        console.log("Error searching items", err);
      });
  });
};
