import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <div className="App">
          <div className="container">
    
                  <div className="col-xs-6">
      
                      <div className="row">
                           <h2 className="title_color_sign_up">Sign Up</h2>
                      </div>
                      <div className="row">
                           <div className="form">
                               <div className="form-group">
                               <input type="text" className="form-control"   placeholder="login" />
                               </div>
                               <div className="form-group">
                               <input type="email" className="form-control"  placeholder="email"/>
                               </div>
                               <div className="form-group">
                               <input type="password" className="form-control"  placeholder="password"/>
                               </div>
                               <input type="submit" className="button" />
                           </div>
                      </div>
                  </div>

                 <div className="col-xs-6">
                      <div className="row">
                           <h2 className="title_color_sign_in">Welcome Back !</h2>
                      </div>
                      <div className="row">
                            <p>Login with your infos</p>
                            <button>Sign In</button>
                      </div>
                      </div>
                  
                
              
              
          </div>
     </div>
  );
}

export default App;
