
import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';

import TextForm from'./Components/Textform';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type : type
    })

    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }
  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg');
  }
  const toggelMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg');
    if(mode === 'light')
    {
      console.log(cls);
      setMode('dark');
      document.body.style.backgroundColor = '#086683';
      showAlert("DarkMode has been enabled", "success");
      document.title = 'TextUtils-Home-DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled", "success");
    }
  }

  const toggleTheme =(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggelMode}  toggleTheme = {toggleTheme}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/">
        <TextForm showAlert = {showAlert} heading = "Enter the Text To Analyze" mode = {mode} />
        </Route>
      </Switch>
      
      </div>
    </Router>
    </>
  );
}

export default App;
