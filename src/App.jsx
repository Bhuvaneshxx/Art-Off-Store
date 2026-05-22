import './App.css'
import WelcomePage from './assets/Components/WelcomePage'
import SignUp from './assets/Components/SignUp'
import Login from './assets/Components/Login'
import { HashRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductList from './assets/Components/ProductList'
import NotFound from './assets/Components/NotFound'
import NewProduct from './assets/CustomeHook/NewProduct'
import UpdateProduct from './assets/Components/UpdateProduct'
import Wishlist from './assets/Components/Wishlist'

function App() {

  return (
    <div>
      <HashRouter>

        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/productlist" element={<ProductList/>}/>
          <Route path="/newproduct" element={<NewProduct/>}/>
          <Route path="/update/:id" element={<UpdateProduct/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      </HashRouter>
    </div>
  )
}

export default App
// 46. C,47. A,48. B,49. c, 50. b, 51.c, 52.a, 53. b, 54.b,55. c,56, c, 57. a,58. c,59. c,60. c
// 1) Fetch Api {then,catch}                       }
// 2) Fetch Api {try,catch},{asyn,await}            }Read
// 3) Custom Hook {axios} - Built-in Library       }
// 4)