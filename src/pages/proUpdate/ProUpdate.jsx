import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Context";
import { updateProfile } from "firebase/auth";
import { toast } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

AOS.init();

const ProUpdate = () => {
  const { user, auth } = useContext(AuthContext);
  const [displayName, setdisplayName] = useState("");
  console.log(user);
  const [photoURL, setphotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setdisplayName(user.displayName || "");
      setphotoURL(user.photoURL || "");
    }
  }, [user]);

  const updatePro = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success("Successfully Updated!");
        setTimeout(() => {
          window.location.reload();
        }, 400);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div data-aos="fade-right">
      <Helmet>
        <title>Update</title>
      </Helmet>
      <div className="h-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-none font-secondary">
          <figure className="lg:w-[50%]  aspect-square md:aspect-auto">
            <div className="avatar">
              <div className="w-full rounded">
                <img src={photoURL} />
              </div>
            </div>
          </figure>

          <div className="card-body  lg:space-y-10 md:space-y-6 space-y-4">
            <div className=" font-extrabold lg:text-6xl md:text-4xl text-2xl font-primary">
              UPDATE PROFILE
            </div>
            <form onSubmit={updatePro} className="lg:space-y-10 space-y-4">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  required
                  name="name"
                  className="grow"
                  placeholder="Name"
                  value={displayName}
                  onChange={(e) => setdisplayName(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  required
                  name="photo"
                  className="grow"
                  placeholder="Photo URL"
                  value={photoURL}
                  onChange={(e) => setphotoURL(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="email"
                  required
                  name="email"
                  className="grow"
                  placeholder="Email"
                  value={user?.email || ""}
                  disabled
                />
              </label>

              <button className="btn border-primary text-primary bg-transparent font-bold w-full hover:bg-primary hover:border-primary hover:text-white">
                UPDATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProUpdate;
