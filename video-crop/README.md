# Video Crop & Cut

Die Seite liegt unter [index.html](/Users/tim-nn/Documents/GitHub/Workaround-Helper/video-crop/index.html) und kann Videos lokal im Browser laden, croppen, trimmen und wieder als MP4 ausgeben.

## Als Chrome-App installieren

- Die PWA-Dateien liegen in [manifest.webmanifest](/Users/tim-nn/Documents/GitHub/Workaround-Helper/video-crop/manifest.webmanifest) und [sw.js](/Users/tim-nn/Documents/GitHub/Workaround-Helper/video-crop/sw.js).
- In Chrome ueber `http://localhost:8000/video-crop/` oder eine veroeffentlichte HTTPS-URL oeffnen.
- Nach dem ersten Laden die Seite einmal neu laden, falls Chrome den Install-Button noch nicht direkt freigibt.
- Danach kannst du die App ueber den Button in der Seite oder das Installieren-Symbol in der Chrome-Adressleiste installieren.

## Was gebraucht wird

- Ein aktueller Browser wie Chrome, Edge oder Safari.
- Eine normale HTTP(S)-Auslieferung, zum Beispiel GitHub Pages oder ein lokaler Webserver. Direktes Oeffnen per `file://` reicht nicht.
- Genug Arbeitsspeicher und CPU, da das komplette Video im Browser verarbeitet wird.
- Die lokalen FFmpeg-Dateien im Ordner [video-crop/vendor](/Users/tim-nn/Documents/GitHub/Workaround-Helper/video-crop/vendor).

## Lokal starten

- Im Projektordner ausfuehren: `python3 -m http.server 8000`
- Danach im Browser oeffnen: `http://localhost:8000/video-crop/`
- Alternativ die Datei [start-local.command](/Users/tim-nn/Documents/GitHub/Workaround-Helper/video-crop/start-local.command) verwenden.

## Was bereits funktioniert

- Lokales Laden per Dateiauswahl oder Drag and Drop.
- Cropping mit festen Formaten `1:1`, `4:5` und `16:9`.
- Zeitliches Trimmen über Start- und Endpunkt.
- Export als MP4 mit Bild-Crop, Resize und Audio-Erhalt.

## Wichtige Hinweise

- Sehr große oder hochaufloesende Videos koennen im Browser langsam sein oder fehlschlagen.
- Welche Eingabeformate wirklich aufgehen, haengt auch davon ab, was der jeweilige Browser dekodieren kann.
- Das Tool ist jetzt nicht mehr vom CDN-Import fuer `@ffmpeg/ffmpeg` abhaengig. Entscheidend ist nur noch, dass es ueber `http://localhost` oder eine normale Website-URL geladen wird.

## Empfehlung fuer echten Einsatz

- Seite ueber GitHub Pages oder einen kleinen lokalen Server starten.
- Ein paar Testdateien pruefen: `mp4/h264`, `mov`, `hevc/iphone`, mit und ohne Audio.
- Falls gewuenscht, im naechsten Schritt koennen wir noch Fortschritt, bessere Fehlertexte und weitere Exportprofile ergaenzen.
