import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "zincIngot",
    name: "Zinc Ingot",
    description: "Processed Zinc Ore. Probably not best used for equipment in this state.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Ingot,
    basePrice: 550,
    lootPool: [
      {
        enemy:"goblinChief",
        amount: 1,
        chance: 1
      }
    ],
    canTransmute: true,
    element: MR2.SpellElement.Fire,
    levelRequirement: {
      Fire: 14,
    },
    craftingMaterials:{
      resources: {
        Mana: 375,
        FireEssence: 13750,
      },
      items: {
        "zincOre":6
      },
    }
  };
  addModItem(MR2,modItem);
}