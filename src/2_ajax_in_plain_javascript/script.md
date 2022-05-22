# Ajax in Plain Javascript

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
    - Asynchroner Code muss für länger dauernde Prozeduren nicht blockieren. Wir können in der zwischenzeit bereits anderen Code ausführen, ohne zu warten.
- Synchronität und Asynchronität lässt sich einfacher verstehen, wenn man es einfach mal auprobiert.

#### Praxis: Schreiben von Synchronem und Asynchronem Code

- Auf dem Branch "step_2" steht ein Beispiel für Synchronen und Asynchronen Code bereit.
- Synchronen Code sollte jeder schon mal geschrieben haben.
    - Daher hier einfach mal drei console.log hinter einandern.
- Probiert einfach mal aus, in welcher Reihenfolge der Asynchrone Code ausgeführt wird.
    - Mit dem "setTimeout" simulieren wir eine längere Prozedur.
    - Wie wir außerdem sehen, wird in die "setTimeout" Funktion ein Callback hineingegeben.
    - Dieser Callback wird von der "setTimout" Funktion asynchron aufgerufen, nachdem 1000 ms gewartet wurde. (meistens zumindest)
- Warum meistens?
    - Da in Javascript kein Multithreading möglich ist, müssen alle asynchronen Codeabschnitte auf einem Thread ausgeführt werden.
    - "setTimeout" pusht den Callback einfach nur auf einen "callstack" der nacheinander abgearbeitet wird.
    - Die Zahl gibt dabei an, wie lange gewartet werden soll, bis die Callback Funktion auf dem Stack landet.
    - Wenn allerdings aktuell noch Code ausgeführt wird, kann es auch länger dauern, bis der Callback ausgeführt wird.
- Am besten ihr probiert hier noch ein wenig rum und versucht auch mal verschachtelte Timeouts oder mehrere Timeouts auf einer Ebene.

### 3. Wie rufe ich in Plain Javascript Daten von einem Server ab?

- Auf dem Branch "step_3" steht ein Beispiel für das Abrufen von einem Dad Joke über eine JSON API bereit.
- XMLHttpRequest
    - Ist ein Javascript Objekt, dass von alles aktuellen Browsern unterstützt wird.
    - Wir erzeugen es so: `const xhr = new XMLHttpRequest();`
    - Mit diesem Objekt können wir HTTP Aufrufe an einen Server schicken.
- xhr.open(method, url, async)
    - Mit der open Funktion können wir die Method (GET, POST, PUT, etc.), die Url und einen "async" Boolean setzen.
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
- Hier sehen wie jetzt auch, wieso wir Asynchronität und Callbacks für Backendaufrufe brauchen.
- Wir wollen den Programmcode während eines Backendcalls nicht blockieren lassen, wollen aber das Ergebnis über einen Callback zurück erhalten.

### 4. Mehrere Backendrequests

- Auf dem Branch "step_4" steht ein Beispiel dafür bereit, mehrere Witze vom Backend abzurufen.
- Dabei habe ich eine Funktion erstellt, die für uns einen get HTTP Request abschickt.

#### Praxis: Verschiedene Möglichkeiten dieser Backendrequests

- Öffnet mal den Netzwerk Tab eures Browsers und schaut euch an, wie die Requests gegen den Server geschickt werden.
- Ihr solltet sehen, dass sie nacheinander gegen das Backend geschickt werden.
- Wie könnten wir den Code umbauen, damit sie gleichzeitig gesendet werden und wir Zeit spaaren?
- Wie muss der Code aussehen, wenn wir sie gleichzeitig senden wollen, wir aber den HTML Code erst anpassen wollen, wenn beide Witze zurückgekommen sind?
    - Kleiner spoiler, es wird hässlich...

### 5. Promises

- Auf dem Branch "step_5" steh ein Beispiel für Promises bereit.
- Promises erleichtern uns das Arbeiten mit asynchronem Code.
    - Statt in die get Funktion einen Callback hinein zu geben, gibt uns die Funktion ein Promise zurück.
    - Dies ist grundlegend schon intuitiver, da wir wie bei einer regulären Funktion einen Rückgabewert haben.
    - Da es sich aber um asynchronen Code handelt, ist das Promise nur ein versprechen, dass hier ein Wert (oder Fehler) zurück kommt.
- Das Beispiel hier auf dem Branch könnte man auch problemlos mit Callbacks schreiben. 
- Wie auch bei einem Callback können wir bei einem Promise Code ausführen, wenn es resolved wurde.
    - Mit .then() können wir auf darauf reagieren.
- Wie wir hier auch sehen, wird im Fehlerfall kein resolve, sondern ein reject aufgerufen.
    - über .catch() können wir auf einem Promise auf diesen Fehler reagieren.
- Mit Promises können wir das Problem von vorhin einfach lösen. 
    - Auf Branch "step_6" ist ein Beispiel dafür.
    - Promise.all kann darauf warten, bis mehrere Promises resolved sind und anschließend einen Callback ausführen.
    - Dies uns andere Beispiele machen das arbeiten mit Promises angenehmer.

### 6. Async/await

- Auf dem Branch "step_7" steht ein Beispiel für async/await bereit.
- Async/await macht das arbeiten mit asynchronem Code und Promises noch einfacher.
- Mit async wird dabei markiert, dass eine Funktion asynchronen Code enthält und damit selbst asynchron ist.
- Mit await können wir auf asynchronen Code warten und ihn damit in einem gewissen Scope wieder synchron machen.
- Beim selbst Programmieren sollte es einfacher zu verstehen sein.

#### Praxis: Zwei Witze mit async/await

- Die Funktion showDadJoke() ist mit dem async Keyword versehen. Damit wissen wir, dass die Funktion asynchronen Code enthält.
- Innerhalb dieser Funktion warten wir synchron, dass erst der eine Witz zurückgegeben wird und anschließend warten wir auf den zweiten Witz.
- Wenn wir also auf einen Wert vom Backend warten wollen, da wir ihn z.B. im nachfolgenden Code zwingend brauchen, können wir dies so sicherstellen und den Code quasi wieder synchron werden lassen.
- Diese schreibweise macht es auf jeden Fall leserlicher, als die Callbacks, die wir vorhin hatten.
- Aktuell werden die Requests wieder nacheinander ans Backend geschickt. Wie könnte der Code aussehen, damit die Requests gleichzeitig abgeschickt werden? 
- Ein Beispiel dafür steht auf Branch "step_8" bereit.

### 7. Praxis 

- Todo Listen Anwendung in Plain Javascript schreiben?
- Evtl. wenn wir noch Zeit dazu haben?
- Können wir im Vorfeld hier evtl. einen public Backend Server aufsetzen @Iven

### Todos:

- Sollten wir noch mal eine Einleitung zu Ajax geben? 
    - Also was ist Ajax?
    - Warum machen wir das?