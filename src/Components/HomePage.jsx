import { Link } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
const HomePage = () => {
  return (
    <MainLayout>
      <section
        className="hero-section  text-white text-center py-5"
        style={{ backgroundColor: "rgb(0 0 75)" }}
      >
        <div className="container">
          <h1 className="display-4">مرحبًا بك في متجر Waleed&Hassan</h1>
          <p className="lead mb-4">
            استمتع بتجربة تسوق مميزة وابتكار منتجات عالية الجودة
          </p>
          <Link to="/products" className="btn btn-light btn-lg">
            استعرض منتجاتنا
          </Link>
        </div>
      </section>

      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center text-primary mb-5">لماذا تختارنا؟</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <i className="fas fa-truck fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">شحن سريع</h5>
                  <p className="card-text">
                    نوفر لك خدمة شحن سريعة وآمنة إلى جميع أنحاء العالم.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <i className="fas fa-thumbs-up fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">جودة عالية</h5>
                  <p className="card-text">
                    منتجاتنا ذات جودة استثنائية تضمن لك تجربة رائعة.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <i className="fas fa-headset fa-3x text-primary mb-3"></i>
                  <h5 className="card-title">دعم فني 24/7</h5>
                  <p className="card-text">
                    فريقنا متاح دائمًا لتقديم الدعم والمساعدة على مدار الساعة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-5">منتجاتنا المميزة</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <img
                  src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                  className="card-img-top"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                  alt="Product 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Mens Cotton Jacket</h5>
                  <Link to="/products" className="btn btn-primary">
                    استعراض المنتج
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                  className="card-img-top"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                  alt="Product 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Fjallraven</h5>
                  <Link to="/products" className="btn btn-primary">
                    استعراض المنتج
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0">
                <img
                  src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                  className="card-img-top"
                  style={{
                    height: "400px",
                    width: "300px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                  alt="Product 3"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Mens Casual Premium Slim Fit T-Shirts
                  </h5>
                  <Link to="/products" className="btn btn-primary">
                    استعراض المنتج
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-5">آراء عملائنا</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <p className="card-text">
                    "خدمة رائعة! المنتجات التي طلبتها كانت عالية الجودة والشحن
                    سريع جدًا."
                  </p>
                  <h5 className="card-title text-primary">أحمد سامي</h5>
                  <p className="text-muted">عميل سعيد</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <p className="card-text">
                    "أستمتع دائمًا بتجربة التسوق هنا. الموقع سهل الاستخدام
                    والخدمة ممتازة."
                  </p>
                  <h5 className="card-title text-primary">ليلى مصطفى</h5>
                  <p className="text-muted">عميلة مخلصة</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <p className="card-text">
                    "منتجات رائعة وجودة لا مثيل لها. سأستمر في الشراء هنا
                    دائمًا."
                  </p>
                  <h5 className="card-title text-primary">علي محمد</h5>
                  <p className="text-muted">عميل مخلص</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
