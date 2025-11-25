import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo.js";
import { db } from "../config/firebase-config.js";
export const useAddTransaction = () => {
    const transactionsCollectionRef = collection(db, "transactions"); // TODO: Initialize your Firestore collection reference here
    const {userID} = useGetUserInfo();
    const addTransaction = async (
        description,
        transactionAmount,
        transactionType,
    ) => {
        await addDoc(transactionsCollectionRef, 
        {
            userID: userID,
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp()
        });
};
    return { addTransaction };
};