chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message)
{
	console.log(message.txt);
    
    var h = document.getElementsByTagName('head')[0], 
    s = document.createElement('style'); 

    s.setAttribute('type','text/css'); 
    s.appendChild( 
        document.createTextNode( 
            `html { -webkit-filter: invert(100%) hue-rotate(180deg) contrast(70%) !important; background: #000; } 
            img { -webkit-filter: invert(100%) hue-rotate(180deg) contrast(130%) !important; } 
            .line-content { background-color: #000; }` 
        ) 
    ); 
    h.appendChild(s);
}