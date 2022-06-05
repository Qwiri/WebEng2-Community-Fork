# Rich Client React

Comment: Wir sollten noch mal erklären was Ajax ist bei der Vorlesung davor.
Comment: Wir sollten noch einmal darüber nachdenken, ob wir auch in Plain Javascript eine Todo App bauen wollen. Damit kommen dann die Vorteile von React und der Dom Manipulation stärker zur Geltung und man weiß es mehr zu schätzen.

- Lernziele
    - Was ist eine Single Page Application?
    - Wie kann ein Frontendframework wie React uns dabei helfen eine Single Page Application zu schreiben?
    - Wie hilft uns eine Component Architectur einfacher ein Frontend zu schreiben?
    - Wie bringe ich Ordnung in meine Component Architectur?
    - Micro Frontends?

- Was ist eine Single Page Application?
    - Definition
    - Konzept erklären -> Schaubild SPA
    - Was gewinnen wir damit?
        - Ajax geht bereits in eine ähnliche Richtung.
        - Wir wollen vermeinden die Seite bei jeder Änderung neu aus dem Backend auszuliefern.
        - Damit sparen wir Datentransfer.
        - Auch grade Daten geladen werden, kann der Nutzer schon etwas anderes machen.
        - Hier kann ich die Folien aus der Motivation wiederverwenden.
    - Gibt es jetzt gar keine Navigation mehr?
        - Doch muss es immernoch geben. Das ist für den Nutzer am intuitivsten. 
        - Besonders wenn man Links zu bestimmten Ressourcen teilen möchte.
        - Wir tauschen den Inhalt der Seite aus und müssen dann im Anschluss auch die Url entsprechend anpassen.
- Wie hilft uns React bei einer SPA?
    - In Plain Javascript wird es sehr aufwändig eine SPA zu schreiben. Evtl. bauen wir sogar zumindest mal 1 - 2 Seiten.
    - React bringt viele Tools mit, um dynamische Daten im Dom anzuzeigen.
    - React hilft uns auch Navigation in unsere SPA zu bringen, ohne das wir selbst großen Aufwand betreiben müssen.
    - React bietet auch Change Detection (besonders interessant wenn wir zum Thema Component Architecture gehen)
    - Ziel ist hier erstmal mit der Syntax klar zu kommen.
- Wie hilft uns eine Component Architektur einfacher ein Frontend zu schreiben?
    - Auf Websites gibt es oftmals wiederkehrende Elemente.
        - Anstatt diese Elemente immer neu zu schreiben sollten wir sie wiederverwenden.
        - Dies sorgt für weniger Arbeit und mehr Konsistenz im Design.
    - Wenn wir jede Seite über nur eine React Function abbilden, wird dies schnell unübersichtlich.
        - Je mehr Features auf der Seite sind, desto unübersichtlicher wird es.
        - Teilen wir sie in verschiedene Componenten, so wird der Code übersichtlicher.
        - Divide et impera -> Also quasi wie im Backend.
    - Änderungen können einfacher durchgeführt werden, weil wir die einzelnen Bestandteile einer Seite besser voneinander separieren.
        - Die Übersichtlichkeit die wir damit gewinnen, dass wir die Seite in kleinere Stücke aufteilen, sorgt für schnelleres Coden.
    - Was kann alles eine Component sein?
    - Was macht eine Component aus?
- Wie bringe ich Ordnung in meine Component Architektur?
    - Atomic Design.
    - Storybook.
- Micro Frontends
    - Was bringt das?
    
