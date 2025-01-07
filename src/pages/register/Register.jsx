import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Context";
import { getAuth, updateProfile } from "firebase/auth";
import { toast } from "sonner";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

AOS.init();

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
      } else if (!/(?=.*[a-z])/.test(password)) {
        toast.error("Password must contain at least one lowercase letter.");
      } else if (!/(?=.*[A-Z])/.test(password)) {
        toast.error("Password must contain at least one uppercase letter.");
      }

      return;
    }

    try {
      const result = await createUser(email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      navigate(location?.state ? location.state : "/");
      setTimeout(() => {
        window.location.reload();
      }, 500);
      toast.success("Registration Successful!");
      console.log(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div data-aos="fade-right" className="h-auto">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-none font-secondary">
        <figure className="lg:w-[50%]">
          <img
            className="h-full object-cover"
            src="https://i.ibb.co/JC2nwYH/villa.jpg"
            alt="Album"
          />
        </figure>

        <div className="card-body  lg:space-y-10 md:space-y-6 space-y-4">
          <div className=" font-extrabold lg:text-6xl md:text-4xl text-2xl font-primary">
            REGISTER
          </div>
          <form onSubmit={handleRegister} className="lg:space-y-10 space-y-4">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                required
                name="name"
                className="grow"
                placeholder="Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                required
                name="photo"
                className="grow"
                placeholder="Photo URL"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="email"
                required
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                className="grow"
                placeholder="Password"
              />

              {showPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(false)}
                  className="cursor-pointer"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setShowPassword(true)}
                  className="cursor-pointer"
                />
              )}
            </label>
            <button className="btn border-primary text-primary bg-transparent font-bold w-full hover:bg-primary hover:border-primary hover:text-white">
              Register
            </button>
          </form>
          <div>
            <p className="text-l text-center">
              Already have an account?{" "}
              <span className="link font-bold ">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
