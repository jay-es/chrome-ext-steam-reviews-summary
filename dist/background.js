// @ts-check

const id = "chromeExtSteamReviewsSummary";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id,
    title: "レビュー評価をコピー",
    contexts: ["page"],
    documentUrlPatterns: ["https://store.steampowered.com/app/*"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === id && tab?.id !== undefined) {
    chrome.tabs.sendMessage(tab.id, "chrome-ext-steam-reviews-summary");
  }
});
