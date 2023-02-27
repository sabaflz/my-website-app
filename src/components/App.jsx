// import React from 'react'
import '../styles/App.css'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import Birthday from './Birthdays/Birthday'

function App() {
  return (
    <div className="App">
      <Header />
      <Note />
      <Birthday />
      <Footer />
    </div>
  );
}

export default App;
