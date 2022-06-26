import { Routes, Route } from 'react-router-dom';
import './App.scss';

import BlogPage from './containers/BlogPage/BlogPage.component';
import HomePage from './containers/HomePage/HomePage.component';
import AboutUsPage from './containers/AboutUsPage/AboutUsPage.component';
import Navbar from './components/Navbar/Navbar.component';
import BlogsPage from './containers/BlogsPage/BlogsPage.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blogs" element={<BlogsPage />} />
        <Route exact path="/blogs/:blogName" element={<BlogPage />} />
        <Route exact path="/about-us/" element={<AboutUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
