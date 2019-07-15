import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CartItems from "./CartItems.jsx"
import CartTotal from "./CartTotal.jsx"

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: 'RAI357e',
      currentQty: 0,
      cartQty: 0,
      cartTotal: 0,
      testItem: {},
      //sample cart data for testing
      cart: [
        {
            "_id": "DQS532z",
            "name": "\"3 Pc 8\"\" Zombie Killer Ninja Kunai Tactical Throwing Knife Set w/ Sheath Combat\"",
            "price": 12.4,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKillerNinja/s-l1600.jpg",
            "seller": "hfisbburne0",
            "condition": "Good",
            "category": "Knives",
            "url": "https://www.ebay.com/itm/3-Pc-8-Zombie-Killer-Ninja-Kunai-Tactical-Throwing-Knife-Set-w-Sheath-Combat/271639148169?epid=872700958&hash=item3f3ef47689:g:ZZgAAOSwepZXSTQ4",
            qty: 2
        },
        {
            "_id": "CSB996n",
            "name": "\"3 Pc 8\"\" Zombie Killer Ninja Tactical Throwing Knife Set w/ Sheath Combat Kunai\"",
            "price": 9.95,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZKNTac/s-l1600.jpg",
            "seller": "mdraijer1",
            "condition": "Used",
            "category": "Throwing Knives",
            "url": "https://www.ebay.com/itm/3-Pc-8-Zombie-Killer-Ninja-Tactical-Throwing-Knife-Set-w-Sheath-Combat-Kunai/351495846564?epid=872700958&hash=item51d6c8faa4:g:ny8AAOSw4GVYRvwK",
            qty: 2
        },
        {
            "_id": "VXD297h",
            "name": "Z-HUNTER GREEN SKULL CAMO RESCUE KNIFE Spring Assisted Open Zombie Folding Blade",
            "price": 21.7,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZHunterGreen/s-l1600.jpg",
            "seller": "wciciari2",
            "condition": "New",
            "category": "Hunting Knives",
            "url": "https://www.ebay.com/itm/Z-HUNTER-GREEN-SKULL-CAMO-RESCUE-KNIFE-Spring-Assisted-Open-Zombie-Folding-Blade/171920678673?hash=item2807455f11:g:zmkAAOSwl5VbDMeL:sc:USPSFirstClass!78741!US!-1",
            qty: 1
        },
        {
            "_id": "TDW676m",
            "name": "\"ZOMBIE KATANA LIME GREEN 40.5\"\" SWORD By Frost Cutlery\"",
            "price": 40.13,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKatana/s-l1600.jpg",
            "seller": "rcaser3",
            "condition": "New",
            "category": "Swords/Knives",
            "url": "https://www.ebay.com/itm/ZOMBIE-KATANA-LIME-GREEN-40-5-SWORD-By-Frost-Cutlery/323770837344?hash=item4b623ee960:g:L6gAAOxyCTtTclOQ",
            qty: 1
        },
        {
            "_id": "WMX262p",
            "name": "\"27\"\" Ninja Sword Combat Machete Full Tang SURVIVAL TACTICAL Technicolor w/Sheath\"",
            "price": 174.65,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/27inNinja/s-l1600.jpg",
            "seller": "tbarclay4",
            "condition": "Used",
            "category": "Swords/Knives",
            "url": "https://www.ebay.com/itm/27-Ninja-Sword-Combat-Machete-Full-Tang-SURVIVAL-TACTICAL-Technicolor-w-Sheath/352408569946?hash=item520d30085a:m:myBUBP61zTrHJm1vFy5f3rw&var=621760532267",
            qty: 3
        },
        {
            "_id": "CKO986x",
            "name": "\"2 PACK COMBO 27.5\"\" LARGE BLOOD RAYNE NINJA VAMPIRE MACHETE SWORD BLADE KNIFE\"",
            "price": 96.35,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/bloodRayne/s-l1600.jpg",
            "seller": "esydes5",
            "condition": "New",
            "category": "Knives",
            "url": "https://www.ebay.com/itm/2-PACK-COMBO-27-5-LARGE-BLOOD-RAYNE-NINJA-VAMPIRE-MACHETE-SWORD-BLADE-KNIFE/121040911053?hash=item1c2e99bacd:g:vXAAAOxyqUpQ6CNm",
            qty: 5
        },
        {
            "_id": "VPX329p",
            "name": "Dark Salvation Fixed Blade Survival Outdoor Karambit Knife with Harness",
            "price": 10.99,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/s-l1600.jpg",
            "seller": "fsacase6",
            "condition": "Used",
            "category": "Knives",
            "url": "https://www.ebay.com/itm/Dark-Salvation-Fixed-Blade-Survival-Outdoor-Karambit-Knife-with-Harness/183863912384?epid=1778697949&hash=item2acf24a7c0:g:wRQAAOSwkNZUb6zF",
            qty: 1
        }]
    }

    this.getItem = this.getItem.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.totalCart = this.totalCart.bind(this)
  }

  //totals qty and prices of items in cart and updates them in state
  totalCart() {
    let total = 0
    let qty = 0
    for (let i=0; i<this.state.cart.length; i++) {
      total += this.state.cart[i].price * this.state.cart[i].qty
      qty += this.state.cart[i].qty
    }
    
    total = total.toFixed(2)

    this.setState({
      cartQty: qty,
      cartTotal: total
    })
  }

  addToCart(item) {
    let tempCart = this.state.cart
    let itemInd = undefined
    
    //search if item already exists in cart array and track index of if so
    for (let i=0; i<tempCart.length; i++) {
      if (item._id === tempCart[i]._id) {
        itemInd = i
      }
    }

    //add quantity if item already exists in cart, push item if it doesn't
    if (itemInd) {
      tempCart[itemInd].qty += item.qty
    } else {
      tempCart.push(item)
    }

    //set cart to new array and then run totalCart to update the totals
    this.setState({ cart: tempCart })
    this.totalCart()
  }

  getItem(id, cb) {
    axios.get(`/item:?id=${id}`)
    .then(data => {
      cb(null, data.data) 
      // this.setState({ testItem: data.data });
    });
  }

  componentDidMount() {
    //event listener for if an item is bought
    window.addEventListener('itemBought', event => {
      let getPromise = new Promise((resolve, reject) => {
        this.getItem(event.detail.id, (error, result) => {
          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        })
      })
  
      getPromise.then((item) => {
        let itemBought = item
        itemBought.qty = event.detail.qty
        this.addToCart(itemBought)
      })
    })
    
    //test event for testing functionality; will delete below once we've integrated services
    let event = {detail: {
      id: 'CKO986x',
      qty: 4
    }}

    new Promise((resolve, reject) => {
      this.getItem(event.detail.id, (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
    .then((item) => {
      let itemBought = item
      itemBought.qty = event.detail.qty
      this.addToCart(itemBought)
    })
    .catch(err => console.log('get error: ', err))
  }

  render() {
    return (
      <div className="cart">
        <CartItems
          cart={this.state.cart}
          cartQty={this.state.cartQty}
          cartTotal={this.state.cartTotal}
        />
        <CartTotal
          cartTotal={this.state.cartTotal}
          cartQty={this.state.cartQty}
        />
      </div>
    );
  }
}