import React, { useEffect, useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";

const Favorites = () => {
  const estates = useLoaderData();
  const [favoriteEstates, setFavoriteEstates] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoriteEstates = estates.filter((estate) =>
      favorites.includes(estate.id)
    );
    setFavoriteEstates(favoriteEstates);
  }, [estates]);

  const removeFavorite = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = favorites.filter((favId) => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavoriteEstates(favoriteEstates.filter((estate) => estate.id !== id));
  };

  return (
    <div>
      <a className=" text-3xl md:text-3xl lg:text-5xl font-primary font-bold ">
        YOUR FAVORITE E$TATES
      </a>
      {favoriteEstates.length > 0 ? (
        favoriteEstates.map((estate) => (
          <div key={estate.id} data-aos="zoom-in-down" className=" ">
            <div className="card lg:card-side bg-base-100 shadow-xl rounded-none font-Manrope">
              <figure className="lg:w-[45%]">
                <img
                  src={estate.image}
                  alt=""
                  className="aspect-video object-cover"
                />
              </figure>
              <div className="card-body ">
                <h1 className="card-title text-2xl font-bold font-secondary ">
                  <BsArrowRightSquareFill className="text-primary" />
                  {estate.estate_title}
                </h1>
                <div className="font-secondary text-l space-y-2">
                  <p>{estate.description}</p>
                  <p>
                    <span className="font-bold">Area:</span> {estate.area}
                  </p>
                  <p>
                    <span className="font-bold">Location:</span>{" "}
                    {estate.location}
                  </p>
                  <p>
                    <span className="font-bold">Status:</span> {estate.status}
                  </p>
                </div>
                <div className="flex gap-2 flex-col md:flex-row">
                  {estate.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 bg-accent text-accent bg-opacity-5 rounded-[30px] font-semibold text-center"
                    >
                      <p>{facility}</p>
                    </div>
                  ))}
                </div>
                <div className="card-actions justify-end text-secondary">
                  <Link
                    to={`/property/${estate.id}`}
                    className="btn btn-primary"
                  >
                    VIEW PROPERTY
                  </Link>
                  <button
                    onClick={() => removeFavorite(estate.id)}
                    className="btn btn-danger"
                  >
                    REMOVE FROM FAVORITES
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No favorite properties found.</p>
      )}
    </div>
  );
};

export default Favorites;
