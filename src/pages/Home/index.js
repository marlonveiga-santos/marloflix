import React from "react";
import Menu from "../../components/Menu";
import dados_iniciais from "../../data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Menu />
      <BannerMain
        videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
        url={dados_iniciais.categorias[0].videos[0].url}
        videoDescription={dados_iniciais.categorias[0].videos[0].titulo}
      />
      {dados_iniciais.categorias.map((item, index) =>
        index === 0 ? (
          <Carousel ignoreFirstVideo key={index} category={item} />
        ) : (
          <Carousel key={index} category={item} />
        )
      )}
      <Footer />
    </>
  );
}

export default Home;
