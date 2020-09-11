(function () {
    "use strict"

    var inventory =    [
        {
            "title": "Hammer",
            "quantity": 25,
            "categories":
                ["tool"],
            "price": 20
        }
            ,
            {
                "title": "Drill",
                "quantity": 5,
                "categories":
                    [
                        "tool",
                        "powered"
                    ],
                "price": 100
            }
            ,
            {
                "title": "Mower",
                "quantity": 5,
                "categories":
                    [
                        "tool",
                        "gas",
                        "outdoor"
                    ],
                "price": 200
            }
            ,
            {
                "title": "Screwdrivers",
                "quantity": 25,
                "categories":
                    [
                        "tool"
                    ],
                "price": 10
            }
            ,
            {
                "title": "Powerdrill",
                "quantity": 5,
                "categories":
                    [
                        "tool",
                        "powered"
                    ],
                "price": 150
            }
    ]
    var findTheHighestPrice = function(items){
        var highestPrice = 0
        for(var i =0; i < items.length; i++){
            if(items[i].price > highestPrice) {
                highestPrice = item[i].price
            }
        }
        return highestPrice;
    }
    console.log(findTheHighestPrice(items))


})();