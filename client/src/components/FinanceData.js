import { useSelector } from "react-redux";
import StockInfoBox from "./StockInfoBox";
import ArticleSection from "./ArticleSection";

//make sure to fix bug where financial_info.data.payload is null
export default function FinanceData(companykey) {
  const stock_info = useSelector((state) => state.stock_info.value)
  if (stock_info.loading) {
    return (  
        <div>
          <p>Loading...</p>
        </div>
    )   
  } else if(stock_info.error_status.status) {
    return (
        <div>
          <p>{stock_info.error_status.type_of_error}</p>
        </div>)
  } else {

    return (
      <div>
        <div>
        {
        stock_info.data?
        Object.entries(stock_info.data).map((data_key,index) => { 
          return <StockInfoBox data={data_key} key={index}/>
        }):''
        }
        </div>
        <ArticleSection companykey={companykey}/>
      </div>
    )
    }
}
