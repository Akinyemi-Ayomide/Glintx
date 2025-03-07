export const SlidesLoader = async () => {
  try {
    const [slidesResponse, productsResponse, doResponse, designResponse] = await Promise.all([
      fetch('http://localhost:5000/slides'),
      fetch('http://localhost:5000/products'),
      fetch('http://localhost:5000/Do'),
      fetch('http://localhost:5000/Design'),
    ]);

    if (!slidesResponse.ok) throw new Error('Failed to fetch slides');
    if (!productsResponse.ok) throw new Error('Failed to fetch products');
    if (!doResponse.ok) throw new Error('Failed to fetch products');
    if (!designResponse.ok) throw new Error('Failed to fetch products');

    const slides = await slidesResponse.json();
    const products = await productsResponse.json();
    const Do = await doResponse.json();
    const Design = await designResponse.json();

    return { slides, products, Do, Design }; // ✅ Return multiple datasets as an object
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return { slides: [], products: [], Do: [], Design: [] }; // ✅ Return empty arrays to prevent crashes
  }
};
