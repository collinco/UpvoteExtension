// Listen to content.js events
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('request', request)
    if (request.count || request.count === 0) {
      chrome.browserAction.setBadgeText({'text': request.count.toString()})
    }
  }
);