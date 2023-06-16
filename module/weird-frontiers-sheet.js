/* global Actors */

import * as BedlamiteSheets from './actor-sheets-bedlamite.js';
import * as GamblerSheets from './actor-sheets-gambler.js';
import * as GunslingerSheets from './actor-sheets-gunslinger.js';
import * as HellbillySheets from './actor-sheets-hellbilly.js';
import * as MountebankSheets from './actor-sheets-mountebank.js';
import * as MysticMonkSheets from './actor-sheets-mysticmonk.js';
import * as CalaveraSheets from './actor-sheets-calavera.js';
import * as LuchadorSheets from './actor-sheets-luchador.js';
import * as OccultistSheets from './actor-sheets-occultist.js';
import * as RevelatorSheets from './actor-sheets-revelator.js';
import * as SinEaterSheets from './actor-sheets-sin-eater.js';
import * as TommyknockerSheets from './actor-sheets-tommyknocker.js';


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
  Actors.registerSheet('wf-luchador', LuchadorSheets.ActorSheetLuchador, { types: ['Player'], label: 'luchador.ActorSheetLuchador' })
  Actors.registerSheet('wf-mountebank', MountebankSheets.ActorSheetMountebank, { types: ['Player'], label: 'mountebank.ActorSheetMountebank' })
  Actors.registerSheet('wf-mysticMonk', MysticMonkSheets.ActorSheetMysticMonk, { types: ['Player'], label: 'mysticMonk.ActorSheetMysticMonk' })
  Actors.registerSheet('wf-occultist', OccultistSheets.ActorSheetOccultist, { types: ['Player'], label: 'occultist.ActorSheetOccultist' })
  Actors.registerSheet('wf-revelator', RevelatorSheets.ActorSheetRevelator, { types: ['Player'], label: 'revelator.ActorSheetRevelator' })
  Actors.registerSheet('wf-sin-eater', SinEaterSheets.ActorSheetSinEater, { types: ['Player'], label: 'sin-eater.ActorSheetSinEater' })
  Actors.registerSheet('wf-tommyknocker', TommyknockerSheets.ActorSheetTommyknocker, { types: ['Player'], label: 'tommyknocer.ActorSheetTommyknocker' })
   
  // Register shared template for MCC characters
  const templatePaths = [
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-common.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-equipment.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-gunslinger-trick-shot.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-mystic-monk-martial-arts.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-pc-mcc-header.html',
	'modules/weird-frontiers-sheet/templates/actor-partial-mutations.html',
	'modules/weird-frontiers-sheet/templates/actor-partial-occultist-spells.html',
  'modules/weird-frontiers-sheet/templates/actor-partial-revelator-miracles.html'
	]
	loadTemplates(templatePaths)
})

