import img from "../img/computer.png";
import img1 from "../img/compas.png";
import img2 from "../img/dropbox.png";
import img3 from "../img/ebay.png";
import img4 from "../img/lazboy.png";
import img5 from "../img/twillo.png";

export default function Home(){
  
  return (
    <>
      <section className="hero" id="Home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 ">
              <h3 className="display-3 fw-bold">
                Easy <br />
                scheduling <br />
                <span className="text-primary">ahead</span>
              </h3>
              <p className="fs-5">
                Timely is your hub for scheduling meetings professionally and
                efficiently, the hustle of back-and-forth so you can get back to
                work.
              </p>
              <div className="form col-8">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    aria-label="email"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-dark"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
              </div>
              <p className="mt-3 text-muted">
                Create your free account. No credit card needed.
              </p>
            </div>
            <div className="col-md-6">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="logos mt-5">
        <div className="container">
          <div className="row text-center">
            <p className="fs-4 fw-bold">
              Simplified scheduling for more than <br />
              <span className="text-primary">10,000,000</span>
              users worldwide
            </p>
          </div>
          <div className="row align-items-center justify-content-around">
            <div className="col-sm-6 col-md-2">
              <img src={img1} alt="" />
            </div>
            <div className="col-sm-6 col-md-2">
              <img src={img2} alt="" />
            </div>
            <div className="col-sm-6 col-md-2">
              <img src={img3} alt="" />
            </div>
            <div className="col-sm-6 col-md-2">
              <img src={img4} alt="" />
            </div>
            <div className="col-sm-6 col-md-2">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="steps my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="fw-bold">
                <span className="">1</span>
                Create <br /> simple rules
              </h4>
              <p>
                Let Timly Know your <br /> availability pereference and <br />{" "}
                it will do the work for you.
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold">
                <span className="">2</span>
                Share your
                <br />
                link
              </h4>
              <p>
                Send guest your Timly <br /> link or embed it in your <br />{" "}
                website.
              </p>
            </div>
            <div className="col-md-4">
              <h4 className="fw-bold">
                <span className="">3</span>
                Get Booked
              </h4>
              <p>
                They pick a time and the <br />
                and the event is added to your <br />
                calender.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
