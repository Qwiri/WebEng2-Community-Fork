# xhr Plain Javascript

### Lernziel:

- Wie rufe ich in Plain Javascript Daten von einem Server ab?
- Synchroner und Asynchroner Code in Javascript.
- Callbacks
- Wie entgehe ich mit Promises der Callbackhölle.
- Asynchronität mit Promises.
- async/await

- Diese Lernziele werden wir im "Labor" anhand verschiedener Codebeispiele erarbeiten.
- Das heißt ihr solltet diese Beispiele aktiv programmieren, damit ihr versteht was passiert.

### Wie rufe ich in Plain Javascript Daten von einem Server ab?

- XMLHttpRequest
    - Ist ein Javascript Objekt, dass von alles aktuellen Browsern unterstützt wird.
    - Wir erzeugen es so: `const xhr = new XMLHttpRequest();`
    - Mit diesem Objekt können wir HTTP Aufrufe an einen Server schicken.
- xhr.open(method, url, async)
    - Mit der open Methode können wir die Method (GET, POST, PUT, etc.), die Url und einen "async" Boolean setzen.
    - Method und Url sollten klar sein.
    - Mit dem Parameter "async" wird definiert, ob der Aufruf synchron oder asynchron geschehen soll.
    - Die hier gesetzte Funktion bezeichnen wir üblicherweise als Callback Function
- xhr.onload
    - Diesem Parameter des Objekts kann eine Funktion zugeordnet werden.
    - Diese Funktion wird aufgerufen, falls ein Ergebnis vom Server zurückgeschickt wird.
    - Wenn wir Daten abrufen wollen, wissen wir in dieser Funktion, dass wir eine Antwort bekommen haben.
- xhr.setRequestHeader(key, value)
    - Mit dieser Methode können wir Request Header hinzufügen.
    - Das brauchen wir z.B. für den Datentyp, den wir erwarten: `xhr.setRequestHeader('Accept', 'application/json')`
- xhr.send()
    - mit dieser Methode wird der Aufruf gestartet.