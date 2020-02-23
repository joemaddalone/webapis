import buttonService from "../services/buttonService.js";
import ledService from "../services/ledService.js";
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const simple = async (server, setConnState) => {
  try {
    await buttonService(
      server,
      val => ($("#btn").innerHTML = val ? "PRESSED" : "RELEASED")
    );
    const ls = await ledService(server);
    // Set led actions.
    $("#off").addEventListener("click", () => ls.set(0));
    $$(".color-button").forEach(el =>
      el.addEventListener("click", () =>
        ls.set(
          1,
          el
            .getAttribute("data-color")
            .split(",")
            .map(Number)
        )
      )
    );
  } catch (err) {
    console.log(err);
    setConnState("disconnected");
  }
};

export default simple;
