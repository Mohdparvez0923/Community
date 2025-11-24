import {createSlice,createAsyncThunk} from 'reduxjs/toolkit'

export const fetchUser = createAsyncThunk("/fetchUser",async(_,{rejectWithValue})=>{
    try {
        const token = localStorage.getItem("token")
        const res = await axiosInstance.get("/profile",{
            Headers:{Authorization:`Bearer ${token}`}
        })
        return res.data
        
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        loading:false,
        error:null
    },
    reducers:{
        updateUser
    }
})