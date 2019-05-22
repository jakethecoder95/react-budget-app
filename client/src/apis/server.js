import axios from "axios";

const prodURL = "https://mymoneycharts.herokuapp.com/";
const devURL = "http://localhost:8000/";
const location = window.location.href;
const regex = /mymoneycharts.com/;

const server = axios.create({
  baseURL: regex.test(location) ? prodURL : devURL
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

export const mergeBudgetAsync = async (items, authString) =>
  await server.put(
    "/merge-budget",
    {
      items
    },
    {
      headers: { Authorization: authString }
    }
  );

export const postUpdateUserBio = async (values, authString) =>
  await server.post(
    "/update-user-bio",
    {
      ...values
    },
    { headers: { Authorization: authString } }
  );
