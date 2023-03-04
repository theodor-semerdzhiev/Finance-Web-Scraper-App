

export default function NewsInfoBox(data) {
    const article=data.data[1]
    return (
        <div>
            <h3>{article.title}</h3>
            <h>By:  <strong>{article.author}</strong></h>
            <p>{article.snippet}</p>
            <a href={article.link} target="_blank">Click for News Article!</a>
            <p></p>
            <a1>{article.time}</a1>
            <hr/>
        </div>
    )
}