document.body.insertAdjacentHTML('beforeend', `
  <div id="dv38" style="display:none; position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:20px; font-family:inherit; box-sizing:border-box;">
    <div style="position:relative; width:100%; max-width:340px; text-align:left; padding:32px 24px; margin:0 auto; background-color:var(--dvda,#ffffff); border-radius:24px; box-shadow:var(--dve2,0 20px 40px rgba(0,0,0,0.25)); overflow:hidden; box-sizing:border-box;">
      <div style="font-size:26px; font-weight:800; color:var(--dvdb,#111111); margin-bottom:12px; line-height:1.2;">This App is out of date.</div>
      <div style="font-size:18px; color:var(--dvdb-variant,#555555); margin-bottom:32px; line-height:1.5; font-weight:500;">Your current app version is unsupported and will be deprecated soon. To enjoy the latest features and content, please update to the latest version immediately.</div>
      <button id="dv39" style="width:100%; padding:16px; background-color:var(--dvd8,#000000); color:var(--dvd9,#ffffff); border:none; border-radius:50px; font-size:18px; font-weight:700; cursor:pointer; box-shadow:var(--dve1,0 4px 12px rgba(0,0,0,0.15)); transition:transform 0.2s;">Update Now</button>
      <div style="position:absolute; bottom:8px; right:12px; font-size:10px; font-weight:700; color:var(--dvdb,#111111); opacity:0.15; user-select:none; pointer-events:none;">Multi-Utility App</div>
    </div>
  </div>
`);

(function () {
  var DVv = "4.5";          // current app version
  var DVk = "UtilityPro"; // localStorage key

  var modal = document.getElementById('dv38');
  var btn = document.getElementById('dv39');
  var savedVersion = localStorage.getItem(DVk);

  // Show modal if the stored version differs from current version
  if (savedVersion && savedVersion !== DVv) {
    modal.style.display = 'flex';
  } else if (!savedVersion) {
    // First-time users: record current version (no modal shown)
    localStorage.setItem(DVk, DVv);
  }

  btn.addEventListener('click', async function () {
    // Prevent double-clicks
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.style.cursor = 'default';

    // Save the current version so the modal won't show again
    localStorage.setItem(DVk, DVv);

    // Hide the modal
    modal.style.display = 'none';

    // Clear all caches (await so reload happens after deletion)
    if ('caches' in window) {
      try {
        var names = await caches.keys();
        await Promise.all(names.map(function (name) {
          return caches.delete(name);
        }));
      } catch (e) {
        // Ignore cache errors — still reload
      }
    }

    // Force reload without cache (modern approach)
    // location.reload(true) is deprecated; use reload() after cache clear
    window.location.reload();
  });
})();