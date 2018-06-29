$(document).ready(function () {
 $('<body/>', {"id": 'main'}).prependTo('body')
    $('<input/>', {
        "id": 'btnSubmit',
        "type": 'submit',
        "value": 'Submit',
        "disabled": 'true',
    }).appendTo('form#frmSubmit');

    $("#text").attr('placeholder', "Name")

    $("#btnSubmit").click(function () {
        alert('The submit button has just been clicked!')
    })

    $("#btnSubmit").click(function () {
        let value = $("#text").val();
        alert(value)
    })

    let toValidate = $('#text'),
        valid = false;
    toValidate.keyup(function () {
        if ($(this).val().length > 0) {
            $(this).data('valid', true);
        } else {
            $(this).data('valid', false);
        }
        toValidate.each(function () {
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
    });

$('<div><h2>').appendTo('body')
let divText = $('#text').text
$('#inputField').append(divText)





})



