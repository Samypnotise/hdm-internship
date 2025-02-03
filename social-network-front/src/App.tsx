import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginView, RegisterView } from './view';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
