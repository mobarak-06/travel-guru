import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { IoMdEyeOff} from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { sendEmailVerification, updateProfile } from "firebase/auth";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState();

    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const firstName = form.get("firstName");
        const lastName = form.get("lastName");
        const email = form.get("email");
        const password = form.get("password");
        const ConfirmPassword = form.get("confirmPassword");
        console.log(firstName, lastName, email, password, ConfirmPassword);

        setEmailError('')
        setRegisterError('')
        if ( !/@/.test(email)) {
          setEmailError('Provide a valid email ')
          return;
        }
        if (password.length < 6) {
          setRegisterError("password must be 6 character or longer")
          return;
        }
        if (password !== ConfirmPassword) {
          setRegisterError("password don't match")
        }
        if (!/^(?=.*[@#!$%^&*()_+[\]{};':"\\|,.<>/?]).{6,}$/.test(password)) {
          setRegisterError("provide a strong password")
          return;
        }
        // create user 
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            updateProfile(result.user, {
              displayName: `${firstName} ${lastName}`
            })
            .then(() =>{
              console.log("profile updated");
            })
            .catch()
            // email verification
            sendEmailVerification(result.user)
            .then(() => {
              alert("check your email and verify your account")
            })
            .catch()
        })
        .catch(error =>{
            console.error(error);
        })

    }
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <div className="w-[570px] h-[457px] border border-[#ABABAB]  mx-auto p-8">
        <h2 className="text-[#000000] text-2xl font-semibold">
          Create an account
        </h2>
        <form onSubmit={handleRegister} className="mt-4">
          <input
            className="w-full p-4"
            type="text"
            name="firstName"
            id=""
            placeholder="First Name"
          />
          <hr />
          <input
            className="w-full p-4"
            type="text"
            name="lastName"
            id=""
            placeholder="Last Name"
          />
          <hr />
          <input
            className="w-full p-4"
            type="text"
            name="email"
            id=""
            required
            placeholder="Username or Email"
          />
          <hr />
          {emailError && <p className="text-red-600">{emailError}</p>}
          <div className="relative">
          <input
            className="w-full p-4"
            type={showPass ? "text" : "password"}
            name="password"
            id=""
            placeholder="Password"
          />
          <span className="absolute top-4 right-5" onClick={() => setShowPass(!showPass)}>
            {showPass ? <IoMdEyeOff/> : <IoEye/>} 
            </span>
          </div>
          <hr />
          <div className="relative">
          <input
            className="w-full p-4"
            type={showConfirmPass ? "text" : "password"}
            name="confirmPassword"
            id=""
            placeholder="Confirm Password"
          />
          <span className="absolute top-4 right-5" onClick={() => setShowConfirmPass(!showConfirmPass)}>
            {showConfirmPass ? <IoMdEyeOff/> : <IoEye/>} 
            </span>
          </div>
          <hr />
          {
            registerError && <p className="text-red-600">{registerError}</p>
          }
          <button className="btn bg-[#F9A51A] w-full mt-5 ">
            Create an account
          </button>
          <p className="font-medium text-center ">
            Already have an account? ?{" "}
            <Link to="/login" className="text-[#F9A51A] underline">
              Login
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
        <button className="flex w-[450px] rounded-full py-3 border border-gray-400">
          <FcGoogle className="ml-3" size={20} />{" "}
          <p className="ml-32">Continue with Google</p>
        </button>
        <button className="flex w-[450px] rounded-full py-3 border border-gray-400 mt-2">
          <BsGithub className="ml-3" size={20} />{" "}
          <p className="ml-32">Continue with Github</p>
        </button>
      </div>
    </div>
  );
};

export default Register;
