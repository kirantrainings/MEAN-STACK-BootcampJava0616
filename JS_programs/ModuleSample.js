var MyModule = (function() {
  var myPrivateData = 303;
  function myPrivateFunction() {
    alert('private');
  }
  this.myPublicData = 42;
  this.myPublicFunction = function() {
    alert(this.myPublicData);
  }
  return this;
})();