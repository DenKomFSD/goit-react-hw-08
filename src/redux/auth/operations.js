

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const register = createAsyncThunk("auth/register", async() = {
    
});

export const login = createAsyncThunk("auth/login", async () = {});

export const logout = createAsyncThunk("auth/logout", async () = {});
export const refreshUser = createAsyncThunk("auth/refresh", async () ={});