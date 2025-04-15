const obj = {
  // Traditional method
  prop1: function () {
    return 0;
  },
  // shorthand method
  prop2() {
    return 1;
  },
  // computed property name same as prop3()
  ["prop" + 3]() {
    return 2;
  },
};

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
