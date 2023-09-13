import Header from './layouts/Header';
import Nav from './layouts/Nav';
import Home from './layouts/Home';
import Footer from './layouts/Footer';
import About from './other/About';
import Missing from './other/Missing';
import Post from './posts/Post';
import AddPost from './posts/AddPost';
import DetailPost from './posts/DetailPost';
import EditPost from './posts/EditPost';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
    <>
    <Header></Header>
     <Nav></Nav>
     <Routes>
      <Route index path='/' Component={Home} />
      <Route index path='/post' Component={Post} />
      <Route path='/post/add' Component={AddPost} />
      <Route path='/post/:id' Component={DetailPost} />
      <Route path='/post/edit/:id' Component={EditPost} />
      <Route path='/about' Component={About} />
      <Route path='*' Component={Missing} />
     </Routes>
     <Footer></Footer>
     </>
    </div>
  );
}

export default App;
