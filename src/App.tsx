

import './App.css';

const Footer = () =>(
  <footer>Footer</footer>
)
const Ul = () => (
  <ul>Продукти
    <li>Хліб</li>
    <li>Вода</li>
    <li>Печево</li>
  </ul>
)


  const App = () => {
    return (<div className="App">
      <h1>Hello world!</h1>
      <Footer/>
      <Ul/>
    </div>
  )}




export default App;
