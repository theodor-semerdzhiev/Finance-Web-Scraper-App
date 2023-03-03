

export default function NewsInfoBox(data) {
    const article=data.data[1]
    return (
        <div>
            <h3>{article.title}</h3>
            <h>By:  <strong>{article.author}</strong></h>
            <p>{article.snippet}</p>
            <small>{article.time}</small>
            <hr/>
        </div>
    )
}