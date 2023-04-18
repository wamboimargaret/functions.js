let inventory = ["mango","banana","apples","oranges","grapes" ];
let stock = [5,1,6,3,7,];

// Question 1  Add a new item to the inventory and updating both arrays.
  function addNewItem(item, quantity){
    if(inventory.length <= 10 && stock.length <=10){ 
        inventory.push(item);
        stock.push(quantity);
  } 
  else{
    console.log("Inventory is full")
  }
 }
  addNewItem("watermelon", 11);
  addNewItem("kiwi",4)
  console.log(inventory);
  console.log(stock);


  //Question 2 Update the stock quantity of an existing item
function updateStock(item,newStock){
    let index = inventory.indexOf(item);
    let num = stock.indexOf(1)
    if(index !== 1 && num !== 1){
        console.log("Item is not found")
    }
    else{
        stock[1]+= newStock

        //stock.push(newStock += stock[1])

    }

}
(updateStock("banana",3))
console.log(stock[1])

// Question 3 calculate the total number of items in the inventory

function totalItems() {
    let total = 0;
    for (let i = 0; i < stock.length; i++) {
      total += stock[i];
    }
    return total;
  }
  
  console.log(totalItems())

  // find the item with the lowest stock quantity.
  function lowStock(){
        let lowest = stock[0];
        let index = 0;
        for(let i = 1; i < stock.length; i++){
            if(stock[i] < lowest){
                lowest = stock[i];
                index = i;
            }
        }
        return  inventory[index];
    }
    console.log(lowStock());
  
