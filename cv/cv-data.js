/* One source of truth for every CV layout. Fill a placeholder here (set todo: false)
   and it updates in all eight versions. */
const A = '../assets/';

/* Shown inside the CV tab (iframe): drop the grey desk and padding so the A4 sheet fills the frame exactly.
   Done here, not from the parent page, so it also works when the files are opened straight from disk. */
if (window.self !== window.top) document.documentElement.classList.add('framed');
/* the "Print / Save PDF" button in the CV tab sends this message */
addEventListener('message', e => { if (e.data === 'print-cv') window.print(); });

const CV = {
  name: 'Hanna Kachurouskaya',
  photo: A + 'hanna.jpg',                      // drop the photo here; a placeholder shows until then

  contact: [
    { label: 'Email', text: 'valynets.h@gmail.com', href: 'mailto:valynets.h@gmail.com' },
    { label: 'Phone', text: '+48 797 314 747', href: 'tel:+48797314747' },
    { label: 'LinkedIn', short: true, text: 'linkedin.com/in/hanna-kachurouskaya', href: 'https://www.linkedin.com/in/hanna-kachurouskaya-096aab114/' },
    { label: 'Behance', short: true, text: 'behance.net/ValHanna', href: 'https://www.behance.net/ValHanna' },
    { label: 'Portfolio', short: true, printOnly: true, text: 'valhannal.github.io/CV_VFX_portfolio', href: 'https://valhannal.github.io/CV_VFX_portfolio/' },
  ],

  details: [
    { label: 'Based in', text: 'Kraków, Poland' },
    { label: 'Languages', text: 'English, Polish, Russian' },
  ],

  profile: 'I have 10+ years in CGI production, 4+ as a senior artist at Millarc CGI, and since 2024 I have also been developing pipeline tools. I use AI tools at every stage, from concept to final frames. In Gallup CliftonStrengths, Ideation is my number one strength.',

  skills: [
    { group: '3D & Animation', items: 'Houdini · 3ds Max · Blender · AutoCAD · Revit · Animation · Lookdev · lighting · rendering · Redshift · Corona · V-Ray · Unreal Engine' },
    { group: 'Compositing & Post', items: 'Nuke · Fusion · After Effects · DaVinci Resolve · Photoshop · Color correction' },
    { group: 'AI Tools', items: 'ComfyUI · Midjourney · Kling · Photoshop AI · ChatGPT · Claude · Cursor · AI-assisted concept, image and video generation · AI in production workflows' },
    { group: 'Technical', items: 'Python · VEX · Git/GitHub · Deadline · Flow Production · custom tooling' },
    { group: 'Soft Skills', items: 'Mentoring and knowledge sharing · Teamwork and cross-department collaboration · Building long-term working relationships' },
  ],

  experience: [
    { title: 'Senior VFX Artist', org: 'Millarc CGI, Kraków', from: 'Mar 2022', to: 'Jun 2026',
      bullets: [
        '3D animation, motion design and product visualization for 50+ commercial projects for Huawei, OnePlus, Xiaomi, OPPO and Vivo, including motion wallpapers featured in <a href="https://www.stashmedia.tv/mobile-motion-millarc-shows-off-smartphone-wallpapers/">Stash Magazine</a>.',
        'Houdini FX: pyro, volumes, FLIP, particles, RBD, Vellum, KineFX, procedural setups in VEX, wedging, USD scene assembly in Solaris, lookdev and rendering of effects in Redshift, Karma and V-Ray.',
        'Took each shot from animation and effects through lookdev, lighting, rendering and compositing to final delivery.',
        'Brought generative AI into production, from concept frames to final materials, and showed the team how to use it.',
        'Integrated AI-generated material with CG and live-action footage in compositing, beyond standalone generation.',
        'Led concept development and mentored junior artists.',
      ] },
    { title: 'Pipeline Developer', org: 'Millarc CGI, Kraków', from: 'Mar 2024', to: 'Jun 2026',
      text: 'Built the studio’s internal tools and automated routine tasks such as file naming, preview generation and project tracking, so artists could focus on creative work.' },
    { title: '3D Artist, Architectural & Product Visualization', org: 'The Digital Bunch, VERO Digital, freelance', from: 'Oct 2016', to: 'Mar 2022',
      text: 'Architectural, interior and product visualization from drawings to post-production; led projects and mentored junior artists.' },
  ],

  /* thumbnails only (footer strip); the project list is in the portfolio */
  projects: [
    { year: 2026, title: 'Huawei Maestro', text: 'AI environment, patronus volume on a client dragon, cloud sim, Fusion comp', thumb: 'proj-05/thumb.png' },
    { year: 2025, title: 'Xiaomi Mix Flip 2', text: 'Solo, concept to delivery: AI concept, vellum petals, particle shimmer', thumb: 'proj-03/thumb.png' },
    { year: 2025, title: 'OnePlus ACE 6T', text: 'Six procedural launch shots, look R&D, lighting and delivery', thumb: 'proj-02/thumb.png' },
    { year: 2024, title: 'Huawei Mate X6', text: 'Factory-set wallpaper: KineFX base with stacked vellum passes', thumb: 'proj-01/thumb.jpg' },
    { year: 2024, title: 'Xiaomi Mix Fold 4', text: 'Particle-only wallpaper, shape and behaviour R&D', thumb: 'proj-04/thumb.png' },
    { year: 2023, title: 'Xiaomi Mix Fold 3', text: 'First solo wallpaper: layered pyro, RBD, Karma', thumb: 'proj-07/thumb.png' },
    { year: 2023, title: 'Huawei Colombo', text: 'Watch Ultimate launch film: many shots, 3D, FX, animation and comp', thumb: 'proj-10/thumb.png' },
    { year: 2023, title: 'Xiaomi 13 Pro', text: 'Snow particles colliding with phone and hands', thumb: 'proj-09/thumb.png' },
    { year: 2022, title: 'OPPO Swan', text: 'Feather fan wallpaper with a particle layer, 120 fps delivery', thumb: 'proj-08/thumb.png' },
  ],

  education: [
    { title: 'Bachelor of Engineering', org: 'Brest State Technical University, Belarus', when: '2009–2014' },
  ],
};

/* ── small render helpers shared by the layouts ── */
const todo = (text, on) => on ? `<span class="todo">${text}</span>` : text;
const when = e => `${e.from} – ${e.to}`;
const H = {
  photo: (cls = 'photo') => `<div class="${cls}"><img src="${CV.photo}" alt="${CV.name}" onerror="this.remove()"><span class="ph mono">Photo<br>assets/hanna.jpg</span></div>`,
  // web links show as a short name with an arrow; the portfolio link is hidden on the site (it is the site) and appears in the printed PDF
  contactLines: () => CV.contact.map(c => `<a class="contact-line${c.printOnly ? ' print-only' : ''}" href="${c.href}"${c.short ? ' target="_blank" rel="noopener"' : ''}>${c.short ? c.label + ' ↗' : c.text}</a>`).join(''),
  contactRows: () => CV.contact.map(c => `<div class="row kv"><span>${c.label}</span><a href="${c.href}">${c.text}</a></div>`).join(''),
  detailRows: () => CV.details.map(d => `<div class="row kv"><span>${d.label}</span><span>${todo(d.text, d.todo)}</span></div>`).join(''),
  skillRows: () => CV.skills.map(s => `<div class="row skill"><b>${s.group}</b><span>${s.items}</span></div>`).join(''),
  jobRows: () => CV.experience.map(e => `<div class="row job"><h3>${e.title}<span class="org">${e.org}</span></h3><span class="mono">${when(e)}</span>${e.bullets ? `<ul>${e.bullets.map(x => `<li>${x}</li>`).join('')}</ul>` : `<p>${e.text}</p>`}</div>`).join(''),
  projectRows: () => CV.projects.map(p => `<div class="row proj"><span class="mono">${p.year}</span><b>${p.title}</b><span>${p.text}</span></div>`).join(''),
  eduRows: () => CV.education.map(e => `<div class="row job edu"><h3>${e.title}${e.org ? `<span class="org">${e.org}</span>` : ''}</h3><span class="mono">${e.when}</span></div>`).join(''),
  workStrip: (n = 6) => CV.projects.slice(0, n).map(p => `<img src="${A + p.thumb}" alt="${p.title}">`).join(''),
};
