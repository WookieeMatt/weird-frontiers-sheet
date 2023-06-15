/**
 * WF Mountebank character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for WF Mountebank
 * @extends {DCCActorSheet}
 */
class ActorSheetMountebank extends DCCActorSheet {
  /** @override */
/**  getData () {
    const data = super.getData() **/
async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/weird-frontiers-sheet/templates/actor-sheet-mountebank.html'
    if (data.system.details.sheetClass !== 'Mountebank') {
      this.actor.update({
        'data.class.className': game.i18n.localize('WF.mountebank')
      })
    }

    // Add in shaman specific data if missing
    if (!data.system.class.aiPatron) {
      this.actor.update({
        'data.class.aiPatron': {
          label: 'shaman.aiPatron',
          value: ' '
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
		if (!data.system.class.spellCheck) {
	  this.actor.update({
		  'data.class.spellCheck': {
			label: 'mcc.programCheck',
			value: '+0'
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
  ActorSheetMountebank
}
