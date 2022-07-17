const App = () => (
    <div>

        <Person
            name="Stevie Chicks" age={13}
            hobbies={['skiing', 'reading', 'movies']}
        />
        <Person
            name="Bob" age={43}
            hobbies={['sitting', 'eating', 'drinking', 'sleeping alone']}
        />
        <Person
            name="Stev" age={19}
            hobbies={['cooking', 'swimming', 'music']}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))