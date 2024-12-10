import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // رسالة الخطأ
  const [success, setSuccess] = useState(false); // حالة النجاح
  const navigate = useNavigate(); // للتنقل بعد التسجيل الناجح

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // مسح أي رسائل خطأ سابقة

    // استرجاع المستخدمين من localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // التحقق من أن البريد الإلكتروني غير مسجل بالفعل
    const isEmailTaken = storedUsers.some(
      (user) => user.email === userData.email
    );
    if (isEmailTaken) {
      setError("هذا البريد الإلكتروني مسجل بالفعل.");
      return;
    }

    // إضافة المستخدم الجديد إلى localStorage
    const updatedUsers = [...storedUsers, userData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setSuccess(true); // عرض رسالة النجاح
    setTimeout(() => navigate("/"), 2000); // الانتقال إلى صفحة تسجيل الدخول بعد 2 ثانية
  };

  return (
    <MainLayout>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card shadow-sm"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <div className="card-body">
            <h2 className="card-title text-center mb-4">إنشاء حساب جديد</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                تسجيل
              </button>
            </form>

            {/* عرض رسائل الخطأ أو النجاح */}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && (
              <div className="alert alert-success mt-3">
                تم التسجيل بنجاح! جارٍ التحويل...
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
