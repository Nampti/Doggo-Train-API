import DogListt from "../src/components/DogListt"
import Dog from "./components/Dog";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DogListt />}></Route>
          <Route path="/dog/:slug" element={<Dog />}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
