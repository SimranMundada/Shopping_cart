import React, { createContext, useContext, useReducer} from 'react'
import {faker} from '@faker-js/faker'
import { cartReducer,productReducer } from './Reducer';
const Cart=createContext();
faker.seed(99);

const Context = ({children}) => {
  
  const products =[...Array(25)].map(()=> ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.random.arrayElements([0,3,4,6,8]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElements([1,2,3,4,5]),


  }));

  const [state,dispatch] = useReducer(cartReducer,{
    products:products,
    cart:[],
  });

  const[productState,productDispatch]= useReducer(productReducer,{
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:"",
  });



  return(
   <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
     {children}
  </Cart.Provider>
  )
};

export default Context;

export const CartState=()=>{
  return useContext(Cart);
}