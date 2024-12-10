import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Header from "../Components/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-uppercase mb-3">عن الشركة</h5>
              <p>
                نحن شركة متخصصة في تقديم أفضل المنتجات والخدمات لعملائنا الكرام.
                هدفنا هو رضا العميل ونسعى جاهدين لتلبية احتياجاتهم.
              </p>
            </div>

            <div className="col-md-4 text-center">
              <h5 className="text-uppercase mb-3">روابط سريعة</h5>
              <ul className="list-unstyled p-0">
                <li className="mb-2">
                  <a
                    href="/"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    الرئيسية
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/about"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    عن الشركة
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/contact"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    اتصل بنا
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    سياسة الخصوصية
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4 text-center">
              <h5 className="text-uppercase mb-3">تابعنا على</h5>
              <div className="d-flex justify-content-center">
                <a
                  href="https://facebook.com"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-white me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Waleed&Hassan - جميع الحقوق
              محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
