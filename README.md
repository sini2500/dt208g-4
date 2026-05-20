## DT208G - programmering i TypeScript

Det här är ett projekt för kursen programmering i typescript, VT 2026.

Webbplatsen är publicerad på Netlify: https://dt208g-4-sini2500.netlify.app/

---

Lab 4 går ut på att använda Angular för att presentera data från en JSON-källa i en sorterbar och sökbar tabell.

# Metod

Lösningen använder sig av signals, databinding, HttpClient, interfaces, services och components, m.m.

# Interface

Ett interface skapades i app/interfaces/course.ts.

Där defineras vilken data som ett Course-objekt ska innehålla; code, coursename, progression och syllabus. De är alla strängar.

# Service

En service skapdes i app/services/courses.ts.

Den sätter upp två signal-variabler för att lagra info om kurserna och hurvida kurserna har laddats.

Den skapar en httpClient som används för att hämta json-data. Detta görs i klassens constructor.

Den har en funktion, loadCourses(), som hämtar kurserna från json-filen under public/ramschema.json.

loadCourses() är en async funktion, med try{} finally{} sektioner. Så den läser in kurserna från fil och när den lyckas sätts loading till false.

loadCourses() använder sig av Course-interface för att se till att det som hämtas från JSON-filen är korrekt format.

# Komponent för tabell

En komponent för kurstabellen skapades i app/compontents/courses. 

Den här komponenten använder sig av CourseService, en instans skapas i komponentens contructor och den frågar direkt vad kursdata och loading-status är.

Komponenten har fyra variabler, två som speglar data från CourseService och två som håller koll på söktermen och sorteringsfältet.

Komponentens HTML har ett input-fält som är kopplat till en funktion som uppdaterar söktermen. Detta görs med databinding, ngModel och ngModelChange på input-fältet.

Komponentet har en funktion som filtrerar kurser baserat på angiven sökterm och valt sorteringsfält. Detta görs med Angulars "computed" signal.

Komponentens HTML använder sig av de filtrerade kurserna för att visa rader i tabellen. Här används @if, @else, @for och @empty direktiv för att visa olika resultat.


# Andra delar

CSS och andra komponenter som används för startsidan, header och footer togs från en tidigare uppgift.