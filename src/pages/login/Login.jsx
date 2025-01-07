import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "sonner";
import { Helmet } from "react-helmet";

AOS.init();

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("You are logged in!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("You are logged in!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("You are logged in!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div data-aos="fade-right" className="">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-none font-secondary">
        <figure className="lg:w-[50%] ">
          <img
            className="h-full object-cover"
            src="https://i.ibb.co/JC2nwYH/villa.jpg"
            alt="Album"
          />
        </figure>

        <div className="card-body  md:space-y-6 space-y-4">
          <div className=" font-extrabold lg:text-6xl md:text-4xl text-2xl font-primary">
            LOGIN
          </div>
          <form onSubmit={handleLogin} className="lg:space-y-10 space-y-4">
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
              Login
            </button>
          </form>
          <div>
            <p className="text-l text-center">
              Not Registered Yet?{" "}
              <span className="link font-bold ">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </div>
          <div className="card-actions flex justify-center">
            <button onClick={handleGoogleLogin} className="btn ">
              <FcGoogle /> Google
            </button>
            <button onClick={handleGithubLogin} className="btn ">
              <GrGithub /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
