import { Bank_backend } from "../declarations/Bank_backend";

window.addEventListener("load", async ()=>{
    update()
});

document.querySelector("form").addEventListener("submit", async (event)=>{

    const button = event.target.querySelector("#submit-btn")
    event.preventDefault();
    console.log("Submitted");

    button.setAttribute("disabled", true);

    const inputAmount = parseFloat(document.querySelector("#input-amount").value);
    const outputAmount = parseFloat(document.querySelector("#withdrawal-amount").value);
    console.log(inputAmount);

    if(document.querySelector("#input-amount").value.length != 0) {
      await Bank_backend.topUp(inputAmount);
    }

    if(document.querySelector("#withdrawal-amount").value.length != 0) {
        await Bank_backend.withDraw(outputAmount);
    }

    update()

    document.querySelector("#input-amount").value="";
    document.querySelector("#withdrawal-amount").value="";
    button.removeAttribute("disabled");
});

async function update() {
    const currentAmount = await Bank_backend.checkBalence();
    document.querySelector("#value").innerHTML = currentAmount;
};