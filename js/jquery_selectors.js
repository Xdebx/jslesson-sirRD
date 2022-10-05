function setEven(){
    $('li, span').css('font-weight','');
    var $evenItems = $('li:even'); // even reserved word jquery selector
    $evenItems.css('font-weight','bold');
    $('span:contains(Dog)').css("background-color", "yellow", 'font-weight','bold'); // string content in html
    $('.label').html('Even'); // output header epal lang 
    }

    function setOdd(){
    $('li, span').css('font-weight','');
    var $oddItems = $('li:odd'); // odd reserved word jquery selector
    $oddItems.css('font-weight','bold');
    $('span:contains(Odd)').css('font-weight','bold'); 
    $('.label').html('Odd'); // output header epal lang 
    }
    

    function setFirst4(){
    $('li, span').css('font-weight','');
    var $first4 = $('li:lt(4)');
    $first4.css('font-weight','bold');
    $('span:contains(\'First 4\')').css('font-weight','bold');
    $('.label').html('First 4');

    $('p').each(function (idx){
        $(this).html('This is paragraph ' + idx);
        });

    var liValues = $('li').map(function (idx){
        return $(this).html();
        }).get().join(', ');

    console.log(liValues);
        $('#planet').html(liValues);

    }