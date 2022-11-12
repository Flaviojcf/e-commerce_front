import { useContext } from "react";
import { AddItemsToCartContext } from "../context/AddItemsToCartContext";


export function useAddItemsToCartContext(){
    const context = useContext(AddItemsToCartContext)
    return context
}