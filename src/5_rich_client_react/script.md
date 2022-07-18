# Rich Client React

Comment: Wir sollten noch mal erklären was Ajax ist bei der Vorlesung davor.
Comment: Wir sollten noch einmal darüber nachdenken, ob wir auch in Plain Javascript eine Todo App bauen wollen. Damit kommen dann die Vorteile von React und der Dom Manipulation stärker zur Geltung und man weiß es mehr zu schätzen.

- Lernziele
    - Wie schreiben wir eine SPA in Javascript?
    - Wie kann ein Frontendframework wie React uns dabei helfen eine Single Page Application zu schreiben?
    - Wie hilft uns eine Component Architectur einfacher ein Frontend zu schreiben?
    - Wie bringe ich Ordnung in meine Component Architectur?
    - Micro Frontends?

- Schreiben einer SPA in Javascript
    - Erinnerung an die Vorlesung vor 2 Wochen.
    - Hier haben wir gelernt wie wir mit hilfe von Ajax Daten von einem Web Service laden können.
    - Das gelernte wissen wollen wir nun nutzen, um eine SPA in plain Javascript zu schreiben.
    - Natürlich nur rudimentät, das heißt kein Routing, kein editieren von Daten.
    - Ein Seitenaufruf, Daten werden nachgeladen und angezeigt -> Todo Listenansicht und Detailansicht, fertig.
- Wie hilft uns React bei einer SPA?
    - Dynamische Daten anzeigen mit React + Übung
        - React functions
        - jsx dynamic rendering
    - Routing mit React + Übung
        - React Router
        - useNavigate()
        - useParams()
    - Laden dynamischer Daten
        - fetch
        - dependency injection (context injection)
    - React hooks (state in react) + Übung
        - useState()
        - useEffect()
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
    - Übung: Aufteilung der Listenansicht in Components -> Branch bereitstellen, in dem die Basiscomponents schon bereit stehen.
- Wie bringe ich Ordnung in meine Component Architektur?
    - Atomic Design.
    - Storybook + Übung
- Micro Frontends
    - Was bringt das?
    - Ausblick und etwas Theorie.

## Todo's

- Wir tauschen die Client und Server Vorlesung miteinander.
- Damit haben wir dann bereits einen Server, wenn wir damit beginnen die SPA zu entwickeln.
- Der Abschnitt über SinglePageApplications wandert in die Vorlesung 2_ajax_in_plain_javascript. (Oder wird zu einer eigenen Vorlesung)