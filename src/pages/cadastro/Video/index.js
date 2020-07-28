import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroVideo () {
  return(
    
      <PageDefault>
      <h1>Cadastre o Vídeo!</h1>
      <Link to="/cadastro/categoria" >
        Cadastre a Categoria
      </Link>
      </PageDefault>
  )
}

export default CadastroVideo;