import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainRoutes from './components/MainRoutes';
import { useSelector } from 'react-redux';
import Dealer from './Pages/Dealer';

function App() {
  const dealer =useSelector((store)=>{
    return store.authReducer.dealer
  })
  return (
    <div className="App">
     
        <Navbar/>
        <MainRoutes/>
       
      
    </div>
  );
}

export default App;
