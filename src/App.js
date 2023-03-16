import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";

import { Who } from "./components/Who";
import { Works } from "./components/Works";



function App() {
  const Container = styled.div `
  height:100vh;
 scroll-snap-type: y mandatory;
 scroll-behavior:smooth;
 overflow-y:auto;
 color:white;
 background-image: url('./img/bg.jpeg');
 

   `
  return (
    <Container>
      <Hero/>
      <Who/>
     <Works/>
      <Contact/>
      
    </Container>
  );
}

export default App;
