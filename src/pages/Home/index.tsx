import { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Welcome to Our Store</h1>
      <img
        src="https://via.placeholder.com/1200x300?text=Shop+Now"
        style={{ width: '100%', marginBottom: '20px', borderRadius: '8px' }}
        alt="Banner"
      />
      <h2>Featured Products</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: 10, borderRadius: 6 }}>
            <img src={p.image} alt={p.title} style={{ height: 100, objectFit: 'contain' }} />
            <p>{p.title}</p>
            <p><strong>${p.price}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}
