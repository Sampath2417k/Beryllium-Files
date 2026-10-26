/* =====================================================================
   THE ONLY FILE YOU EDIT. Add a download = copy one { ... } item into
   the right "items" list. Empty url => button shows "Soon".
   Fields: name, by, date (YYYY-MM-DD), android, size, status
   (Stable | Beta | Old), url (MEGA etc.), sha256, note, changelog[],
   bugs[], fixed[], guide (slug of a guide below).
   Entries marked EXAMPLE are placeholders: replace or delete them.
   ===================================================================== */
window.SITE = {
  title: "POCO F1 (beryllium) Files",
  github: "https://github.com/sampath2417k",
  specs: ["Snapdragon 845", "6/8 GB RAM", "UFS 2.1", "6.18\" FHD+", "4000 mAh"],
  intro: "ROMs, kernels, recoveries, root tools and firmware for the POCO F1. Files are hosted on MEGA.",
  disclaimer: "Flashing can brick your phone and erase your data. Files are shared as is, with no guarantee. Back up first and check each file is made for the POCO F1 (beryllium). You flash at your own risk.",
  roms: [
    { title: "Custom ROMs", items: [
      { name: "EXAMPLE ROM name", by: "maintainer", date: "2026-10-01", android: "15", size: "1.2 GB", status: "Stable", url: "", sha256: "", note: "Replace with a real ROM. Paste your MEGA link in url.", changelog: ["Initial release"], bugs: ["Example bug"], fixed: [], guide: "flash-rom" }
    ]},
    { title: "GSI / Port ROMs", items: [] }
  ],
  kernels: [ { title: "Kernels", items: [
    { name: "EXAMPLE kernel", by: "maintainer", date: "2026-10-01", android: "All", size: "20 MB", status: "Beta", url: "", note: "Flash in recovery after the ROM." }
  ]} ],
  recovery: [ { title: "Recoveries", items: [
    { name: "EXAMPLE recovery (TWRP / OrangeFox)", by: "maintainer", date: "2026-10-01", android: "All", size: "60 MB", status: "Stable", url: "", guide: "boot-recovery" }
  ]} ],
  root: [ { title: "Root & modules", items: [
    { name: "EXAMPLE Magisk / KernelSU", by: "maintainer", date: "2026-10-01", android: "All", size: "10 MB", status: "Stable", url: "", note: "Add Play Integrity and module files here." }
  ]} ],
  firmware: [ { title: "Stock firmware", items: [
    { name: "EXAMPLE MIUI fastboot ROM", by: "Xiaomi", date: "2026-10-01", android: "10", size: "2 GB", status: "Old", url: "", note: "Use to recover a bricked phone." }
  ]} ],
  guides: [
    { slug: "unlock-bootloader", title: "Unlock the bootloader", warning: "Unlocking erases all data.",
      steps: ["Back up everything.", "Add your Mi account in Settings > Additional settings > Developer options > Mi Unlock status.", "Enable OEM unlocking and USB debugging.", "Power off, hold Volume Down + Power to enter Fastboot.", "Run the official Mi Unlock tool on a PC and follow it. Xiaomi enforces a waiting period."] },
    { slug: "boot-recovery", title: "Boot into recovery", steps: ["Download the recovery .img from the Recovery tab.", "Boot to Fastboot (Volume Down + Power).", { code: "fastboot boot recovery.img" }, "Or flash it: ", { code: "fastboot flash recovery recovery.img" }, { note: "Check the recovery maintainer's notes for the exact command." }] },
    { slug: "flash-rom", title: "Flash a custom ROM", warning: "Template: always follow the ROM maintainer's own instructions.",
      steps: ["Unlock the bootloader and boot your custom recovery.", "Wipe Data, Cache and Dalvik, then Format Data.", "Install the ROM zip (and GApps if the ROM needs them).", "Reboot to system. First boot can take several minutes."] }
  ]
};
