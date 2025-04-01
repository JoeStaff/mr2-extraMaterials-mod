import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate = {
    id: "gunPowder",
    name: "Gun Powder",
    description: "A small pile of gun powder. The earliest known chemical explosive.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 10000,
    lootPool: [
      {
        enemy:"imp",
        amount:2,
        chance:.05
      },
      {
        enemy:"hellhound",
        amount:2,
        chance:0.1
      },
      {
        enemy:"undeadWizard",
        amount:2,
        chance:0.25
      },
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 55,
    },
    craftingMaterials: {
      resources: {
        Mana: 2000,
        EarthEssence: 1000000,
      },
      items: {
        "saltPeter":15,
        "charcoal":3,
        "sulfur":2
      },
    }
  };
  addModItem(MR2, modItem);
}