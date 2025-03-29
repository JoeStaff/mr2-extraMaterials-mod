import { MR2Globals } from "magic-research-2-modding-sdk";
import { GameState } from "magic-research-2-modding-sdk/modding-decs/backend/GameState";
import { Item, ItemParams } from "magic-research-2-modding-sdk/modding-decs/backend/items/Item";
import { ItemTagEnum, TransmutationCategory } from "magic-research-2-modding-sdk/modding-decs/backend/items/ItemTagEnum";
import { Resource } from "magic-research-2-modding-sdk/modding-decs/backend/Resources";
import { SpellElement, SpellElementType } from "magic-research-2-modding-sdk/modding-decs/backend/spells/Elements";

export function zincOre(MR2: MR2Globals) {
  class zincOre extends (MR2.Item) {
    getId(): string {
      return "zincOre";
    }
    getTags(): ItemTagEnum[] {
      return MR2.Items.getById("copperOre").getTags();
    }
    getPicture() {
      return require("../images/zincOre.png");
    }
    getBaseName(params: ItemParams): string {
      return "Zinc Ore";
    }
    getDescription(state: GameState, params: ItemParams): string | undefined {
      return "Ore. Needs to be processed to be able to actually utilize it.";
    }
    getEffect(state: GameState, params: ItemParams): string | undefined {
      return undefined;
    }
    getBaseSalePrice(state: GameState, params: ItemParams): number {
      return 62;
    }
  }
  const zincOreItem=new zincOre();

  class TransmuteZincOre extends (MR2.TransmutationSpell) {
    getItem(): Item {
      return zincOreItem;
    }
    getCraftingElementLevelRequirements(): Partial<Record<SpellElement, number>> {
      return {
        Earth: 28,
      };
    }
    getCraftingMaterialsBase(state: GameState): {
      resources: Partial<Record<Resource, number>>;
      items: Record<string, number>;
    } {
      return {
        resources: {
          Mana: 450,
          EarthEssence: 20000,
        },
        items: {},
      };
    }
    getElement(): SpellElementType {
      return MR2.SpellElement.Earth;
    }
  }
  const zincOreSpell=new TransmuteZincOre();
  MR2.registerTransmutationSpellAndItem(zincOreSpell);
}