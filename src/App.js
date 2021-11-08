import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import BeautifulArea from "./pages/BeautifulArea";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/BeautifulAreas/:id" element={<BeautifulArea />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
