//regualar -10 percent
//premium - 20 percent
// gold - 30 percent


// class Discount {
//   giveDiscount(customerType: "premium" | "regular"): number{
//     if (customerType == "regular") {
//       return 10;
//     } else if (customerType == "premium") {
//       return 20
//     } else {
//       return 10;
//     }
//   }
// }

interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpents: number):number

}


class RegualrCustomer implements Customer {
  addLoyaltyPoints(amountSpents: number): number {
    return amountSpents
  }
  giveDiscount(): number {
    return 10;
  }
}
class PremiumCustomer implements Customer {
  addLoyaltyPoints(amountSpents: number): number {
    return amountSpents * 2;
  }
  giveDiscount(): number {
    return 20;
  }
}
class GoldCustomer implements Customer {
  addLoyaltyPoints(amountSpents: number): number {
    return amountSpents * 3;
  }
  giveDiscount(): number {
    return 30;
  }
}



class Discount {
  giveDiscount(customer :Customer) {
    return customer.giveDiscount();
  }
}


let premiumCustomer: PremiumCustomer = new PremiumCustomer();
let goldCustomer: GoldCustomer = new GoldCustomer();
let discount: Discount = new Discount();
discount.giveDiscount(premiumCustomer)
discount.giveDiscount(goldCustomer)

