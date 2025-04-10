
import dynamic from "next/dynamic";
import type { FC } from "react";

const LoginFail = dynamic<FC>(() => import("./components/LoginFail"), {
  ssr: false,
});

export default LoginFail;
