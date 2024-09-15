import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="" element={'現在作成中です🥺'} />
        <Route path="*" element={'404 現在作成中'} />
      </Routes>
    </Router>
  );
}

export default App;
