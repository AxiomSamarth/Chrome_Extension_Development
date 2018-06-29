// Author of the code - Samarth Deyagond <deyagondsamarth@gmail.com>
// Developed on - 29/06/2018

$(function(){    
    $("#btnChange").click(function(){
        var imageURL = $("#imageURL").val();
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo:"changeBg", imageLink: imageURL})
        });
    });
});