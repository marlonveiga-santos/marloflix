import React from "react";
import Menu from "./components/Menu";
import dados_iniciais from "./data/dados_iniciais.json";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription={dados_iniciais.categorias[0].videos[0].titulo}
      />
       {dados_iniciais.categorias.map(((item, index) => 
         <Carousel key={index} ignoreFirstVideo category={item} />
        ))}
      <Footer />
    </div>
  );
}

export default App;
