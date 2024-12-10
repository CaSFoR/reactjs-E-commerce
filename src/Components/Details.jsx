import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const Details = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const id = queryparams.get("id");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <MainLayout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="position-relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid rounded-3 shadow-lg product-image"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                  <div className="mx-5 flex-grow-1">
                    <h3 className="text-dark mb-2">{product.title}</h3>
                    <p className="text-muted">{product.category}</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="border border-2 border-success-subtle rounded text-black p-2 fs-5">
                        {product.price} SAR
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted">{product.description}</p>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <button
                    className="btn btn-success w-100"
                    onClick={handleAddToCart}
                  >
                    <i className="fas fa-cart-plus me-2"></i> إضافة إلى السلة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
