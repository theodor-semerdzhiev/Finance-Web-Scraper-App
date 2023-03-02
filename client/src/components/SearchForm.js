import { useDispatch } from "react-redux";
import { 
  display_finance_info, 
  set_error_status, 
  set_loading_status } from "../features/stock_info";

export default function SearchForm() {
  const dispatch = useDispatch()

  const getFinanceData = async (companykey) => {
    dispatch(set_error_status({error_type:'NO_ERROR',status: false}))
    if(!companykey) {
      dispatch(set_error_status({error_type: 'EMPTY_SUBMIT',status: true}))
      return null
    }
    const response = await fetch('http://127.0.0.1:8000/'+companykey, {
      method: 'GET'
    }).catch(error => {
      dispatch(set_error_status({
        error_type: 'FETCH_ERROR',
        status: true}))
        return null
    })
    if(!response) {
      return null
    } else {
    return response.json()
    }
  }
  
  const getNewsData = (companykey) => {
    //TODO 
    /*
      This function will get called in the handle submit function and 
      will send a get request to the newsapi/<companykey> endpoint to recent
      news articles

      
    */
  }

  const handlesubmit = async (event) => {
    event.preventDefault()
    console.log(event.target.submit.value)
    dispatch(set_loading_status({status: true}))
    const data = await getFinanceData(event.target.submit.value) 
    console.log(data)
    if(data) dispatch(display_finance_info({payload: data}))
    dispatch(set_loading_status({status: false}))
  }

    return (
      <div>
        <form onSubmit={handlesubmit}>
          <label>Submit Link</label>
          <input id='submit'/>
          <button type='submit'>Get</button>
        </form>
      </div>
    )
}
