import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/wh.jpg";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // تحديث حالة isLoggedIn عند تحميل الصفحة
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    setIsLoggedIn(user ? true : false);
  }, []);

  // عند تسجيل الخروج
  const handleLogout = () => {
    localStorage.removeItem("users");
    setIsLoggedIn(false);
    navigate("/");
  };

  // إرجاع عدد العناصر في السلة
  const getTotalProducts = () => {
    return cartItems.length;
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg text-uppercase border-bottom"
        style={{
          backgroundColor: "black",
          fontSize: "14px",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1000",
        }}
      >
        <div className="container py-3">
          <div className="row align-items-center w-100">
            <div className="col-4">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-white">
                      <i className="bi bi-house-fill"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link text-white">
                      منتجاتنا
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link text-white">
                      من نحن
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link text-white">
                      اتصل بنا
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/currency-converter"
                      className="nav-link text-white"
                    >
                      تحويل العملات
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-4 text-center">
              <Link to="/">
                <img src={logo} alt="Logo" style={{ height: "50px" }} />
              </Link>
            </div>

            <div className="col-4 d-flex justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/cart" className="nav-link text-white">
                    <i className="bi bi-cart-fill"></i>
                    <span className="badge bg-light text-dark mx-2">
                      {getTotalProducts()}
                    </span>
                  </Link>
                </li>

                {!isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link text-white">
                        تسجيل الدخول
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link text-white">
                        تسجيل حساب
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <button
                        onClick={handleLogout}
                        className="btn btn-link nav-link text-white"
                        style={{ textDecoration: "none" }}
                      >
                        تسجيل خروج
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ height: "80px" }}></div> {/* مساحة فارغة تحت الشريط */}
    </header>
  );
};

export default Header;
