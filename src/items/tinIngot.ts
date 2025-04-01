import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "tinIngot",
    name: "Tin Ingot",
    description: "Processed Tin Ore. Soft and malleable, great for making food-safe products.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Ingot,
    basePrice: 570,
    lootPool: [],
    canTransmute: true,
    element: MR2.SpellElement.Fire,
    levelRequirement: {
      Fire: 16,
    },
    craftingMaterials:{
      resources: {
        Mana: 380,
        FireEssence: 15750,
      },
      items: {
        "tinOre":6
      },
    }
  };
  addModItem(MR2,modItem);
}