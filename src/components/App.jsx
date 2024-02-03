import '../styles/App.css';
import Layout from './Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateOutlet from './PrivateOutlet';
import PublicOutlet from './PublicOutlet';

function App() {
  // eslint-disable-next-line no-unused-vars
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path='/' element={<Home />}/>
          <Route path='/*' element={<PublicOutlet/>}>
            <Route path='signup' element={<Signup />}/>
            <Route path='login' element={<Login />}/>
          </Route>
          <Route path='/*' element={<PrivateOutlet/>}>
            <Route path='quiz/:id' element={<Quiz />}/>
            <Route path='result/:rid' element={<Result />}/>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;