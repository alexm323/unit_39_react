const App = () => {
    return (
        <div>
            <RandomChoice choices={['red', 'green', 'yellow']} />
            <Animal name="Stevie Chicks" species="Silkie Chicken" emoji="🐔" isCute={true} />
            <Animal name="Patrick" species="Red Fox" emoji="🦊" />
            <Animal emoji="🦊" />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))