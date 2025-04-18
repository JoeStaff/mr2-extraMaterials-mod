import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate = {
    id: "saltPeter",
    name: "Salt Peter",
    description: "A small pile of salt peter. Made of potassium nitrate, salt peter has a wide range of uses from medicine to oxidizers.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 350,
    lootPool: [
      {
        enemy:"sandDweller",
        amount:2,
        chance:1
      },
      {
        enemy:"crystalCanine",
        amount:2,
        chance:0.1
      },
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 45,
    },
    craftingMaterials: {
      resources: {
        Mana: 1000,
        EarthEssence: 45000,
      },
      items: {
      },
    }
  };
  addModItem(MR2, modItem);
}