import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate ={
    id: "quartz",
    name: "Quartz",
    description: "A hunk of quartz. A very common crystalline material, is an example of a piezo electric.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 6500,
    lootPool: [
    ],
    canTransmute: true,
    element: MR2.SpellElement.Earth,
    levelRequirement: {
      Earth: 33,
    },
    craftingMaterials:{
      resources: {
        Mana: 1000,
        EarthEssence: 25000,
      },
      items: {},
    }
  };
  addModItem(MR2,modItem);
}