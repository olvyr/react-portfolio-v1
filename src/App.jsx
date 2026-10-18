import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './styles.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
    </>
  );
}