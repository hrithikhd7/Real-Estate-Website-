import React from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { toast, Toaster } from "sonner";

const Agents = () => {
  const location = useLocation();
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);
  const estate = data.find((estate) => estate.id === parseInt(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <Toaster />
      <h2 className="text-3xl font-bold mb-6 text-center font-primary">
        Agent Details
      </h2>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-semibold mb-2 font-primary text-center">
            {estate.agent_name}
          </h3>
          <p className="text-lg font-primary">{estate.agent_detail}</p>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h3 className="text-2xl font-semibold mb-4 font-primary text-center">
            Apply for a Consultation
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-primary mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded font-primary"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-primary mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded font-primary"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-primary mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded font-primary"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Agents;
