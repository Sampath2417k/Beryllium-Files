# Beryllium-Files

Static file hub for POCO F1 (beryllium) ROMs, kernels, recoveries, and tools.

## Adding a File Entry

Edit `files.json` and add an object to the array:

```json
{
  "name": "LineageOS 21",
  "category": "ROM",
  "version": "21",
  "android": "14",
  "date": "2025-10-01",
  "maintainer": "YourName",
  "size": "1.2 GB",
  "notes": "Official build with monthly security patches.",
  "mega": "https://mega.nz/file/REAL_ID#REAL_KEY",
  "sha256": "optional_sha256_hash"
}
```

### Fields

| Field | Required | Description |
|-------|----------|-------------|
| name | Yes | Display name |
| category | Yes | One of: ROM, Kernel, Recovery, Root, Firmware, Guide, Tool |
| version | Yes | Version string |
| android | Yes | Android version or "All" |
| date | Yes | YYYY-MM-DD (used for sorting, newest first) |
| maintainer | Yes | Maintainer name or XDA handle |
| size | Yes | File size (e.g., "1.2 GB") |
| notes | Yes | Short description |
| mega | Yes | MEGA download URL |
| sha256 | No | SHA256 checksum for verification |

### Category Values

- `ROM` — Custom ROMs (LineageOS, Pixel Experience, etc.)
- `Kernel` — Custom kernels
- `Recovery` — TWRP, OrangeFox, etc.
- `Root` — Magisk, KernelSU, etc.
- `Firmware` — Stock firmware, modem, bootloader
- `Guide` — Installation guides, tutorials
- `Tool` — Flashing tools, utilities

## Local Testing

Open `index.html` directly in a browser, or serve locally:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deployment

Push to `main` branch — GitHub Pages serves from root.