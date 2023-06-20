import img from "../img/Architect_Isometric.png";
import img2 from "../img/Architect_Monochromatic.png";
import img3 from "../img/Architect_Two Color.png";

export default function Individuals() {
  return (
    <>
      <section className="individuals mb-5" id="Individuals">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="fw-bold">
                The genius way <br /> to work
                <span className="text-primary">better</span>
              </h1>
              <p>
                Timly makes it easy to work smarter when you're working solo.
                Meetings, sessions, and appointments become more efficient way o
                achieve success and accomplish goals.
              </p>
              <a href="#" className="btn btn-dark rounded-5 px-3 py-2">
                Sign up for free
              </a>
            </div>
            <div className="col-md-6">
              <img src={img} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={img2} className="img-fluid" alt="" />
            </div>
            <div className="col-md-6">
              <p className="text-muted text-uppercase">acurated timly</p>
              <h1 className="fw-bold">Book Up Efficiently</h1>
              <p>
                When invites select a meeting slot from you schedules, they only
                see the time you're available, and only the length and type of
                meeting you want to have . Your schedules fills up efficiently,
                and everyone avoids excess email exchanges.
              </p>
              <a href="#" className="btn btn-dark rounded-5 px-3 py-2">
                Sign up for free
              </a>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-muted text-uppercase">
                Automated notifications & follow ups
              </p>
              <h1 className="fw-bold">
                Work like you have a personal assistance
              </h1>
              <p>
                Because Timly automate administrative task like sending
                re-minder emails and follow-ups, you follow this work that
                builds your business and bring customers back for more.
              </p>
            </div>
            <div className="col-md-6">
              <img src={img3} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="bg-svg p-5 d-flex flex-column align-items-baseline">
            <h4 className="text-white text-uppercase fw-bolder">
              find the right-plans <br />
              for individuals and <br />
              small teams.
            </h4>
            <a href="#" className="btn text-dark rounded-5 px-3 py-2">
              See Our Plans
            </a>
          </div>
          <div className="row i-foot my-4 mx-lg-4">
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
