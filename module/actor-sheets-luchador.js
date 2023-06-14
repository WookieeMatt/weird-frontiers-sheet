/**
 * WF Luchador character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for WF Luchador
 * @extends {DCCActorSheet}
 */
class ActorSheetLuchador extends DCCActorSheet {
  /** @override */
/**  getData () {
    const data = super.getData() **/
async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/weird-frontiers-sheet/templates/actor-sheet-luchador.html'
    if (data.system.details.sheetClass !== 'Luchador') {
      this.actor.update({
        'data.class.className': game.i18n.localize('WF.luchador')
      })
    }


    // Add in Plantient specific data if missing
	    if (!data.system.class.spellCheckAbility) {
      this.actor.update({
        'data.class.spellCheckAbility': {
          label: 'Plantient.spellCheckAbility',
          value: 'Int'
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
	if (!data.system.class.plantientSubType) {
          this.actor.update({
                  'data.class.plantientSubType': {
                        label: 'mcc.plantientSubType',
                        value: ''
                  }
          })
        }

	if (!data.system.skills.artifactCheck) {
	  this.actor.update({
		  'data.skills.artifactCheck': {
			label: 'Plantient.artifactCheck',
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
  ActorSheetLuchador
}
