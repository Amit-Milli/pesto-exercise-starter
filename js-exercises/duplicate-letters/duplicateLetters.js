
function duplicateLetters(str) {
  if(typeof str === 'string') {
      const stringArr = str.split('');
      const verificationObj = {};
      for(let i = 0; i < stringArr.length; i++) {
          if(stringArr[i] !== ' ') {
            verificationObj[stringArr[i]] = verificationObj.hasOwnProperty(stringArr[i]) ? verificationObj[stringArr[i]] + 1 : 1;
          }
      }
      const maxValue = Object.values(verificationObj).length > 0 ? Math.max(...Object.values(verificationObj)) : 0;
      return maxValue <= 1 ? false : maxValue;  
    } else {
      // throw 'Invalid argument';
      // returning string for testing purpose else would have thrown an exception
      return 'Invalid argument';
    }
}

export {
  duplicateLetters,
};
