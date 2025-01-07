import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

AOS.init();

const ViewProperties = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const navigate = useNavigate();

  const estate = estates.find((estate) => estate.id === idInt);
  console.log(estate);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(idInt));
  }, [idInt]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(idInt)) {
      const newFavorites = favorites.filter((favId) => favId !== idInt);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(idInt);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return (
    <div data-aos="fade-right" className="">
      <Helmet>
        <title>View Properties</title>
      </Helmet>
      <div className="card glass md:items-center font-secondary rounded-none">
        <figure className="aspect-video object-cover">
          <img className="" src={estate.image} alt="" />
        </figure>
        <div className="card-body ">
          <div className="flex md:gap-4">
            <h1 className="card-title font-bold text-2xl md:text-8xl font-primary">
              {estate.estate_title}
            </h1>
            <div className="">
              <p className="w-[60px] px-3 py-2 bg-lime-400 text-white  rounded-[30px]  font-semibold text-center">
                {estate.status}
              </p>
            </div>
          </div>
          <div className="md:text-2xl space-y-4">
            <p>{estate.description_detail}</p>

            <p>
              Price: <span className="font-bold">{estate.price}</span>
            </p>
            <p>
              Area:<span className="font-bold"> {estate.area}</span>
            </p>
            <p>
              Location: <span className="font-bold">{estate.location}</span>
            </p>
          </div>

          <div className="md:flex gap-2 space-y-2">
            {estate.facilities.map((facilities, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-accent text-accent bg-opacity-5 rounded-[30px]  font-semibold text-center "
              >
                <p>{facilities}</p>
              </div>
            ))}
          </div>

          <div className="card-actions justify-center md:justify-end">
            <button
              onClick={() => navigate(`/agents/${estate.id}`)}
              className="btn btn-primary bg-blue-800"
            >
              View Agents
            </button>
            <button
              onClick={() => navigate("/mortgage")}
              className="btn btn-primary bg-green-800"
            >
              Calculate Mortgage
            </button>
            <button
              onClick={toggleFavorite}
              className={`btn btn-primary ${
                isFavorite ? "bg-red-800" : "bg-purple-800"
              }`}
            >
              {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperties;
