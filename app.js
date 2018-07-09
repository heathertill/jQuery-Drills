
$(document).ready(function () {
    // Disble button
    $('#btnSubmit').attr('disabled', 'true')
    // Create heading for value of input
    $('<div>', { id: "div1", class: "div1" }).appendTo('body')
   
    // Create ul in body
    $('<ul id="inputList">').appendTo('body')

    // Button click alert
    $("#btnSubmit").click(function () {
        alert('The submit button has just been clicked!');
    })
// Random color generator
    function randomColor(colors) {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
        (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    // create li w/input when submit is clicked
    $("#btnSubmit").click(function () {
        // change the color of each li when clicked
        $('ul').on('click', 'li', function() {
            $(this).css({color: randomColor, cursor: 'default'})
        })
        // Removes li when dblclick
        $('ul').on('dblclick', 'li', function() {
            $(this).remove();
        })
        // takes input value and creates text for li
        let $value = $('#text').val();
        alert($value);
        $('#inputList').append('<li id="liInput">' + $value + '</li>')
    })



  



    

   

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















