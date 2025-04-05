import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "fiberglass",
    name: "Fiberglass",
    description: "Fiberglass. Light weight and sturdy. Rare, given current technology.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 150000,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 50,
    },
    craftingMaterials:{
      resources: {
        Mana: 7000,
        EarthEssence: 10000000,
      },
      items: {
        "glass":6,
        "resin":1
      },
    }
  };
  addModItem(MR2,modItem);
}