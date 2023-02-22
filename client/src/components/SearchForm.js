import { useDispatch } from "react-redux";
import { 
  display_info, 
  set_error_state, 
  set_loading_status } from "../features/financial_info";

async function getFinanceData() {
  const response = await fetch('http://127.0.0.1:8000', {
    method: 'GET'
  }).catch(() => {
    return null
  })
  return response.json()
}

export default function SearchForm() {
  const dispatch = useDispatch()

    return (
      <div>
        <form>
          <label>Submit Link</label>
          <textarea/>
          <button 
            onClick={async (event) => {
            event.preventDefault()
            dispatch(set_loading_status({payload: true}))
            const data = await getFinanceData()
            if(!data) {
              dispatch(set_error_state({payload: true}))
            } else {
              dispatch(display_info({payload: data}))
            }  
            dispatch(set_loading_status({payload: false}))
          }}>Get</button>
        </form>
      </div>
    )
}
