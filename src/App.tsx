import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css';

type ProdutoType = {
  id: number;
  tamanho: number;
  preco: number;
  imagem: string;
  marca: string;
  modelo: string;
};

function App() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<ProdutoType[]>([]);

  useEffect(() => {
    fetch("https://one022a-marketplace-1esb.onrender.com")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
      .catch(error => console.error('Erro ao carregar os produtos:', error));
  }, []);

  return (
    <div className="produtos-container">
      <h1 className="titulo-produto">Produtos</h1>
      <div className="produtos-list">
        {produtos.map(produto => (
          <div key={produto.id} className="produto-item">
            <h3 className="produto-nome">{produto.modelo}</h3> {/* Usando o modelo como nome do produto */}
            <div className="container-imagem">
              <img src={produto.imagem} alt="imagem do produto" />
            </div>
            <p className="produto-tamanho">{produto.tamanho}</p> {/* Corrigido para exibir tamanho */}
            <p className="produto-preco">{produto.preco.toFixed(2)}</p> {/* Exibindo preço formatado */}
            <p className="produto-marca">{produto.marca}</p> {/*Exibir marca do tênis*/}
            <p className="produto-modelo">{produto.modelo}</p> {/*Exibir modelo*/}
            <button className="botao-comprar" onClick={() => navigate(`/produto/${produto.id}`)}>Comprar</button> {/* Navega para a página do produto */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
