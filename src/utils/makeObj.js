export default function makeObj(arr){
  let copy = [...arr]
if(copy.length<6){
    return [{
        content: copy,
        display: true
    }]
}
let arrayOfObjects = [];

if (copy.length % 6 !== 0) {
  let leftovers = copy.length % 6;

  let leftoversObject = {
    content: [],
    display: false
  };

  for (let i = 0; i < leftovers; i++) {
    leftoversObject.content.push(copy.pop());
  }
  arrayOfObjects.push(leftoversObject);
}

while (copy.length > 0) {
  let object = {
    content: [],
    display: false
  };

  for (let i = 0; i < 6; i++) {
    
    object.content.push(copy.shift());
  }

  arrayOfObjects.push(object);
}
arrayOfObjects[0].display=true
return arrayOfObjects
}


