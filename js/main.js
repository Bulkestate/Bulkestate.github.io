var country = 'US';
var state = 'All';
var start_date = '';
var end_date = '';
var no_months = '';
var selected = 'months';
var type = 'MLPAH';

function refresh_content () {
  country = $('#country').find(':selected').val();
  state = $('#state').find(':selected').val();
  type = $('#type').find(':selected').val();
  update_timeframe();
  $('#example').html("<code>&lt;div id='widget'&gt;&lt;/div&gt; \n&lt;script id='widget-script' src='https://bulkestate.github.io/js/widget.js' data-type='" + type + "' no-months='" + no_months + "' start-date='" + start_date + "' end-date='" + end_date + "' country='" + country + "' state='" + state + "'&gt;&lt;/script&gt;");
  $('#widget').html('');
  $('#widget-script').replaceWith("<script id='widget-script' src='js/widget.js' data-type='" + type + "' no-months='" + no_months + "' start-date='" + start_date + "' end-date='" + end_date + "' country='" + country + "' state='" + state + "'></script>");
}

function update_timeframe () {
  if (selected === 'months') {
    no_months = $('#months').val();
    start_date = '';
    end_date = '';
  } else if (selected === 'date') {
    start_date = $('#date-start').val();
    end_date = $('#date-end').val();
    no_months = '';
  }
}

function show_timeframe () {
  $('#date-wrapper').hide();
  $('#months-wrapper').hide();
  selected = $('#time-frame').find(':checked').val();
  $('#' + selected + '-wrapper').show();
}

$(document).ready(function () {
  refresh_content();
  show_timeframe();
});

$('#state').change(function () {
  refresh_content();
});

$('#time-frame').change(function () {
  show_timeframe();
  refresh_content();
});
