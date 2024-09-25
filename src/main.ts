import App from "./App.svelte";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "boxicons";

const app = new App({
  target: document.getElementById("app"),
});

export default app;