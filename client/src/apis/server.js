import axios from "axios";

const server = axios.create({
  // baseURL: "http://localhost:8000/" // development
  baseURL: "https://mymoneycharts.herokuapp.com/" // production
});

export const putSignup = async userInfo =>
  await server.put("/signup", {
    ...userInfo
  });

export const postLogin = async userInfo =>
  await server.post("/login", { ...userInfo });

export const putItemAsync = async (item, authString) =>
  await server.put(
    "/add-item",
    {
      item
    },
    {
      headers: { Authorization: authString }
    }
  );

export const deleteItemAsync = async (itemId, authString) =>
  await server.delete("/delete-item", {
    data: {
      itemId,
      authString
    }
  });

export const getUserBudgetAsync = async (date, authString) =>
  await server.get("/get-budget", {
    headers: { Authorization: authString },
    params: { ...date }
  });

export const postForgotPassword = async email =>
  await server.post("/forgot-password", { email });

export const postResetPassword = async (newPassword, token) =>
  await server.post("/reset-password", {
    newPassword,
    token
  });
