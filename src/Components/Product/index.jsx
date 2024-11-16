import * as S from "./Style";

const Product = ({ product }) => {
  const priceConverted = (prod) => prod.toString().replace(".", ",");

  return product.map((item) => (
    <S.Container key={item?.id}>
      <h1>{item?.title}</h1>
      <h2>Price: U${priceConverted(item?.price)}</h2>
      <img src={item?.image} alt="" />
      <p>{item?.description}</p>
    </S.Container>
  ));
};

export default Product;
