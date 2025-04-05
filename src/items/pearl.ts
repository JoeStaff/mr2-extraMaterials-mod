import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "pearl",
    name: "Pearl",
    description: "Pearl. A piece of dust that has collected clam mucus over a long period of time.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 6500,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Water,
    levelRequirement: {
      Water: 33,
    },
    craftingMaterials:{
      resources: {
        Mana: 1000,
        WaterEssence: 25000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}