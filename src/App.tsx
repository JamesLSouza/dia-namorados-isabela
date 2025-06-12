import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FloatingHearts from './components/FloatingHearts';
import PhotoSlideshow from './components/PhotoSlideshow';
import CouplePhotosGallery from './components/CouplePhotosGallery';
import { Heart, Sparkles, Gift, Calendar, Camera } from 'lucide-react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const scrollToMemories = () => {
    // This can be customized to open a Google Drive link, YouTube video, etc.
    // For now, it scrolls to the photo section
    const memoriesSection = document.getElementById('memories-section');
    memoriesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-x-hidden">
      <FloatingHearts />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 via-rose-200/20 to-pink-300/20 backdrop-blur-sm"></div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10" data-aos="fade-up">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Heart size={80} className="text-rose-500 animate-pulse" fill="currentColor" />
              <Sparkles size={24} className="absolute -top-2 -right-2 text-yellow-400 animate-spin" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 mb-6 font-['Dancing_Script']">
            Feliz Dia dos Namorados, 
            <span className="block text-rose-500">Isabela!</span>
          </h1>
          
          <div className="relative p-8 bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 mb-8" data-aos="zoom-in" data-aos-delay="300">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              Cada momento com você é uma lembrança mágica.<br />
              <span className="text-rose-600 font-semibold">Te amo hoje, amanhã e sempre.</span>
            </p>
            <div className="absolute -top-2 -right-2">
              <Sparkles size={32} className="text-yellow-400 animate-bounce" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-rose-600 font-medium">
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
              <Calendar size={18} />
              <span>01/12/2024</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full">
              <Gift size={18} />
              <span>Com todo meu amor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Couple Photos Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="flex justify-center mb-4">
              <Camera size={48} className="text-rose-500 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4 font-['Dancing_Script']">
              Nossos Momentos Juntos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reviva cada momento especial do nosso amor! Toque em qualquer foto para ampliá-la e navegar pela nossa coleção de memórias.
            </p>
          </div>
          
          <CouplePhotosGallery />
        </div>
      </section>

      {/* Love Message Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-6 font-['Dancing_Script']">
                Para a mulher da minha vida
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Isabela, você trouxe cor para os meus dias cinzentos e luz para os momentos escuros. 
                  Cada sorriso seu é como um presente que recebo todos os dias.
                </p>
                <p className="text-lg leading-relaxed">
                  Nosso amor é como uma música perfeita, onde cada nota se encaixa harmoniosamente 
                  criando uma melodia única e especial.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-rose-600">
                  Você é minha inspiração, minha paz e minha felicidade. Eu te amo infinitamente! ❤️
                </p>
              </div>
            </div>
            
            <div data-aos="fade-left" className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-rose-200 p-8 rounded-3xl shadow-xl">
                <div className="text-center">
                  <Heart size={60} className="text-rose-500 mx-auto mb-4 animate-pulse" fill="currentColor" />
                  <h3 className="text-2xl font-bold text-rose-700 mb-4 font-['Dancing_Script']">
                    Nosso Amor
                  </h3>
                  <p className="text-rose-600 text-lg">
                    "O amor não se vê com os olhos, mas com o coração"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="memories-section" className="py-20 px-4 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4 font-['Dancing_Script']">
              Nossas Memórias Especiais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada foto é uma história do nosso amor. Momentos únicos que guardo no coração.
            </p>
          </div>
          
          <PhotoSlideshow />
        </div>
      </section>

      {/* Special Message Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 p-12 rounded-3xl shadow-2xl" data-aos="zoom-in">
            <Sparkles size={48} className="text-yellow-500 mx-auto mb-6 animate-spin" />
            <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-6 font-['Dancing_Script']">
              Uma Promessa de Amor
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Prometo estar sempre ao seu lado, nos momentos de alegria e nos desafios. 
              Prometo amar você com toda a intensidade do meu coração, hoje e por todos os dias que virão.
              Você é meu presente mais precioso, minha companheira de vida e minha alma gêmea.
            </p>
            <div className="flex justify-center">
              <Heart size={40} className="text-rose-500 animate-pulse" fill="currentColor" />
            </div>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="py-12 px-4 bg-rose-800">
        <div className="max-w-4xl mx-auto text-center">
          <Heart size={32} className="text-pink-200 mx-auto mb-4 animate-pulse" fill="currentColor" />
          <p className="text-pink-100 text-lg font-['Dancing_Script']">
            Feito com muito amor para Isabela ❤️
          </p>
          <p className="text-pink-200 text-sm mt-2">
            Feliz Dia dos Namorados, meu amor!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;