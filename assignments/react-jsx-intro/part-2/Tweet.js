const Tweet = (props) => {
    return (
        <div>
            <h5><b>{props.username}</b> - {props.date}</h5>
            <p>{props.name}</p>
            <h2>{props.message}</h2>
        </div>
    )
}


