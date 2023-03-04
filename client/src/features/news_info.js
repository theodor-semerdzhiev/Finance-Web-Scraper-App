import {createSlice} from '@reduxjs/toolkit'

export const news_info = createSlice({
    name: "news_info",
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
        display_news_info: (state, action) => {
            state.value.data = action.payload['payload']
            state.value.as_been_fetched=true
            return state
        },
        set_error_status_news: (state, action) => {
            //switch case for difference types of errors
            switch(action.payload.error_type) {
                case 'FETCH_ERROR':
                    state.value.error_status.status = action.payload.status
                    state.value.error_status.type_of_error = action.payload.error_type
                    break
                case 'NO_ERROR':
                    state.value.error_status.status = action.payload.status
                    break
                default:
                    break
            }
            return state
      },
        set_loading_status_news: (state, action) => {
            state.value.loading = action.payload.status
            return state
        },
        set_companykey_news: (state,action) => {
            state.value.companykey = action.payload['payload']
            return state
          }
    }
  })
  
  export const 
  {
    set_error_status_news,
    display_news_info,
    set_loading_status_news,
    set_companykey_news
  } = news_info.actions;
  
  export default news_info.reducer