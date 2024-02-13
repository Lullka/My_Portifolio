import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Browse } from "./pages/Browse";
import { Video } from "./pages/Video";
import {Helmet} from "react-helmet";
function App() {
  document.documentElement.setAttribute("lang", 'pt-br');

  return (
    <BrowserRouter>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
      </Helmet>
      <SectionContainer>
        <Routes>
          <Route path="/browse" element={<Browse/>}/>
          <Route path="/watch/:id" element={<Video/>}/>
        </Routes>
      </SectionContainer>
    </BrowserRouter>
  )
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
`;
export default App
