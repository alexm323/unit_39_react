const Person = (props) => {
    let voterMessage = (age) => {
        return (age >= 18 ? "Go out and vote!" : "Sorry you need to be 18 to vote");
    }
    let nameSlicer = (name) => {
        return (name.length < 8 ? name : name.slice(0, 6))
    }
    return (
        <div>
            <p>Learn some more information about this person</p>
            <h3>{voterMessage(props.age)}</h3>
            <p>Their name is: {nameSlicer(props.name)}</p>
            <ul>
                {props.hobbies.map(h => (
                    <li>

                        <b>{h}</b>
                    </li>
                )
                )}
            </ul>
        </div>

    )
}