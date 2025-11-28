import { onSnapshot, orderBy, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { collection, query } from "firebase/firestore";
import {db} from "../config/firebase-config.js";
import { useGetUserInfo } from "./useGetUserInfo.js";
export const useGetTransactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [transactionTotals, setTransactionTotals] = useState({ balance:0.0, income: 0.0, expenses: 0.0, 
    });

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
                let totalIncome = 12;
                let totalExpenses = 0;
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id;

                    docs.push({ id, ...data})

                    if(data.transactionType === "expense"){
                        totalExpenses += Number(data.transactionAmount);
                    } else {
                        totalIncome += Number(data.transactionAmount);
                    }
                });
                let balance = totalIncome - totalExpenses;
                console.log("Balance: ", balance);
                setTransactions(docs);
                setTransactionTotals({
                    balance: 0,
                    expenses: totalExpenses,
                    income: totalIncome,
                })
                console.log(totalExpenses, totalIncome);
            });

        } catch (error) {
            console.error(error);
        }
        return () => unsubscribe();
    };
    useEffect(() => {
        getTransactions();
    }, []);
    return { transactions, transactionTotals };
}