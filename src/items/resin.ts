import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "resin",
    name: "Resin",
    description: "Resin. Starts as a liquid and hardens to a durable material. Rare, given current technology.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 100000,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 45,
    },
    craftingMaterials:{
      resources: {
        Mana: 7000,
        EarthEssence: 6000000,
      },
      items: {
        "polymer":6
      },
    }
  };
  addModItem(MR2,modItem);
}