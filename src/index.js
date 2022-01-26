
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ((matrix === undefined) || (matrix.length === 0)) { 
        return [] 
    } else {
        
    let newArr = []
        for (let i = 0; i < matrix.length; i++) {
               for (let j = 0;  j < matrix[i].length; j++){
                  let ind = i % 2 === 0 
                   ? j 
                   : (matrix[i].length - 1 - j);
        
               newArr.push(matrix[i][ind])
                         }
                }
           return newArr
        }
    }
