function validators() {

    return {
        numbersOnly: function () {

        },
        alphabetsOnly: function (evt) {
            if ((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode >= 97 && evt.keyCode <= 122)) {

            } else {
                evt.preventDefault();
            }

        },
        alphaNumerics: function () {

        }
    };
}
