/* global Actors */

import * as BedlamiteSheets from './actor-sheets-bedlamite.js';
import * as GamblerSheets from './actor-sheets-gambler.js';
import * as GunslingerSheets from './actor-sheets-gunslinger.js';
import * as HellbillySheets from './actor-sheets-hellbilly.js';
import * as ShamanSheets from './actor-sheets-shaman.js';
import * as CalaveraSheets from './actor-sheets-calavera.js';
import * as LuchadorSheets from './actor-sheets-luchador.js';

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
  Actors.registerSheet('wf-hellbilly', HellbillySheets.ActorSheetHellbilly, { types: ['Player'], label: 'hellbilly.ActorSheetHellbilly' })
  Actors.registerSheet('mcc-shaman', ShamanSheets.ActorSheetShaman, { types: ['Player'], label: 'shaman.ActorSheetShaman' })
  Actors.registerSheet('wf-luchador', LuchadorSheets.ActorSheetLuchador, { types: ['Player'], label: 'luchador.ActorSheetLuchador' })  
   
  // Register shared template for MCC characters
  const templatePaths = [
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-common.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-equipment.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-gunslinger-trick-shot.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-mcc-header.html',
	'modules/weird-frontiers-sheet/templates/actor-partial-mutations.html',
	'modules/weird-frontiers-sheet/templates/actor-partial-shaman-programs.html'	
	]
	loadTemplates(templatePaths)
})

