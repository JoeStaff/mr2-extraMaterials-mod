import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "diamond",
    name: "Diamond",
    description: "Diamond gem. A beautiful clear gem.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 80000,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 55,
    },
    craftingMaterials:{
      resources: {
        Mana: 5000,
        EarthEssence: 25000000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}