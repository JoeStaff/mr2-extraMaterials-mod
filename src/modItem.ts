import { MR2Globals } from "magic-research-2-modding-sdk";
import { EnemyLoot } from "magic-research-2-modding-sdk/modding-decs/backend/exploration/enemies/Enemy";
import { GameState } from "magic-research-2-modding-sdk/modding-decs/backend/GameState";
import { Item, ItemParams } from "magic-research-2-modding-sdk/modding-decs/backend/items/Item";
import { TransmutationCategory } from "magic-research-2-modding-sdk/modding-decs/backend/items/ItemTagEnum";
import { Resource } from "magic-research-2-modding-sdk/modding-decs/backend/Resources";
import { SpellElement, SpellElementType } from "magic-research-2-modding-sdk/modding-decs/backend/spells/Elements";

////////////////////////////////
// Borrowing these 2 enums    //
// from the base game because //
// they do not exist in MR2.  //
////////////////////////////////

export enum ItemTagEnum {
  Consumable = "Consumable",
  Familiar = "Familiar",
  Material = "Material",
  Equipment = "Equipment",
  Hand = "Hand",
  Body = "Body",
  Accessory = "Accessory",
  Pouch = "Pouch",
  QuestItem = "QuestItem"
}
export enum NewTransmutationCategory {
  EnhancementMaterial = "EnhancementMaterial",
  ElementalGem = "ElementalGem",
  Ore = "Ore",
  Ingot = "Ingot",
  Other = "Other" //This is new (doesn't help really)
}

////////////////////////////////

export interface modItemDrop {
  enemy: string;
  chance: number;
  amount: number;
}
export interface modItemTemplate {
  id: string;
  name: string;
  description: string;
  tags: ItemTagEnum[];
  category: string;
  basePrice: number;
  lootPool: modItemDrop[];
  canTransmute: boolean;
  element: SpellElementType;
  levelRequirement: Partial<Record<SpellElement, number>>;
  craftingMaterials: {
    resources: Partial<Record<Resource, number>>;
    items: Record<string, number>;
  };
}

export function addModItem(MR2: MR2Globals, modItem: modItemTemplate) {

  modItem.lootPool.forEach(table => {
    const originalFunction=MR2.Enemies.getById(table.enemy).getItemsAwardedBase;
    MR2.Enemies.getById(table.enemy).getItemsAwardedBase=(state:GameState)=>{
      const loot = originalFunction.call(this,state);
      const newItem: EnemyLoot ={
        itemId: modItem.id,
        amount: table.amount,
        chance: table.chance,
      };
      if(!loot.some(loot => loot.itemId === newItem.itemId))
        loot.push(newItem);
      return loot;
    };
  });

  class modItemClass extends (MR2.Item) {
    getId(): string {
      return modItem.id;
    }
    getTags(): ItemTagEnum[] {
      return modItem.tags;
    }
    getPicture() {
      return require("./images/"+modItem.id+".png");
    }
    getBaseName(params: ItemParams): string {
      return modItem.name;
    }
    getDescription(state: GameState, params: ItemParams): string | undefined {
      return modItem.description;
    }
    getEffect(state: GameState, params: ItemParams): string | undefined {
      return undefined;
    }
    getBaseSalePrice(state: GameState, params: ItemParams): number {
      return modItem.basePrice;
    }
  }
  const modItemSingleton=new modItemClass();

  class TransmuteModItem extends (MR2.TransmutationSpell) {
    getItem(): Item {
      return modItemSingleton;
    }
    getCraftingElementLevelRequirements(): Partial<Record<SpellElement, number>> {
      return modItem.levelRequirement??0;
    }
    getCraftingMaterialsBase(state: GameState): {
      resources: Partial<Record<Resource, number>>;
      items: Record<string, number>;
    } {
      return modItem.craftingMaterials??{};
    }
    getElement(): SpellElementType {
      return modItem.element??"";
    }
    getTransmutationCategory(): TransmutationCategory {
      return modItem.category as TransmutationCategory;
    }
  }
  if(modItem.canTransmute){
    const modItemSpell=new TransmuteModItem();
    MR2.registerTransmutationSpellAndItem(modItemSpell);
  }
}