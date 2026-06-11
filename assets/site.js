/* Praxis Elisa Brandt — gemeinsames Seiten-Skript */
gsap.registerPlugin(ScrollTrigger);

/* ---------- Fixe Elemente injizieren (FAB, Cookie, Drawer) ---------- */
document.body.insertAdjacentHTML('beforeend', `
<a class="wa-fab" href="https://wa.me/4915254190819" target="_blank" rel="noopener" aria-label="WhatsApp Kontakt">
  <svg width="30" height="30" viewBox="0 0 32 32" fill="#fff"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.6.8 5 2.3 7L4 29l7.2-2.2c1.9 1 4 1.6 6.3 1.6h.5c6.6 0 12-5.4 12-12S22.6 3 16 3zm5.9 17c-.3.8-1.6 1.5-2.3 1.6-.6.1-1.3.2-3.8-.8-3.2-1.3-5.2-4.5-5.4-4.7-.2-.2-1.3-1.7-1.3-3.3s.8-2.3 1.1-2.6c.3-.3.6-.4.9-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.7-.5.6c-.2.2-.4.4-.2.7.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3 1.9.4.2.6.2.8-.1l1.2-1.4c.3-.3.5-.3.8-.2l2.5 1.2c.4.2.6.3.7.5.1.1.1.8-.2 1.6z"/></svg>
</a>
<div class="cookie" id="cookie">
  Diese Website nutzt technisch notwendige Cookies sowie Google Maps zur Anfahrtsdarstellung. Details in der <a href="#" data-drawer="datenschutz">Datenschutzerklärung</a>.
  <button id="cookieOk">Verstanden</button>
</div>
<div class="drawer-overlay" id="drawerOverlay"></div>
<aside class="drawer" id="drawerImpressum">
  <button class="drawer-close" data-close>×</button>
  <h2>Impressum</h2>
  <p><strong>Angaben gemäß § 5 TMG</strong></p>
  <p>Praxis Elisa Brandt — Osteopathie &amp; Coaching<br>Elisa Brandt, Heilpraktikerin<br>Auf dem Meere 12<br>21335 Lüneburg</p>
  <h3>Kontakt</h3>
  <p>Telefon: 04131 60 48 12<br>E-Mail: praxis@brandt-osteopathie.de</p>
  <h3>Berufsbezeichnung</h3>
  <p>Heilpraktikerin (verliehen in der Bundesrepublik Deutschland). Erlaubnis zur Ausübung der Heilkunde ohne Bestallung nach dem Heilpraktikergesetz (HeilprG), erteilt durch das Gesundheitsamt Lüneburg. Zuständige Aufsichtsbehörde: Gesundheitsamt Landkreis Lüneburg.</p>
  <h3>Berufsrechtliche Regelungen</h3>
  <p>Heilpraktikergesetz (HeilprG) sowie die Durchführungsverordnung, einsehbar unter www.gesetze-im-internet.de.</p>
  <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
  <p>Elisa Brandt, Anschrift wie oben.</p>
  <h3>Hinweis</h3>
  <p>Osteopathie und Coaching ersetzen keine ärztliche Diagnose oder Behandlung. Bei akuten Krankheitsbildern wenden Sie sich bitte zusätzlich an Ihre Ärztin oder Ihren Arzt.</p>
</aside>
<aside class="drawer" id="drawerDatenschutz">
  <button class="drawer-close" data-close>×</button>
  <h2>Datenschutzerklärung</h2>
  <h3>1. Verantwortliche Stelle</h3>
  <p>Elisa Brandt, Auf dem Meere 12, 21335 Lüneburg, praxis@brandt-osteopathie.de</p>
  <h3>2. Erhebung und Verarbeitung von Daten</h3>
  <p>Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch technische Zugriffsdaten (Server-Logfiles) verarbeitet — Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung der Website).</p>
  <h3>3. Kontaktformular</h3>
  <p>Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail, Telefon, Nachricht) über den Dienst Formspree Inc. übertragen und ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Eine Weitergabe an Dritte erfolgt nicht.</p>
  <h3>4. Google Maps</h3>
  <p>Zur Anfahrtsdarstellung binden wir Google Maps (Google Ireland Ltd.) ein. Dabei kann Ihre IP-Adresse an Google übertragen werden (Art. 6 Abs. 1 lit. f DSGVO). Details: policies.google.com/privacy.</p>
  <h3>5. Ihre Rechte</h3>
  <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch (Art. 15–21 DSGVO). Beschwerden richten Sie an die Landesbeauftragte für den Datenschutz Niedersachsen.</p>
  <h3>6. Speicherdauer</h3>
  <p>Anfragedaten werden gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen. Behandlungsdokumentation unterliegt der 10-jährigen Aufbewahrungspflicht.</p>
</aside>`);

/* ---------- Footer-Jahr ---------- */
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

/* ---------- Hero Word-Split (Start + Unterseiten) ---------- */
function splitWords(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.innerHTML = el.textContent.split(' ').map(w =>
      `<span style="display:inline-block;overflow:hidden;vertical-align:top"><span class="wd" style="display:inline-block">${w}</span></span>`
    ).join(' ');
  });
}
splitWords('.hero h1 .wline, .page-hero h1 .wline');
if (document.querySelector('.wd')) {
  gsap.from('.wd', { y: '105%', stagger: 0.06, duration: 1, ease: 'power4.out', delay: 0.15 });
}
if (document.querySelector('.hero')) {
  gsap.from('.hero-sub, .hero-ctas, .gbadge, .hero .eyebrow', { opacity: 0, y: 26, stagger: 0.1, duration: 0.9, ease: 'power3.out', delay: 0.5 });
  gsap.from('.hero-visual', { opacity: 0, y: 50, duration: 1.2, ease: 'power3.out', delay: 0.35 });
  gsap.from('.hero-card', { opacity: 0, x: -30, duration: 0.9, ease: 'power3.out', delay: 1.1 });
}
if (document.querySelector('.page-hero')) {
  gsap.from('.page-hero .crumbs, .page-hero p.lead, .page-hero .hero-ctas', { opacity: 0, y: 24, stagger: 0.1, duration: 0.9, ease: 'power3.out', delay: 0.4 });
  gsap.from('.page-hero .arch-sm', { opacity: 0, y: 44, duration: 1.1, ease: 'power3.out', delay: 0.3 });
}

/* ---------- Scroll Reveals ---------- */
gsap.utils.toArray('.rv').forEach(el => {
  gsap.to(el, {
    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
  });
});

/* ---------- Parallax via data-plx ---------- */
gsap.utils.toArray('[data-plx]').forEach(img => {
  gsap.to(img, {
    yPercent: parseFloat(img.dataset.plx) || -12, ease: 'none',
    scrollTrigger: { trigger: img.closest('section, header, .steps-section') || img, start: 'top bottom', end: 'bottom top', scrub: true }
  });
});

/* ---------- Image Curtain Reveal ---------- */
gsap.utils.toArray('.img-cover').forEach(cov => {
  gsap.to(cov, {
    scaleX: 0, transformOrigin: 'right',
    duration: 1.3, ease: 'power4.inOut',
    scrollTrigger: { trigger: cov.closest('section'), start: 'top 62%' }
  });
});

/* ---------- Counter ---------- */
document.querySelectorAll('.counter').forEach(el => {
  const target = parseInt(el.dataset.target);
  const obj = { v: 0 };
  gsap.to(obj, {
    v: target, duration: 2.2, ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 85%' },
    onUpdate() { el.textContent = Math.round(obj.v).toLocaleString('de-DE'); }
  });
});

/* ---------- Marquee ---------- */
const marquee = document.getElementById('marquee');
if (marquee) {
  marquee.innerHTML += marquee.innerHTML + marquee.innerHTML;
  gsap.to(marquee, { x: -marquee.scrollWidth / 3, duration: 26, ease: 'none', repeat: -1 });
}

/* ---------- Nav hide on scroll ---------- */
let lastY = 0;
ScrollTrigger.create({
  onUpdate: self => {
    const y = self.scroll();
    gsap.to('nav', { y: y > lastY && y > 140 ? -90 : 0, duration: 0.4, ease: 'power2.out' });
    lastY = y;
  }
});

/* ---------- Desktop: horizontaler Scroll + Magnetic ---------- */
gsap.matchMedia().add('(min-width: 981px)', () => {
  const track = document.getElementById('cards-track');
  if (track) {
    gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth) - 48,
      ease: 'none',
      scrollTrigger: {
        trigger: '.focus-section',
        start: 'top top',
        end: () => '+=' + (track.scrollWidth - window.innerWidth + 48),
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });
  }
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.18, duration: 0.35, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, 0.4)' });
    });
  });
});

/* ---------- Mobile Menü ---------- */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
}

/* ---------- Smooth Anchor Scroll ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      e.preventDefault();
      const target = document.querySelector(id);
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

/* ---------- Cookie Banner ---------- */
const cookie = document.getElementById('cookie');
if (!localStorage.getItem('cookieOk')) cookie.classList.add('show');
document.getElementById('cookieOk').addEventListener('click', () => {
  localStorage.setItem('cookieOk', '1');
  cookie.classList.remove('show');
});

/* ---------- Drawer (Impressum / Datenschutz) ---------- */
const overlay = document.getElementById('drawerOverlay');
const drawers = { impressum: document.getElementById('drawerImpressum'), datenschutz: document.getElementById('drawerDatenschutz') };
function openDrawer(name) { overlay.classList.add('open'); drawers[name].classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeDrawers() { overlay.classList.remove('open'); Object.values(drawers).forEach(d => d.classList.remove('open')); document.body.style.overflow = ''; }
document.querySelectorAll('[data-drawer]').forEach(el => el.addEventListener('click', e => { e.preventDefault(); openDrawer(el.dataset.drawer); }));
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeDrawers));
overlay.addEventListener('click', closeDrawers);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawers(); });

window.addEventListener('load', () => ScrollTrigger.refresh());
