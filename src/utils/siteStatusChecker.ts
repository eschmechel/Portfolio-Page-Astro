// src/utils/siteStatusChecker.ts

export type SiteStatus = 'live' | 'down' | 'unknown';

export async function checkSiteStatus(url: string): Promise<SiteStatus> {
  if (!url) return 'unknown';
  
  try {
    // Clean up the URL - ensure it has a protocol
    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    // Use fetch with timeout and specific options for site checking
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await fetch(cleanUrl, {
      method: 'HEAD', // Use HEAD to minimize data transfer
      signal: controller.signal,
      mode: 'no-cors', // Allow cross-origin requests
      cache: 'no-cache',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Site Status Checker)'
      }
    });

    clearTimeout(timeoutId);

    // For no-cors mode, we can't read the status, but if fetch succeeds, site is likely up
    return 'live';

  } catch (error) {
    // If fetch fails, try with http:// if we were using https://
    if (url.startsWith('https://')) {
      try {
        const httpUrl = url.replace('https://', 'http://');
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        await fetch(httpUrl, {
          method: 'HEAD',
          signal: controller.signal,
          mode: 'no-cors',
          cache: 'no-cache'
        });

        clearTimeout(timeoutId);
        return 'live';
      } catch (httpError) {
        return 'down';
      }
    }
    
    return 'down';
  }
}

export async function checkMultipleSites(urls: string[]): Promise<Record<string, SiteStatus>> {
  const results: Record<string, SiteStatus> = {};
  
  // Check all sites in parallel for better performance
  const promises = urls.map(async (url) => {
    const status = await checkSiteStatus(url);
    return { url, status };
  });

  const settled = await Promise.allSettled(promises);
  
  settled.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      results[urls[index]] = result.value.status;
    } else {
      results[urls[index]] = 'unknown';
    }
  });

  return results;
}
