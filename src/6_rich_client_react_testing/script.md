# Rich Client React Testing

- Lernziele
    - Welche verschiedenen Arten von Tests gibt es?
    - Wie schreibe ich gute Unit Tests (in Javascript)?
    - Wie schreibe ich Unit Tests für ein React Frontend?

- Arten von Tests?
    - Unit Tests
        - Automatisierte Tests, die die kleinste Einheit einer Software testen.
        - Tests auf einer sehr detaillierten Ebene, bleiben übersichtlich, da immer nur einzelne kleinste Einheiten getestet werden.
        - Haben eine schnelle Laufzeit, da nicht das ganze Frontend bzw. Backend hochgefahren werden muss.
    - Integration Tests
        - Automatisierte Tests, die teile der Anwendungen testen.
        - Z.B. wird ein einzelner Backen Service als ganzes getestet. Dabei wird alles um ihn herum gemockt und eine Endpunkte mit requests befeuert.
        - Oder ein Frontend wird integration getestet. Dabei wird dann das Backend gemockt.
        - Bei Integration Tests fokusiert man sich oft auf wichtige Szenarien, da sie eine längere Laufzeit als Unit Tests haben (Schließlich muss der Service vollständig laufen).
        - Allerdings kann man sich auch auf interessante Edge Cases konzentrieren oder Fehler die in der Vergangenheit aufgetreten sind.
            - z.B. ein Bug tritt auf, man schreibt einen Integration Test der den Bug provoziert und fixed ihn anschließend.
        - Sind nicht mehr übersichtlich, bei zu viel Detailtiefe.
    - Manuelle/automatisierte End to End UI Tests.
        - Hier wird die Software im gesamten getestet.
        - Ein Klickbot oder ein Mensch testet über die UI die Software.
        - Besonders bei größeren Anwendungen ist es einem Mensch gar nicht möglich jedes Detail zu testen.
        - Klickbots können etwas tiefer ins Detail gehen, können aber kein Styling testen.
        - Oft wird bei End to End UI Tests nicht tief ins Detail gegangen.
    - Wir konzentrieren uns heute auf Unit Tests
        - Wieso schreiben wir Unit Tests?
        - Wir bauen eine Component Architecture, um Übersichtlichkeit zu erhalten.
        - Das gleiche erhalten wir bei Tests, wenn wir die einzelnen Components Unit Testen.
        - Am besten arbeiten wir dabei Testdriven. Schließlich wollen wir beim Entwickeln der Components direkt sicherstellen, dass diese funktionieren.
        - Components sind vielseitig einsetzbar. Daher müssen sie in sich getestet sein. Der Nutzer der Component geht schließlich davon aus, dass die Component funktioniert.
        - Wir erhalten einfach schnelleres Feedback, als wenn wir jedes mal wieder im Frontend alle Features manuell testen.
        - Machen uns das Leben bei Änderungen am Code leichter. Schließlich sind wir uns mit Unit Tests sicherer, dass alles noch funktioniert und sie schlagen an, falls dem nicht so ist.
        - Wichtig ist, dass wir die Units isoliert testen. Wir wollen schließlich keine anderen Components mittesten.
        - Component wird durch Dependency Injection isoliert.
        - Childcomponents sollten wir im Test auch wegmocken.
        - Anschließend wollen wir nur bis zu den Schnittstellen aller gemockten Objekten testen.
        - Dann haben wir eine isolierten Unit Test.

- Wie schreibe ich gute Unit Tests in Javascript?
    - Was sollten wir im Frontend testen?
        - Javascript Logik, z.B. unseren TodoHttpClient
        - Javascript Logik in unseren Components
        - Dynamisches rendering in Components
            - Werden die dynamischen Daten, die wir reingegeben haben auch angezeigt?
            - Wird ein Loadingspinner angezeigt?
    - Wie sollten wir eine Component Unit Testen?
        - Nutzer interagiert mit Buttons, Textfelder, etc.
        - Nutzer ruft keinen Javascript Code direkt auf.
        - Wenn wir eine Component testen, sollten wir wie der Nutzer Events im HTML auslösen und prüfen, ob das erwartete passiert ist.
    - Testing mit Javascript -> Codebeispiel
    - Wie bekomme ich eine saubere Struktur in meine Tests
        - Die Testbeschreibung sollte einem Schema folgen
            - Oft hilft es auch einen Satz zu bilden.
            - Z.B. "Object ... should ... when."
            - Es gibt verschiedene Schemas, wichtig ist nur, dass ihr ein Schema habt.
            - Testbeschreibungen sind damit einfacher für anderen Entwickler zu verstehen und dient als lebende Doku.
            - Beispiel Code.
        - Codebeispiel keine duplizierung in Testbeschreibungen.
            - Sorgt wieder für gut strukturierte Tests.
            - Tests für eine Methode liegen beisammen.
            - Tests für einen Zustand liegen beisammen.
        - SRP
            - Jeder Test sollte nur eine Sache testen.
            - Im besten Fall ein "expect" pro Test.
            - Macht es einfacher eine Testbeschreibung zu finden.
            - Im Fehlerfall erkennt man das Problem schneller.
        - Codeduplizierung im Test
            - Kontroverses Thema.
            - Einige Entwickler sehen Codeduplizierung im Test nicht als Problem.
            - Manchmal kann es mehr Übersichtlichkeit verschaffen Code zu duplizieren.
            - Es gelten aber die üblichen Gründe Codeduplizierung zu vermeiden.
            - Dazu gibt es verschieden Möglichkeiten.
            - Beispiele für beforeEach() -> parametrisierte Tests.
    - Reproduzierbar.
        - Tests müssen reproduzierbar sein.
        - "date.now()".
    
- Unit Testing in React.
    - Testsyntax mit der React Testing Library erklären.
    - Evtl. können wir hier auch erst auf die normale Syntax eingehen, wobei ich die Testing Library Syntax deutlich besser finde.
    - Anschließend Tests für die Components schreiben.
    - Wenigstens eine Page, Organism, Molecule und Atom Component testen.