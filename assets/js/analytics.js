// Example: Fetch PageSpeed Insights for Blogger
async function fetchPageSpeed(url) {
  const apiKey = "YOUR_GOOGLE_API_KEY";
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}`;
  const resp = await fetch(endpoint);
  return resp.json();
}

// Use: fetchPageSpeed('https://elimuhubconsultants.blogspot.com').then(data => { ... });
