import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "aluminumIngot",
    name: "Aluminum Ingot",
    description: "Processed Bauxite. An abundant material useful for typical tools.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Ingot,
    basePrice: 6500,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Fire,
    levelRequirement: {
      Fire: 33,
    },
    craftingMaterials:{
      resources: {
        Mana: 3000,
        FireEssence: 250000,
      },
      items: {
        "bauxite":6
      },
    }
  };
  addModItem(MR2,modItem);
}