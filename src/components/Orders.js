import { debounce } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Header from './Header'
import Order from './Order'
import "./Orders.css"
import { useStateValue } from './StateProvider'
import {collection, doc, setDoc, orderBy, onSnapshot} from "../firebase"

const Orders = () => {
  const [{basket, user}, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
    if(user){
      console.log("Done")
    
      const dbColl = collection(db, "users")
      const userDoc = doc(dbColl, user?.uid)
      const userColl2 = collection(userDoc, "orders")
      const userOrder = (userColl2, orderBy("created", "desc"))
      
      console.log("userOrder", userOrder)
      
      onSnapshot(userOrder, snapshot => {
        setOrders(snapshot.docs.map(doc => ({
          
          id: debounce.id,
          data: doc.data()
        })))
      })

      console.log("Done Order")
    
     

      /*
      db
      .collection("users")
      .doc(user?.uid)
      .collection("orders")
      .orderBy("created", "desc")
      .onSnapshot(snapshot =>{
        setOrders(snapshot.docs.map(doc => ({
          id: debounce.id,
          data: doc.data()
        })))
      })
      */

    } else{
      setOrders([])
    }
    

  }, [user])
  return (

    <div>
        <Header />
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
              {orders?.map(order =>{
                <Order order={order} />
              })}
            </div>
        </div>
        
        
    </div>
  )
}

export default Orders