import Navb from './navb';
import Textarea from './textform';
// import About from './about';
import Alert from './alert';
import '../App.css';
import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode ,setmode]=useState('light');
  const [alrt ,setAlert]=useState(null);

  const showalert=(message , type)=>{
      setAlert({
        msg:message ,
        type:type});

        setTimeout(()=>{
          setAlert(null);
        },3000)
  }

  const togglemode=()=>{
    if(mode==="light"){
      setmode('dark');
      document.body.style.backgroundColor="#0f3a55";
      showalert("DarkMode Enabled" , "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("DarkMode Disabled" , "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navb title="Text Utils" mode={mode} togglemode={togglemode}/>
      <Alert alert={alrt}/>
      <Textarea showalert={showalert} mode={mode}/>
      {/* <div className='container'>      
        <Routes>
            <Route exact index path="/" element={<Textarea showalert={showalert} mode={mode}/>} />
            <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div> */}
    {/* </Router> */}
  </>
  );
  }

export default App;
