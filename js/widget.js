(function () {
  var jQuery;
  var test = 1;
  if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.2.1') {
    test = 2;
    var script_tag = document.createElement('script');
    script_tag.setAttribute('type', 'text/javascript');
    script_tag.setAttribute('src',
            'https://code.jquery.com/jquery-3.2.1.min.js');
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // TODO: test if IE stil requires this
        if (this.readyState === 'complete' || this.readyState === 'loaded') {
          scriptLoadHandler();
        }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_tag);
  } else {
    jQuery = window.jQuery;
    main();
  }

  function scriptLoadHandler () {
    main();
  }

  function main () {
    $(this).ready(function () {
      var css_link = $('<link>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://bulkestate.github.io/css/widget.css'
      });
      $('head').append(css_link);
      var font_link = $('<link>', {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Rubik'
      });
      $('head').append(font_link);
      $('#widget').append('<p>Top Tier Home Value Index Beckett NJ</p>');
            // Set up flot plotting library
      $('#widget').append('<script src="https://bulkestate.github.io/js/jquery.flot.js"></script>');
      $('#widget').append('<script src="https://bulkestate.github.io/js/jquery.flot.time.js"></script>');
      $('#widget').append('<div id="plot"></div>');
      var url = 'https://www.quandl.com/api/v3/datasets/ZILLOW/C4639_ZHVITT.json?rows=12&api_key=BxZJxK2saJZPEyN7N-AH';

      var state = $('#widget-script').attr('state');
      var country = $('#widget-script').attr('country');

      //  dataset state codes
      var listing_state = {
        AL: 3,
        AK: 2,
        AZ: 5,
        AR: 4,
        CA: 6,
        CO: 7,
        CT: 8,
        DE: 10,
        DC: 9,
        FL: 11,
        GA: 12,
        HI: 13,
        ID: 15,
        IL: 16,
        IN: 17,
        IA: 14,
        KS: 18,
        KY: 19,
        LA: 20,
        ME: 51,
        MD: 22,
        MA: 21,
        MI: 23,
        MN: 24,
        MS: 26,
        MO: 25,
        MT: 27,
        NE: 30,
        NV: 34,
        NH: 31,
        NJ: 32,
        NM: 33,
        NY: 35,
        NC: 28,
        ND: 29,
        OH: 36,
        OK: 37,
        OR: 38,
        PA: 39,
        RI: 40,
        SC: 41,
        SD: 52,
        TN: 42,
        TX: 43,
        UT: 44,
        VT: 46,
        VA: 45,
        WA: 47,
        WV: 49,
        WI: 48,
        WY: 50
      };

      // Get the data
      var prices = [];
      var status = $.getJSON(url, function (data) {
        $.each(data['dataset']['data'], function (index, date) {
          prices.push([(new Date(date[0].toString().split('-'))).getTime(), date[1]]);
        });
      });

            // Plot the data
      $.when(status).then(function () {
        $.plot($('#plot'), [prices], {
          xaxis: {mode: 'time'},
          grid: {
            hoverable: true,
            clickable: true
          }
        });
      });

            // Enable value tracing
      $('#widget').append("<div id='tooltip'></div>");
      $('#plot').on('plothover', function (event, pos, item) {
        if (item) {
          var x = item.datapoint[0].toFixed(0),
            y = item.datapoint[1].toFixed(0);
          $('#tooltip').html(y).css({top: item.pageY + 5, left: item.pageX + 5}).fadeIn(200);
        } else {
          $('#tooltip').hide();
        }
      });
      $('#widget').append('<a href="https://www.bulkestate.com">made by Bulkestate</a>');
    });
  }
})();
