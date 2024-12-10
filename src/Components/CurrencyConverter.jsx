import React, { useState, useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";

const CurrencyConverter = () => {
  // تعريف المتغيرات
  const [amount, setAmount] = useState(1); // المبلغ المدخل
  const [fromCurrency, setFromCurrency] = useState("USD"); // العملة الأصلية
  const [toCurrency, setToCurrency] = useState("EUR"); // العملة المستهدفة
  const [exchangeRate, setExchangeRate] = useState(null); // سعر الصرف
  const [convertedAmount, setConvertedAmount] = useState(null); // المبلغ المحول
  const [currencies, setCurrencies] = useState([]); // قائمة العملات المتاحة

  // جلب العملات المتاحة عند تحميل الصفحة
  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json()) // تحويل الاستجابة إلى JSON
      .then((data) => {
        setCurrencies(Object.keys(data.rates)); // تخزين قائمة العملات
        setExchangeRate(data.rates[toCurrency]); // تعيين سعر الصرف الافتراضي
      })
      .catch((error) => console.error("Error fetching exchange rates", error));
  }, []);

  // عند تغيير العملة أو المبلغ
  useEffect(() => {
    if (exchangeRate) {
      const converted = amount * exchangeRate;
      setConvertedAmount(converted.toFixed(2)); // عرض المبلغ المحول
    }
  }, [amount, fromCurrency, toCurrency, exchangeRate]);

  // وظيفة لتحديث سعر الصرف عند تغيير العملة
  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) => {
          setExchangeRate(data.rates[toCurrency]); // تحديث سعر الصرف
        })
        .catch((error) =>
          console.error("Error fetching exchange rates", error)
        );
    }
  }, [fromCurrency, toCurrency]);

  return (
    <MainLayout>
      <div className="container mt-5 mb-5">
        <div className="card shadow-lg p-4 rounded-3 bg-light">
          <h2 className="text-center mb-4 text-primary">محول العملات</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="amount" className="form-label fw-bold">
                  المبلغ:
                </label>
                <input
                  type="number"
                  className="form-control border-0 shadow-sm"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  style={{ fontSize: "1.1rem" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fromCurrency" className="form-label fw-bold">
                  من العملة:
                </label>
                <select
                  id="fromCurrency"
                  className="form-select border-0 shadow-sm"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  style={{ fontSize: "1.1rem" }}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="toCurrency" className="form-label fw-bold">
                  إلى العملة:
                </label>
                <select
                  id="toCurrency"
                  className="form-select border-0 shadow-sm"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  style={{ fontSize: "1.1rem" }}
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h4 className="text-info">النتيجة:</h4>
              {convertedAmount !== null ? (
                <div className="alert alert-success text-center shadow-sm w-75 p-3">
                  <p className="fw-bold" style={{ fontSize: "1.2rem" }}>
                    {convertedAmount} {toCurrency}
                  </p>
                </div>
              ) : (
                <p className="text-muted">
                  يرجى إدخال قيمة صحيحة لتحويل العملات
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CurrencyConverter;
