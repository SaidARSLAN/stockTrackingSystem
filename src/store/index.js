import { configureStore } from "@reduxjs/toolkit";
import info from "./info";


const store = configureStore({
    reducer : {
        info,
    }
})

export default store