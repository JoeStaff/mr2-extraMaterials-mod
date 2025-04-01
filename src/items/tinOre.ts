import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////
  
  const modItem: modItemTemplate ={
    id: "tinOre",
    name: "Tin Ore",
    description: "Ore. Needs to be processed to be able to actually utilize it.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Ore,
    basePrice: 70,
    lootPool: [
      {
        enemy:"goblinDoctor",
        amount: 1,
        chance: 0.1
      },
      {
        enemy:"sewerFish",
        amount: 1,
        chance: 0.1
      },
      {
        enemy:"desertPredator",
        amount: 2,
        chance: .2
      },
      {
        enemy:"scarab",
        amount: 2,
        chance: .2
      },
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 30,
    },
    craftingMaterials: {
      resources: {
        Mana: 475,
        EarthEssence: 22000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}