import { useState } from "react";
import Swal from "sweetalert2";
import MainLayout from "../Layouts/MainLayout";

const ContactUs = () => {
  const [formInputs, setfromInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formInputs.name || !formInputs.email || !formInputs.message) {
      Swal.fire({
        icon: "error",
        title: "يرجى تعبئة جميع الحقول",
        text: "يجب عليك تعبئة جميع الحقول في النموذج لإرساله.",
        confirmButtonText: "موافق",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "شكراً لتواصلك معنا!",
      text: `تم إرسال رسالتك بنجاح. سنقوم بالرد عليك قريباً، ${formInputs.name}.`,
      confirmButtonText: "موافق",
    });

    setfromInputs({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <MainLayout>
      <section className="contact-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 text-primary">اتصل بنا</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label">
                        الاسم
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formInputs.name}
                        className="form-control"
                        placeholder="أدخل اسمك"
                        onChange={(e) =>
                          setfromInputs({ ...formInputs, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formInputs.email}
                        className="form-control"
                        placeholder="أدخل بريدك الإلكتروني"
                        onChange={(e) =>
                          setfromInputs({
                            ...formInputs,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">
                        الرسالة
                      </label>
                      <textarea
                        id="message"
                        value={formInputs.message}
                        className="form-control"
                        rows="5"
                        placeholder="اكتب رسالتك هنا"
                        onChange={(e) =>
                          setfromInputs({
                            ...formInputs,
                            message: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      إرسال
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactUs;
