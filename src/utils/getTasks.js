export default function getTasks(obj,arr){
const propertyNames = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if(obj[key]=== true){
            propertyNames.push(key);
        }
      }
    }
    
    const lastChars = propertyNames.map(str => str.charAt(str.length - 1));
    let result = []
    arr.forEach((element, i) => {
        if(lastChars.includes(`${i}`)){
            result.push({title: element, value: 0})
        }
    });
    return result
}

// console.log(getTasks({btn0: true, btn1: true, btn2: false, btn3: true, btn4: false}, ["Poner lavarropas", "Colgar ropa limpia", "Limpiar baño", "Limpiar piso", "Regar plantas"]
// ))