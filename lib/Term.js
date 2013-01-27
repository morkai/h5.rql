
module.exports = Term;

/**
 * @name h5.rql.Term
 * @constructor
 * @param {string=} name
 * @param {Array=} args
 */
function Term(name, args)
{
  /**
   * @type {string|null}
   */
  this.name = name || null;

  /**
   * @type {Array}
   */
  this.args = args || [];
}