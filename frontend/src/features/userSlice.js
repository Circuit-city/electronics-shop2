import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message)
    }
    return data
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: "idle",
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null
    },
    login: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer