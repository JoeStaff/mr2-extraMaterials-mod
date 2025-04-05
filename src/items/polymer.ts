import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "polymer",
    name: "Polymer",
    description: "Polymer Plastic. A versatile material with immense uses, but not as strong as an alloy. Rare, given current technology.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 40500,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 40,
    },
    craftingMaterials:{
      resources: {
        Mana: 7000,
        EarthEssence: 1000000,
      },
      items: {
        "oil":6
      },
    }
  };
  addModItem(MR2,modItem);
}