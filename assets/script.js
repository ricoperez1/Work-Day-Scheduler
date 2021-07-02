var currentDayHTML = $('#currentDay');
var saveBtn = $('.saveBtn');
var timeBlock = $('.time-block');


currentDayHTML = currentDayHTML.text(moment().format('dddd, MMMM Do, h:mm a'));

function checkTime() {
    timeBlock.each(function () {
        var timeID = parseInt(($(this)).attr('id')); //grabs the time-block ID (used to comparing to hour)
        var hour = moment().format('H'); //gets the current hour (NUMBER ONLY)
        var textArea = $(this).children('.description'); //Grabbing the textarea div (TO BE ABLE MANIPULATE CLASS)  
        
        if(timeID == hour){
            textArea.addClass('present');
        }

        else if(timeID < hour){
            textArea.addClass('past');
        }

        else {
            textArea.addclass('future')
        }
    })
}

saveBtn.click(function(event){
    var div = $(event.target);
    var timeID = parseInt(div.parent().attr('id'));
    var textDisplay = div.siblings('.description').val();

    localStorage.setItem(timeID, textDisplay);
})

function todoList()
{
    timeBlock.each(function ()
    {
        var timeID = parseInt(($(this)).attr('id'));
        var textD = $(this).children(".description");
        
        if(localStorage.getItem(timeID) === null)
        {
            return;
        }
        
        else{
            textD.val(localStorage.getItem(timeID));
        }

    })
}

    
    checkTime();   
    todoList();
