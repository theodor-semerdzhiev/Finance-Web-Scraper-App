import {createSlice} from '@reduxjs/toolkit'

export const financial_info = createSlice({
  name: "financial_info",
  initialState: {
    value:  {
      data: {}, 
      updated: false, 
      failed_to_load: false,
      loading: false
  }},
  reducers: {
    display_info: (state, action) => {
      state.value.data = action.payload
      return state
    },
    set_error_state: (state, action) => {
      //switch case for difference types of errors
      state.value.failed_to_load = action.payload
      return state
    },
    set_loading_status: (state, action) => {
      state.value.loading = action.payload
      return state
    }
  }
})

export const 
{
  display_info,
  set_error_state,
  set_loading_status
} = financial_info.actions;

export default financial_info.reducer