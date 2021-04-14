$(document).ready(function(){

// counter start
$('.counter').counterUp({
                delay: 10,
                time: 1000
            });

    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });


    // validator
            var literal = {
    req1: { selector: $('#req1'), required: { message: 'Required Field.' } },
    req2: { selector: $('#req2'), digit: { message: 'Must be a digit.' } },
    req3: { selector: $('#req3'), length: { value: 3, message: 'Only 3 characters are allowed.' } },
    req4: { selector: $('#req4'), from: { value: 3, message: 'At least 3 numbers.' } },
    req5: { selector: $('#req5'), to: { value: 3, message: '3 numbers or less.' } },
    req6: { selector: $('#req6'), range: { value: [5, 10], message: 'From 5 To 10.' } },
    req7: { selector: $('#req7'), email: { message: 'Must be a valid email.' } },
    req8: { selector: $('#req8'), mobile: { message: 'Must be a valid phone number.\nEX) 01012341234' } },
    req9: { selector: $('#req9'), compare: { value: 'test', message: 'Must match the string: text.' } },
    req10: { selector: $('#req10'), date: { message: 'Must be a valid date.\nEX) 2021-01-12' } },
    req11: { selector: $('#req11'), regex: { value: /^[0-9]+$/, message: 'Custom validator using Regext.' } }
};
var result = $.validate.rules(literal, { mode: 'bootstrap' });
                console.log(result);

      // validator end

});

wow = new WOW(
                 {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       false,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();