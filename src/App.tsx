
import { Suspense, useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Tech from './components/Technologies/Tech'
import type { ITechnology } from './types/Technology'
import Footer from './components/Footer'


const techData = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {

  const [techPromise] = useState(techData());

  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<span className="loading loading-spinner text-secondary flex justify-center items-center mx-auto h-screen w-10"></span>}>
        <Tech techPromise = {techPromise}/>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
