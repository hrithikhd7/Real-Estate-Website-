import { useEffect, useState } from "react";
import Grid from "../grid/Grid";
import Swipper from "../swipper/Swipper";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

AOS.init();

const Home = () => {
  const [estate, setEstate] = useState([]);

  useEffect(() => {
    fetch("realestate.json")
      .then((res) => res.json())
      .then((data) => setEstate(data));
  }, []);
  console.log(estate);

  return (
    <div className="md:space-y-24 space-y-8 z-10 ">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="">
        <div data-aos="fade-down">
          <h1 className="font font-extrabold text-5xl md:text-8xl lg:text-9xl ">
            WE PROVIDE
          </h1>
        </div>
        <div data-aos="fade-up">
          <h1 className="font font-extrabold text-5xl md:text-8xl lg:text-9xl">
            YOUR FUTURE RESIDENCE
          </h1>
        </div>
      </div>
      <div>
        <Swipper></Swipper>
      </div>

      <div className=" space-y-8">
        <div data-aos="fade-right">
          <h1 className="font font-extrabold text-3xl md:text-5xl lg:text-6xl">
            ESTATES TO EXPLORE
          </h1>
        </div>
        {estate.map((estate) => (
          <Grid key={estate.id} estate={estate}></Grid>
        ))}
      </div>
    </div>
  );
};

export default Home;
