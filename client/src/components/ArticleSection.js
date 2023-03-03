import { useSelector } from "react-redux"
import NewsInfoBox from "./NewsInfoBox"

export default function ArticleSection() {

    //each individual article will have its own articlebox.js
    const news_info = useSelector((state) => state.news_info.value)
    // console.log(news_info)
    if(news_info.loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else if(news_info.error_status.status) {
        return (
            <div>
                <p>{news_info.error_status.type_of_error}</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Recent News about {news_info.companykey}</h1>
                {
                news_info.data.payload?
                Object.entries(news_info.data.payload).map((data_key,index) => { 
                    return <NewsInfoBox data={data_key} key={index}/>
                  }):''
                }
            </div>  
            )
    }
}