function initPage() {

    bindEvents();
}

function getControls() {
    return {
        firstName: document.getElementById("txtFirstName"),
        lastName: document.getElementById("txtLastName")
    };
}

function bindEvents() {
    var pageValidations = validators();
    //bind keypress event to first Name.
    getControls().firstName.addEventListener("keypress", pageValidations.alphabetsOnly);

    getControls().lastName.addEventListener("keypress", pageValidations.alphabetsOnly);
}

initPage();
