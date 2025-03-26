import React, { Suspense } from 'react';


import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';

import './App.scss';

const Portfolio = React.lazy(() => import((/*webpackChunkName: 'Portfolio'*/ './components/work/Portfolio')))
const Contact = React.lazy(() => import((/*webpackChunkName: 'Contact'*/ './components/contact/Contact')))

const App: React.FC = () => (
  <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Suspense fallback={<div className='container'>Sorry</div>}>
        <Portfolio />
        <Contact />
      </Suspense>
    </main>
    <Footer />
    <ScrollUp />
  </>
)

export default App;
