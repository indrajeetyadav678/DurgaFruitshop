import { configureStore } from "@reduxjs/toolkit";
import Addcardreducer from "./AddcardSlice";
import adddetailreducer from "./OrderedSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
   key: 'root',
   storage,

 }
//  const persistConfig1 = {
//    key: 'local',
//    storage,
//  }
 
 const persistedReducer = persistReducer(persistConfig, Addcardreducer)
//  const detailpersistReducer = persistReducer(persistConfig,adddetailreducer )

const Store=configureStore({
 reducer:{
    Addtocard:persistedReducer,
    myorder:adddetailreducer,
 }
});
export const persistor = persistStore(Store)
export default Store;