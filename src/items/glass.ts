import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "glass",
    name: "Glass",
    description: "Glass. Commonly used for windows or fake jewelry.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 15000,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 20,
      Fire: 10,
    },
    craftingMaterials:{
      resources: {
        Mana: 500,
        EarthEssence: 20000,
        FireEssence: 10000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}