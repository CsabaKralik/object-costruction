const obj1 = {
  key1: "value1",
  key2: "value2",
};

function ObjectConstruction(key1, key2) {
  this.key1 = key1;
  this.key2 = key2;
}

const obj2 = new ObjectConstruction("value1", "value2");
const obj3 = new ObjectConstruction("component", "react");
console.log(obj2.key1);
console.log(obj3.key1);
