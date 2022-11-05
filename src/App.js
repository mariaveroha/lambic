import {BrowserRouter, Routes,Route,} from "react-router-dom";
import Articles from './Components/Pages/Articles';
import Article_item from './Components/Pages/Article_item';
function App() {


  return (
    <BrowserRouter>
    <Routes>
         <Route path='/' element = { <Articles/>}/> 
         <Route path='/item' element = { <Article_item/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
