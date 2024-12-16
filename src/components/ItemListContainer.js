// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Lista simulada de produtos
const mockProducts = [
  {
    id: 1,
    title: 'Pudim de Leite Condensado',
    category: 'produtos',
    image: 'https://static.itdg.com.br/images/640-440/d1307a2e17cda187df76b78cfd3ac464/shutterstock-2322251819-1-.jpg',
    description: 'Um delicioso pudim de leite condensado, perfeito para sobremesas.',
    price: 25.0,
  },
  {
    id: 2,
    title: 'Bolo de Chocolate',
    category: 'produtos',
    image: 'https://moinhoglobo.com.br/wp-content/uploads/2019/03/08-bolo-chocolate.png',
    description: 'Bolo fofinho com cobertura cremosa de chocolate.',
    price: 30.0,
  },
  {
    id: 3,
    title: 'Receita de Brigadeiro Fit',
    category: 'receitas',
    image: 'https://static.itdg.com.br/images/1200-675/a373f494abb2c3360b9966f5abe130e2/brigadeiro-.jpg',
    description: 'Receita saudável de brigadeiro fit para dietas.',
    price: 10.0,
  },
];

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams(); // Captura o parâmetro da URL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filtra os produtos pela categoria, se houver um parâmetro
    const filteredProducts = id
      ? mockProducts.filter((product) => product.category === id)
      : mockProducts;

    setProducts(filteredProducts);
  }, [id]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} style={{ width: '200px', height: '150px' }} />
              <p>{product.description}</p>
              <p>
                <strong>Preço:</strong> R$ {product.price}
              </p>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;