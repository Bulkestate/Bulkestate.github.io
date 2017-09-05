var country = 'US';
var state = 'All';

$('#state').change(function () {
  state = $('#state').find(':selected').val();
  $('#example').html("<code>&lt;div id='widget'&gt;&lt;/div&gt; \n&lt;script src='https://bulkestate.github.io/js/widget.js' country='" + country + "' state='" + state + "'&gt;&lt;/script&gt;");
  $('#widget').append();
});
