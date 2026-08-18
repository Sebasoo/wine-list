"""Ищет позиции вишлиста в каталоге vino&vino и сохраняет ссылки на фото бутылок."""

import json
import subprocess
import time
import urllib.parse

API = "https://vinovino.by/api/v1/search?q="
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/126 Safari/537.36"
)

# key -> список поисковых запросов от точного к общему
QUERIES = {
    "coffee-honduras": ["MARCALA", "Гондурас", "SHG EP"],
    "coffee-ethiopia": ["SIDAMO", "Эфиопия", "OROMIA"],
    "codorniu": ["Codorniu Grenache", "Codorniu", "Grenache"],
    "pares-balta": ["Pares Balta Mas Petit", "Pares Balta", "Mas Petit"],
    "bastor": ["Bastor Lamontagne", "Bastor", "Lamontagne"],
    "keush": ["Keush Origins", "Keush", "Кеуш"],
    "rohe": ["Rohe Southern Valley", "Southern Valley", "Rohe"],
    "phelan": ["Frank Phelan", "Phelan", "Saint Estephe"],
    "qvintvs": ["Qvintvs", "De Qvintvs", "Saint Emilion"],
    "farnese": ["Cinque Autoctoni", "Edizione", "Farnese"],
    "brane": ["Baron De Brane", "Brane", "Margaux"],
    "larrivet": ["Larrivet", "Haut Brion", "Pessac Leognan"],
    "sancerre": ["Sancerre", "Henri Bourgeois", "Antan"],
    "corimbo": ["Corimbo", "Ribera Del Duero", "Reserva Ribera"],
    "penfolds": ["Penfolds", "Bin 128", "Coonawarra"],
    "prunotto": ["Prunotto", "Barolo Bussia", "Barolo"],
    "antinori": ["Marchese Antinori", "Franciacorta", "Antinori"],
}


def fetch(term, attempts=4):
    url = API + urllib.parse.quote(term)
    for attempt in range(attempts):
        proc = subprocess.run(
            ["curl", "-s", "--max-time", "20", "-A", UA, "-H", "Accept: application/json", url],
            capture_output=True,
            text=True,
        )
        if proc.returncode == 0 and proc.stdout.strip():
            try:
                return json.loads(proc.stdout)
            except json.JSONDecodeError:
                pass
        time.sleep(1.5 * (attempt + 1))
    return None


def products(term):
    data = fetch(term)
    if not isinstance(data, list):
        return []
    for block in data:
        if isinstance(block, dict) and "total" in block:
            return block.get("data") or []
    return []


results = {}
for key, terms in QUERIES.items():
    print(f"» {key}", flush=True)
    found = None
    for term in terms:
        items = products(term)
        for item in items:
            if not item.get("picture"):
                continue
            found = {
                "query": term,
                "name": item.get("name"),
                "picture": item["picture"],
                "url": item.get("url"),
                "price": item.get("price"),
            }
            break
        if found:
            print(f"  ✓ [{term}] {found['name']}", flush=True)
            break
        print(f"  · [{term}] пусто ({len(items)})", flush=True)
    if not found:
        print("  — не найдено", flush=True)
    results[key] = found
    time.sleep(0.4)

with open("tools/found_images.json", "w", encoding="utf-8") as fh:
    json.dump(results, fh, ensure_ascii=False, indent=2)

hit = sum(1 for v in results.values() if v)
print(f"\nИтого: {hit}/{len(QUERIES)}")
