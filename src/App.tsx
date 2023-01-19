import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CardItem } from './page/card-item';
import { CardList } from './page/card-list';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card-item/:id" element={<CardItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
