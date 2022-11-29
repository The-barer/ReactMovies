export default function MovieCard(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props


    return (
        <div className="card movie" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" 
                src={
                    poster !== 'N/A' ? poster :
                    `https://via.placeholder.com/300x440?text=${title}`
                    } 
                alt={title} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year} <span className="right">{type}</span></p>
            </div>
        </div>
    )
}