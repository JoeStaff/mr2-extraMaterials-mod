import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate = {
    id: "brassIngot",
    name: "Brass Ingot",
    description: "An ingot of brass alloy. Famously used for hard and corrosive resistant armor and weapons.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Ingot,
    basePrice: 800,
    lootPool: [
      {
        enemy:"sphinxProtector",
        amount: 1,
        chance: 0.1,
      }
    ],
    canTransmute: true,
    element: MR2.SpellElement.Fire,
    levelRequirement: {
      Fire: 18,
    },
    craftingMaterials: {
      resources: {
        Mana: 500,
        FireEssence: 20000,
      },
      items: {
        "zincIngot":1,
        "copperIngot":1,
      },
    }
  };
  addModItem(MR2, modItem);
}