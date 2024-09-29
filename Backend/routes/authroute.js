import express, { Route, Router } from "express";
import { login, logout, signup } from "../controllers/authcontroller.js";

const router = express.Router();

router.get("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default Router;
