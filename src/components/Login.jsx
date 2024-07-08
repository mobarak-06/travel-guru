import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { IoMdEyeOff} from "react-icons/io";
import { IoEye } from "react-icons/io5";

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [showEye, setShowEye] = useState(false);
  const emailRef = useRef(null)
  const location = useLocation();
  console.log('location in the login page', location);
  const navigate  = useNavigate()

  const { signIn, signInWithGoogle, signInWithGithub, resetEmail} =
    useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const remember = form.get("remember")
    console.log(email, password, remember);

    setLoginError("");

    if (!remember) {
      setLoginError("checked the remember")
      return;
    }

    //    user SignIN
    signIn(email, password)
    .then(result => {
        console.log(result.user);
        if (result.user.emailVerified) {
          toast.success('Successfully Login!');
          // navigate after login
          navigate(location?.state ? location.state : "/");
        }
        else{
          setLoginError("please verify your account")
        }
        
    })
    .catch(error => {
        console.error(error);
    });
  };
  // sign in with google
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success('Successfully Login!');
        navigate(location?.state ? location.state : "/");
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleGithub = () => {
    signInWithGithub()
    .then(result =>{
        console.log(result.user);
        toast.success('Successfully Login!');
        navigate(location?.state ? location.state : "/");
    })
    .catch(error =>{
        console.error(error);
    });
  };

  const handleForgotPassword = () =>{
    const email = emailRef.current.value;
    // email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setLoginError("please provide a valid email");
      return;
    }

    resetEmail(email)
    .then(() =>{
      alert('check your email and reset your password')
    })
    .catch(error =>{
      console.error(error);
    })

  }
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <div className="w-[570px] h-[430px] border border-[#ABABAB] p-10 mx-auto">
        <h2 className="text-[#000000] text-2xl font-semibold">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mt-4 p-4"
            type="text"
            name="email"
            ref={emailRef}
            required
            id=""
            placeholder="Username or Email"
          />
          <hr />
          <div className="relative">
          <input
            className="w-full mt-4 p-4"
            type={showEye ? "text" : "password"}
            name="password"
            required
            id=""
            placeholder="Password"
          />
          <span className="absolute top-8 right-5" onClick={() => setShowEye(!showEye)}>
            {
              showEye ? <IoMdEyeOff size={20}/> : <IoEye size={20}/>
            }
          </span>
          </div>
          <hr />
          <div className="flex justify-between mt-8">
            <span>
              <input type="checkbox" name="remember" id="" />
              Remember Me
            </span>
            <button onClick={handleForgotPassword} className="font-medium text-[#F9A51A] underline">
              Forgot Password
            </button>
          </div>
           {/* login error */}
        {
          loginError && <p className="text-red-600">{loginError}</p>
        }
          <button className="btn bg-[#F9A51A] w-full mt-10">Login</button>
          <p className="font-medium text-center mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-[#F9A51A] underline">
              Create an account
            </Link>
          </p>
        </form>
      </div>
      <div className="relative flex items-center py-5 w-[450px] mx-auto">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="mx-4 flex-shrink text-gray-400">or</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleGoogle}
          className=" flex w-[450px] rounded-full py-3 border border-gray-400"
        >
          <FcGoogle className="ml-3" size={20} />{" "}
          <p className="ml-32">Continue with Google</p>
        </button>
        <button
          onClick={handleGithub}
          className=" flex w-[450px] rounded-full py-3 border border-gray-400 mt-2"
        >
          <BsGithub className="ml-3" size={20} />{" "}
          <p className="ml-32">Continue with Github</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
