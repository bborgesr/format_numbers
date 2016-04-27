
// Helper function to guarantee cross-browser compatibility
// adapted from: http://stackoverflow.com/a/16157942
function localeString(x, sep, grp) {
  var sx = (''+x).split('.'), s = '', i, j;
  sep || (sep = ',');            // default separator
  grp || grp === 0 || (grp = 3); // default grouping
  i = sx[0].length;
  while (i > grp) {
    j = i - grp;
    s = sep + sx[0].slice(j, i) + s;
    i = j;
  }
  s = sx[0].slice(0, i) + s;
  sx[0] = s;
  return sx.join('.');
}

var firstTime = true;

$(document).ready(function() {
  
  // To format the number when the app starts up
    $(document).on('shiny:value', function(event) {
      if (firstTime && event.name === 'prettyN') {
        event.value = localeString(event.value);
        firstTime = false;
      } else return;
    });
  
  // To format the number whenever the input changes
  $(document).on('shiny:inputchanged', function(event) {
    if (event.name === 'n') {
      event.value = localeString(event.value);
    }
  });
});