/* eslint-disable react/prop-types */
import "./Style.css";

const Product = ({ product }) => {
  const priceConverted = (prod) => prod.toString().replace(".", ",");

  console.log(product);
  return (
    <>
      {product.map((item) => (
        <div key={item?.id}>
          <h1>{item?.title}</h1>
          <h2>Price: U${priceConverted(item?.price)}</h2>
          <img src={item?.image} alt="" />
          <p>{item?.description}</p>
        </div>
      ))}
    </>
  );
};

export default Product;
