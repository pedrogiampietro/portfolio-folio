import { Product } from '../Product';
import { products } from '../../data';

import './styles.css';

export function ProductList() {
  return (
    <div className="product-list">
      <div className="product-list-texts">
        <h1 className="product-list-title">Create & inspire. It's Safak</h1>
        <p className="product-list-desc">
          Safak is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="product-list-list">
        {products.map(item => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}
