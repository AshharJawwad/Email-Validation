import express, { Route, Router } from "express";
import { login, logout, signup } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default Router;
