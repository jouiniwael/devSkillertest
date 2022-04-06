export default class OrdersAnalyzer {
    constructor() {
        this.weekdays = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    }

    averageDailySales(productId, orders) { 
         
    let result = {};
    let howManyInAday = {}
    for(var j = 0; j<weekdays.length ; j++){
        result[weekdays[j]] = 0; 
    }
    for(var j = 0; j<weekdays.length ; j++){
        howManyInAday[weekdays[j]] = 0; 
    }
    for(var i = 0 ; i<orders.length ; i++){
     
        let order = orders[i]; 
        let orederLinesArray = order.orderLines;
        let dayOfTheWeek = new Date(order.creationDate).getDay(); 
        let theSpecDay = weekdays[dayOfTheWeek]; 
        for(var z = 0; z < orederLinesArray.length ; z++){
            if(orederLinesArray[z].productId === productId){
                if(result[theSpecDay] > 0){
                    howManyInAday[theSpecDay] =  howManyInAday[theSpecDay] + 1;
                    result[theSpecDay] = ( result[theSpecDay] + orederLinesArray[z].quantity ) / howManyInAday[theSpecDay];
                }
                else {
                    result[theSpecDay] = result[theSpecDay] + orederLinesArray[z].quantity;
                }
            }
        }
    }
    return result; 
           
           
  







    }
}