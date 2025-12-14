# Gießen Unterschriften-Dashboard (Netlify / Static)

## Dateien
- `index.html` – Dashboard (DE/UA), lädt Daten aus `signatures.json`
- `signatures.json` – Zahlen + lastUpdated
- `admin.html` – Lokaler JSON-Generator (Download einer neuen `signatures.json`)

## Lokal testen
Öffne `index.html` im Browser.
Hinweis: Manche Browser blockieren `fetch()` bei `file://`.
Am einfachsten:
- VS Code → Live Server
oder
- Python: `python -m http.server 8000` (im Projektordner), dann `http://localhost:8000`

## Netlify
1. Repo an Netlify hängen (oder Ordner drag & drop)
2. `signatures.json` aktualisieren (commit/push)
3. Fertig.

## Update ohne JSON manuell zu editieren
1. Öffne `admin.html` lokal
2. Werte ändern
3. `signatures.json herunterladen`
4. Datei im Projekt ersetzen → commit/push
