import { MR2Globals } from "magic-research-2-modding-sdk";
import { zincOre } from "./items/zincOre";

const PACKAGE = require("../package.json");

export function load(MR2: MR2Globals) {
  zincOre(MR2);
}

export const id = PACKAGE.name;
export const name = PACKAGE.description;
export const version = PACKAGE.version;
export const description =
  "A mod that introduces more materials for use by other mods.";
