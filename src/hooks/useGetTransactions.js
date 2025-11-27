import { onSnapshot, orderBy, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collection, query } from "firebase/firestore";
import {db} from "../config/firebase-config.js";
import { useGetUserInfo } from "./useGetUserInfo.js";
export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);

    const transactionsCollectionRef = collection(db, "transactions"); // TODO: Initialize your Firestore collection reference here
    const {userID} = useGetUserInfo();


    const getTransactions = async () => {
                   let unsubscribe;

        try {
            const queryTransactions = query(
                transactionsCollectionRef,
                where("userID", "==", userID),
                orderBy("createdAt")
            );
             unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
                let docs = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({ id, ...data})
                });
                setTransactions(docs);
            });

        } catch (error) {
            console.error(error);
        }
        return () => unsubscribe();
    };
    useEffect(() => {
        getTransactions();
    }, []);
    return { transactions };
}