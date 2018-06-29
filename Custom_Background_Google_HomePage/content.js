// Author of the code - Samarth Deyagond <deyagondsamarth@gmail.com>
// Developed on - 29/06/2018

chrome.runtime.sendMessage({todo:"showPageAction"});

chrome.storage.sync.get('imageUrl', function(customBackground){
    if(customBackground.imageUrl){
        $("body").css({"background-image": `url(${customBackground.imageUrl})`, "background-size":"cover", "background-attachment":"fixed"});
        $('.fbar').css("display","None");
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "changeBg"){
        var image_chosen = request.imageLink;
        let imageUrl = image_chosen;
        chrome.storage.sync.set({'imageUrl':imageUrl}, function(){});
        $("body").css({"background-image": `url(${imageUrl})`, "background-size":"cover", "background-attachment":"fixed"});
        $('.fbar').css("display","None");
        console.log(`url(${imageUrl}`);
    }
});