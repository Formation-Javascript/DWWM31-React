import { Route, Routes } from 'react-router-dom';
import {
  DetailPage,
  HomePage,
  LocationPage,
} from './pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/location" element={<LocationPage />} />

      <Route path="/characters">
        <Route index element={<HomePage />} />
        {/* /characters/1 */}
        <Route path=":id" element={<DetailPage />} />
      </Route>

      <Route path='*' element={<h1>PAGE NOT FOUND</h1>} /> 
    </Routes>
  );
}
