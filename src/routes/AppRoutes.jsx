import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LOGIN_PAGE, HOME_PAGE } from "../shared/routes";
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));

