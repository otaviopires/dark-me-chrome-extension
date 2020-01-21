console.log("Background running");
chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg = {
		txt : "Welcome to the dark side!"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}