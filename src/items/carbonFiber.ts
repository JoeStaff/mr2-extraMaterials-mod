import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "carbonFiber",
    name: "Carbon Fiber",
    description: "A lightweight and extremely durable material, like hardened fiberglass. Rare, given current technology.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 200000,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 55,
    },
    craftingMaterials:{
      resources: {
        Mana: 7500,
        EarthEssence: 30000000,
      },
      items: {
        "charcoal":6,
        "resin":1
      },
    }
  };
  addModItem(MR2,modItem);
}