import logo from './logo.svg';
import './App.css';
import User from './User';
import Today from './Today'

function App(props) {
  return (
    <div>
    <User user={props.user} />
    <Today date={props.date} />
    </div>
  );
}


export default App;
