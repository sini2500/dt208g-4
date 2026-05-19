## DT208G - programmering i TypeScript

Det här är ett projekt för kursen programmering i typescript, VT 2026.

Webbplatsen är publicerad på Netlify: https://dt208g-3-sini2500.netlify.app/

---

Lab 3 går ut på att använda Angular för att bygga en webbplats med komponenter och routing.

Komponenter användes för sidor och delar av sidor, de är uppdelade i mappar under app/partials, app/pages, app/components.

Startsidan har en quiz med flera val som håller koll på antalet rätta svar. All data finns i komponenten.

Konverteringssidan har två komponenter för att konvertera värden, en med knapp och en som lyssnas på ändring av input. Data-binding används här.

CSS finns mest i den globala styles.css, men vissa komponenter har egen stilar också.

Angulars router används för navigering, och för menyn används routerLink och routerLinkActive för att visa aktiv sida.