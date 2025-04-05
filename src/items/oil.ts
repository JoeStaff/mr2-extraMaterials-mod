import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "oil",
    name: "Oil",
    description: "Crude oil. Composed mostly of hydrocarbons, a base for several difference chemical compounds.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 6500,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 33,
    },
    craftingMaterials:{
      resources: {
        Mana: 3000,
        EarthEssence: 250000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}