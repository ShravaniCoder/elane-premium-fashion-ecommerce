import React, {createContext, useContext, useMemo, useState} from 'react';
export const ShopContext = createContext(null);
export function ShopProvider({children}) {
 const [cart,setCart]=useState([]), [wishlist,setWishlist]=useState([]), [lastOrder,setLastOrder]=useState(null);
 const addToCart=(product, size='One size', qty=1)=>setCart(prev=>{const key=product.id+size;const found=prev.find(i=>i.key===key);return found?prev.map(i=>i.key===key?{...i,qty:i.qty+qty}:{...i}):[...prev,{...product,key,size,qty}];});
 const updateQty=(key,qty)=>setCart(prev=>qty<=0?prev.filter(i=>i.key!==key):prev.map(i=>i.key===key?{...i,qty}:i));
 const removeFromCart=key=>setCart(prev=>prev.filter(i=>i.key!==key));
 const toggleWishlist=p=>setWishlist(prev=>prev.some(i=>i.id===p.id)?prev.filter(i=>i.id!==p.id):[...prev,p]);
 const isWishlisted=id=>wishlist.some(i=>i.id===id);
 const clearCart=()=>setCart([]);
 const value=useMemo(()=>({cart,wishlist,lastOrder,setLastOrder,addToCart,updateQty,removeFromCart,toggleWishlist,isWishlisted,clearCart}),[cart,wishlist,lastOrder]);
 return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
export const useShop=()=>useContext(ShopContext);
