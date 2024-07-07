// src/pages/ErrorPage.js
import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-zinc-900">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-2xl">Page Not Found</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
