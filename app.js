function dv9c() {
            return !!(window.NativeAlarm && window.NativeAlarm.scheduleAlarm);
        }

        const dvcc = {
            0: { 1: "New Year's Day", 21: "Fasting & Prayer" },
            1: { 14: "Valentine's Day", 28: "Love Your Neighbor" },
            2: { 8: "Women's Day", 15: "Pray for the Nations" },
            3: { 9: "Resurrection Power", 22: "Earth Day" },
            4: { 1: "Workers' Day", 19: "Global Day of Prayer", 27: "Children's Day (Nigeria)" },
            5: { 12: "Democracy Day (Nigeria)", 21: "Father's Day" },
            6: { 15: "Mid-Year Reflection" },
            7: { 20: "Pray for Unreached Groups" },
            8: { 21: "Peace Day" },
            9: { 1: "Independence Day (Nigeria)", 31: "Light in the Darkness" },
            10: { 25: "Thanksgiving" },
            11: { 25: "Christmas Day (Christ is Born!)", 26: "Boxing Day (Nigeria)", 31: "New Year's Eve" }
        };

        const dv9d = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
        };

        const dv9e = () => {
            try { return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown'; } 
            catch (e) { return 'Unknown'; }
        };

        const dv9f = () => {
            const now = new Date();
            return now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        };

        const dva0 = (hours, minutes, ampm) => {
            if (isNaN(hours) || hours < 1 || hours > 12) return false;
            if (isNaN(minutes) || minutes < 0 || minutes > 59) return false;
            if (ampm !== 'AM' && ampm !== 'PM') return false;
            return true;
        };

        const dva1 = (hours, minutes, ampm) => {
            let h24 = parseInt(hours);
            if (ampm === 'PM' && h24 !== 12) h24 += 12;
            if (ampm === 'AM' && h24 === 12) h24 = 0;
            return `${h24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        };

        let dvcd = 'NGN';
        let dvce = '';
        let dvcf = false;
        let dvd0 = new Date();
        let dvd6 = new Date();
        let dvd7 = JSON.parse(localStorage.getItem('gcAlarms')) || [];
        let dvd1 = null;

        function dva2() {
            localStorage.setItem('gcAlarms', JSON.stringify(dvd7));
        }

        function dva3() {
            document.querySelectorAll('.dv46').forEach(m => m.classList.remove('dv5d'));
            dva5();
        }
        
        function dva4() {
            const bio = document.getElementById('dv28');
            const btn = document.getElementById('dv29');
            bio.classList.toggle('dv53');
            if (bio.classList.contains('dv53')) {
                btn.textContent = 'Show Less';
            } else {
                btn.textContent = 'Show More';
            }
        }

        const dvd2 = ['nt', 'loan', 'calc', 'cal', 'alarm'];
        const dvd3 = ['about', 'developer', 'guidelines', 'support', 'team', 'terms'];

        function dva5() {
            document.getElementById('dv2').classList.add('dv5d');
            document.getElementById('dv1').classList.add('dv5d');
        }

        function dva6() {
            document.getElementById('dv2').classList.remove('dv5d');
            document.getElementById('dv1').classList.remove('dv5d');
        }

        const dvPageIds = { nt: 'readingPage', loan: 'dv6', calc: 'dv15', cal: 'dv19', alarm: 'dv1d' };
        const dvModalIds = { about: 'dv26', developer: 'dv27', guidelines: 'dv2b', support: 'dv2c', team: 'dv2d', terms: 'dv-terms' };

        function dva7(page, btn = null, pushState = true) {
            dva6();
            
            if (dvd2.includes(page)) {
                document.querySelectorAll('.dv5c').forEach(p => p.classList.remove('dv5d'));
                document.querySelectorAll('.dv46').forEach(m => m.classList.remove('dv5d'));
                document.querySelectorAll('.dv98').forEach(n => n.classList.remove('dv5d'));
                
                const targetPage = document.getElementById(dvPageIds[page]);
                if (targetPage) targetPage.classList.add('dv5d');
                
                if (btn) {
                    btn.classList.add('dv5d');
                } else {
                    const navIndex = { 'nt': 0, 'loan': 1, 'calc': 2, 'cal': 3, 'alarm': 4 }[page];
                    const navBtns = document.querySelectorAll('.dv98');
                    if (navBtns[navIndex]) navBtns[navIndex].classList.add('dv5d');
                }

                const titles = { nt: '60 Days Reading', loan: 'Loan Calculator', calc: 'Smart Calculator', cal: 'Global Calendar', alarm: 'Alarm Clock' };
                document.getElementById('dv5').textContent = titles[page];
                
                if (page === 'cal') dvba();
                if (page === 'alarm') dvbc();

            } else if (dvd3.includes(page)) {
                document.querySelectorAll('.dv46').forEach(m => m.classList.remove('dv5d'));
                const targetModal = document.getElementById(dvModalIds[page]);
                if (targetModal) targetModal.classList.add('dv5d');
            }
            }

        function dva8() {
            dva7('loan');
        }

        function dva9() {
            document.getElementById('dv4').classList.toggle('show');
        }

        function dvaa(color, element) {
            document.documentElement.style.setProperty('--dvd8', color);
            document.documentElement.style.setProperty('--dvde', color);
            document.documentElement.style.setProperty('--dvd9', '#ffffff');
            document.querySelectorAll('.dv40').forEach(opt => opt.classList.remove('dv41'));
            element.classList.add('dv41');
        }

        function dvab(currency, btn) {
            dvcd = currency;
            document.querySelectorAll('.dv69').forEach(b => b.classList.remove('dv6a'));
            btn.classList.add('dv6a');
            const symbol = currency === 'NGN' ? '\u20A6' : '$';
            document.getElementById('dv8').textContent = symbol;
        }

        function dvac() {
            const loanAmount = parseFloat(document.getElementById('dv9').value);
            const loanTerm = parseFloat(document.getElementById('dvc').value);
            const interestRate = parseFloat(document.getElementById('dvf').value);
            dvae();
            let hasError = false;
            if (isNaN(loanAmount) || loanAmount <= 0) { dvad('dv7', 'dva'); hasError = true; }
            if (isNaN(loanTerm) || loanTerm <= 0) { dvad('dvb', 'dvd'); hasError = true; }
            if (isNaN(interestRate) || interestRate < 0) { dvad('dve', 'dv10'); hasError = true; }
            if (hasError) { document.getElementById('dv11').style.display = 'none'; return; }

            const monthlyRate = (interestRate / 100) / 12;
            const numberOfPayments = loanTerm * 12;
            let monthlyPayment;
            if (monthlyRate === 0) {
                monthlyPayment = loanAmount / numberOfPayments;
            } else {
                monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            }
            const totalPayment = monthlyPayment * numberOfPayments;
            const totalInterest = totalPayment - loanAmount;
            const symbol = dvcd === 'NGN' ? '\u20A6' : '$';
            document.getElementById('dv12').textContent = symbol + monthlyPayment.toFixed(2);
            document.getElementById('dv13').textContent = symbol + totalPayment.toFixed(2);
            document.getElementById('dv14').textContent = symbol + totalInterest.toFixed(2);
            document.getElementById('dv11').style.display = 'block';
        }

        function dvad(wrapperId, errorId) {
            document.getElementById(wrapperId).classList.add('dv62');
            document.getElementById(errorId).style.display = 'block';
        }

        function dvae() {
            ['dv7', 'dvb', 'dve'].forEach(id => document.getElementById(id).classList.remove('dv62'));
            ['dva', 'dvd', 'dv10'].forEach(id => document.getElementById(id).style.display = 'none');
        }

        function dvaf(expr) {
            if (!expr) return '';
            try {
                const sanitized = expr.replace(/[^0-9+\-*/().% MathsincoetaPsqrlg!]/g, '');
                if (sanitized.includes('!')) return 'Not Implemented';
                const result = new Function('return ' + sanitized)();
                if (!isFinite(result) || isNaN(result)) return 'Error';
                return Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
            } catch (e) {
                return '';
            }
        }

        function dvb0(expr) {
            if (!expr) return '0';
            return expr.replace(/\*/g, '×').replace(/\//g, '÷').replace(/Math\./g, '');
        }

        function dvb1(num) {
            if (dvcf) { dvce = ''; dvcf = false; }
            dvce += num;
            dvb9();
        }

        function dvb2(op) {
            if (dvcf) dvcf = false;
            dvce += op;
            dvb9();
        }

        function dvb3(func) {
            if (dvcf) { dvce = ''; dvcf = false; }
            dvce += func;
            dvb9();
        }

        function dvb4() {
            if (dvcf) { dvce = '0'; dvcf = false; }
            const parts = dvce.split(/[\+\-\*\/\%\(\)]/);
            if (!parts[parts.length - 1].includes('.')) dvce += '.';
            dvb9();
        }

        function dvb5() {
            if (dvce !== '') {
                if (dvce.startsWith('-')) dvce = dvce.substring(1);
                else dvce = '-' + dvce;
                dvb9();
            }
        }

        function dvb6() {
            dvce = '';
            dvcf = false;
            document.getElementById('dv17').textContent = '0';
            document.getElementById('dv18').textContent = '';
        }

        function dvb7() {
            if (dvcf) { dvb6(); return; }
            dvce = dvce.slice(0, -1);
            if (dvce === '') dvb6();
            else dvb9();
        }

        function dvb8() {
            const result = dvaf(dvce);
            if (result !== '' && result !== 'Error') {
                document.getElementById('dv17').textContent = result;
                document.getElementById('dv18').textContent = '';
                dvce = result.toString();
                dvcf = true;
            }
        }

        function dvb9() {
            document.getElementById('dv17').textContent = dvb0(dvce);
            document.getElementById('dv18').textContent = dvaf(dvce);
        }

        document.addEventListener('keydown', function(e) {
            if (!document.getElementById('dv15').classList.contains('dv5d')) return;
            if (e.key >= '0' && e.key <= '9') dvb1(e.key);
            else if (e.key === '+') dvb2('+');
            else if (e.key === '-') dvb2('-');
            else if (e.key === '*') dvb2('*');
            else if (e.key === '/') { e.preventDefault(); dvb2('/'); }
            else if (e.key === '(') dvb2('(');
            else if (e.key === ')') dvb2(')');
            else if (e.key === '.') dvb4();
            else if (e.key === 'Enter' || e.key === '=') dvb8();
            else if (e.key === 'Backspace') dvb7();
            else if (e.key === 'Escape') dvb6();
        });
        
        function dvba() {
            const year = dvd0.getFullYear();
            const month = dvd0.getMonth();
            const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            document.getElementById('dv1a').textContent = monthNames[month] + ' ' + year;

            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const daysInPrevMonth = new Date(year, month, 0).getDate();
            const holidaysThisMonth = dvcc[month] || {};
            const daysGrid = document.getElementById('dv1b');
            daysGrid.innerHTML = '';

            for (let i = firstDay - 1; i >= 0; i--) {
                const div = document.createElement('div');
                div.className = 'dv80 dv82';
                div.textContent = daysInPrevMonth - i;
                daysGrid.appendChild(div);
            }

            for (let d = 1; d <= daysInMonth; d++) {
                const div = document.createElement('div');
                div.className = 'dv80';
                div.textContent = d;
                if (year === dvd6.getFullYear() && month === dvd6.getMonth() && d === dvd6.getDate()) div.classList.add('dv81');
                if (holidaysThisMonth[d]) { div.classList.add('dv83'); div.title = holidaysThisMonth[d]; }
                daysGrid.appendChild(div);
            }

            const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
            const remaining = totalCells - (firstDay + daysInMonth);
            for (let d = 1; d <= remaining; d++) {
                const div = document.createElement('div');
                div.className = 'dv80 dv82';
                div.textContent = d;
                daysGrid.appendChild(div);
            }

            const holidaysList = document.getElementById('dv1c');
            let listHTML = `<div style="font-weight: 700; font-size: 18px; margin-bottom: 12px; color: var(--dvd8);">Spiritual Growth & Events in ${monthNames[month]}</div>`;
            if (Object.keys(holidaysThisMonth).length === 0) {
                listHTML += '<div style="color: var(--dvdb-variant); font-size: 15px; font-style: italic; font-weight: 500;">No specific events this month. Keep praying!</div>';
            } else {
                for (let [day, name] of Object.entries(holidaysThisMonth)) {
                    const isSpiritual = name.includes('Spiritual');
                    listHTML += `<div class="dv85" style="${isSpiritual ? 'border-left: 4px solid var(--dvd8); padding-left: 12px; background: rgba(37, 211, 102, 0.05); border-radius: 4px;' : ''}">
                        <span class="dv86" style="font-weight: 600;">${monthNames[month]} ${day}</span>
                        <span class="dv87" style="${isSpiritual ? 'color: var(--dvd8); font-weight: 700;' : 'color: var(--dvdb-variant); font-weight: 600;'}">${name}</span>
                    </div>`;
                }
            }
            holidaysList.innerHTML = listHTML;
        }

        function dvbb(delta) {
            dvd0.setMonth(dvd0.getMonth() + delta);
            dvba();
        }

        function dvbc() {
            const timeStr = dv9d();
            const dateStr = dv9f();
            const timezoneStr = dv9e();
            const timeEl = document.getElementById('dv1e');
            const dateEl = document.getElementById('dv1f');
            const tzEl = document.getElementById('dv20');
            if (timeEl) timeEl.textContent = timeStr;
            if (dateEl) dateEl.textContent = dateStr;
            if (tzEl) tzEl.textContent = 'Timezone: ' + timezoneStr;

            if (!dv9c()) {
                const now = new Date();
                const currentComparable = dva1(
                    now.getHours() % 12 || 12,
                    now.getMinutes(),
                    now.getHours() >= 12 ? 'PM' : 'AM'
                );
                dvd7.forEach(alarm => {
                    if (alarm.active && alarm.comparable === currentComparable) {
                        dvbe(alarm);
                    }
                });
            }
        }

        function dvbd() {
            try {
                const AudioCtx = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtx) return;
                const ctx = new AudioCtx();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(880, ctx.currentTime);
                
                gain.gain.setValueAtTime(1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
                
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 1.5);
            } catch (e) {
                console.log("Audio generation failed:", e);
            }
        }

        function dvbe(alarm) {
            const modal = document.getElementById('dv35');
            const title = document.getElementById('dv36');
            const content = document.getElementById('dv37');
            
            if (alarm.type === 'Prayer') {
                title.innerText = "Global Prayer Focus";
                content.innerText = "Lord, we lift up the unreached nations to You. Let Your gospel shine in the darkest places today. Send forth laborers into Your harvest.";
            } else if (alarm.type === 'Meditation') {
                title.innerText = "Scripture Meditation";
                content.innerText = "\"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.\" - Matthew 28:19";
            } else {
                title.innerText = "Standard Alarm";
                content.innerText = "It is now " + alarm.time;
            }
            
            dvbd();
            if (dvd1) clearInterval(dvd1);
            dvd1 = setInterval(dvbd, 2000);
            
            modal.style.display = 'flex';
            alarm.active = false;
            dva2();
            dvc5();
        }

        function dvbf() {
            if (dvd1) {
                clearInterval(dvd1);
                dvd1 = null;
            }
            document.getElementById('dv35').style.display = 'none';
        }

        function dvc0(type, time) {
            if (type === 'Prayer') {
                return "Lord, we lift up the unreached nations to You. Let Your gospel shine in the darkest places today. Send forth laborers into Your harvest.";
            } else if (type === 'Meditation') {
                return "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit. - Matthew 28:19";
            }
            return "It is now " + time;
        }

        function dvc1(type) {
            if (type === 'Prayer') return "Global Prayer Focus";
            if (type === 'Meditation') return "Scripture Meditation";
            return "Standard Alarm";
        }

        function dvc2() {
            const hours = parseInt(document.getElementById('dv21').value);
            const minutes = parseInt(document.getElementById('dv22').value);
            const ampm = document.getElementById('dv23').value;
            const type = document.getElementById('dv24').value || 'Standard';

            if (!dva0(hours, minutes, ampm)) {
                const modal = document.getElementById('dv35');
                document.getElementById('dv36').innerText = "Invalid Time";
                document.getElementById('dv37').innerText = "Please enter valid 12-hour time. Hours must be 1-12 and minutes 0-59.";
                modal.style.display = 'flex';
                return;
            }

            const displayTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
            const comparable = dva1(hours, minutes, ampm);
            const [hh, mm] = comparable.split(':').map(Number);
            const alarm = { id: Date.now(), time: displayTime, comparable: comparable, active: true, type: type };
            dvd7.push(alarm);
            dva2();
            dvc5();

            if (dv9c()) {
                try {
                    window.NativeAlarm.scheduleAlarm(
                        alarm.id,
                        hh,
                        mm,
                        dvc1(type),
                        dvc0(type, displayTime)
                    );
                } catch (e) {
                    console.log("Native alarm scheduling failed:", e);
                }
            }

            document.getElementById('dv21').value = '';
            document.getElementById('dv22').value = '';
            document.getElementById('dv23').value = 'AM';
            if (document.getElementById('dv24')) document.getElementById('dv24').value = 'Standard';
        }

        function dvc3(id) {
            const alarm = dvd7.find(a => a.id === id);
            if (alarm) {
                alarm.active = !alarm.active;
                if (dv9c()) {
                    if (alarm.active) {
                        const [hh, mm] = alarm.comparable.split(':').map(Number);
                        window.NativeAlarm.scheduleAlarm(alarm.id, hh, mm, dvc1(alarm.type), dvc0(alarm.type, alarm.time));
                    } else {
                        window.NativeAlarm.cancelAlarm(alarm.id);
                    }
                }
            }
            dva2();
            dvc5();
        }

        function dvc4(id) {
            if (dv9c()) {
                try { window.NativeAlarm.cancelAlarm(id); } catch (e) {}
            }
            dvd7 = dvd7.filter(a => a.id !== id);
            dva2();
            dvc5();
        }

        function dvc5() {
            const alarmList = document.getElementById('dv25');
            if (dvd7.length === 0) {
                alarmList.innerHTML = '<div class="dv60">Active Alarms</div><div style="color: var(--dvdb-variant); font-size: 14px; padding: 16px; font-weight: 500;">No alarms set</div>';
                return;
            }
            let html = '<div class="dv60">Active Alarms</div>';
            dvd7.forEach(alarm => {
                html += `<div class="dv8f">
                    <div style="display: flex; flex-direction: column;">
                        <span class="dv90">${alarm.time}</span>
                        <span style="font-size: 14px; color: var(--dvd8); font-weight: 700; margin-top: -2px;">${alarm.type}</span>
                    </div>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <button class="dv91 ${alarm.active ? 'dv5d' : ''}" onclick="dvc3(${alarm.id})"></button>
                        <button class="dv92" onclick="dvc4(${alarm.id})">x</button>
                    </div>
                </div>`;
            });
            alarmList.innerHTML = html;
        }

        let dvd4;

        function dvc6() {
            const manifest = {
                name: "Multi-Utility Pro",
                short_name: "UtilityPro",
                start_url: window.location.pathname,
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#1877F2",
                icons: [{
                    src: "https://i.ibb.co/d0d5XN6f/file-00000000c0f08211bca87453b7123fee.png",
                    sizes: "192x192",
                    type: "image/png",
                    purpose: "any maskable"
                }]
            };
            
            const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
            const manifestUrl = URL.createObjectURL(manifestBlob);
            const link = document.createElement('link');
            link.rel = 'manifest';
            link.href = manifestUrl;
            document.head.appendChild(link);

            if ('serviceWorker' in navigator) {
                const swCode = `
                    const CACHE_NAME = 'utility-pro-v1';
                    self.addEventListener('install', event => {
                        event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll([location.pathname])));
                        self.skipWaiting();
                    });
                    self.addEventListener('activate', event => {
                        event.waitUntil(clients.claim());
                    });
                    self.addEventListener('fetch', event => {
                        event.respondWith(
                            fetch(event.request).catch(() => caches.match(event.request).then(res => res || caches.match(location.pathname)))
                        );
                    });
                `;
                const swBlob = new Blob([swCode], { type: 'application/javascript' });
                const swUrl = URL.createObjectURL(swBlob);
                navigator.serviceWorker.register(swUrl).catch(err => console.log('SW registration failed:', err));
            }

            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                dvd4 = e;
            });
        }

        function dvc7() {
            dva6();
            if (dvd4) {
                dvd4.prompt();
                dvd4.userChoice.then((choiceResult) => {
                    dvd4 = null;
                });
            } else {
                alert("Installation is not available. The app may already be installed, or your browser does not support it.");
            }
        }

        function dvc8() {
            dva6();
            if (navigator.share) {
                navigator.share({
                    title: 'Multi-Utility Pro',
                    text: 'Check out this Kingdom Productivity app for calculators, calendars, and focus alarms!',
                    url: window.location.href,
                }).catch(err => console.log('Error sharing:', err));
            } else {
                alert("Native sharing is not supported on this device. You can manually copy the URL in your browser bar.");
            }
        }

        if ('Notification' in window && !dv9c()) Notification.requestPermission();
        setInterval(dvbc, 1000);
        dvba();
        dvc5();
        dvbc();
        dva8();
        dvc6();