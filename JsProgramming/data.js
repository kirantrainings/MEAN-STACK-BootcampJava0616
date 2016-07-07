//immediate functions
//1. Immediate functions are anonymous
//2. Immedidate functions are self excecutable
//3. Most of the js developers wraps the code inside the immediate //functions.
(function (bookObj) {
    var bookList = ["Angular", "Node", ".Net", "JAVA"]
    bookObj.addBook = function (book) {
        bookList.push(book);
    };
    bookObj.deleteBook = function (book) {
        var bookIndex = 0;
        for (var i = 0; i < bookList.length; i++) {
            if (bookList[i] == book) {
                //remove the books logic
                bookIndex = i;
            }
        }
        bookList.splice(bookIndex, 1);
        return bookList;
    };
    bookObj.updateBooks = function () {

    };
    bookObj.getAllBooks = function () {
        return bookList;
    };

})(window.books = {});
