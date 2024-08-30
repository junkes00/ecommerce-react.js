export const productsApi = async () => {
  const url = "https://fakestoreapi.com/products?limit=5";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}, ${response.text}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    alert(error.message);
    console.log(error.message);
  }
};
