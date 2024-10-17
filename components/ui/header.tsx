'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/logo';
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "../types";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const handleSignOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    window.location.href = "/";
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
                  Sign out
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
