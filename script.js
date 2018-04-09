class Pizza {
    constructor(topping = 'cheese',top2 = undefined,top3 = undefined,top4 = undefined) {
    this.topping = topping;
    this.top2 = top2;
    this.top3 = top3;
    this.top4 = top4;
    }
    totalCost() {
        let cost = 10;
        if (this.top4 !== undefined) {
            cost += 2.97;
            return cost;
        } else if ( this.top3 !== undefined ){
            cost += 1.98;
            return cost;
        }else if( this.top2 !== undefined) {
            cost += 0.99;
            return cost;
        }else{
            return cost;

        }
    }
}

class Order extends Pizza {
    constructor(newPizza1, newPizza2 = undefined, newPizza3 = undefined, newPizza4 = undefined){
        super();
        this.newPizza1 = newPizza1;
        this.newPizza2 = newPizza2;
        this.newPizza3 = newPizza3;
        this.newPizza4 = newPizza4;
        
    }
    totalOrderCost(){
        let cost = 0;
        console.log(this.newPizza1.totalCost());

        if (this.newPizza4 !== undefined) {
            cost += (this.newPizza1.totalCost() + this.newPizza2.totalCost() + this.newPizza3.totalCost() + this.newPizza4.totalCost());
            return cost.toFixed(2);
        } else if (this.newPizza3 !== undefined){
            cost += (this.newPizza1.totalCost() + this.newPizza2.totalCost() + this.newPizza3.totalCost());
            return cost.toFixed(2);
        } else if (this.newPizza2 !== undefined){
            cost += (this.newPizza1.totalCost() + this.newPizza2.totalCost());
            return cost.toFixed(2);
        }else{
            cost += this.newPizza1.totalCost();
            return cost.toFixed(2);
        }
        
    }
}
let newPizza = new Pizza ('cheese','pepperoni','test');
console.log('Pizza cost: ', newPizza.totalCost());

let newerPizza = new Pizza ('cheese','peppers','onion','cheese');

let newOrder = new Order (newPizza,newerPizza);
console.log('Order Cost',newOrder.totalOrderCost());
