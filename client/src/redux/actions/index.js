import { ADD_ITEM, DELETE_ITEM, CHECK_LOCAL_STORAGE } from "../types";

export const checkLocalStorage = () => ({ type: CHECK_LOCAL_STORAGE });

export const addItem = item => ({ type: ADD_ITEM, payload: item });

export const deleteItem = item => ({ type: DELETE_ITEM, payload: item });
