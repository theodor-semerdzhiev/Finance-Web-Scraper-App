import { useSelector } from "react-redux";


export default function FinanceData() {
  const financial_info = useSelector((state) => state.financial_info.value)
  console.log(financial_info.value)
  return (
    <div>
      <p>{financial_info.value}</p>
    </div>
  )
}