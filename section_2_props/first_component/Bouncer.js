const Bouncer = (props) => {
    let reply;
    if (props.age < 18) {
        reply = "Sorry kid, you can't come in"
    } else if (props.age < 21) {
        reply = "you can come in, but no drinking"
    } else {
        reply = <span>
            "Come in, you CAN drinK!"
            <img src="https://media.giphy.com/media/eXg8Ij7JgnyDu/giphy.gif" />
        </span>
    }
    return (
        <div>
            <p>
                <b>Bouncer: How old are you?</b>
            </p>
            <p>
                <b>You:</b> I am {props.age} years old
            </p>
            <p>
                <b>Bouncer:</b> {reply}
            </p>

        </div>
    )
}