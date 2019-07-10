import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import CartItems from "./CartItems.js"

export default class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItem: '',
      currentQty: 0,
      cartQty: 7,
      cartTotal: 0,
      cart: [
        {  
            "_id": "DQS532z",
            "name": "\"3 Pc 8\"\" Zombie Killer Ninja Kunai Tactical Throwing Knife Set w/ Sheath Combat\"",
            "price": 12.4,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKillerNinja/s-l1600.jpg",
            "image2": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKillerNinja/s-l1600+(1).jpg",
            "image3": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKillerNinja/s-l1600+(2).jpg",
            "image4": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKillerNinja/s-l1600+(3).jpg",
            "condition": "Good",
            "category": "Knives"
        },
        {
            "_id": "CSB996n",
            "name": "\"3 Pc 8\"\" Zombie Killer Ninja Tactical Throwing Knife Set w/ Sheath Combat Kunai\"",
            "price": 9.95,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZKNTac/s-l1600.jpg",
            "image2": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZKNTac/s-l1600+(1).jpg",
            "image3": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZKNTac/s-l1600+(2).jpg",
            "image4": "",
            "condition": "Used",
            "category": "Throwing Knives"
        },
        {
            "_id": "VXD297h",
            "name": "Z-HUNTER GREEN SKULL CAMO RESCUE KNIFE Spring Assisted Open Zombie Folding Blade",
            "price": 21.7,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZHunterGreen/s-l1600.jpg",
            "image2": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZHunterGreen/s-l1600+(1).jpg",
            "image3": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZHunterGreen/s-l1600+(2).jpg",
            "image4": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZHunterGreen/s-l1600+(3).jpg",
            "condition": "New",
            "category": "Hunting Knives"
        },
        {
            "_id": "TDW676m",
            "name": "\"ZOMBIE KATANA LIME GREEN 40.5\"\" SWORD By Frost Cutlery\"",
            "price": 40.13,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKatana/s-l1600.jpg",
            "image2": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKatana/s-l1600+(1).jpg",
            "image3": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKatana/s-l1600+(2).jpg",
            "image4": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/ZombieKatana/s-l500.jpg",
            "condition": "New",
            "category": "Swords/Knives"
        },
        {
            "_id": "WMX262p",
            "name": "\"27\"\" Ninja Sword Combat Machete Full Tang SURVIVAL TACTICAL Technicolor w/Sheath\"",
            "price": 174.65,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/27inNinja/s-l1600.jpg",
            "image2": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/27inNinja/s-l1600+(1).jpg",
            "image3": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/27inNinja/s-l1600+(2).jpg",
            "image4": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/27inNinja/s-l1600+(3).jpg",
            "condition": "Used",
            "category": "Swords/Knives"
        },
        {
            "_id": "CKO986x",
            "name": "\"2 PACK COMBO 27.5\"\" LARGE BLOOD RAYNE NINJA VAMPIRE MACHETE SWORD BLADE KNIFE\"",
            "price": 96.35,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/bloodRayne/s-l1600.jpg",
            "image2": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/bloodRayne/s-l1600+(1).jpg",
            "image3": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/bloodRayne/s-l1600+(2).jpg",
            "image4": "",
            "condition": "New",
            "category": "Knives"
        },
        {
            "_id": "VPX329p",
            "name": "Dark Salvation Fixed Blade Survival Outdoor Karambit Knife with Harness",
            "price": 10.99,
            "image1": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/s-l1600.jpg",
            "image2": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/s-l1600(2).jpg",
            "image3": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/s-l1600+(3).jpg",
            "image4": "https://zbay-fec-hratx-42.s3.us-east-2.amazonaws.com/knives/s-l1600+(1).jpg",
            "condition": "Used",
            "category": "Knives"
        }]
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Shopping Cart!!!! x2
        <CartItems
          cart={this.state.cart}
          cartQty={this.state.cartQty}
        />
      </div>
    );
  }
}