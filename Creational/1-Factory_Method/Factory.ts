// I want to make a resturant that sells fast food
// resturant have orders [meals, drinks, salads], combos

export interface Order {
  printOrder(): void;
}

export class Meals implements Order {
  printOrder(): void {
    console.log("Meals order");
  }
}

export class Drinks implements Order {
  printOrder(): void {
    console.log("Drinks order");
  }
}

export class Salad implements Order {
  printOrder(): void {
    console.log("Salad order");
  }
}

export interface OrderFactory {
  createOrder(): Order;
}

export class MealsFactory implements OrderFactory {
  createOrder(): Order {
    return new Meals();
  }
}

export class DrinksFactory implements OrderFactory {
  createOrder(): Order {
    return new Drinks();
  }
}

export class SaladFactory implements OrderFactory {
  createOrder(): Order {
    return new Salad();
  }
}

export abstract class Combo {
  protected orders: Array<Order>;
  constructor() {
    this.orders = [];
  }
  printCombo(): void {
    for (let i = 0; i < this.orders.length; i++) {
      this.orders[i].printOrder();
    }
  }
}

export class Lite extends Combo {
  constructor() {
    super();
    this.orders.push(new Meals());
    this.orders.push(new Salad());
  }
}

export class Heavy extends Combo {
  constructor() {
    super();
    this.orders.push(new Meals());
    this.orders.push(new Salad());
    this.orders.push(new Drinks());
  }
}
export interface ComboFactory {
  createCombo(): Combo;
}

export class LiteFactory implements ComboFactory {
  createCombo(): Combo {
    return new Lite();
  }
}

export class HeavyFactory implements ComboFactory {
  createCombo(): Combo {
    return new Heavy();
  }
}
