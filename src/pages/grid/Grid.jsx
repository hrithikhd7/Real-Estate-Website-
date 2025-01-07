import { BsArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Grid = ({ estate }) => {
  const {
    image,
    estate_title,
    description,
    area,
    location,
    status,
    facilities,
    id,
  } = estate;

  return (
    <div data-aos="zoom-in-down" className=" ">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-none font-Manrope">
        <figure className="lg:w-[45%]">
          <img src={image} alt="" className="aspect-video object-cover" />
        </figure>
        <div className="card-body ">
          <h1 className="card-title text-2xl font-bold font-secondary ">
            <BsArrowRightSquareFill className="text-primary" />
            {estate_title}
          </h1>
          <div className="font-secondary text-l space-y-2">
            <p>{description}</p>
            <p>
              <span className="font-bold">Area:</span> {area}
            </p>
            <p>
              <span className="font-bold">Location:</span> {location}
            </p>
            <p>
              <span className="font-bold">Status:</span> {status}
            </p>
          </div>
          <div className="flex gap-2 flex-col md:flex-row">
            {facilities.map((facilities, index) => (
              <div className="px-3 py-2 bg-accent text-accent bg-opacity-5 rounded-[30px]  font-semibold text-center">
                <p>{facilities}</p>
              </div>
            ))}
          </div>

          <div className="card-actions justify-end text-secondary">
            <Link to={`/property/${id}`} className="btn btn-primary">
              VIEW PROPERTY
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
