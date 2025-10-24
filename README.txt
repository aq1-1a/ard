PWA package for Ayn (for hosting at https://aq1-1a.github.io/ard)

Files included:
- manifest.json : PWA manifest (references ayn-192.png and ayn-512.png)
- sw.js         : simple service worker for offline caching
- install.html  : user-facing install instructions and demo page
- head-snippet.txt : HTML snippet to paste into your <head>
- README.txt    : this file

What you must do:
1. Place these files under the /ard/ folder on your GitHub Pages repo.
2. Upload your icon image as ayn.png and also create resized versions:
   - ayn-180.png (180x180)  -> used by apple-touch-icon
   - ayn-192.png (192x192)  -> used in manifest
   - ayn-512.png (512x512)  -> used in manifest
   You can generate these with any image editor or an online tool.
3. Commit and push to GitHub. After GitHub Pages publishes, open:
   https://aq1-1a.github.io/ard/install.html
   and test the install flow on Android & iPhone.

Notes:
- Android: Chrome will support Add to Home Screen and may generate a WebAPK in some cases.
- iOS: Users must use Safari's "Add to Home Screen". iOS ignores manifest.json icons; it uses apple-touch-icon.
- If you want an APK downloader link, add your APK to the folder and make sure server sends correct headers (Content-Type: application/vnd.android.package-archive and Content-Disposition: attachment).
