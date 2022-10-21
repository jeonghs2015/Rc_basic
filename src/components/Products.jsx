import React, {useState} from 'react'

export default function Products() {
    const [count, setCount] = useState(0);
    const [products, setShowProducts] = useState([]);
    fetch('data/products.json')
        .then((res) => res.json())
        .then((data) => {
            console.log('데이터를 네트워크에서 받아옴');
            setShowProducts(data);
        });
  return (
    <>
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <article>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </article>
                </li>
            ))}
        </ul>
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  )
}
 