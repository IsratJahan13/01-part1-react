const HelloWorld = () => {
  return (
    <section>
      <p>Hello world!</p>
    </section>
  )
}

const Hello = ({ name, age }) => { //we can put props value directly
  // const { name, age } = props 
  const bornYear = () => new Date().getFullYear() - age

  return (
    <section>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </section>
  )
}

const Time = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    
    <section>
      <p>It is 
        <span>{now.toLocaleDateString()} today</span>
        <span> and time is now {now.toLocaleTimeString()}</span>
      </p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </section>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/IsratJahan13'>israt</a>
    </div>
  )
}
const App = () => {
  const name = 'Peter'
  const age = 10
  const friends = [
    { name: 'Naishe', age: 28 },
    { name: 'Evans', age: 30 },
  ]
  const friends2 = ['Evans', ' Israt']
  return (
    <>
      <h1>Greetings</h1>
      <HelloWorld />
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{friends2}</p>
      <Time />
      <Footer />
    </>
  )
}

export default App