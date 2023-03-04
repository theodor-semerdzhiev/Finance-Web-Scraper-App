import {createSlice} from '@reduxjs/toolkit'

export const stock_info = createSlice({
  name: "stock_info",
  initialState: {
    value:  {
      data: {}, 
      updated: false, 
      error_status: {
        status: false, 
        type_of_error: 'NO_ERROR'},
      loading: false,
      as_been_fetched: false,
      companykey: ''
  }},
  reducers: {
    display_finance_info: (state, action) => {
      state.value.data = action.payload['payload']
      state.value.as_been_fetched=true
      return state
    },
    set_error_status_stock: (state, action) => {
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
        case 'NO_ERROR':
          state.value.error_status.status = action.payload.status
        default:
          break
      }
      return state
    },
    set_loading_status_stock: (state, action) => {
      state.value.loading = action.payload.status
      return state
    },
    set_companykey_stock: (state,action) => {
      state.value.companykey = action.payload.companykey
      return state
    }
  }
})

export const 
{
  display_finance_info,
  set_error_status_stock,
  set_loading_status_stock,
  set_companykey_stock
} = stock_info.actions;

export default stock_info.reducer