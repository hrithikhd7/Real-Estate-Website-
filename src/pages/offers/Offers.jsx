import { BsFillArrowDownRightSquareFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

AOS.init();

const Offers = () => {
  return (
    <div className="md:space-y-24 space-y-8">
      <Helmet>
        <title>Offers</title>
      </Helmet>
      <div className="md:text-right">
        <div data-aos="fade-down">
          <h1 className="font font-extrabold text-4xl md:text-8xl lg:text-9xl">
            WE PROVIDE
          </h1>
        </div>
        <div data-aos="fade-down">
          <h1 className="font font-extrabold text-4xl md:text-8xl lg:text-9xl">
            EXCEPTIONAL OFFERS
          </h1>
        </div>
      </div>

      <div data-aos="fade-right" className="flex  gap-2">
        <h1 className="font font-extrabold text-xl md:text-4xl lg:text-5xl">
          Explore
        </h1>
        <BsFillArrowDownRightSquareFill className="text-xl md:text-4xl lg:text-5xl text-primary" />
      </div>
      <div
        data-aos="zoom-in-down"
        className="grid md:grid-cols-3 gap-8 font-secondary "
      >
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/0B7tGHt/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.jpg"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-primary">
              Contemporary Elegance in Aspen
            </h2>
            <p>
              Perched atop a picturesque mountainside in Aspen, this
              contemporary masterpiece offers the ultimate blend of
              sophistication and serenity. Boasting over 8,000 square feet of
              living space, this estate features five bedrooms, seven bathrooms,
              and seamless indoor-outdoor living areas designed to maximize the
              stunning views of the Rocky Mountains.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact Agent</button>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/M6j4gNh/grant-lemons-j-TCLppdw-SEc-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-primary">
              Exclusive Retreat in the Hamptons
            </h2>
            <p>
              Situated on the pristine shores of the Hamptons, this oceanfront
              oasis offers unparalleled luxury and tranquility. Spanning over
              15,000 square feet, this estate features nine bedrooms, twelve
              bathrooms, and expansive living areas perfect for entertaining
              guests.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact Agent</button>
            </div>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/s96MdQs/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-primary">
              Palatial Paradise at 30% Off!
            </h2>
            <p>
              Nestled in the heart of Beverly Hills, this magnificent estate
              spans over 10,000 square feet of opulent living space. Boasting
              seven bedrooms, ten bathrooms, and sprawling manicured grounds,
              this property offers the epitome of luxury living. Lavish
              amenities include a state-of-the-art home theater, a
              temperature-controlled wine cellar, a resort-style pool with a
              cabana, and a fully equipped fitness center.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Contact Agent</button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-down"
        className="flex  gap-2 font-primary justify-end"
      >
        <h1 className="font font-extrabold text-xl md:text-4xl lg:text-5xl">
          MORE OFFERS COMING SOON!
        </h1>
        <BsFillArrowDownRightSquareFill className="text-xl md:text-4xl lg:text-5xl text-primary" />
      </div>
    </div>
  );
};

export default Offers;
