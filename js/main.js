var country = 'US';
var state = 'All';

function refresh_content () {
  state = $('#state').find(':selected').val();
  $('#example').html("<code>&lt;div id='widget'&gt;&lt;/div&gt; \n&lt;script id='widget-script' src='https://bulkestate.github.io/js/widget.js' country='" + country + "' state='" + state + "'&gt;&lt;/script&gt;");
  $('#widget-script').replaceWith("<script id='widget-script' src='https://bulkestate.github.io' country='" + country + "' state='" + state + "'></script>");
}

$(document).ready(function () {
  refresh_content();
});

$('#state').change(function () {
  refresh_content();
});
