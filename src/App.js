import logo from './logo.svg';
import './App.css';
import { Header } from './Pages/Navbar';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import { GetAll } from './Pages/GetAll';
import { GetSingle } from './Pages/GetSingle';
import { AddPost } from './Pages/AddPost';
import { EditPost } from './Pages/EditPost';
import { Container } from 'react-bootstrap';

function App() {

  const Layout = ()=>{
    return(
    <div>
      <Header/>
      <Container>
      <Outlet/>
      </Container>
    
    </div>
    )
  }

  const router = createBrowserRouter([
    {path:'/',element:<Layout/>, children:[
      {path:'/', element:<GetAll/>},
      {path:'/single/:id', element:<GetSingle/>},
      {path:'/add', element:<AddPost/>},
      {path:'/edit/:id', element:<EditPost/>}
    ]}
    
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
