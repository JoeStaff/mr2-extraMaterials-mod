import { MR2Globals } from "magic-research-2-modding-sdk";
//Ore
import { modItem as zincOre } from "./items/zincOre";
import { modItem as ironOre } from "./items/ironOre";
import { modItem as tinOre } from "./items/tinOre";
import { modItem as bauxite } from "./items/bauxite";
import { modItem as titaniumOre } from "./items/titaniumOre";
//Ingots
import { modItem as zincIngot } from "./items/zincIngot";
import { modItem as ironIngot } from "./items/ironIngot";
import { modItem as tinIngot } from "./items/tinIngot";
import { modItem as aluminumIngot } from "./items/aluminumIngot";
import { modItem as titaniumIngot } from "./items/titaniumIngot";
//Alloys
import { modItem as bronzeIngot } from "./items/bronzeIngot";
import { modItem as brassIngot } from "./items/brassIngot";
//Chemicals
import { modItem as oil } from "./items/oil";
import { modItem as polymer } from "./items/polymer";
import { modItem as resin } from "./items/resin";
//Gems
import { modItem as quartz } from "./items/quartz";
import { modItem as sapphire } from "./items/sapphire";
import { modItem as ruby } from "./items/ruby";
import { modItem as emerald } from "./items/emerald";
import { modItem as diamond } from "./items/diamond";
//Other
import { modItem as pearl } from "./items/pearl";
import { modItem as glass } from "./items/glass";
import { modItem as sulfur } from "./items/sulfur";
import { modItem as saltPeter } from "./items/saltPeter";
import { modItem as charcoal } from "./items/charcoal";
import { modItem as gunPowder } from "./items/gunPowder";
import { modItem as wood } from "./items/wood";
import { modItem as fiberglass } from "./items/fiberglass";
import { modItem as carbonFiber } from "./items/carbonFiber";

const PACKAGE = require("../package.json");

export function load(MR2: MR2Globals) {
  //Enemy ID finder, case sensitive
  // MR2.Enemies.getAll().forEach(enemy => {
  //   if(enemy.getName().includes("mp"))
  //     MR2.alert(enemy.getName()+' '+enemy.getId());
  // })

  zincOre(MR2);
  ironOre(MR2);
  tinOre(MR2);
  bauxite(MR2);
  titaniumOre(MR2);

  zincIngot(MR2);
  ironIngot(MR2);
  tinIngot(MR2);
  aluminumIngot(MR2);
  titaniumIngot(MR2);

  bronzeIngot(MR2);
  brassIngot(MR2);
  
  oil(MR2);
  polymer(MR2);
  resin(MR2);
  
  quartz(MR2);
  sapphire(MR2);
  ruby(MR2);
  emerald(MR2);
  diamond(MR2);

  pearl(MR2);
  glass(MR2);
  sulfur(MR2);
  saltPeter(MR2);
  charcoal(MR2);
  gunPowder(MR2);
  wood(MR2);
  fiberglass(MR2);
  carbonFiber(MR2);

  // let itemInfo="";
  // MR2.Items.getAll().forEach(item => {
  //   const params=item.getDefaultParams();
  //   if(item.getBaseName(params).includes("Ore")){ //Filter
  //     const spell = MR2.getTransmutationSpellForItem(item);
  //     itemInfo+=
  //       "Name: "+item.getBaseName(params)+'|'+
  //       "ID: "+item.getId()+'|'+
  //       "Price: "+item.getBaseSalePrice(null,params).toString()+'|'+
  //       "Tags: "+item.getTags().join(",")+'|'+
  //       "TransCat: "+spell?.getTransmutationCategory()+'|'+
  //       "LvReq: "+JSON.stringify(spell?.getLevelRequirements())+'\n';
  //   }
  // });
  // MR2.alert("Items",itemInfo);
}

export const id = PACKAGE.name;
export const name = PACKAGE.description;
export const version = PACKAGE.version;
export const description =
  "A mod that introduces more materials for use by other mods.";
