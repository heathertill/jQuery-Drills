
$(document).ready(function () {
    // Disble button
    $('#btnSubmit').attr('disabled', 'true')
    // Create heading for value of input
    $('<div>', { id: "div1", class: "div1" }).appendTo('body')

    // Style input
    $("#text").attr({value: "inputValue",  name: "name"})
    $("#text").attr('placeholder', 'Name')
    // Button click alert
    $("#btnSubmit").click(function () {
        alert('The submit button has just been clicked!');
    })
    // Assign variable to text input, create alert, and create h2 w/input
    $("#btnSubmit").click(function () {
        let $value = $("#text").val();
        alert($value);
        $('#div1').append('<h2 id="h2Input">' + value + '</h2>')
    })

  

    // prevents submit until text input has text

    valid = false;
    // This section est. if the text field has input
    $('#text').keyup(function () {
        if ($(this).val().length > 0) {
            $(this).data('valid', true);
        } else {
            $(this).data('valid', false);
        }

        
        // changes the value of valid appropriately
        $('#text').each(function () {
            if ($(this).data('valid') == true) {
                valid = true;
            } else {
                valid = false;
            }
        });

        if (valid === true) {
            $("#btnSubmit").prop('disabled', false);
        } else {
            $("#btnSubmit").prop('disabled', true);
        }

        $('#frmSubmit', { action: $("#text").val() })
    });


    $('#h2Input').mouseover(function () {
        $('#h2Input').css('background-color', 'blue')
    })

   $('#h2Input').css('cursor', 'default')







})



