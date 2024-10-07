const Tweet = ({ username, name, date, message }) => {
    return (
        <div className="tweet">
            <p><strong>{name}</strong> <span>@{username}</span></p>
            <p>{message}</p>
            <small>{date}</small>
        </div>
    )
}