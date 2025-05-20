# Style Guide – 321 TECH LAB

## Kolorystyka marki

- **Navy** (`#03183b`): główny kolor tła nagłówka, przycisków, tekstów na jasnym tle.
- **Yellow** (`#FFD600`): kolor akcentu, główny kolor przycisków, elementów CTA, podkreśleń.
- **Green-accent** (`#79C143`): kolor dodatkowego akcentu, używany w dekoracyjnych paskach lub gradientach.
- **Blue-accent** (`#0047BB`): trzeci kolor akcentowy, również wykorzystywany w paskach/gradientach.
- **White** (`#ffffff`): kolor tła, tekstów na ciemnym tle, elementów neutralnych.

## Font

- **Montserrat** (Google Fonts): font bazowy dla wszystkich tekstów, o różnych wagach (400, 500, 600, 700).
- W timestampach: wariant monospace dla czytelności.

## Elementy graficzne i rozmieszczenie

### Topbar (Nagłówek)
- Tło: Navy
- Logo: po lewej, wysokość 48px, margines z lewej 24px
- Tytuł: po prawej od logo, font Montserrat, biały, 1.6rem, bold
- Wysokość: 72px (mobile: 60px)

### Container (Główna sekcja)
- Maksymalna szerokość: 1200px, wyśrodkowana
- Margines górny: 72px
- Padding: 20px (mobile: 10px)

### Input-box
- Tło: białe, zaokrąglenie 8px, cień
- Padding: 32px
- Input: szerokość 100%, padding 12px, border-radius 8px, font Montserrat

### Przycisk główny (primary-button)
- Tło: Yellow
- Tekst: Navy, bold, 1rem
- Padding: 0.8rem 1.5rem
- Border-radius: 32px (pastylkowy)
- Hover: tło navy, tekst żółty, lekko podniesiony
- Font: Montserrat, bold

### Przycisk dodatkowy (secondary-button)
- Tło: Navy
- Tekst: Biały
- Padding: 0.6rem 1.2rem
- Border-radius: 32px
- Hover: tło żółte, tekst navy

### Transkrypcja (transcript-container)
- Maksymalna szerokość: 700px, wyśrodkowana
- Linie: grid z timestampem (80px) i tekstem, border dolny
- Timestamp: navy z przezroczystością, monospace, 0.9rem

### Stopka (footer)
- Tło: Navy
- Tekst: Biały, Montserrat, 500
- Dekoracyjny pasek: trójkolorowy (yellow, green-accent, blue-accent)

## Zachowanie przycisków
- **Primary:** zawsze widoczny, CTA, kontrastowy, efekt hover (podniesienie, zmiana koloru)
- **Secondary:** do akcji pomocniczych, kontrastowy
- **Disabled:** zmniejszona przezroczystość, kursor „not-allowed”

## Rekomendacje do spójności
- Stosuj te same zmienne kolorów i fonty (najlepiej przenieść do wspólnego pliku CSS)
- Przyciski: te same klasy, paddingi, border-radius, efekty hover
- Topbar: zawsze granatowy, logo po lewej, tytuł po prawej
- Container: max-width 1200px, wyśrodkowany, padding 20px
- Sekcje: zaokrąglone rogi, subtelne cienie, dużo „oddechu”
- Responsywność: media queries jak w oryginale
- Elementy dekoracyjne: trójkolorowe paski w tych samych kolorach i proporcjach
- Ikony: Lucide lub inne lekkie SVG

---

Ten przewodnik pozwoli Ci zachować pełną spójność stylistyczną na wszystkich stronach 321 TECH LAB.
