
document.addEventListener("DOMContentLoaded", () => {
  let statusElement = document.getElementById("status");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let url = tabs[0].url.toLowerCase();
    let phishingKeywords = ["login", "secure", "verify", "account", "bank", "password", "update"];
    let isPhishing = phishingKeywords.some(keyword => url.includes(keyword));
    
    if (isPhishing) {
      statusElement.innerText = "⚠️ Phishing Detected";
      statusElement.style.color = "red";
    } else {
      statusElement.innerText = "✅ Safe";
      statusElement.style.color = "green";
    }
  });
});
