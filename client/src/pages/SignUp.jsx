import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignUp() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on mount
  }, []);

  return (
    <div className={`p-6 max-w-lg mx-auto transition-all duration-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <h1 className="text-4xl text-center font-bold my-6 text-gray-800 animate-bounce">Sign Up</h1>
      
      <form className="flex flex-col gap-5 bg-white shadow-lg p-6 rounded-xl">
        <input type="text" placeholder="Username" id="username" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
        <input type="email" placeholder="Email" id="email" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
        <input type="password" placeholder="Password" id="password" className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />

        <button className="bg-blue-600 text-white p-3 rounded-lg uppercase font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-blue-700 disabled:opacity-80">Sign Up</button>
      </form>

      <div className="flex gap-2 mt-5 justify-center">
        <p className="text-gray-700">Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-800 text-lg font-medium hover:underline">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
