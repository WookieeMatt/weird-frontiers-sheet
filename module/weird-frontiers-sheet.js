/* global Actors */

import * as BedlamiteSheets from './actor-sheets-bedlamite.js';
import * as GamblerSheets from './actor-sheets-gambler.js';
import * as GunslingerSheets from './actor-sheets-gunslinger.js';
import * as SentinelSheets from './actor-sheets-sentinel.js';
import * as ShamanSheets from './actor-sheets-shaman.js';
import * as CalaveraSheets from './actor-sheets-calavera.js';
import * as PlantientSheets from './actor-sheets-plantient.js';

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once('init', async function () {
  console.log(`DCC | Initializing Dungeon Crawl Classics System`)

  // Register sheet application classes
  Actors.registerSheet('wf-bedlamite', BedlamiteSheets.ActorSheetBedlamite, { types: ['Player'], label: 'bedlamite.ActorSheetBedlamite' })
  Actors.registerSheet('wf-calavera', CalaveraSheets.ActorSheetCalavera, { types: ['Player'], label: 'calavera.ActorSheetCalavera' })    
  Actors.registerSheet('wf-gambler', GamblerSheets.ActorSheetGambler, { types: ['Player'], label: 'gambler.ActorSheetGambler' })
  Actors.registerSheet('wf-gunslinger', GunslingerSheets.ActorSheetGunslinger, { types: ['Player'], label: 'gunslinger.ActorSheetGunslinger'})
  Actors.registerSheet('mcc-sentinel', SentinelSheets.ActorSheetSentinel, { types: ['Player'], label: 'sentinel.ActorSheetSentinel' })
  Actors.registerSheet('mcc-shaman', ShamanSheets.ActorSheetShaman, { types: ['Player'], label: 'shaman.ActorSheetShaman' })
  Actors.registerSheet('mcc-plantient', PlantientSheets.ActorSheetPlantient, { types: ['Player'], label: 'plantient.ActorSheetPlantient' })  
   
  // Register shared template for MCC characters
  const templatePaths = [
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-common.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-equipment.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-mcc-header.html',
	'modules/weird-frontiers-sheet/templates/actor-partial-mutations.html',
	'modules/weird-frontiers-sheet/templates/actor-partial-shaman-programs.html'	
	]
	loadTemplates(templatePaths)
})

