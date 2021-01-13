const App = () => {
    return (
        <div>
            <Tweet username="@RealDonaldTrump" date="01/07/2021" name="Donald J. Trump" message="Redacted" />
            <Tweet username="@Steam" date="01/13/2021" name="Gabe Newell" message="Half-life 3 announcement coming on April 1st, 2021" />
            <Tweet username="@TheMusk" date="01/12/2021" name="Elon Musk" message="TSLA Stonks too Stronk" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))