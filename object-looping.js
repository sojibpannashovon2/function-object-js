
var shoppingCart = {
    mouse: 2,
    Keyboard: 1,
    sunglass: 1,
    pen: 20,
    books: 13
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// for( var i=0; i<keys.length; i++ ){
//     var propertiesName = keys[i];
    // console.log(propertiesName);

    var propertiesValue = shoppingCart[propertiesName];
    // console.log(propertiesName, propertiesValue);
// }

// for in loop
for(var propertiesName in shoppingCart)
{
   const value = shoppingCart[propertiesName];
    console.log(propertiesName, value);
}