import {createSlice} from '@reduxjs/toolkit'

export const financial_info = createSlice({
  name: "financial_info",
  initialState: {
    value:  {
      data: {}, 
      updated: false, 
      error_status: {
        status: false, 
        type_of_error: ''},
      loading: false,
      as_been_fetched: false
  }},
  reducers: {
    display_finance_info: (state, action) => {
      state.value.data = action.payload
      state.value.as_been_fetched=true
      return state
    },
    set_error_status: (state, action) => {
      //switch case for difference types of errors
      console.log(action)
      switch(action.payload.error_type) {
        case 'FETCH_ERROR':
          state.value.error_status.status = action.payload.status
          state.value.error_status.type_of_error = action.payload.error_type
          break
        case 'EMPTY_SUBMIT':
          state.value.error_status.status = action.payload.status
          state.value.error_status.type_of_error = action.payload.error_type
          break
        default:
          break
      }
      return state
    },
    set_loading_status: (state, action) => {
      state.value.loading = action.payload.status
      return state
    }
  }
})

export const 
{
  display_finance_info,
  set_error_status,
  set_loading_status
} = financial_info.actions;

export default financial_info.reducer