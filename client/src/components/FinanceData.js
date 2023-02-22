import { useSelector } from "react-redux";
import InfoBox from "./InfoBox";

//make sure to fix bug where financial_info.data.payload is null
export default function FinanceData() {
  const financial_info = useSelector((state) => state.financial_info.value)
  return (
    <div>
      {financial_info.data.payload? Object.entries(financial_info.data.payload).map((data_key) => { 
        return <InfoBox data={data_key}/>
      }):'LOADING'
    }
    </div>
  )
}