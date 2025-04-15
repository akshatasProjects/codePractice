let car = new vehicle("Honda", "white", "2010", "UK");
console.log(car);

function vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}
