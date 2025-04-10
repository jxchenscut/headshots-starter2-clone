// app/login/failed/components/LoginFail.tsx
"use client";

import React from "react";

export function LoginFail({ errorMessage }: { errorMessage: string }) {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold text-red-500">Login Failed</h1>
      <p className="mt-4 text-gray-700">{errorMessage}</p>
    </div>
  );
}

import dynamic from "next/dynamic";
import type { FC } from "react";

const LoginFail = dynamic<FC>(() => import("./components/LoginFail"), {
  ssr: false,
});

export default LoginFail;
