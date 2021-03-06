/**
 * @module timed
 * @submodule timed-models
 * @public
 */
import attr from "ember-data/attr";
import Model from "ember-data/model";
import { hasMany } from "ember-data/relationships";

/**
 * The absence type model
 *
 * @class AbsenceType
 * @extends DS.Model
 * @public
 */
export default Model.extend({
  /**
   * The name of the absence type
   *
   * E.g Military, Holiday or Sickness
   *
   * @property {String} name
   * @public
   */
  name: attr("string"),

  /**
   * Whether the absence type only fills the worktime
   *
   * @property {Boolean} fillWorktime
   * @public
   */
  fillWorktime: attr("boolean"),

  /**
   * The balances for this type
   *
   * @property {AbsenceBalance[]} absenceBalances
   * @public
   */
  absenceBalances: hasMany("absence-balance")
});
