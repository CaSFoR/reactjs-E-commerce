import { Link } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const AboutUs = () => {
  return (
    <MainLayout>
      <section className="about-us-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h2 className="text-primary mb-4">من نحن</h2>
              <p className="lead text-muted mb-5">
                نحن شركة مبتكرة متخصصة في تقديم أفضل المنتجات والخدمات للعملاء
                في جميع أنحاء العالم. هدفنا هو تحسين تجربة التسوق عبر الإنترنت
                وتقديم قيمة حقيقية لعملائنا.
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-6 text-center mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title text-primary">رؤيتنا</h4>
                  <p className="card-text text-muted">
                    رؤيتنا هي أن نكون الشركة الرائدة في تقديم المنتجات عالية
                    الجودة وخدمة العملاء الممتازة. نحن نسعى لتقديم أفضل قيمة
                    لعملائنا من خلال تجربة تسوق لا مثيل لها.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 text-center mb-4">
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h4 className="card-title text-primary">قيمنا</h4>
                  <p className="card-text text-muted">
                    نحن نؤمن بالجودة، الابتكار، والأمانة في تقديم منتجاتنا
                    وخدماتنا. قيمنا هي الأساس الذي نبني عليه كل شيء في شركتنا.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-8 text-center">
              <h3 className="text-primary mb-4">فريقنا</h3>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 mb-6">
                  <div className="card shadow-sm border-0">
                    <img
                      src="https://cdn.salla.sa/nrOXq/55a518ac-ad37-45ac-846c-b039ecdb5f7b-1000x1000-Qz5I2x4W5qibUfhbQBXkrxE8Gc6kgtQIGO8WHDQq.png"
                      alt="Team Member"
                      className="card-img-top rounded-circle mx-auto mt-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title text-primary">وليد الحربي</h5>
                      <p className="card-text text-muted">الرئيس التنفيذي</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-md-6 mb-6">
                  <div className="card shadow-sm border-0">
                    <img
                      src="https://cdn.salla.sa/nrOXq/55a518ac-ad37-45ac-846c-b039ecdb5f7b-1000x1000-Qz5I2x4W5qibUfhbQBXkrxE8Gc6kgtQIGO8WHDQq.png"
                      alt="Team Member"
                      className="card-img-top rounded-circle mx-auto mt-3"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title text-primary">حسن قحل</h5>
                      <p className="card-text text-muted">الرئيس التنفيذي</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h3 className="text-primary mb-4">اتصل بنا</h3>
              <p className="text-muted mb-4">
                إذا كانت لديك أي أسئلة أو استفسارات، لا تتردد في الاتصال بنا عبر
                البريد الإلكتروني أو الهاتف.
              </p>
              <Link to="/contact" className="btn btn-primary">
                {" "}
                إرسال بريد إلكتروني
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
