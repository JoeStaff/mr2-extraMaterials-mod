import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////
  
  const modItem: modItemTemplate ={
    id: "zincOre",
    name: "Zinc Ore",
    description: "Ore. Needs to be processed to be able to actually utilize it.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Ore,
    basePrice: 62,
    lootPool: [
      {
        enemy:"goblin",
        amount: 1,
        chance: 0.1
      },
      {
        enemy:"goblinSharpshooter",
        amount: 1,
        chance: 0.1
      },
      {
        enemy:"goblinChief",
        amount: 2,
        chance: 1
      },
      {
        enemy:"goblinDoctor",
        amount: 2,
        chance: .2
      },
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 28,
    },
    craftingMaterials: {
      resources: {
        Mana: 450,
        EarthEssence: 20000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}