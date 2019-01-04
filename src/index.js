import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const users = [
  {id: 0, name: 'Michelle', friends: [1,2,3]},
  {id: 1, name: 'Sean', friends: [0,3]},
  {id: 2, name: 'Kim', friends: [0,1,3]},
  {id: 3, name: 'David', friends: [1,2]}
]

const find = (id) => users.find((u) => u.id === id)

/*
1) Render a link for each one of the person's friends
2) Render a route component which will match the current pathname + '/:id/'
*/

const Person = ({match}) => {
  const person = find(Number(match.params.id))

  return (
    <div>
      <h3>{person.name}'s Friends</h3>
      <ul>
        {person.friends.map((id) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>
              {find(id).name}
            </Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Person match={{params: {id:0}, url: ''}}/>
      </Router>
    )
  }
}

render(<App />, document.getElementById('root'))
