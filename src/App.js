import { Routes, Route } from 'react-router-dom';
import './App.scss';

import BlogPage from './containers/BlogPage/BlogPage.component';
import HomePage from './containers/HomePage/HomePage.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/blogs/:blogName" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
