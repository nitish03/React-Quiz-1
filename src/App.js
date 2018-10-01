import React, {Component} from 'react';




/*const element = React.createElement('ol', 'null'
  people.map(person => (React.createElement('li', 'null', person.name)
  ))
)*/
class ContactList extends React.Component{
  render() {
    const people = [
      { name: 'Nitish'},
      { name: 'Divesh'},
      { name: 'Rahul'}
    ]

    return <ol>
    {people.map(person => (
      <li key={person.name}>{person.name}</li>
    ))}
    </ol>
  }
}


/*ReactDOM.render(
  <ContactList/>
  document.getElementById('root')
)*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList/>
      </div>
    );
  }
}

export default App;
