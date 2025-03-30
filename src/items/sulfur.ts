import { MR2Globals } from "magic-research-2-modding-sdk";
import { EnemyLoot } from "magic-research-2-modding-sdk/modding-decs/backend/exploration/enemies/Enemy";
import { GameState } from "magic-research-2-modding-sdk/modding-decs/backend/GameState";
import { Item, ItemParams } from "magic-research-2-modding-sdk/modding-decs/backend/items/Item";
import { ItemTagEnum, TransmutationCategory } from "magic-research-2-modding-sdk/modding-decs/backend/items/ItemTagEnum";
import { Resource } from "magic-research-2-modding-sdk/modding-decs/backend/Resources";
import { SpellElement, SpellElementType } from "magic-research-2-modding-sdk/modding-decs/backend/spells/Elements";
import { modItemDrop } from "../extraMaterialsMod";

export function modItem(MR2: MR2Globals) {

  ////////////////////////////
  //      Item Template     //
  //  Update the following  //
  //  'modItem' variables.  //
  ////////////////////////////

  const modItemId="sulfur";
  const modItemName="Sulfur";
  const modItemDesc="A small pile of sulfer. A naturally volcanic element most commonly identified from its smell.";
  const modItemTemplate="venomPowder";
  const modItemCategory="EnhancementMaterial";
  const modItemBasePrice=250;
  const modItemElement=MR2.SpellElement.Fire;

  const modItemLvlReq={
    Fire: 28,
    Earth: 28,
  };
  const modItemReq={
    resources: {
      Mana: 1500,
      FireEssence: 25000,
      EarthEssence: 25000,
    },
    items: {},
  };

  const modItemDropTable: modItemDrop[]=[
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
  ];

  modItemDropTable.forEach(table => {
    const originalFunction=MR2.Enemies.getById(table.enemy).getItemsAwardedBase;
    MR2.Enemies.getById(table.enemy).getItemsAwardedBase=(state:GameState)=>{
      const loot = originalFunction.call(this,state);
      const newItem: EnemyLoot ={
        itemId: modItemId,
        amount: table.amount,
        chance: table.chance,
      };
      if(!loot.some(loot => loot.itemId === newItem.itemId))
        loot.push(newItem);
      return loot;
    };
  });

  class modItem extends (MR2.Item) {
    getId(): string {
      return modItemId;
    }
    getTags(): ItemTagEnum[] {
      return MR2.Items.getById(modItemTemplate).getTags();
    }
    getPicture() {
      return require("../images/"+modItemId+".png");
    }
    getBaseName(params: ItemParams): string {
      return modItemName;
    }
    getDescription(state: GameState, params: ItemParams): string | undefined {
      return modItemDesc;
    }
    getEffect(state: GameState, params: ItemParams): string | undefined {
      return undefined;
    }
    getBaseSalePrice(state: GameState, params: ItemParams): number {
      return modItemBasePrice;
    }
    getTransmutationCategory(): TransmutationCategory {
      return modItemCategory;
    }
  }
  const modItemSingleton=new modItem();

  class TransmuteModItem extends (MR2.TransmutationSpell) {
    getItem(): Item {
      return modItemSingleton;
    }
    getCraftingElementLevelRequirements(): Partial<Record<SpellElement, number>> {
      return modItemLvlReq;
    }
    getCraftingMaterialsBase(state: GameState): {
      resources: Partial<Record<Resource, number>>;
      items: Record<string, number>;
    } {
      return modItemReq;
    }
    getElement(): SpellElementType {
      return modItemElement;
    }
  }
  const modItemSpell=new TransmuteModItem();
  MR2.registerTransmutationSpellAndItem(modItemSpell);
}