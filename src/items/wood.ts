import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate = {
    id: "wood",
    name: "Wood",
    description: "A piece of wood. Primitive building material",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 100,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Fire,
    levelRequirement: {
      Earth: 6,
    },
    craftingMaterials: {
      resources: {
        Mana: 200,
        EarthEssence: 1000,
      },
      items: {
      },
    }
  };
  addModItem(MR2, modItem);
}