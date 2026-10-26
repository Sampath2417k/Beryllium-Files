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
  disclaimer: "Flashing can brick your phone and erase your data. Files are shared as is, with no guarantee. Back up first and check each file is made for the POCO F1 (beryllium). You flash at your own risk.",
  roms: [
    { title: "Custom ROMs", items: [
      { name: "crDroid 11.17", by: "crDroid Android Project", date: "2026-08-04", android: "15", size: "1.3 GB", status: "Stable", url: "https://sourceforge.net/projects/crdroid/files/beryllium/11.x/crDroidAndroid-15.0-20260804-beryllium-v11.17.zip/download", sha256: "", note: "Official crDroid build for POCO F1 (beryllium). Hosted on SourceForge.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Evolution X", by: "Evolution X Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://evolution-x.org/device/beryllium", sha256: "", note: "Official Evolution X build page for beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "PixelOS", by: "PixelOS Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://pixelos.net/download/beryllium", sha256: "", note: "Official PixelOS build page for beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Project Infinity X", by: "Infinity-X Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://projectinfinity-x.com/downloads/beryllium", sha256: "", note: "Project Infinity X downloads for beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Aosp-Beryllium Builds", by: "Community", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://github.com/Aosp-Beryllium/builds/releases", sha256: "", note: "GitHub releases for Aosp-Beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Havoc-OS", by: "Havoc-OS Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://sourceforge.net/projects/havoc-os/files/beryllium/", sha256: "", note: "Havoc-OS SourceForge repository for beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Ancient ROM", by: "Ancient Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://sourceforge.net/projects/ancientrom/files/beryllium/", sha256: "", note: "Ancient ROM SourceForge repository for beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "Resurrection Remix", by: "RR Team", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://sourceforge.net/projects/resurrectionremix/files/beryllium/", sha256: "", note: "Resurrection Remix SourceForge repository for beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "NothingOS Port", by: "Community", date: "2026-01-01", android: "Latest", size: "", status: "Stable", url: "https://sourceforge.net/projects/nothingos-beryllium/files/", sha256: "", note: "NothingOS port for beryllium on SourceForge.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "2by2-Project ROM", by: "Community", date: "2024-11-18", android: "15", size: "", status: "Stable", url: "https://sourceforge.net/projects/beryllium-roms/files/2by2-Project-15-20241118-beryllium-COMMUNITY/", sha256: "", note: "2by2-Project Community Android 15 build.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" }
    ]},
    { title: "GSI / Port ROMs", items: [
      { name: "Zero UI v8 / HyperOS 2.0 Port", by: "Community", date: "2026-01-01", android: "14", size: "", status: "Beta", url: "https://xdaforums.com/t/rom-port-14-0-zero-ui-v8-hyperos-2-0-for-poco-f1-beryllium.4789854/", sha256: "", note: "XDA thread for Zero UI v8 / HyperOS 2.0 port for POCO F1.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" },
      { name: "MIUI Port (Dipper to F1)", by: "Community", date: "2026-01-01", android: "13", size: "", status: "Stable", url: "https://sourceforge.net/projects/miui-port-dipper-f1/files/miui%2014%20android%2013%20Xiaomi%20eu%20Beryllium/", sha256: "", note: "MIUI 14 / Android 13 Xiaomi.eu port for Beryllium.", changelog: [], bugs: [], fixed: [], guide: "flash-rom" }
    ]}
  ],
  kernels: [ { title: "Kernels", items: [
    { name: "sdm845-419 Kernel", by: "diphons", date: "2026-01-01", android: "All", size: "", status: "Stable", url: "https://github.com/diphons/sdm845-419", sha256: "", note: "Linux Kernel 4.19 for Xiaomi SM8250 / Poco F1 (Beryllium).", changelog: [], bugs: [], fixed: [] }
  ]} ],
  recovery: [ { title: "Recoveries", items: [
    { name: "TWRP 3.7.0_9-0", by: "Team Win", date: "2022-10-06", android: "All", size: "38.3 MB", status: "Stable", url: "https://dl.twrp.me/beryllium/twrp-3.7.0_9-0-beryllium.img", sha256: "", note: "Official TWRP recovery image for beryllium.", guide: "boot-recovery" }
  ]} ],
  root: [ { title: "Root & modules", items: [
    { name: "Magisk v30.7", by: "topjohnwu", date: "2026-02-23", android: "All", size: "11 MB", status: "Stable", url: "https://github.com/topjohnwu/Magisk/releases/download/v30.7/Magisk-v30.7.apk", sha256: "", note: "Systemless root. Flash the APK or patch boot.img with the Magisk app.", changelog: [], bugs: [], fixed: [], guide: "root" },
    { name: "KernelSU Manager v3.3.1", by: "KernelSU", date: "2026-10-12", android: "All", size: "13 MB", status: "Stable", url: "https://github.com/tiann/KernelSU/releases/download/v3.3.1/KernelSU_v3.3.1_32680-release.apk", sha256: "b4a059ace71de2fa65cc7f12b1c58d55fc23ab25e057ee4230ce779742abe450", note: "KernelSU root manager APK. Requires a KernelSU-patched boot image.", changelog: [], bugs: [], fixed: [], guide: "root" },
    { name: "WiFi Extender Module", by: "gursewak10", date: "2026-01-01", android: "All", size: "", status: "Stable", url: "https://github.com/gursewak10/wifi_extender", sha256: "", note: "Magisk Module to enable WiFi and Hotspot simultaneously on Xiaomi/Redmi.", changelog: [], bugs: [], fixed: [] },
    { name: "MultiLocale", by: "Nightdavisao", date: "2026-01-01", android: "All", size: "", status: "Stable", url: "https://github.com/Nightdavisao/MultiLocale", sha256: "", note: "Add unsupported languages to your device locale settings.", changelog: [], bugs: [], fixed: [] }
  ]} ],
  firmware: [ { title: "Stock firmware", items: [
    { name: "POCO F1 Fastboot ROM", by: "Xiaomi", date: "2026-01-01", android: "10", size: "", status: "Stable", url: "https://mega.nz/file/XTxHnLoA#UwHS1e1Uf49dh8L4fF0qWYyPuS6vuyPGuzX8eIjLh6E", sha256: "", note: "Stock Fastboot ROM flashable with MiFlash Tool." },
    { name: "MiFlash Tool (2020.3.14)", by: "Xiaomi", date: "2020-03-14", android: "All", size: "", status: "Stable", url: "https://mega.nz/file/WK5HEDpK#dOMdyM6JdxMmqwfiL4YZdceUsm4hf0f7loF0JG0Mnw8", sha256: "", note: "Official Xiaomi flashing tool for Windows." }
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
