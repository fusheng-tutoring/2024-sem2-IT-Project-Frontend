'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/logo';
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../types";
import { BACKEND_URL } from '../constant';
import axios, { AxiosError } from 'axios';

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = jwtDecode<JwtPayload>(token);
      try {
        if (decodedToken.email && (decodedToken.role === "Admin" || decodedToken.role === "User")) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error parsing auth payload", error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  const SignOut = async (userEmail: string) => {
    try {
      setLoading(true);
      const result = await axios.get(`${BACKEND_URL}/auth/signout?email=${encodeURIComponent(userEmail)}`);
      console.log(result);
    } catch (err) {
      console.error(err as AxiosError)
    } finally {
      setLoading(false);
    }
  }

  const handleSignOut = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = jwtDecode<JwtPayload>(token);
      if (decodedToken.email !== "") {
        localStorage.clear();
        setIsAuthenticated(false);
        await SignOut(decodedToken.email)
        window.location.href = "/";
      } else {
        console.error("No user found")
      }
    }
  };

  return (
    <header className="absolute w-full z-30 bg-unimelbBlue">
      <div className="flex items-center justify-between">

        <div className="shrink-0 mr-4">
          <Logo toggle={false} />
        </div>

        <nav className="flex grow">
          <ul className="flex grow justify-end flex-wrap items-center">
            <li>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Study with us
              </div>
            </li>
            <li>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Student life
              </div>
            </li>
            <li>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Accommodation
              </div>
            </li>
            <li>
              <div className="text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                Contact and suport
              </div>
            </li>
            {isAuthenticated ? (
              <li className="b-2 b-white b-l">
                <button
                  type='button'
                  onClick={handleSignOut}
                  className="cursor-pointer text-sm font-medium text-green-100 px-3 lg:px-5 py-2 flex items-center"
                >
                  {loading ? "Signing Out..." : "Sign Out"}
                </button>
              </li>
            ) : (
              <li className="b-2 b-white b-l">
                <Link href="/signin" className="cursor-pointer text-sm font-medium text-white px-3 lg:px-5 py-2 flex items-center">
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
