import { useDispatch } from "react-redux";
import { display_info, set_error_state } from "../features/financial_info";

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
            const data = await getFinanceData()
            //console.log(data)
            if(!data) 
              dispatch(set_error_state({type: 'NETWORK ERROR', payload: true}))
            else
              dispatch(display_info({type: 'DISPLAY INFO', payload: data}))
          }}>Get</button>
        </form>
      </div>
    )
}
