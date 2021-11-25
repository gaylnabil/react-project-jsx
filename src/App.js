import React from 'react'
import "./App.css";
import { Brand, CTA, Navbar } from './components';
import {Blog, Features, Footer, Header, Possibility, GPT3} from './containers';

function App() {
  return (
    <div className="App">
      <header className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </header>

      <div>
        <Brand />
        <GPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>

    </div>
  );
}

export default App;
