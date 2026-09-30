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

}


class RegualrCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}
class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}
class GoldCustomer implements Customer {
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
let discount: Discount = new Discount();
discount.giveDiscount(premiumCustomer)
