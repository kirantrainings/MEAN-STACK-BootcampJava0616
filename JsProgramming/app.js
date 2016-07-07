//immediate functions
//1. Immediate functions are anonymous
//2. Immedidate functions are self excecutable
//3. Most of the js developers wraps the code inside the immediate //functions.
(function () {
    function getBookList() {
        var list = books.getAllBooks();
        console.log(list);
    };

    function handleAddbook() {
        books.addBook("newbook");
    }

    function handleDeleteBook() {
        var list = books.deleteBook("Node");
        console.log(list);
    }
    getBookList();
    handleAddbook();
    handleDeleteBook();
})();
