import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainRoutes from './components/MainRoutes';
import { useSelector } from 'react-redux';
import Dealer from './Pages/Dealer';
import { styled } from 'styled-components';

function App() {
  const dealer =useSelector((store)=>{
    return store.authReducer.dealer
  })
  return (
    <DIV className="App">
     
        <Navbar/>
        <MainRoutes/>
       
      
    </DIV>
  );
}

export default App;


const DIV=styled.div`
     
   font-family: Verdana, Geneva, Tahoma, sans-serif;
`