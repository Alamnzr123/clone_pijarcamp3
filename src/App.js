import react, {useState} from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Body from './Components/Body';
import BodyAdvantages from './Components/BodyAdvantages';
import BodyAbout from './Components/BodyAbout';
import BodySuccess from './Components/BodySuccess';
import BodyTestimonial from './Components/BodyTestimonial';
import BodyBanner from './Components/BodyBanner';
import Footer from './Components/Footer';
//import imgbody from './static/images/Ornament_right.svg'

function App() {


  return (

    <div id="__next" data-reactroot="">
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="pt-24 flex-1"> 
          <div className="mx-auto pb-20 -mt-4">
        <Header />
        <Body />
        <BodyAdvantages />
        <BodyAbout />
        <BodyTestimonial />
        <BodySuccess />
        <BodyBanner />
          </div>    
        </main>
          <Footer />
       </div>
  </div>
  );
}

export default App;
