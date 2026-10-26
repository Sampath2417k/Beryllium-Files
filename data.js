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
      { name: "crDroid 11.17", by: "crDroid Android Project", date: "2026-08-04", android: "15", size: "1.3 GB", status: "Stable", url: "https://sourceforge.net/projects/crdroid/files/beryllium/11.x/crDroidAndroid-15.0-20260804-beryllium-v11.17.zip/download", sha256: "", note: "Official crDroid build for POCO F1 (beryllium). Hosted on SourceForge (automated requests may be blocked; open in a browser).", changelog: [], bugs: [], fixed: [], guide: "flash-rom" }
    ]},
    { title: "GSI / Port ROMs", items: [] }
  ],
  kernels: [ { title: "Kernels", items: [] } ],
  recovery: [ { title: "Recoveries", items: [
    { name: "TWRP 3.7.0_9-0", by: "Team Win", date: "2022-10-06", android: "All", size: "38.3 MB", status: "Stable", url: "https://dl.twrp.me/beryllium/twrp-3.7.0_9-0-beryllium.img", sha256: "", note: "Official TWRP recovery image for beryllium.", guide: "boot-recovery" }
  ]} ],
  root: [ { title: "Root & modules", items: [
    { name: "Magisk v30.7", by: "topjohnwu", date: "2026-02-23", android: "All", size: "11 MB", status: "Stable", url: "https://github.com/topjohnwu/Magisk/releases/download/v30.7/Magisk-v30.7.apk", sha256: "", note: "Systemless root. Flash the APK or patch boot.img with the Magisk app.", changelog: [], bugs: [], fixed: [], guide: "root" },
    { name: "KernelSU Manager v3.3.1", by: "KernelSU", date: "2026-10-12", android: "All", size: "13 MB", status: "Stable", url: "https://github.com/tiann/KernelSU/releases/download/v3.3.1/KernelSU_v3.3.1_32680-release.apk", sha256: "b4a059ace71de2fa65cc7f12b1c58d55fc23ab25e057ee4230ce779742abe450", note: "KernelSU root manager APK. Requires a KernelSU-patched boot image.", changelog: [], bugs: [], fixed: [], guide: "root" }
  ]} ],
  firmware: [ { title: "Stock firmware", items: [] } ],
  guides: [
    { slug: "unlock-bootloader", title: "Unlock the bootloader", warning: "Unlocking erases all data.",
      steps: ["Back up everything.", "Add your Mi account in Settings > Additional settings > Developer options > Mi Unlock status.", "Enable OEM unlocking and USB debugging.", "Power off, hold Volume Down + Power to enter Fastboot.", "Run the official Mi Unlock tool on a PC and follow it. Xiaomi enforces a waiting period."] },
    { slug: "boot-recovery", title: "Boot into recovery", steps: ["Download the recovery .img from the Recovery tab.", "Boot to Fastboot (Volume Down + Power).", { code: "fastboot boot recovery.img" }, "Or flash it: ", { code: "fastboot flash recovery recovery.img" }, { note: "Check the recovery maintainer's notes for the exact command." }] },
    { slug: "flash-rom", title: "Flash a custom ROM", warning: "Template: always follow the ROM maintainer's own instructions.",
      steps: ["Unlock the bootloader and boot your custom recovery.", "Wipe Data, Cache and Dalvik, then Format Data.", "Install the ROM zip (and GApps if the ROM needs them).", "Reboot to system. First boot can take several minutes."] },
    { slug: "root", title: "Root the device", warning: "Rooting may void warranty and can trip safety/Play Integrity flags.",
      steps: ["Unlock the bootloader first (see Unlock the bootloader guide).", "Boot a custom recovery such as TWRP (see Boot into recovery).", "Magisk: install the Magisk APK, or patch your boot.img with the Magisk app and flash the patched boot image.", "KernelSU: flash a KernelSU-enabled boot image or patch boot via the KernelSU app.", "Reboot and verify root with a root checker app."] },
    { slug: "restore-stock", title: "Restore stock MIUI firmware", warning: "This erases all data. Use the ROM matching your exact POCO F1 variant.",
      steps: ["Download the stock MIUI fastboot ROM for POCO F1 (beryllium) from a trusted source.", "Extract the fastboot ROM zip on a PC.", "Boot the phone to Fastboot (Volume Down + Power).", "Run flash_all.bat (Windows) or flash_all.sh (Linux/Mac) from the extracted folder.", "Wait for flashing to finish and the phone to reboot."] }
  ]
};
