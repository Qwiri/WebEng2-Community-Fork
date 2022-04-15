# xhr Plain Javascript

### Lernziel:

- Callbacks
- Synchroner und Asynchroner Code in Javascript.
- Wie rufe ich in Plain Javascript Daten von einem Server ab?
- Wie entgehe ich mit Promises der Callbackhölle.
- Asynchronität mit Promises.
- async/await

- Diese Lernziele werden wir im "Labor" anhand verschiedener Codebeispiele erarbeiten.
- Das heißt ihr solltet diese Beispiele aktiv programmieren, damit ihr versteht was passiert.

### 1. Was sind Callbacks?

- Ein Callback ist eine Funktion, die als Parameter an eine andere Funktion übergeben wird, um zu späterem Zeitpunkt aufgerufen zu werden.
- Klingt kompliziert, ist aber total simpel.

#### Praxis: Callback Funktion schreiben

- Auf dem Branch "step_1" steht ein Beispiel mit einer Callback Funktion bereit.
- Callbacks kann man allerdings auch mit anonymen Funktionen schreiben.
- Außerdem kann man in Callbacks natürlich auch Parameter hineingeben.
- Dies ist nützlich, wenn Parameter erst zu späterem Zeitpunkt vorhanden sind.
- Für alle Beispiele sollte ich Folien einfügen, damit sich die Studierenden dies später erneut ansehen können.

### 2. Synchroner und Asynchroner Code in Javascript

- Was ist Synchron und Asynchron?
    - Synchron: Alle Programmschritte werden der Reihe nach ausgeführt.
    - Asynchron: Programmschritte werden nicht Synchron ausgeführt. Es muss nicht auf Programmschritte gewartet werden. Teilweise können Programmschritte gleichzeitig ausgeführt werden. (dies ist nur die halbe Wahrheit)
    - In Javascript gibt es kein echtes Multithreading, daher werden Programmschritte nicht wirklich gleichzeitig ausgeführt.
- Aber Synchronität und Asynchronität lässt sich einfacher verstehen, wenn man es einfach mal auprobiert.

#### Praxis: Schreiben von Synchronem und Asynchronem Code

- Auf dem Branch "step_2" steht ein Beispiel für Synchronen und Asynchronen Code bereit.
- Synchronen Code sollte jeder schon mal geschrieben haben.


### 3. Wie rufe ich in Plain Javascript Daten von einem Server ab?

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

#### Praxis: Übung zum Abrufen von Daten vom Server

- Wir erstellen einen xhr Request gegen das Backend https://icanhazdadjoke.com
- Wir rufen von dieser API einen Witz als JSON Struktur ab.
- Das machen wir über einen get Call.
- Wir müssen außerdem einen Request Header verwenden, um vom Server JSON zu bekommen.
- Jetzt können wir mal ausprobieren, wie sich der "async" Parameter auf den Call auswirkt.