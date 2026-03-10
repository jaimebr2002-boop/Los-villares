/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Plots from './components/Plots';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-green-200 selection:text-green-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Plots />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
