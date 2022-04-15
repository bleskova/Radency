
//combinations
function comboDist(ls, k) {
	let ComboArr = [];
    if (k==1) {
        ComboArr.push(...ls.map((e) => [e]));
    } else {
        for (let i = 0; i < ls.length; i++ ) {
            ComboArr.push(...comboDist(ls.slice(i + 1), k - 1).map((array) => [ls[i], ...array]));
        }} 
    return ComboArr;
}

//check data
function checkVar (ls, k, t) {
	let checkLs = ls.filter((e) => (e <= 0)||(e % 1 > 0))
  //console.log(checkLs);
	if ((k < 1)||(t < 0)||(ls.length < 1)||(checkLs.length >= 1)) {
  return false;
  } else {
  	return true;
  }  
}
//main 
const chooseOptimalDistance = (t, k, ls) => {
		let check = checkVar (ls, k, t);
      if (!check) {
     	 return console.log("Error");
      }
      let dist = comboDist(ls, k);
    	let distLenght = dist.map((e) => e.reduce((sum, elem) => sum + elem, 0));
      console.log(distLenght, distLenght.length);
      distLenght = distLenght.filter((e) => e <= t)
      if (distLenght.length == 0){
      	console.log("null")
        return null
      }
      
      console.log(Math.max(...distLenght)); //optimal distance
    	return Math.max(...distLenght);
}

chooseOptimalDistance(177, 3, [51, 56, 58, 59, 61]);
chooseOptimalDistance(17, 3, [51, 56, 58, 59, 61]);
chooseOptimalDistance(177, 3, [51, 56, 58, 5.9, 61]);

