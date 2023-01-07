import { useState } from "react";
import "./App.css";
import Navbar from './components/Navbar'
import  Textform from './components/Textform'
import Alert from './components/Alert'


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#133d54';
      showAlert('Dark Mode has been Enable', 'success')
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enable', 'success')
    }
  }
  return (
    <>
    <Navbar title='TextReader' mode={mode} togglemode=
      {togglemode} />
    <Alert alert={alert} />
    <div className='container my-2'>
      < Textform showAlert={showAlert}
        heading='Enter The text to anlize 
           below' mode={mode} />
    </div>
  </>
  );
}

export default App;