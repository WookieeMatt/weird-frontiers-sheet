/**
 * WF Gunslinger character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for WF Gunslinger
 * @extends {DCCActorSheet}
 */
class ActorSheetGunslinger extends DCCActorSheet {
  /** @override */
/**  getData () {
    const data = super.getData() **/
async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/weird-frontiers-sheet/templates/actor-sheet-gunslinger.html'
if (data.system.details.sheetClass !== 'Gunslinger') {
      this.actor.update({
        'data.class.className': game.i18n.localize('WF.gunslinger')
      })
    }


    // Add in Rover specific data if missing
    if (!data.system.skills.doorsAndSecurity) {
      this.actor.update({
        'data.skills.doorsAndSecurity': {
          label: 'rover.doorsAndSecurity',
          value: '+1'
        }
      })
    }
    if (!data.system.skills.aiRecognition) {
      this.actor.update({
        'data.skills.aiRecognition': {
          label: 'mcc.aiRecognition',
          value: '+2'
        }
      })
    }
	if (!data.system.class.archaicAlignment) {
	  this.actor.update({
		  'data.class.archaicAlignment': {
			label: 'mcc.archaicAlignment',
			value: 'Clan of Cog'
		  }
	  })
	}
	if (!data.system.skills.artifactCheck) {
	  this.actor.update({
		  'data.skills.artifactCheck': {
			label: 'mcc.artifactCheck',
			value: '+0'
		  }
	  })
	}
		if (!data.system.skills.roverMissleAttack) {
	  this.actor.update({
		  'data.skills.roverMissileAttack': {
			label: 'rover.roverMissileAttack',
			value: '+1'
		  }
	  })
	}
if (!data.system.skills.maxTechLevel) {
          this.actor.update({
                  'data.skills.maxTechLevel': {
                        label: 'mcc.maxTechLevel',
                        value: '0'
                  }
          })
        }	
    return data
  }
}

export {
  ActorSheetGunslinger
}
