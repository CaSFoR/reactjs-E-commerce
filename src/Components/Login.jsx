import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // رسالة الخطأ
  const [success, setSuccess] = useState(false); // حالة النجاح
  const navigate = useNavigate(); // للتنقل بعد تسجيل الدخول الناجح

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // مسح أي رسائل خطأ سابقة

    // استرجاع المستخدمين من localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // التحقق من وجود المستخدم ومطابقة كلمة المرور
    const user = storedUsers.find(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );

    if (user) {
      setSuccess(true);
      setError("");
      setTimeout(() => navigate("/"), 2000); // الانتقال إلى الصفحة الرئيسية بعد 2 ثانية
    } else {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    }
  };

  return (
    <MainLayout>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div
          className="card shadow-sm"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <div className="card-body">
            <h2 className="card-title text-center mb-4">تسجيل الدخول</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={credentials.email}
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
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                تسجيل الدخول
              </button>
            </form>

            {/* عرض رسائل الخطأ أو النجاح */}
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {success && (
              <div className="alert alert-success mt-3">
                تم تسجيل الدخول بنجاح! جارٍ التحويل...
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
