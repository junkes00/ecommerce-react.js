import { useEffect, useState } from "react";

import "./App.css";
import Product from "./Components/Product";
import { productsApi } from "./service/queries";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    productsApi().then((response) => setProduct(response));
  }, []);

  return (
    <div>
      <Product product={product} />
    </div>
  );
}

export default App;
