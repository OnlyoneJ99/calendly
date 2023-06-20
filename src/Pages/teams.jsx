import img from "../img/Online protection_Flatline.png";
import img1 from "../img/Online protection_Isometric.png";
import img2 from "../img/Online protection_Monochromatic.png";
import img3 from "../img/Online protection_Two Color.png";
import img4 from "../img/Watermelon_Monochromatic.png";

export default function Teams(){
  return (
    <>
      <section id="Team" className="team">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4 className="fw-bold display-4">
                <span className="text-primary">Power up</span>
                your <br /> team
              </h4>
              <p>
                Timely gives you control over team scheduling with a
                standardize, scalable process. It's secure, easy to manage, and
                integrate with your teams favorite tools, so you can get
                everyone working as efficient and effectively as possible.
              </p>
              <a href="#" className="btn btn-primary rounded-5 px-4 py-2">
                Start for free
              </a>
              <a href="#" className="btn btn-outline-dark rounded-5 px-4 py-2">
                Start for free
              </a>
            </div>
            <div className="col-md-6">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="row text-center">
            `
            <h4 className="display-4 fw-bold">
              Streamline task, extend team reach
            </h4>
          </div>

          <div className="row mt-4 align-items-center">
            <div className="col-md-6">
              <img
                src="img/Online protection_Isometric.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-md-6">
              <p className="text-primary text-uppercase">
                automated assignment
              </p>
              <h4 className="fw-bold">
                Control how your team gets <br /> Booked
              </h4>
              <p>
                With Timly, you can offer sessions that are a few minutes or a
                few hours, for one invitee or a group, automated round-robin ,
                fast availability, or geography-based assessment lets you divvy
                any meetings in any way that work for your team members.
              </p>
            </div>
          </div>

          <div className="row mt-4 text-center">
            <p className="text-primary text-uppercase">solutions</p>
            <h4 className="fw-bold display-5">
              The right Timly for the work you do
            </h4>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-6 col-md-5 col-lg-3">
              <div className="card shadow-sm">
                <img
                  src={img1}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Sales</h5>
                  <p className="card-text">Get to your best leads faster</p>
                  <a
                    href="#"
                    className="btn btn-link fw-bold text-decoration-none p-0"
                  >
                    Learn More <span className="ms-1"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-5 col-lg-3">
              <div className="card shadow-sm">
                <img
                  src={img2}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Recruiting</h5>
                  <p className="card-text">less emailing, more closing</p>
                  <a
                    href="#"
                    className="btn btn-link fw-bold text-decoration-none p-0"
                  >
                    Learn More <span className="ms-1"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-5 col-lg-3">
              <div className="card shadow-sm mt-3 mt-lg-0">
                <img
                  src={img3}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">customers success</h5>
                  <p className="card-text">less emailing, more closing</p>
                  <a
                    href="#"
                    className="btn btn-link fw-bold text-decoration-none p-0"
                  >
                    Learn More <span className="ms-1"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-5 col-lg-3">
              <div className="card shadow-sm mt-3 mt-lg-0">
                <img
                  src={img4}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Recruiting</h5>
                  <p className="card-text">less emailing, more closing</p>
                  <a
                    href="#"
                    className="btn btn-link fw-bold text-decoration-none p-0"
                  >
                    Learn More <span className="ms-1"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row i-foot mt-5 my-4 mx-lg-4">
            <div className="col-md-3 col-6">
              <h4 className="fw-bold">
                Easy <br />
                <span className="text-primary">ahead</span>
              </h4>
              <p>
                We take the work out to connect with others so you can
                accomplish more.
              </p>

              <select className="form-select" id="inputGroupSelect01">
                <option>English</option>
                <option>Portuguese</option>
                <option>Spanish</option>
                <option>Dutch</option>
              </select>
            </div>

            <div className="col-md-3 col-6">
              <h4 className="fw-bold">About</h4>
              <a href="#" className="d-block">
                About Timly
              </a>
              <a href="#" className="d-block">
                Contact Sales
              </a>
              <a href="#" className="d-block">
                Newsroom
              </a>
              <a href="#" className="d-block">
                Careers
              </a>
              <a href="#" className="d-block">
                Security
              </a>
            </div>

            <div className="col-md-3 col-6">
              <h4 className="fw-bold">Solutions</h4>
              <a href="#" className="d-block">
                Customer Service
              </a>
              <a href="#" className="d-block">
                Sales
              </a>
              <a href="#" className="d-block">
                Recruiting
              </a>
              <a href="#" className="d-block">
                Education
              </a>
              <a href="#" className="d-block">
                Marketing
              </a>
            </div>

            <div className="col-md-3 col-6">
              <h4 className="fw-bold">Popular Features</h4>
              <a href="#" className="d-block">
                Embed Timly
              </a>
              <a href="#" className="d-block">
                Availability
              </a>
              <a href="#" className="d-block">
                Sending Notifications
              </a>
              <a href="#" className="d-block">
                Using Timly mobile
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

