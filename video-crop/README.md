# Video Crop & Cut

Die Seite liegt unter [index.html](/Users/tim-nn/Documents/GitHub/Workaround-Helper/video-crop/index.html) und kann Videos lokal im Browser laden, croppen, trimmen und wieder als MP4 ausgeben.

## Was gebraucht wird

- Ein aktueller Browser wie Chrome, Edge oder Safari.
- Eine normale HTTP(S)-Auslieferung, zum Beispiel GitHub Pages oder ein lokaler Webserver.
- Internetzugriff beim Laden der Seite, weil FFmpeg aktuell von `jsdelivr` geladen wird.
- Genug Arbeitsspeicher und CPU, da das komplette Video im Browser verarbeitet wird.

## Was bereits funktioniert

- Lokales Laden per Dateiauswahl oder Drag and Drop.
- Cropping mit festen Formaten `1:1`, `4:5` und `16:9`.
- Zeitliches Trimmen über Start- und Endpunkt.
- Export als MP4 mit Bild-Crop, Resize und Audio-Erhalt.

## Wichtige Hinweise

- Sehr große oder hochaufloesende Videos koennen im Browser langsam sein oder fehlschlagen.
- Welche Eingabeformate wirklich aufgehen, haengt auch davon ab, was der jeweilige Browser dekodieren kann.
- Wenn das Tool komplett offline funktionieren soll, muessen die FFmpeg-Dateien lokal ins Projekt gelegt statt per CDN geladen werden.

## Empfehlung fuer echten Einsatz

- Seite ueber GitHub Pages oder einen kleinen lokalen Server starten.
- Ein paar Testdateien pruefen: `mp4/h264`, `mov`, `hevc/iphone`, mit und ohne Audio.
- Falls gewuenscht, im naechsten Schritt lokale FFmpeg-Assets und eine klarere Fehleranzeige ergaenzen.
