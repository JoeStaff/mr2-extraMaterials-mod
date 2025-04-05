import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////
  
  const modItem: modItemTemplate ={
    id: "titaniumOre",
    name: "Titanium Ore",
    description: "Ore. Needs to be processed to be able to actually utilize it.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Ore,
    basePrice: 4250,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 65,
    },
    craftingMaterials: {
      resources: {
        Mana: 23000,
        EarthEssence: 7500000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}