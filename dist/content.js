// @ts-check

chrome.runtime.onMessage.addListener(async (message) => {
  if (message !== "chrome-ext-steam-reviews-summary") return;

  const selector = "#review_histograms_container .game_review_summary";
  const nodes = Array.from(document.querySelectorAll(selector));
  const texts = nodes.map(({ textContent }) => textContent);
  await navigator.clipboard.writeText(texts.join("\t"));
});
