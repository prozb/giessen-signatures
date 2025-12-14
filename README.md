# Gießen Unterschriften-Dashboard (GitHub Pages / Static)

Dieses Repository enthält ein **statisches, mobilfreundliches Dashboard** zur Darstellung des aktuellen Stands einer Unterschriftensammlung.

Das Projekt ist bewusst **ohne Backend** umgesetzt und kann vollständig **kostenlos über GitHub Pages** betrieben werden.

---

## Zweck

Das Dashboard visualisiert:

- den aktuellen Stand mehrerer Listen (z. B. Stadt Gießen / Landkreis Gießen)
- Fortschritt im Verhältnis zu **Minimalziel** und **Maximalziel**
- eine einfache **Gamification** („Wer führt gerade?“)
- das **Datum der letzten Aktualisierung**
- Mehrsprachigkeit (Deutsch / Ukrainisch)

Die Daten werden aus einer JSON-Datei geladen und manuell gepflegt.

---

## Projektstruktur

```
.
├── README.md
├── docs/                  # Öffentlicher Ordner für GitHub Pages
│   ├── index.html         # Dashboard (DE / UA)
│   └── signatures.json    # Aktuelle Zahlen und Ziele
└── admin/
    └── admin.html         # Lokaler JSON-Generator (nicht öffentlich deployen)
```

**Wichtig:**  
GitHub Pages kann nur aus dem Root-Verzeichnis oder aus dem Ordner `/docs` veröffentlichen.  
Deshalb liegt die Website bewusst im Ordner **`docs/`**.

---

## signatures.json – Datenformat

```json
{
  "lastUpdated": "2025-12-14T18:40:00+01:00",
  "campaigns": [
    {
      "id": "kreis",
      "name_de": "Landkreis Gießen",
      "name_uk": "Район Гіссен",
      "collected": 21,
      "minGoal": 50,
      "maxGoal": 60
    },
    {
      "id": "stadt",
      "name_de": "Stadt Gießen",
      "name_uk": "Місто Гіссен",
      "collected": 32,
      "minGoal": 50,
      "maxGoal": 60
    }
  ]
}
```

---

## Lokal testen

```bash
cd docs
python -m http.server 8000
```

Dann im Browser öffnen:

```
http://localhost:8000
```

---

## Deployment auf GitHub Pages

1. Repository auf GitHub erstellen (Public)
2. Inhalte committen und pushen
3. Repository → **Settings → Pages**
4. Einstellungen:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
5. Speichern

Die Seite ist danach erreichbar unter:

```
https://USERNAME.github.io/REPOSITORY/
```

---

## Aktualisierung der Zahlen

1. `admin/admin.html` lokal öffnen
2. Zahlen anpassen
3. Neue `signatures.json` herunterladen
4. Datei in `docs/signatures.json` ersetzen
5. Commit & Push

---

© 2025 – Unterschriften-Dashboard
