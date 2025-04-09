const mainLampOff = document.getElementById("lamp-off");
const mainLampOn = document.getElementById("lamp-on");
const buttonLamp = document.getElementById("button-lamp");

buttonLamp.addEventListener("click", function () {
    if (mainLampOff.classList.contains("d-inline-block")) {
        mainLampOff.classList.replace("d-inline-block", "d-none");
        mainLampOn.classList.replace("d-none", "d-inline-block");
        buttonLamp.classList.replace("btn-success", "btn-danger");
        buttonLamp.innerHTML = "spegni";
    }
    else {
        mainLampOff.classList.replace("d-none", "d-inline-block");
        mainLampOn.classList.replace("d-inline-block", "d-none");
        buttonLamp.classList.replace("btn-danger", "btn-success");
        buttonLamp.innerHTML = "accendi";
    }
});