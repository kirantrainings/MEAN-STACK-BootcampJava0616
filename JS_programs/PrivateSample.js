function Car() {
  this._mileage = 0;
}

Car.prototype.drive = function(miles) {
  if (typeof miles == 'number' && miles > 0) {
    this._mileage += miles;
  } else {
    throw new Error('drive only accepts positive numbers');
  }
};

Car.prototype.readMileage = function() {
  return this._mileage;
}