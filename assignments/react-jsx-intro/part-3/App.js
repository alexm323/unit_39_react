const App = () => {
    return (
        <div>
            <Person age={18} name='Alexander' hobbies={['smoking', 'drinking', 'throwin shade']} />
            <Person age={20} name='Aaron' hobbies={['lawyerin', 'not taking a side', 'shooting guys named alexander']} />
            <Person age={16} name='Georgie' hobbies={['presidenting', 'being a legend', 'retiring to Virginia']} />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))