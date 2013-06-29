exports.action = function(data, callback, config, SARAH) {
  var config = config.modules.demo2;
  var tts = 'merci' + data.test + ' ' + config.name;
  callback({'tts': tts});
}