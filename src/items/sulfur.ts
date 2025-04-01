import { MR2Globals } from "magic-research-2-modding-sdk";
import { addModItem, modItemTemplate, ItemTagEnum, NewTransmutationCategory as TransmutationCategory } from "../modItem";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItem: modItemTemplate = {
    id: "sulfur",
    name: "Sulfur",
    description: "A small pile of sulfer. A naturally volcanic element most commonly identified from its smell.",
    tags: [ItemTagEnum.Material],
    category: TransmutationCategory.Other,
    basePrice: 250,
    lootPool: [
      {
        enemy:"blazingTurtle",
        amount:1,
        chance:1
      },
      {
        enemy:"Mummy",
        amount:2,
        chance:0.1
      },
      {
        enemy:"psionCobra",
        amount:2,
        chance:0.1
      },
      {
        enemy:"sphinxProtector",
        amount:2,
        chance:0.1
      },
      {
        enemy:"mummyLord",
        amount:2,
        chance:0.1
      },
      {
        enemy:"flamingbones",
        amount:3,
        chance:1
      },
    ],
    canTransmute: true,
    element: MR2.SpellElement.Fire,
    levelRequirement: {
      Fire: 28,
      Earth: 28,
    },
    craftingMaterials: {
      resources: {
        Mana: 1500,
        FireEssence: 25000,
        EarthEssence: 25000,
      },
      items: {},
    }
  };
  addModItem(MR2, modItem);
}