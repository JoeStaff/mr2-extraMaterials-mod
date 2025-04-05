import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate = {
    id: "charcoal",
    name: "Charcoal",
    description: "A chunk of charcoal. Typically made from burning wood.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 250,
    lootPool: [
      {
        enemy:"blazingTurtle",
        amount: 1,
        chance: 1,
      },
      {
        enemy:"goblin",
        amount: 1,
        chance: 0.05,
      },
      {
        enemy:"needler",
        amount: 3,
        chance: 0.1,
      },
      {
        enemy:"thrivingNeedler",
        amount: 5,
        chance: 1,
      },
    ],
    canTransmute: true,
    element: MR2.SpellElement.Fire,
    levelRequirement: {
      Fire: 12,
      Earth: 12,
    },
    craftingMaterials: {
      resources: {
        Mana: 600,
        FireEssence: 3000,
        EarthEssence: 3000,
      },
      items: {
        "wood":1
      },
    }
  };
  addModItem(MR2, modItem);
}