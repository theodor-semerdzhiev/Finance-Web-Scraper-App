import { useSelector } from "react-redux";
import InfoBox from "./InfoBox";
import ArticleSection from "./ArticleSection";

//make sure to fix bug where financial_info.data.payload is null
export default function FinanceData() {
  const financial_info = useSelector((state) => state.financial_info.value)

  console.log(financial_info)
  if (financial_info.loading) {
    return (<p>Loading</p>)   
  } else if(financial_info.error_status.status) {
    return (<p>{financial_info.error_status.type_of_error}</p>)
  } else {
    return (
      <div>
        <div>
        {
        financial_info.data.payload?
        Object.entries(financial_info.data.payload).map((data_key,index) => { 
          return <InfoBox data={data_key} key={index}/>
        }):''
        }
        </div>
        <ArticleSection/>
      </div>
    )
    }
}
