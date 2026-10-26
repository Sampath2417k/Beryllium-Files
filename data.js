/* =====================================================================
   THE ONLY FILE YOU EDIT. Add a download = copy one { ... } item into
   the right "items" list. Empty url => button shows "Soon".
   Fields: name, by, date (YYYY-MM-DD), android, size, status
   (Stable | Beta | Old), url , sha256, note, changelog[],
   bugs[], fixed[], guide (slug of a guide below).
   Entries marked EXAMPLE are placeholders: replace or delete them.
   ===================================================================== */
window.SITE = {
  title: "POCO F1 (beryllium) Files",
  github: "https://github.com/sampath2417k",
  specs: ["Snapdragon 845", "6/8 GB RAM", "UFS 2.1", "6.18\" FHD+", "4000 mAh"],
  intro: "ROMs, kernels, recoveries, root tools and firmware for the POCO F1.",
  disclaimer: "Flashing can brick your phone and erase your data. Files are shared as is, with no guarantee. Back up first and check each file is made for the POCO F1 (beryllium). You flash at your own risk. This website is a personal project and is not affiliated with Xiaomi, POCO, or any Telegram group.",
  roms: [
    { title: "Custom ROMs & Community Builds", items: [
      { name: "NothingOS 5.0 Port", by: "@UMRSRN / NothingOS Beryllium", date: "2026-10-17", android: "17", size: "2.9 GB", status: "Stable", url: "https://sourceforge.net/projects/nothingos-beryllium/files/", sha256: "", note: "NothingOS port for POCO F1 (Android 17 v2 port). Published Oct 2026.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "crDroid 11.17", by: "crDroid Android Project", date: "2026-08-04", android: "15", size: "1.3 GB", status: "Stable", url: "https://sourceforge.net/projects/crdroid/files/beryllium/11.x/crDroidAndroid-15.0-20260804-beryllium-v11.17.zip/download", sha256: "", note: "Official crDroid build for POCO F1 (Aug 2026).", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Axion AOSP", by: "fogeduser / beryllium-builds", date: "2026-08-21", android: "15", size: "2.0 GB", status: "Stable", url: "https://sourceforge.net/projects/beryllium-builds/files/axionaosp/axion-2.8-ONEIRA_FINAL-20260821-UNOFFICIAL-CORE-beryllium.zip/download", sha256: "", note: "Axion AOSP Final Unofficial Core build (Aug 2026).", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "VoltageOS 6.0", by: "dheeraj3031a / Beryllium-Roms", date: "2026-08-17", android: "15", size: "1.6 GB", status: "Stable", url: "https://sourceforge.net/projects/beryllium-roms/files/voltage-6.0-beryllium-20260817-1747-UNOFFICIAL.zip/download", sha256: "", note: "VoltageOS 6.0 Unofficial build (Aug 2026).", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "ArrowOS Extended v13.1", by: "Beryllium-Roms", date: "2025-11-13", android: "13", size: "1.4 GB", status: "Stable", url: "https://sourceforge.net/projects/beryllium-roms/files/Arrow-v13.1-beryllium-EXTENDED-20251113.zip/download", sha256: "", note: "ArrowOS Extended build (Nov 2025).", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "PixelExperience Plus (Unofficial)", by: "pskmaxi / beryllium", date: "2024-03-01", android: "13", size: "1.5 GB", status: "Stable", url: "https://sourceforge.net/projects/beryllium/files/PixelExperience_Plus_beryllium-13.0-20240226-1014-UNOFFICIAL.zip/download", sha256: "", note: "PixelExperience Plus Unofficial build (Mar 2024).", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "AncientOS v13 TexasCake", by: "AncientOS Team", date: "2023-11-01", android: "13", size: "1.6 GB", status: "Stable", url: "https://sourceforge.net/projects/ancientrom/files/beryllium/AncientOS-13-TexasCake-v7.4.1-beryllium-Steel-20231101-1038-GApps-Final.zip/download", sha256: "", note: "AncientOS v13 TexasCake with GApps (Nov 2023).", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Evolution X", by: "Evolution X Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://evolution-x.org/device/beryllium", sha256: "", note: "Official Evolution X build page.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "PixelOS", by: "PixelOS Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://pixelos.net/download/beryllium", sha256: "", note: "Official PixelOS build page.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Project Infinity X", by: "Infinity-X Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://projectinfinity-x.com/downloads/beryllium", sha256: "", note: "Project Infinity X downloads page.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Havoc-OS", by: "Havoc-OS Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://sourceforge.net/projects/havoc-os/files/beryllium/", sha256: "", note: "Havoc-OS SourceForge repository.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" }
    ]},
    { title: "GSI / Ports & Other SourceForge Directories", items: [
      { name: "Zero UI v8 / HyperOS 2.0 Port", by: "Community", date: "2026-01-01", android: "14", size: "", status: "Beta", url: "https://xdaforums.com/t/rom-port-14-0-zero-ui-v8-hyperos-2-0-for-poco-f1-beryllium.4789854/", sha256: "", note: "XDA thread for Zero UI v8 / HyperOS 2.0 port.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "MIUI 14 / Android 13 Xiaomi.eu Port", by: "Community", date: "2026-01-01", android: "13", size: "", status: "Stable", url: "https://sourceforge.net/projects/miui-port-dipper-f1/files/miui%2014%20android%2013%20Xiaomi%20eu%20Beryllium/", sha256: "", note: "MIUI 14 port for Beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "SourceForge: beryllium-builds", by: "Community", date: "2026-01-01", android: "Various", size: "", status: "Stable", url: "https://sourceforge.net/projects/beryllium-builds/files/", sha256: "", note: "Directory containing Axion, Clover, Lunaris, Avium, RisingOS, etc.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "SourceForge: beryllium-roms", by: "Community", date: "2026-01-01", android: "Various", size: "", status: "Stable", url: "https://sourceforge.net/projects/beryllium-roms/files/", sha256: "", note: "Directory containing VoltageOS, WitAqua, Blackiron, Matrixx, etc.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" }
    ]}
  ],
  kernels: [ { title: "Kernels", items: [
    { name: "sdm845-419 Kernel", by: "diphons", date: "2026-01-01", android: "All", size: "", status: "Stable", url: "https://github.com/diphons/sdm845-419", sha256: "", note: "Linux Kernel 4.19 for Xiaomi SM8250 / Poco F1 (Beryllium).", changelog: [], bugs: [], fixed: [] }
  ]} ],
  recovery: [ { title: "Recoveries", items: [
    { name: "OrangeFox Recovery (Dynamic A12-A14)", by: "camerado84 / Recovery for Xiaomi", date: "2024-01-09", android: "12-14", size: "67.0 MB", status: "Stable", url: "https://sourceforge.net/projects/recovery-for-xiaomi-devices/files/beryllium/OrangeFox-R12.1_A12(14)-dynamic-Unofficial-beryllium.zip/download", sha256: "", note: "OrangeFox Recovery Dynamic build for beryllium (Published Jan 2024).", guide: "boot-recovery" },
    { name: "OrangeFox Recovery Stable R11.1", by: "camerado84 / Recovery for Xiaomi", date: "2022-10-27", android: "11", size: "48.6 MB", status: "Stable", url: "https://sourceforge.net/projects/recovery-for-xiaomi-devices/files/beryllium/OrangeFox-beryllium-stable@R11.1.zip/download", sha256: "", note: "OrangeFox Stable R11.1 for beryllium (Published Oct 2022).", guide: "boot-recovery" },
    { name: "TWRP 3.7.0_9-0", by: "Team Win", date: "2022-10-06", android: "All", size: "38.3 MB", status: "Stable", url: "https://dl.twrp.me/beryllium/twrp-3.7.0_9-0-beryllium.img", sha256: "", note: "Official TWRP recovery image for beryllium.", guide: "boot-recovery" }
  ]} ],
  root: [ { title: "Root & modules", items: [
    { name: "Magisk v30.7", by: "topjohnwu", date: "2026-02-23", android: "All", size: "11 MB", status: "Stable", url: "https://github.com/topjohnwu/Magisk/releases/download/v30.7/Magisk-v30.7.apk", sha256: "", note: "Systemless root. Flash the APK or patch boot.img with the Magisk app.", changelog: [], bugs: [], fixed: [], guide: "root" },
    { name: "KernelSU Manager v3.3.1", by: "KernelSU", date: "2026-10-12", android: "All", size: "13 MB", status: "Stable", url: "https://github.com/tiann/KernelSU/releases/download/v3.3.1/KernelSU_v3.3.1_32680-release.apk", sha256: "b4a059ace71de2fa65cc7f12b1c58d55fc23ab25e057ee4230ce779742abe450", note: "KernelSU root manager APK. Requires a KernelSU-patched boot image.", changelog: [], bugs: [], fixed: [], guide: "root" },
    { name: "WiFi Extender Module", by: "gursewak10", date: "2026-01-01", android: "All", size: "", status: "Stable", url: "https://github.com/gursewak10/wifi_extender", sha256: "", note: "Magisk Module to enable WiFi and Hotspot simultaneously on Xiaomi/Redmi.", changelog: [], bugs: [], fixed: [] },
    { name: "MultiLocale", by: "Nightdavisao", date: "2026-01-01", android: "All", size: "", status: "Stable", url: "https://github.com/Nightdavisao/MultiLocale", sha256: "", note: "Add unsupported languages to your device locale settings.", changelog: [], bugs: [], fixed: [] }
  ]} ],
  firmware: [ { title: "Stock firmware & Custom Theming", items: [
    { name: "POCO F1 Fastboot ROM", by: "Xiaomi", date: "2026-01-01", android: "10", size: "", status: "Stable", url: "https://mega.nz/file/XTxHnLoA#UwHS1e1Uf49dh8L4fF0qWYyPuS6vuyPGuzX8eIjLh6E", sha256: "", note: "Stock Fastboot ROM flashable with MiFlash Tool." },
    { name: "MiFlash Tool (2020.3.14)", by: "Xiaomi", date: "2020-03-14", android: "All", size: "", status: "Stable", url: "https://mega.nz/file/WK5HEDpK#dOMdyM6JdxMmqwfiL4YZdceUsm4hf0f7loF0JG0Mnw8", sha256: "", note: "Official Xiaomi flashing tool for Windows." },
    { name: "Beryllium OpenDesktop Theme & Assets", by: "Community / OpenDesktop", date: "2020-01-01", android: "All", size: "", status: "Stable", url: "https://www.opendesktop.org/p/1372060/", sha256: "", note: "Custom styling and artwork assets for POCO F1 desktop/themes." }
  ]} ],
  guides: [
    { slug: "unlock-bootloader", title: "Unlock the bootloader", warning: "Unlocking erases all data.",
      steps: ["Back up everything.", "Add your Mi account in Settings > Additional settings > Developer options > Mi Unlock status.", "Enable OEM unlocking and USB debugging.", "Power off, hold Volume Down + Power to enter Fastboot.", "Run the official Mi Unlock tool on a PC and follow it. Xiaomi enforces a waiting period."] },
    { slug: "boot-recovery", title: "Boot into recovery", steps: ["Download the recovery .img from the Recovery tab.", "Boot to Fastboot (Volume Down + Power).", { code: "fastboot boot recovery.img" }, "Or flash it: ", { code: "fastboot flash recovery recovery.img" }, { note: "Check the recovery maintainer's notes for the exact command." }] },
    { slug: "flash-rom", title: "Flash a custom ROM", warning: "Template: always follow the ROM maintainer's own instructions.",
      steps: ["Unlock the bootloader and boot your custom recovery.", "Wipe Data, Cache and Dalvik, then Format Data.", "Install the ROM zip (and GApps if the ROM needs them).", "Reboot to system. First boot can take several minutes."] },
    { slug: "root", title: "Root the device", warning: "Rooting may void warranty and can trip safety/Play Integrity flags.",
      steps: ["Unlock the bootloader first (see Unlock the bootloader guide).", "Boot a custom recovery such as TWRP (see Boot into recovery).", "Magisk: install the Magisk APK, or patch your boot.img with the Magisk app and flash the patched boot image.", "KernelSU: flash a KernelSU-enabled boot image or patch boot via the KernelSU app.", "Reboot and verify root with a root checker app."] },
    { slug: "restore-stock", title: "Restore stock MIUI firmware", warning: "This erases all data. Use the ROM matching your exact POCO F1 variant.",
      steps: ["Download the stock MIUI fastboot ROM and MiFlash Tool from the Stock Firmware tab.", "Extract the fastboot ROM zip on a PC.", "Boot the phone to Fastboot (Volume Down + Power).", "Open MiFlash Tool, select the extracted ROM folder, and click Flash.", "Wait for success and phone reboot."] }
  ]
};
