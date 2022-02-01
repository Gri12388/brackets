module.exports = function check(str, bracketsConfig) {
  //console.log('hello');
  let stack = [];
  for (let i = 0; i < str.length; ++i) {
    //console.log(str[i]);
    let j = 0;

    for (; j < bracketsConfig.length; ++j) {
      if (bracketsConfig[j].includes(str[i])) break; 
    }

    if(bracketsConfig[j][0] == bracketsConfig[j][1]) {
      if (stack.length == 0 || stack[stack.length - 1] != str[i]) stack.push(str[i]);
      else stack.pop();
    }
    else {
      if (str[i] == bracketsConfig[j][0]) stack.push(str[i]);
      else {
        if (stack.length == 0) return false;
        let bracket = stack.pop();
        if (bracketsConfig[j][0] != bracket) return false;
      } 
    }
  
    console.log(stack);
  }
  if (stack.length) return false;
  return true;
}


