
export default function Enterprise(){
  return (
    <>
      <div className="container mt-4">
        <div className="row text-center">
          <h1 className="display-5 fw-bold">
            <span className="text-primary">Way more</span> than a <br />
            scheduling link
          </h1>
          <p>
            Standardize on the #1 scheduling platform and <br />
            and deliver the power of Timly across the entire <br />
            organization
          </p>
          <p>
            <a href="#" className="btn btn-dark py-2 px-4 rounded-5">
              Contact Sales
            </a>
          </p>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="bg-svg-2 d-flex flex-column align-items-center justify-content-around">
          <div className="row text-center">
            <p className="text-white m-0">
              Trusted by more than 50,000 of the <br />
              world's leading organization
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-around">
            <div className="col-sm-6 col-md-2 mx-4">
              <img src="img/compas.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-2 mx-4">
              <img src="img/dropbox.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-2 mx-4">
              <img src="img/ebay.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-2 mx-4">
              <img src="img/lazboy.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-2 mx-4">
              <img src="img/twillo.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="ent-cards mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow" style={{ width: "14rem" }}>
                <h6 className="fw-bold text-primary mt-4 ms-5">Sales</h6>
                <img
                  src="img/1 (1).png"
                  className="card-img-top mx-auto"
                  alt="..."
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Convert more leads and prospects into meetings and revenue.
                    Easily book demos and customer calls without the back and
                    fourth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow" style={{ width: "14rem" }}>
                <h6 className="fw-bold text-primary mt-4 ms-5">
                  Customer Success
                </h6>
                <img
                  src="img/1 (2).png"
                  className="card-img-top mx-auto"
                  alt="..."
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Deliver better support interactions and customer
                    consultation. Stay connected with automated reminders and
                    follow-ups.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow" style={{ width: "14rem" }}>
                <h6 className="fw-bold text-primary mt-4 ms-5">Recruiting</h6>
                <img
                  src="img/1 (3).png"
                  className="card-img-top mx-auto"
                  alt="..."
                  style={{ width: "150px" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Fill your candidate pipeline and book more interviews and
                    recruiter screens with easy, standardize scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

