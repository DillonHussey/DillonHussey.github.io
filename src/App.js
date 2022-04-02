import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Projects from "./pages/Projects";
import About from "./pages/About";
import AboutMe from "./pages/AboutMe";

import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<About />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects" element={<Projects/>}/> 
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
