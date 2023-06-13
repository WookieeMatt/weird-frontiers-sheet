// Namespace DCC Configuration Values
const DCC = {}

/**
 * The valid currency denominations supported by the DCC system
 * @type {Object}
 */
DCC.currencies = {
    $: 'DCC.CurrencyPP',
    gp: 'DCC.CurrencyGP',
    sp: 'DCC.CurrencySP',
    cp: 'DCC.CurrencyCP'
  }
  
  /**
   * The currencies supported by the DCC system ranked by value from low to high
   * @type {Array}
   */
  DCC.currencyRank = [
    'cp', 'sp', 'gp', '$'
  ]
  
  /**
   * The currencies supported by the DCC system expressed in terms of the lowest denomination
   * @type {Object}
   */
  DCC.currencyValue = {
    $: 1.00,
    gp: 100,
    sp: 10,
    cp: 1
  }