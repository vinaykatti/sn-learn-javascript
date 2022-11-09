//
//  L08S01 - Changing and detecting variable types
//
var i = 5;
var iStr = i.toString();
gs.info('type of i' + typeof i);
gs.info('type of iStr' + typeof iStr);

var n = parseInt(iStr);
gs.info(typeof n + ' n=' + n);
