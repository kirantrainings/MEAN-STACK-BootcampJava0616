function getControls() {
    return {
        firstName: document.getElementById("fname")
        , lastName: document.getElementById("lname")
        , addrLine1: document.getElementById("addrLine1")
        , addrLine2: document.getElementById("addrLine2")
        , phone: document.getElementById("phoneNum")
    , };
}

function bindEvents() {
    var pageValidations = validators();
    getControls().firstName.addEventListener("keypress", pageValidations.alphabetsOnly);
    getControls().lastName.addEventListener("keypress", pageValidations.alphabetsOnly);
    getControls().addrLine1.addEventListener("keypress", pageValidations.alphaNumerics);
    getControls().addrLine2.addEventListener("keypress", pageValidations.alphabetsOnly);
    getControls().phone.addEventListener("keypress", pageValidations.numbersOnly);
    buildStates();
    controls().countries.addEventListener("change", buildStates);
}

function initPage() {
    bindEvents();
    loadData();
}
initPage();