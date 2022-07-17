const Person = (props) => {
    
    return (
    <div>
        <h2>Learn some information about this person</h2>
    <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
    </ul>

    <h3>{props.age>18 ? "please go vote!" : "you must be 18"}</h3>

    <h4>Hobbies</h4>
      <ul>{props.hobbies.map(h =>
        (
          <li><b>{h}</b></li>
        )
      )}
      </ul>

    </div>
    )
}