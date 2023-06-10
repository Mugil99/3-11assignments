import logo from './logo.svg';
import './App.css';
import Tooltip from './Components/Tooltip';
function App() {
  return (
   <div>
      <h2 className='tooltip'><Tooltip text={"This is tooltip"}>Hover over me</Tooltip></h2><br/>
      <p className='tooltip'><Tooltip text={"This is another tooltip"}>Hover over me to see another tooltip</Tooltip></p>
   </div>
  );
}

export default App;
