import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config.js";
export const useAddTransaction = () => {
    const transactionsCollectionRef = collection(db, "transactions"); // TODO: Initialize your Firestore collection reference here

    const addTransaction = async () => {
        await addDoc(transactionsCollectionRef, 
        {
            userID: "",
            description: "",
            transactionAmount: 0,
            transactionType: "",
            createdAt: serverTimestamp()
        });
};
    return { addTransaction };
};