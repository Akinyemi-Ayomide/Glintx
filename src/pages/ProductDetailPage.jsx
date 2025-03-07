import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  // Ensure `id` is compared correctly (convert to number if necessary)
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <p>No product found.</p>;
  }

  return (
    <div className="mt-20 p-6">
      <div className="px-2">{/* Product Details */}</div>
      <div className="gap-5">
        {/* Product Main Image */}
        <div></div>

        {/* Additional Product Images */}
        <div className="w-full overflow-hidden">
          {Array.isArray(product.img) && product.img.length > 1 && (
            <div className="grid grid-flow-col auto-cols-[250px] md:auto-cols-[400px] overflow-x-auto gap-4 ">
              {product.img.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Product ${index}`}
                  className="rounded-md shadow-lg"
                />
              ))}
            </div>
          )}
          <div></div>
        </div>
      </div>
      <div>
        {' '}
        <h1 className="font-bold mt-20 text-2xl md:text-4xl">{product.name}</h1>
      </div>
      {/*description*/}
      <div className="mt-10">
        <p className="mb-2">{product.description1}</p>
        <p className="mb-2">{product.description2}</p>
        <p className="mb-2">{product.description3}</p>
        <p className="mb-2">{product.description4}</p>
        <p className="mb-2">{product.description5}</p>
        <p className="mb-2">{product.description6}</p>
        <p className="mb-2">{product.description7}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
