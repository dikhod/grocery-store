import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [isSeller, setIsSeller] = useState();
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [searchQuery, setSearchQuery] = useState({});
    
    //fetch products
    const fetchProduct = async() =>{
       setProducts(dummyProducts);
    }
   
    //add items to cart
    const addToCart = (itemId) =>{
       let cartData = structuredClone(cartItems);
       
       if(cartData[itemId]){
          cartData[itemId]+=1;
       }else{
          cartData[itemId] =1;
       }

       setCartItems(cartData)
       toast.success("Added To Cart!");
    }
   
    //update cart items quantity
    const updateCartItems = (itemId, quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
        toast.success("Cart Updated!"); 
    }

    //Remove from cart
    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]>=1){
            cartData[itemId]-=1;
            if(cartData[itemId]===0){
                delete cartData[itemId];
            }
            
        toast.error("Remove From Cart!");
        } 
        setCartItems(cartData);
    }
    
    console.log("cartItem----->", cartItems);
    //calculate total items in cart 
    const getCartCount = () =>{
        let totalCount =0;
        for(const item in cartItems){
            totalCount+= cartItems[item];
            console.log("item--->",item);
            console.log("cartItems[item]--->",cartItems[item]);
        }
        return totalCount;
    }

    //cal total amount for cart 
    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            const itemInfo = products.find((product)=> product._id === items);
            if(cartItems[items]>0){
                totalAmount += itemInfo.offerPrice*cartItems[items];
            }
        }
        return Math.floor(totalAmount*100)/100;
    }
    useEffect(()=>{
        fetchProduct();
    },[]);

    const value={user, setUser, navigate, isSeller, setIsSeller, showUserLogin,
         setShowUserLogin, products, cartItems, addToCart, removeFromCart, 
          updateCartItems, searchQuery, setSearchQuery,getCartAmount,getCartCount}
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () =>{
    return useContext(AppContext);
}
