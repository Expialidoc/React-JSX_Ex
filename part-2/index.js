const App = () => (
    <div>
        
      <Tweet
        username = 'Steve' name="Stevie Chicks" date="01-01-2022" message="🐔"
      />
      <Tweet
        username = 'bob' name="Bob" date="01-03-2022" message="Hai!"
      />
      <Tweet
        username = 'gas' name="Gus" date="02-02-2022" message="Wattt?"
      />
        
    </div>
  )
  
  ReactDOM.render(<App />, document.getElementById("root"))