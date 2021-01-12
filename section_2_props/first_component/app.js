const App = () => {
    return (
        <div>
            <RandomChoice choices={['red', 'green', 'yellow']} />
            <Animal name="Stevie Chicks" species="Silkie Chicken" emoji="🐔" isCute={true} />
            <Animal name="Patrick" species="Red Fox" emoji="🦊" />
            <Animal emoji="🦊" />
            <Bouncer age={19} />
            <Bouncer age={21} />
            <Bouncer age={10} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))