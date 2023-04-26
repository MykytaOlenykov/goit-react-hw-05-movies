import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => (
  <>
    <Layout />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  </>
);
