import { useEffect, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";

const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <MainLayout>
      <div className="container mt-5">
        <div className="row">
          {products.map((e) => (
            <div key={e.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm h-100">
                <img
                  src={e.image}
                  className="card-img img-fluid rounded mx-auto mt-3"
                  alt={e.title}
                  style={{
                    width: "auto",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{e.title}</h5>
                  <p className="card-text text-muted">{e.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="border border-1 rounded text-black p-2 border-success-subtle">
                      {e.price} SAR
                    </span>
                    <Link
                      to={`/details?id=${e.id}`}
                      className="btn btn-primary"
                    >
                      معاينة التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default List;
