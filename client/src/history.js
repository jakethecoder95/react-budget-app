import { createBrowserHistory as createHistory } from "history";

const history = createHistory();

if (history.location.pathname === "/") {
  history.replace("/budget");
}

export default history;
