import React from 'react'
import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFirestore'
export default function TransactionList({transactions}) {
    const {deleteDocument} = useFirestore('transactions')
  return (
    <ul className={styles.transactions}>
      {transactions.map((transactions)=>(
           <li key={transactions.id}>
            <p className={styles.name}>{transactions.name}</p>
            <p className={styles.amount}>${transactions.amount}</p>
            <button onClick={()=>deleteDocument(transactions.id)}>x</button>
           </li>
      ))}   
    </ul>
  )
}
