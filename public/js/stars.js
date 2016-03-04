Handlebars.registerHelper('stars', function(n) {
    var res = '';

    for(var i = 0; i < n; ++i) {
      res += "★";
    }

    for(var i = 0; i < 5 - n; i++) {
      res += "☆";
    }

    return res;
});
