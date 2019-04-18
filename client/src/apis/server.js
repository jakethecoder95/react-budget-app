import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:8000/"
});

export const putSignup = async userInfo =>
  await server.put("/signup", {
    ...userInfo
  });

export const postLogin = async userInfo =>
  await server.post("/login", { ...userInfo });
