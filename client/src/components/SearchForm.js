import { useDispatch } from "react-redux";
import { 
  display_finance_info, 
  set_error_status_stock, 
  set_loading_status_stock,
  set_companykey_stock } from "../features/stock_info";

import {  
  set_error_status_news, 
  display_news_info,
  set_loading_status_news,
  set_companykey_news } from "../features/news_info";

export default function SearchForm() {
  const dispatch = useDispatch()


  //this function send api call to backend to retrieve current stock info
  const getFinanceData = async (companykey) => {
    dispatch(set_error_status_stock({error_type:'NO_ERROR',status: false}))
    const response = await fetch('http://127.0.0.1:8000/'+companykey, {
      method: 'GET'
    }).catch(error => {
        return null
    })
    if(!response) return null
    return response.json()
  }


  //this function fetches news data from the /newsapi
  const getNewsData = async (companykey) => {
    const response = await fetch('http://127.0.0.1:8000/newsapi/'+companykey, {
      method: 'GET'
    }).catch(error => {
        return null
    })
    if(!response) return null
    return response.json()
  }

  //This function handles the retrival of the stock data
  //TODO make this function use callbacks and promies for error handling 
  const handlestockdata = async (event) => {
    
    dispatch(set_loading_status_stock({status: true}))
    const formatted_str=event.target.submit.value.trim().toUpperCase()
    const stockdata = await getFinanceData(formatted_str) 
    if(stockdata) {
      dispatch(display_finance_info({payload: stockdata}))
    } else {
      dispatch(display_finance_info({payload: {}}))
      dispatch(display_news_info({payload: {}}))
      dispatch(dispatch(set_error_status_news({error_type: 'FETCH_ERROR',status: true}))) 
      dispatch(set_loading_status_stock({status: false}))
      throw Promise.reject(new Error('Could not fetch Data'))
    }
    dispatch(set_loading_status_stock({status: false}))

  }
    
  //This Function handles the retrieval of the news data
  //TODO make this function use callbacks and promies for error handling 
  const handle_news_data= async (event) => {
    dispatch(set_loading_status_news({status: true}))
    const formatted_str=event.target.submit.value.trim().toUpperCase()
    const newsdata = await getNewsData(formatted_str)
    if(newsdata) {
      dispatch(display_news_info({payload: newsdata}))
      dispatch(set_error_status_news({error_type: 'NO_ERROR', payload: true}))
    } else {
      dispatch(set_error_status_news({error_type: 'FETCH_ERROR', payload: true}))
    }
    dispatch(set_loading_status_news({status: false}))
  }
    return (
      <div>
        <form onSubmit={async (event) => 
          {
            event.preventDefault()
            if(!event.target.submit.value.trim()) {
              dispatch(set_error_status_stock({error_type: 'EMPTY_SUBMIT',status: true}))
              return
            }
            await handlestockdata(event).then(async ()=>{
              await handle_news_data(event)
              const formatted_key=event.target.submit.value.trim();
              dispatch(set_companykey_news({payload: formatted_key}))
              dispatch(set_companykey_stock({payload: formatted_key}))
            }).catch(() => {
              return
            })
          }}>
          <label>Submit Link</label>
          <input id='submit'/>
          <button type='submit'>Get</button>
        </form>
      </div>
    )
}
