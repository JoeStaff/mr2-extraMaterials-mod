import { MR2Globals } from "magic-research-2-modding-sdk";
import { modItem as zincOre } from "./items/zincOre";
import { modItem as zincIngot } from "./items/zincIngot";
import { modItem as bronzeIngot } from "./items/bronzeIngot";
import { modItem as sulfur } from "./items/sulfur";
import { modItem as saltPeter } from "./items/saltPeter";
import { modItem as gunPowder } from "./items/gunPowder";
import { modItem as charcoal } from "./items/charcoal";

const PACKAGE = require("../package.json");

export interface modItemDrop {
  enemy: string;
  chance: number;
  amount: number;
}

export function load(MR2: MR2Globals) {
  zincOre(MR2);
  zincIngot(MR2);
  bronzeIngot(MR2);
  charcoal(MR2);
  sulfur(MR2);
  saltPeter(MR2);
  gunPowder(MR2);
}

export const id = PACKAGE.name;
export const name = PACKAGE.description;
export const version = PACKAGE.version;
export const description =
  "A mod that introduces more materials for use by other mods.";
