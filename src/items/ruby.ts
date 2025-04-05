import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "ruby",
    name: "Ruby",
    description: "Ruby gem. A beautiful red colored gem.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 20500,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 45,
    },
    craftingMaterials:{
      resources: {
        Mana: 3000,
        EarthEssence: 2500000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}