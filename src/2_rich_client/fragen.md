### "Geplänkel"

- Ich denke nicht, dass es sich hier um "Geplänkel" handelt.
- Eine ordentliche Component Architektur ist ein wichtiges Werkzeug für das Schreiben von Frontends ist.

### React Fiber -> in Angular?

- Was ist React Fiber?
    - Reconciliation
        - Änderungen des Virtual DOM's in den realen überführen.
        - Dabei wird geprüft, welche Nodes neu gezeichnet werden müssen.
        - Dies passiert in dem der alte virtual DOM mit dem neuen Virtual Dom abgeglichen wird.
    - Scheduler
        - Kümmert sich darum in welcher Reihenfolge Arbeit ausgeführt wird.
    - Fiber (Object)
        - Ist ein JavaScript Objekt, dass zusätzliche Informationen zu einer Component hinzufügt.
        - Eine virtuelle Repräsentation der Component.
        - Es enthält z.B. auch eine pendingWorkPriority, mit dieser wird es vom Scheduler eingeordnet.
- React Fiber
    - Ersetzt den Core Algorithmus von React mit einem neuen Reconciliation Algorithmus.
    - Neben der Berechnung, ob etwas neu gezeichnet werden muss, fließt auch ein Scheduling mit ein.

- Hat Angular das auch?
    - Angular hat keinen virtuellen DOM.
    - Angular besitzt aber eine Change Detection.
        - Diese prüft ähnlich wie bei React, welche Components neu gezeichnet werden müssen.
        - Im Gegensatz zu React kann Angular die Changes nicht aufgrund eines alten vDOM's bestimmen.
        - In der Realität ist das nicht so schnell wie bei React.
        - Es kommt dabei aber auch auf die Anwendung an.

### Observables

- Observables wie läuft das unter der Haube?
    - Korrektur zum letzten Mal: Observables funktionieren nicht wie Sockets
    - Ein Observable des HttpClients gibt einen Wert zurück.

- Warum also werden dann Observables verwendet?
    - Weil Promises keine Rxjs Operatoren unterstützen. (Rxjs ist eine FRP Library für JavaScript)
    - Wenn ich meine Anwendung functional reactive aufbauen möchte, macht es das einfacher.
    - Konsistenz (mit dem Rest des Frameworks)
    - Retry, Cancel -> geht mit Observables einfacher, mit Promises nicht.

### Wie baut man Micro-frontends?

- iFrames, why not?
    - Man kann iFrames benutzen, um mehrere Webapplikationen in eine Seite einzubinden.
    - Schwierigkeiten, wenn Elemente über einander ragen sollen -> Tooltips? (über einen Teil außerhalb eines iFrames)
    - Responsiveness ist komplexer
    - Kommunikation zwischen den Frontends
- Integration zur Runtime
    - über Script Tags
    - Beim Angular Build und beim React Build fällt am JavaScript raus, dies können wir einbinden.
    - Das Containerfrontend startet dann die einzelnen Anwendungen und weißt ihnen einen Platz zu.
- Integration zur Build time?
    - Nachteil, kein unabhängiges Releasing

### Warum baut man Micro-frontends?

- Releasing
    - Continues Integration -> Continues Deployment sorgen für schnellere Releases.
    - Mit vielen Entwicklern und mehreren Teams möchten die Teams evlt. unabhängig voneinander releasen.
    - Weil sie nicht auf andere Teams warten wollen, die z.B. in Verzug geraten sind.
    - Dies ist mit Micro-frontends sehr einfach möglich.
    - Wir teilen die Anwendung einfacher in mehrere Bereiche und binden die in einen Container ein.
    - Anschließend können die einzelnen Anwendungen unabhängig released werden.
- Legacy Code
    - Legacy Anwendungen kann man nicht von heute auf morgen refactoren.
    - Trotzdem will man auf neue Frameworks umsteigen.
    - Also teilt man sein Frontend in einzelne Anwendungen und beginnt diese Teile neu zu entwickeln.
    - Dies kann man dann gleich mit neueren Frameworks machen.
- Mehrere Teams
    - Viele Köche verderben den Brei.
    - Zu Softwareentwicklung, Code Styles, Frameworks, etc. gibt es viele verschiedene Meinungen.
        - Jeder ist davon überzeugt, dass seine Vorstellung die beste ist.
        - Dies bei mehreren Teams unter einen Hut zu bekommen ist sehr schwierig.
        - Das heißt jeder kocht am Ende seine eigene Suppe.
        - Beispiele
            - Eines unserer Teams schreibt seinen Code auf Deutsch, da sie den DDD Ansatz einer Ubiquitous Language verfolgen.
            - Architekturstiele sind unterschiedlich: Ein Team arbeitet mit Clean Architecture ein anderes Teams setzt auf Entity control boundary.
            - Es werden andere Testing-frameworks genutzt: Ein Team arbeitet mit Jest in Unterstützung von Mockito.ts ein anderes Team arbeitet mit Karma.
        - Aber warum stellt man dann keine allgemeinen Guidelines auf?
            - Wer stellt diese Guidelines auf?
            - Wie viele wollen mitreden?
            - Je mehr Leute, desto größer/länger die Diskussion.
    - Wissensverteilung
        - Jedes Teams kümmert sich um eine Fachlichkeit.
        - Damit muss nicht jeder alles wissen. Schließlich wird es irgendwann auch zu viel.
        - Um die Fachlichkeiten sauber voneinander zu trennen, bieten sich eigene Artefakte und Webanwendungen an.
    - Improvements Bottom Up
        - Wenn es keine globalen Guidelines gibt, können kleinere Teams ihre Konventionen einfacher ändern.
        - Dadurch ergeben sich vielleicht Dinge, die besser funktionieren?
        - Dies können kleinere Teams aber viel besser ausprobieren als, wenn man gleich das ganze Projekt umstellt.
        - Selbstorganisierte Teams laufen nach meinem Gefühl meist besser, als wenn etwas von "oben" eingekippt wird.
        - Menschen wollen gerne selbstständig sein. Sie wollen mitspracherecht haben.
