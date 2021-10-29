import { simplifireDFX } from "../../declarations/simplifireDFX";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with simplifireDFX actor, calling the greet method
  const greeting = await simplifireDFX.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
