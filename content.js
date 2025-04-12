
// Basic phishing detection using keyword analysis
const phishingKeywords = ["login", "secure", "verify", "account", "bank", "password", "update"];

function checkPhishingSite() {
  const url = window.location.href.toLowerCase();
  let isPhishing = phishingKeywords.some(keyword => url.includes(keyword));

  if (isPhishing) {
    alert("🚨 Warning: This site may be a phishing website! 🚨");
  }
}

checkPhishingSite();
