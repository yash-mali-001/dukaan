
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kidos' element={<ShopCategory category="kidos"/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
  

        <Route path="product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// BrowserRouter: Wraps your application and enables routing.
// Routes: Acts as a container for all Route components.
// Route: Defines individual routes with path and element props.