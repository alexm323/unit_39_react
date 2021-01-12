const App = () => {
    return (
        <div>
            <Alert>
                <RandomNumRange min={20} max={30} />
                <RandomNumRange />
                <RandomChoice choices={['red', 'green', 'yellow']} />
            </Alert>
            <Animal name="Stevie Chicks" species="Silkie Chicken" emoji="🐔" isCute={true} />
            <Animal name="Patrick" species="Red Fox" emoji="🦊" />
            <Animal emoji="🦊" />
            <Bouncer age={19} />
            <Bouncer age={21} />
            <Bouncer age={10} />
            <TodoList todos={["walk chickens", "feed chickens", "eat chickens"]} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))