
function calculateNumber (type,a,b) {
    answer = Math.round(a) + Math.round(b)
    if (type == "SUM") {
        return answer
        
    } else if (type == "SUBTRACT"){
        return Math.round(a) - Math.round(b)

    } else if(type =="DIVIDE"){
        if (Math.round(b) === 0) {
            return "Error";
          } else {
            return Math.round(a) / Math.round(a);
          }
    }
        
    
    return answer
 }
 module.exports = calculateNumber;