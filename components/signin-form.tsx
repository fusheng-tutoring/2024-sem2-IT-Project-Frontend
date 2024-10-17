'use client'

export const metadata = {
  title: "Sign In - The University of Melbourne Handbook",
  description: "The University of Melbourne Handbook",
};

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { BACKEND_URL } from "./constant";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [curLogin, setCurLogin] = useState<string>("Staff");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    
    // If authToken exists, redirect to home page
    if (authToken) {
      window.location.href = "/";
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${BACKEND_URL}/auth/signin`, { email, password });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("authToken", JSON.stringify(token));
        window.location.href = "/";
      }
    } catch (error) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const visiting = () => {
    window.location.href = "/";
  }

  return (
    <div className="pt-8 mx-auto text-center bg-unimelbSignin pb-8">
      <p className="max-w-sm text-md text-white mx-auto">Sign in with your University of Melbourne account to access Student Portal</p>

      <div className="mt-48 max-w-xl mx-auto pb-12 flex flex-col">
        <div className="mx-auto">
          <Image alt="Unimelb" width={150} height={150} src="https://d2glwx35mhbfwf.cloudfront.net/v4.10.0/logo-with-padding.svg" />
        </div>
        <h1 className="h3 text-white mt-20">{curLogin === "Staff" ? "UoM Staff" : "UoM Students / Alumni"}</h1>
        <h1 className="h4 text-white mt-2">Sign In</h1>
      </div>

      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                className="mb-1 block text-sm font-medium text-white"
                htmlFor="email"
              >
                {curLogin === "Staff" && "Staff"} Email
              </label>
              <input
                id="email"
                className="form-input w-full py-2"
                type="email"
                placeholder="youremail@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium text-white"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                className="form-input w-full py-2"
                type="password"
                autoComplete="on"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="mt-2 text-red-600">{error}</p>}
          <div className="mt-6">
            <button
              type="submit"
              className={`btn w-full ${loading ? "bg-slate-600" : 'bg-buttonGreen'} text-white shadow`}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-sm flex items-center my-6 mx-auto">
        <div className="border-t border-slate-300 grow mr-3" aria-hidden="true" />
        <div className="text-sm text-white italic">or</div>
        <div className="border-t border-slate-300 grow ml-3" aria-hidden="true" />
      </div>

      <div className="max-w-sm mx-auto flex flex-col space-y-6">
        {curLogin === "Staff" &&
          <button
            type="button"
            onClick={() => { setCurLogin("Non-Staff") }}
            className="btn w-full bg-buttonGreen text-white shadow"
            disabled={loading}
          >
            UoM Students / Alumni
          </button>
        }
        {curLogin === "Non-Staff" &&
          <button
            type="button"
            onClick={() => { setCurLogin("Staff") }}
            className="btn w-full bg-buttonGreen text-white shadow"
            disabled={loading}
          >
            UoM Staff
          </button>
        }
        <button
          type="button"
          onClick={visiting}
          className="btn w-full bg-buttonGreen text-white shadow"
          disabled={loading}
        >
          Non-UoM Users
        </button>
      </div>


      <div className="mt-20">
        <p className="text-sm text-white mt-1 underline">Unlock account?</p>
        <p className="text-sm text-white mt-1 underline">Help</p>
        <p className="text-sm text-white mt-1 underline">Privacy collection notice</p>
      </div>
    </div>
  );
}