import { useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
const Invoice = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  // توليد رقم فاتورة عشوائي
  const generateInvoiceNumber = () => {
    return Math.floor(Math.random() * 1000000000);
  };

  // توليد خصم عشوائي بين 5% و 15%
  const generateDiscount = (totalPrice) => {
    const discountPercentage = Math.random() * (0.15 - 0.05) + 0.05; // بين 5% و 15%
    return (totalPrice * discountPercentage).toFixed(2);
  };

  // حساب السعر الإجمالي لجميع المنتجات في السلة
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const totalPrice = parseFloat(getTotalPrice());
  const discount = parseFloat(generateDiscount(totalPrice));
  const shippingCost = 50; // يمكنك تخصيص قيمة الشحن هنا
  const finalPrice = (totalPrice - discount + shippingCost).toFixed(2);

  useEffect(() => {
    Swal.fire({
      icon: "success",
      title: "شكرًا لشراء المنتج!",
      text: "تم إتمام عملية الشراء بنجاح. نتمنى لك تجربة رائعة!",
      timer: 3000,
      showConfirmButton: false,
    });
  }, []);

  return (
    <MainLayout>
      <div className="container py-5">
        <div className="card shadow-lg rounded-3 border-0">
          <div className="card-header bg-primary text-white text-center py-3">
            <h4>فاتورة شراء</h4>
          </div>

          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-center mb-4">
                <h5 className="text-uppercase">
                  رقم الفاتورة: {generateInvoiceNumber()}#
                </h5>
              </div>

              <div className="row mb-4">
                <div className="col-md-8">
                  <i className="far fa-building text-danger fa-5x mb-4"></i>
                </div>
                <div>
                  <ul className="list-unstyled">
                    <li>
                      <strong>الشركة</strong>
                    </li>
                    <li>123، شارع إلم</li>
                    <li>123-456-789</li>
                    <li>mail@mail.com</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="table-responsive mb-4">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>الوصف</th>
                    <th>الكمية</th>
                    <th>الإجمالي</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((product) => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.quantity}</td>
                      <td>
                        {(product.price * product.quantity).toFixed(2)} SAR
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="row mb-4">
              <div className="col-md-8">
                <ul className="list-unstyled">
                  <li>
                    <span>المجموع:</span>
                    <span className="mx-2">{totalPrice} ريال سعودي</span>
                  </li>
                  <li>
                    <span>الخصم:</span>
                    <span className="mx-2 text-success">
                      - {discount} ريال سعودي
                    </span>
                  </li>
                  <li>
                    <span>الشحن:</span>
                    <span className="mx-2">+ {shippingCost} ريال سعودي</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr />

            <div className="row mb-4">
              <div className="col-md-8">
                <p>
                  <strong>الإجمالي :</strong>
                  <span className="mx-2 text-danger">
                    {finalPrice} ريال سعودي
                  </span>
                </p>
              </div>
            </div>

            <div className="card-footer bg-primary text-center text-white py-3">
              <p className="mb-0">
                شكرًا لشراءك من متجر Waleed&Hassan! نحن نقدر عملك معنا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Invoice;
