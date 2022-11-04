# Rich Client React Redux

- Lernziele
    - Was ist Redux, bzw. StateManagement?
    - Wozu braucht man StateManagement?
    - Wie baue ich Redux in mein React Frontend ein?

- Was ist Redux, bzw. StateManagement?
    - Redux ist eine Implementierung eines StateManagements.
    - StateManagement ist wie der Name schon sagt, das verwalten von Daten.
    - Hinter Redux steckt dabei ein spezielles Konzept des StateManagements, mit dem die State Änderungen strukturiert ablaufen sollen.
- Wozu braucht man StateManagement?
    - Frontends werden immer größer.
    - Immer mehr Daten werden also verwaltet.
    - Das verwalten der Daten wird immer schwieriger, je größer das Frontend wird.
    - Beispiel:
        - Einfach ist es, wenn eine Component einen Backendcall macht und anschließend die Daten in der Component gespeichert und verarbeitet werden und anschließend ans Backend zurückgeschickt werden, wie in unserer Todo App.
        - Schwieriger wird es, wenn sich Änderungen von Daten auch auf weitere Daten auswirken und damit anderen Components beeinflussen. 
        - Durch die Anpassung in einer Component, ändert sich ihr Datenmodell, damit könnte sich ein weiteres Datenmodell ändern, welches wiederum ein update in einer völlig anderen Component auslöst.
        - Mit einem stetig wachsenden Frontend, muss dies zwangsläufig in Chaos enden.
    - Irgendwann ist man auf diese Weise an einem Punkt angekommen, an dem man nicht mehr weiß, wo, wie, wann und warum sich der State ändert.
    - In dieser Situation wird es unheimlich schwer Bugs zu reproduzieren oder neue Features hinzuzufügen.
    - Absteits von einer Menge Chaos, die wir bei einer gewissen größere unseres Frontends und einer gewissen Komplexität der State Änderungen erreichen, gibt es natürlich noch weitere Dinge, die das StateManagement verkomplizieren.
    - Daten sollten z.B. geladen werden, bevor wir eine Navigation auslösen. Bisher haben wir die Daten immer aus der eigentlichen Component geladen. Evtl. möchte man aber keinen Loadingspinner auf der Seite, sondern auf einem Button auf der vorherigen Seite. Wie bekommen wir die Daten nun in die richtige Component?
    - Evtl. wollen wir die Daten nicht doppelt aus dem Backend laden und im Frontend cachen? Evtl. sogar im local storage speichern?
    - Was ist wenn wir eine Historie haben wollen, über die letzten Änderungen des Nutzers? Z.B. um eine Historie anzuzeigen oder ein "Undo" Feature zu implementieren.
    - Schwierig wird es auch, wenn man Business Logik von dem Components trennen möchte, wenn man unterschiedliche UI's mit der gleichen Business Logik nutzen möchte.
- Wie funktioniert Redux?
    - Bei all diesen Problemen hilft uns Redux.
    - Wie bei allem, muss man aber auch Nachteile in Kauf nehmen.
    - Grundlegend sorgt Redux für eine einheitliche Struktur beim StateManagement.
    - Alle Daten werden global gespeichert, damit hat man den gesamten Application State immer im Blick, ohne in unzählige Components schauen zu müssen. Außerdem kann von überall auf den State zugegriffen werden.
    - Wir wollen allerdings nicht, dass der State von überall bearbeitet werden kann, das würde wieder zum Chaos führen.
    - Daher ist der State unveränderlich. Jedes mal wenn eine Änderung ausgeführt wird, wird ein neuer State erstellt. Damit hat man eine einwandfreie Historie, da man zum letzten State zurückspringen kann.
    - Änderungen können nur über so genannten Actions ausgelöst werden. Damit wird klar festgelegt, welche Änderungen auf dem State ausgeführt werden können. Sie sind alle in den "Actions" beschrieben.
    - Außerdem gibt es nur eine zentrale Stelle, an denen Änderungen am State durchgeführt werden können. Der Reducer verarbeitet die Actions und erstellt daraus einen neuen State. 
    - Somit wissen wir, wo, wie, wann und warum eine Änderung ausgeführt wird.
    - Außerdem können wir über die Actions und die Historie des States nachvollziehen, in welcher Reihenfolge was geschehen ist und die evtl. rückgängig machen.
    - Da die Daten alle an einem Ort gespeichert und von hier auch von den Components abgerufen werden, sollten sie nicht doppelt aus dem Backend geladen werden, außerdem werden sie hier quasi gecached.
    - Die Business Logik und der State ist damit auch abgekapselt. Wir können verschiedene UI's an die Logik anschließen.
    - Natürlich gibt es noch weitere schöne Gründe Redux zu verwenden.
    - Wie allerdings schon erwähnt bringt das auch Nachteile mit sich. Struktur ist häufig auch overhead. Viele Entwickler beschweren sich über den "boilerplate" Code, den man bei Redux schreiben muss. Struktur bringt auf der anderen Seite auch Overhead mit sich, da man es überall konsistent und ähnlich aufgebaut haben möchte, zwingt das einen selbst bei einfachen Actions immer über den Reducer einen neuen State zu erzeugen. Das wäre in einzelnen Situationen sicherlich auch einfacher gegangen.




## Todo's:

- Die alte StateManagement Vorlesung ist zu großen Teilen nicht optimal.
- Warum man StateManagement braucht ist in diesen beiden Quellen gut erklärt.
- https://react-redux.js.org/introduction/why-use-react-redux
- https://redux.js.org/understanding/thinking-in-redux/motivation