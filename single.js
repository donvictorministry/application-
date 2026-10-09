const h=`<div id="dv38" style="display:none; position:fixed; inset:0; z-index:9999999; background:rgba(0,0,0,0.7); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:20px; font-family:inherit;">
      <div style="position:relative; width:100%; max-width:340px; text-align:left; padding:32px 24px; margin:0 auto; background-color:var(--dvda); border-radius:24px; box-shadow:var(--dve2); overflow:hidden;">
        <div style="font-size:26px; font-weight:800; color:var(--dvdb); margin-bottom:12px; line-height:1.2;">This App is out of date.</div>
        <div style="font-size:18px; color:var(--dvdb-variant); margin-bottom:32px; line-height:1.5; font-weight:500;">Your current app version is unsupported and will be deprecated soon. To enjoy the latest features and content, please update to the latest version immediately.</div>
        <button id="dv39" style="width:100%; padding:16px; background-color:var(--dvd8); color:var(--dvd9); border:none; border-radius:50px; font-size:18px; font-weight:700; cursor:pointer; box-shadow:var(--dve1); transition:transform 0.2s;">Update Now</button>
        <div style="position:absolute; bottom:8px; right:12px; font-size:10px; font-weight:700; color:var(--dvdb); opacity:0.15; user-select:none; pointer-events:none;">Multi-Utility App</div>
      </div>
    </div>`;
    
    (function() {
      var DVv = "1.5";
      var DVk = "UtilityPro";

      var modal = document.getElementById('dv38');
      var btn = document.getElementById('dv39');
      var savedVersion = localStorage.getItem(DVk);

      if (savedVersion && savedVersion !== DVv) {
        modal.style.display = 'flex';
      } else if (!savedVersion) {
        localStorage.setItem(DVk, DVv);
      }
      
      btn.addEventListener('click', function() {
        localStorage.setItem(DVk, DVv);
        modal.style.display = 'none';
        
        if ('caches' in window) {
            caches.keys().then(function(names) {
                for (let name of names) caches.delete(name);
            });
        }
        window.location.reload(true);
      });
    })();