import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearCart } from "../actions/cartActions"; // تأكد من مسار الأكشن
import MainLayout from "../Layouts/MainLayout";
import { useState } from "react";

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCompletePurchase = () => {
    // تفريغ السلة باستخدام أكشن Redux
    dispatch(clearCart()); // استدعاء أكشن "clearCart"

    // توجيه المستخدم إلى صفحة الفاتورة أو الصفحة المطلوبة بعد إتمام الشراء
    navigate("/invoice", { state: { cartItems } });
  };

  return (
    <MainLayout>
      <section className="checkout-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5">
                  {cartItems.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-5 text-center">تفاصيل المنتجات</h4>
                      {cartItems.map((product) => (
                        <div key={product.id} className="row mb-4">
                          <div className="col-md-4 mb-3">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="img-fluid rounded-3 shadow-sm"
                            />
                          </div>
                          <div className="col-md-8 mb-3">
                            <h5>{product.title}</h5>
                            <p className="text-muted">{product.description}</p>
                            <div className="d-flex align-items-center">
                              <span className="form-control w-25 mx-2">
                                {product.quantity}
                              </span>
                              <span className="mx-3 fs-5 text-success">
                                {product.price} SAR
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-4">
                    <h6 className="mb-3">طريقة الدفع</h6>
                    <div className="row">
                      <div className="col-6 mb-3">
                        <button
                          className={`btn w-100 ${
                            paymentMethod === "creditCard"
                              ? "btn-success"
                              : "btn-outline-secondary"
                          } rounded-3 shadow-sm`}
                          onClick={() =>
                            handlePaymentMethodChange("creditCard")
                          }
                        >
                          <i className="fas fa-credit-card me-2"></i> بطاقة
                          الائتمان
                        </button>
                      </div>
                      <div className="col-6 mb-3">
                        <button
                          className={`btn w-100 ${
                            paymentMethod === "cashOnDelivery"
                              ? "btn-success"
                              : "btn-outline-secondary"
                          } rounded-3 shadow-sm`}
                          onClick={() =>
                            handlePaymentMethodChange("cashOnDelivery")
                          }
                        >
                          <i className="fas fa-money-bill-wave me-2"></i> الدفع
                          عند الاستلام
                        </button>
                      </div>
                    </div>
                  </div>

                  {paymentMethod === "creditCard" && (
                    <div className="mb-4">
                      <h6 className="mb-3">تفاصيل الدفع بالبطاقة</h6>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">
                            الاسم حسب البطاقة
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={15}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">رقم البطاقة</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={16}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">CVV</label>
                          <input
                            type="text"
                            className="form-control"
                            maxLength={3}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">
                            تاريخ انتهاء الصلاحية
                          </label>
                          <input type="month" className="form-control" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <h5 className="text-primary">
                      المجموع الكلي: {getTotalPrice()} SAR
                    </h5>
                    <button
                      onClick={handleCompletePurchase}
                      className="btn btn-success w-100 rounded-3 shadow-sm"
                    >
                      إتمام الشراء
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Checkout;
