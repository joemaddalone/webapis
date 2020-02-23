import Device from "./services/device.js";
import simple from "./demos/simple.js";

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
let server;
const connectButton = $("#connect");
const disconnectButton = $("#disconnect");
const simpleButton = $("#simple-button");
const advancedButton = $("#advanced-button");
const simpleDemo = $("#simple");
const advancedDemo = $("#advanced");
const setConnState = state => {
  switch (state) {
    case "disconnected":
      connectButton.removeAttribute("disabled");
	  connectButton.innerText = "Connect";
	  document.getElementById("simple").classList.add("hidden");
      break;
    case "connecting":
      connectButton.setAttribute("disabled", true);
      connectButton.innerText = "Connecting...";
      break;
    case "connected":
      connectButton.innerText = "Connected";
      disconnectButton.removeAttribute("disabled");
      document.getElementById("simple").classList.remove("hidden");
      break;

    default:
      break;
  }
};

const connect = async () => {
  setConnState("connecting");
  const { server: deviceServer } = await Device();
  server = deviceServer;
  setConnState("connected");
  disconnectButton.addEventListener("click", () => {
    server.disconnect();
    setConnState("disconnected");
  });
  simple(server, setConnState);
};

connectButton.addEventListener("click", connect);
