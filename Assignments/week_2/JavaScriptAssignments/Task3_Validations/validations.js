function validators() { // its returning objects mentioned in 'return'
    //var numbersOnly, alphabetsOnly, alphaNumerics;
    return {
        numbersOnly: function (evt) {
            if (evt.keyCode > 47 && evt.keyCode < 58) {}
            else {
                evt.preventDefault();
            }
        }
        , alphabetsOnly: function (evt) {
            if (evt.keyCode > 64 && evt.keyCode < 91 || evt.keyCode > 96 && evt.keyCode < 123) {}
            else {
                evt.preventDefault();
            }
        }
        , alphaNumerics: function (evt) {
            var bool = (evt.keyCode > 43 && evt.keyCode < 58) || (evt.keyCode > 64 && evt.keyCode < 91 || evt.keyCode > 96 && evt.keyCode < 123 || evt.keyCode == 32 || evt.keyCode == 38 || evt.keyCode == 39);
            if (bool) {}
            else {
                evt.preventDefault();
            }
        }
    };
}