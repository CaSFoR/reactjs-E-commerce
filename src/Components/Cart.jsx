import MainLayout from "../Layouts/MainLayout";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // حساب السعر الإجمالي
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // تعديل الكمية
  const handleQuantityChange = (id, change) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      if (item.quantity + change >= 1) {
        dispatch(updateQuantity(id, change));
      }
    }
  };

  // إزالة المنتج
  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <MainLayout>
      <section className="cart-section py-5 bg-light">
        <div className="container ">
          <h3 className="text-center mb-5">سلة المشتريات</h3>
          {cartItems.length === 0 ? (
            <div className="alert alert-warning text-center">
              لا توجد منتجات في السلة
            </div>
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>المنتج</th>
                            <th>السعر</th>
                            <th>الكمية</th>
                            <th>الإجمالي</th>
                            <th>حذف</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item) => (
                            <tr key={item.id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="img-fluid rounded-3"
                                    width={60}
                                  />
                                  <div className="ms-3">
                                    <h6>{item.title}</h6>
                                    <p className="text-muted">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>{item.price} SAR</td>
                              <td>
                                <div className="d-flex align-items-center justify-content-center">
                                  <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={() =>
                                      handleQuantityChange(item.id, -1)
                                    }
                                  >
                                    -
                                  </button>
                                  <span className="form-control w-50 mx-2">
                                    {item.quantity}
                                  </span>
                                  <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={() =>
                                      handleQuantityChange(item.id, 1)
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>
                                {(item.price * item.quantity).toFixed(2)} SAR
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => removeItemFromCart(item.id)}
                                >
                                  <i className="bi bi-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* إجمالي السعر */}
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <h5 className="text-primary">
                        المجموع الكلي: {getTotalPrice()} SAR
                      </h5>
                      <Link
                        to="/checkout"
                        state={{ cartItems }}
                        className="btn btn-success"
                      >
                        متابعة الدفع
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
