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
        alphaNumericsNspecialChars: function (evt) {
            if((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode >= 97 && evt.keyCode <= 122) || (evt.keyCode >= 48 && evt.keyCode <= 57)
              || evt.keyCode == 38 || (evt.keyCode >= 44 && evt.keyCode <= 47)) {
                
            }
            else{
                evt.preventDefault();
            }
            
        }

 };

}