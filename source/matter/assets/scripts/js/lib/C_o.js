/*
 * COMPONENTS constants for templates
 * Naming scheme: tag[_tag]+__s
 */
const CONF_o = require( '../../../../../configure.js' )

module.exports =
{
  HUE_BASE_n: CONF_o.HUE_P_n,
  HUE_P_n:    CONF_o.HUE_P_n,
  HUE_L_n:    CONF_o.HUE_L_n,
  HUE_S_n:    CONF_o.HUE_S_n,
  HUE_I_n:    CONF_o.HUE_I_n,
  HUE_D_n:    CONF_o.HUE_D_n,
  HUE_SET_n:  CONF_o.HUE_SET_n,

  LUM_MODE_n:     CONF_o.LUM_MODE_n,
  LUM_CONTRAST_n: CONF_o.LUM_CONTRAST_n,

  //?? SLOT_PART_s: '<\\/?slot-part>',
  SLOT_OPEN_s:    '<slot-slice>',
  SLOT_CLOSE_s:   '</slot-slice>',
  SLOT_SLICE_s:   '<slot-slice>([^]+?)<\\/slot-slice>',
  SLOT_CSS_TAG_s: '<slot-css ([\\S]+)\\/>',
  SLOT_JS_TAG_s:  '<slot-js ([\\S]+)\\/>',
}
