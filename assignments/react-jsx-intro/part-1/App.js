const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name='Alex' />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))