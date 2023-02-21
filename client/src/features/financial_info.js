import {createSlice} from '@reduxjs/toolkit'

export const financial_info = createSlice({
  name: "financial_info",
  initialState: {value:  {
    data: {}, 
    updated: false, 
    failed_to_load: false,
    loading: true
  }},
  reducers: {
    display_info: (state, action) => {
      switch(action.type) {
        case 'DISPLAY INFO':
          console.log(action.payload)
          state.value.data = action.payload
          return state
        default:
          return state
      }
    },
    set_error_state: (state, action) => {
      //switch case for difference types of errors
      switch(action.type) {
        case 'NETWORK ERROR':
          state.value.failed_to_load =action.payload
          return state
        default:
          return state
      }
    },
    set_loading_status: (state, action) => {
      state.value.data = action.payload
    }
  }
})

export const {display_info,set_error_state} = financial_info.actions;

export default financial_info.reducer