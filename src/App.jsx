import { Suspense } from 'react';
import './App.css'
import Country from './components/country'
const countryPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res=>res.json());
function App() {


  return (
    <>
      <Suspense fallback={<p>Data loading.....</p>}>
        <Country countryPromise={countryPromise}></Country>
      </Suspense>
    </>
  )
}

export default App
