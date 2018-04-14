function addApple(){
    var comingQuantity= document.getElementById("applePrice").value;
    
    var initialPrice=180;
    var totalPrice=initialPrice*comingQuantity;
    alert("Quantity :" +comingQuantity +"\n"+"Total Price Of Apple= Rs" + totalPrice);
}

function addMilk(){
    var comingQuantity= document.getElementById("milkPrice").value;
    
    var initialPrice=20;
    var totalPrice=initialPrice*comingQuantity;
    alert("Quantity :" +comingQuantity +"\n"+"Total Price Milk = Rs" + totalPrice);
}

function addJuice(){
    var comingQuantity= document.getElementById("juicePrice").value;
    
    var initialPrice=50;
    var totalPrice=initialPrice*comingQuantity;
    alert("Quantity :" +comingQuantity +"\n"+"Total Price Of Juice= Rs" + totalPrice);
}

// var Scart=angular.module("ShoppingCart",[]);
// Scart.controller("myCtr",function($scope){
//     $scope.ShowQuantity=function(){

        
//         var comingQuantity= document.getElementById("applePrice").value;
//         var comingQuantity1= document.getElementById("milkPrice").value;
//         var comingQuantity2= document.getElementById("juicePrice").value;

//         var items=document.getElementById("nItems");

//         var TotalQuantity=comingQuantity+comingQuantity1+comingQuantity2;
//         items.innerHTML="TotalQuantity";
//     };
// });

// var Scart=angular.module("ShoppingCart",[]);
// Scart.controller("myCtr",function($scope){
//     $scope.itemsQuantity=[];
//     $scope.addUser=function(){
//         $scope.itemsQuantity.push({
//             quant:$scope.newQuant,
//             itemPrice:$scope.newPrice
//         });
//     }
// });
