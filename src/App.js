import React ,{Component} from 'react';
import SideBar from './Sidebar.js';
import './App.css';
import airbus from './airbus.jpg';
class App extends Component 
{
  render () {
    return (
       <div id="App">
            <SideBar/>

         <div class="navbar">
           <h2>CREW MANAGER</h2>
         </div>
         <img src = {airbus} alt = "logo" height = "648px" width = "1535px"/>
       </div>
      );
  }
}
export default App;

 