function validators() {
    var numbersOnly, alphabetsOnly, alphaNumerics;
    return {
        numbersOnly: function (evt) {
            if (evt.keyCode >= 48 && evt.keyCode <= 57) {}
            else {
                evt.preventDefault();
            }
        }
        , alphabetsOnly: function (evt) {
            if ((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode >= 97 && evt.keyCode <= 122)) {}
            else {
                evt.preventDefault();
            }
        }
        , alphaNumerics: function (evt) {
            if ((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode >= 97 && evt.keyCode <= 122) || (evt.keyCode >= 48 && evt.keyCode <= 57) || evt.keyCode == 38 || (evt.keyCode >= 44 && evt.keyCode <= 47) || evt.keyCode == 32) {}
            else {
                evt.preventDefault();
            }
        }
        , changeDropDown: function () {
            getControls().states.innerHTML = "";
            var selected = getControls().countries.value;
            if (selected == "US") {
                buildStates();
            }
            else if (selected == "IN") {
                buildStates();
            }
        }
    , };
}