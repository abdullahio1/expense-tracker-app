import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo.js";
import { db } from "../config/firebase-config.js";
export const useAddTransaction = () => {
    const transactionsCollectionRef = collection(db, "transactions"); // TODO: Initialize your Firestore collection reference here
    const {userID} = useGetUserInfo();
    // supports either: addTransaction({ description, transactionAmount, transactionType })
    // or addTransaction(description, transactionAmount, transactionType)
    const addTransaction = async (
        descriptionOrObject,
        transactionAmountParam,
        transactionTypeParam,
    ) => {
        let description, transactionAmount, transactionType;
        if (descriptionOrObject && typeof descriptionOrObject === 'object') {
            ({ description, transactionAmount, transactionType } = descriptionOrObject);
        } else {
            description = descriptionOrObject;
            transactionAmount = transactionAmountParam;
            transactionType = transactionTypeParam;
        }

        await addDoc(transactionsCollectionRef, {
            userID: userID,
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp()
        });
};
    return { addTransaction };
};