export default function makeObj(contentArray){
if(contentArray.length<6){
    return [{
        content: contentArray,
        display: true
    }]
}
let arrayOfObjects = [];

if (contentArray.length % 6 !== 0) {
  let leftovers = contentArray.length % 6;

  let leftoversObject = {
    content: [],
    display: false
  };

  for (let i = 0; i < leftovers; i++) {
    leftoversObject.content.push(contentArray.pop());
  }
  arrayOfObjects.push(leftoversObject);
}

while (contentArray.length > 0) {
  let object = {
    content: [],
    display: false
  };

  for (let i = 0; i < 6; i++) {
    
    object.content.push(contentArray.shift());
  }

  arrayOfObjects.push(object);
}
arrayOfObjects[0].display=true
return arrayOfObjects
}


