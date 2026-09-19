Void Kernel + VoidSU Flashing Guide

This guide explains how to safely install Void Kernel and VoidSU on supported Xiaomi devices.

«⚠️ Warning

Flashing a custom kernel or root solution can cause bootloops, soft-bricks, data loss, or other unexpected behavior.

Make sure you understand the steps before continuing. Keep a working recovery or stock boot image available so you can recover your device if something goes wrong.

Void Kernel is currently intended for supported devices and ROM/kernel configurations only. Do not flash it on an unsupported device.»

---

📱 Supported Device

POCO M2 Pro / Xiaomi Miatoll

Device| Codename
POCO M2 Pro| "gram"
Xiaomi Miatoll family| "miatoll"

Always verify your exact device codename before flashing.

You can check it from Android:

adb shell getprop ro.product.device

Or:

adb shell getprop ro.product.vendor.device

Expected value for the POCO M2 Pro:

gram

---

1. Requirements

Before starting, make sure you have:

- An unlocked bootloader
- A supported Xiaomi device
- A compatible custom ROM
- A working custom recovery or Fastboot access
- A USB cable
- A PC with "adb" and "fastboot"
- A complete backup of important data
- The correct Void Kernel release
- The correct VoidSU Manager APK if you want root management

Recommended:

- At least 50% battery
- Original or reliable USB cable
- A known-working stock/custom boot image for recovery

---

2. Install ADB & Fastboot

On Linux:

sudo apt install adb fastboot

On Arch Linux:

sudo pacman -S android-tools

Verify:

adb version
fastboot --version

---

3. Enable USB Debugging

On your Android device:

Settings
  → About phone
  → Tap Build number 7 times
  → Developer options
  → Enable USB debugging

Connect the phone to your PC.

Check the ADB connection:

adb devices

Your device should appear in the list.

If the phone asks for USB debugging authorization, accept the RSA prompt.

---

4. Backup Before Flashing

A kernel flash normally does not require wiping your data, but always keep a recovery plan.

At minimum, keep:

- Current boot image
- Current vendor_boot image if your ROM uses one
- Recovery image
- Important personal files

If you already have a working kernel, save it before replacing it.

«Do not rely on Void Kernel as your recovery method if the new kernel fails to boot.»

---

5. Download the Correct Void Kernel Release

Download the Void Kernel package intended for your exact device.

For example:

VoidKernel-<version>-miatoll.zip

Before flashing, verify that the package is actually intended for your device.

Do not rename a kernel from another device and assume it will work.

---

6. Reboot Into Recovery

From Android:

adb reboot recovery

Or boot into recovery using the device's hardware key combination.

Once recovery starts, verify that:

- Touch/buttons work correctly
- Internal storage is accessible
- The kernel ZIP is available

---

7. Flash Void Kernel

Copy the kernel ZIP to your device:

adb push VoidKernel-<version>-miatoll.zip /sdcard/

In recovery:

Install
  → Select Void Kernel ZIP
  → Swipe to flash

Wait until the installation finishes.

Do NOT:

- Interrupt the flashing process
- Reboot while the ZIP is still being flashed
- Flash a package intended for another device
- Wipe data unless the ROM/kernel documentation specifically requires it

After flashing:

Reboot → System

---

8. First Boot

The first boot after changing the kernel can take longer than normal.

Give the device enough time to boot.

If Android starts normally, continue to verification.

If the device gets stuck at the boot logo or repeatedly reboots, go to the troubleshooting section below.

---

9. Verify Void Kernel

Once Android has booted, connect through ADB:

adb shell

Check the running kernel:

uname -a

Also check:

cat /proc/version

Depending on the release, the output should identify the Void Kernel build.

You can also check:

cat /proc/sys/kernel/osrelease

If the Void Kernel sysfs interface is enabled:

ls -la /sys/kernel/void_kernel/

Possible files include:

version
banner
compiler
features
health

For example:

cat /sys/kernel/void_kernel/version
cat /sys/kernel/void_kernel/banner
cat /sys/kernel/void_kernel/compiler
cat /sys/kernel/void_kernel/features
cat /sys/kernel/void_kernel/health

---

10. Install VoidSU

VoidSU is the root-management component designed for Void Kernel.

Install the compatible VoidSU Manager APK after confirming that the kernel release supports that Manager version.

Install it with:

adb install VoidSU.apk

Or install the APK directly from Android.

Open VoidSU after installation.

---

11. Verify Root Access

Open a terminal with root support and run:

su

If the root request appears in VoidSU, grant access.

Then:

id

A successful root shell should report:

uid=0(root)

You can also test:

whoami

Expected:

root

Exit the root shell:

exit

---

12. Verify KernelSU / VoidSU Integration

From a root shell:

su

Then check the KernelSU/VoidSU environment:

cat /proc/version

You can also inspect kernel messages:

dmesg | grep -i -E 'kernelsu|voidsu'

If your build exposes KernelSU information through sysfs or procfs, those interfaces can be checked as well.

---

13. Verify SUSFS

If the Void Kernel build includes SUSFS, check the kernel configuration:

zcat /proc/config.gz | grep SUSFS

You may see entries such as:

CONFIG_KSU_SUSFS=y
CONFIG_KSU_SUSFS_SUS_PATH=y
CONFIG_KSU_SUSFS_SUS_MOUNT=y

The exact configuration depends on the Void Kernel release.

You can also inspect the kernel log:

dmesg | grep -i susfs

«SUSFS configuration can change between releases. Do not assume that every SUSFS feature is enabled simply because "CONFIG_KSU_SUSFS=y" exists.»

---

14. Verify Void Kernel Features

Void Kernel may expose kernel information through:

/sys/kernel/void_kernel/

Check:

cat /sys/kernel/void_kernel/features

Depending on the build, this can report features such as:

KernelSU / VoidSU
Scheduler
BBR / BBRplus
MGLRU
Thermal
Memory

Check kernel health:

cat /sys/kernel/void_kernel/health

This provides a quick overview of the currently running kernel configuration and runtime status.

---

15. Verify Available TCP Congestion Controls

If the build includes additional TCP congestion-control algorithms:

cat /proc/sys/net/ipv4/tcp_allowed_congestion_control

For example:

reno bbr bbrplus cubic

Check the currently selected algorithm:

cat /proc/sys/net/ipv4/tcp_congestion_control

---

16. Verify MGLRU

Check whether Multi-Gen LRU is enabled:

cat /sys/kernel/mm/lru_gen/enabled

If available, the output depends on the kernel configuration.

You can also check:

dmesg | grep -i lru

---

17. Verify Kernel Scheduler

Check the available CPU frequency governors:

cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors

Check the current governor:

cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor

«Available governors depend on the device kernel and ROM configuration.»

---

18. Verify Kernel Compiler Information

Void Kernel can expose compiler information through:

cat /sys/kernel/void_kernel/compiler

You can also inspect:

cat /proc/version

This is useful when reporting bugs because compiler and kernel version information can affect reproducibility.

---

19. Recommended Post-Flash Checks

After the first successful boot, check:

Kernel

uname -a

Root

su -c id

SELinux

getenforce

Kernel logs

dmesg | tail -100

Void Kernel status

cat /sys/kernel/void_kernel/health

Kernel configuration

zcat /proc/config.gz | grep -E 'KSU|SUSFS|MGLRU|BBR'

---

20. If the Device Bootloops

Do not repeatedly force-reboot the device without a recovery plan.

First try entering recovery.

adb reboot recovery

If ADB is unavailable, use the device's hardware key combination.

From recovery, restore the previously working kernel/boot image or flash the known-good kernel package.

If the device can enter Fastboot:

adb reboot bootloader

or use the hardware key combination.

Check:

fastboot devices

---

21. If Android Does Not Boot but Recovery Works

This usually means the device can still be recovered without wiping the entire phone.

Boot into recovery and restore the previous working kernel/boot image.

If you made a backup before flashing Void Kernel, restore that backup.

«Do not immediately factory-reset the device.

A kernel boot failure does not automatically mean your user data is damaged.»

---

22. If Recovery Is Working but ADB Is Not

Some recovery environments may have USB/ADB disabled.

Use the recovery's built-in file manager to access the kernel package, or enable ADB if the recovery provides that option.

You can also use recovery's terminal if available.

---

23. If the Device Is Stuck at the OEM Logo

A stuck OEM logo can indicate a kernel, ramdisk, vendor compatibility, or early-boot problem.

If ADB is unavailable, recovery or Fastboot may still be accessible.

The first recovery step should be restoring the previously working boot/kernel image.

For debugging, collect whatever logs are available from recovery or the previous boot environment.

Useful information includes:

Device codename
ROM name and version
Void Kernel version
VoidSU version
Recovery version
Last working kernel
Kernel flashing method
Boot stage where the device stops

---

24. Reporting a Void Kernel Bug

When reporting a problem, provide as much information as possible.

Device

POCO M2 Pro / Miatoll
Codename: gram

ROM

ROM:
Android version:
Build:

Kernel

Void Kernel version:
Build date:

VoidSU

VoidSU version:
Manager version:

Problem

What happened:
When it happened:
How to reproduce:

Logs

If Android boots:

dmesg > dmesg.txt

or:

su -c dmesg > dmesg.txt

Also provide:

uname -a
cat /proc/version

and, when available:

cat /sys/kernel/void_kernel/health
cat /sys/kernel/void_kernel/features

---

25. Important Compatibility Notes

Void Kernel is not a universal kernel.

A kernel built for one device should not be flashed on another device unless the release explicitly supports it.

Device-specific components can include:

- Device tree
- DTBO
- Display
- Touchscreen
- Storage
- Wi-Fi
- Bluetooth
- Camera
- Modem
- Power/charging
- Thermal configuration
- Vendor interfaces

Even devices using the same SoC may require different kernel configurations.

---

26. Safe Flashing Flow

The recommended workflow is:

┌──────────────────────────┐
│ Verify device codename   │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Backup working kernel    │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Download correct release │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Boot into recovery       │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Flash Void Kernel        │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Reboot Android           │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Verify kernel            │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Install VoidSU Manager   │
└────────────┬─────────────┘
             ↓
┌──────────────────────────┐
│ Verify root + features   │
└──────────────────────────┘

---

27. Quick Verification

After everything is installed:

adb shell uname -a

adb shell su -c id

adb shell getenforce

adb shell cat /sys/kernel/void_kernel/health

If all expected checks pass, the device is running Void Kernel with VoidSU successfully.

---

⚠️ Final Notes

- Always use the release intended for your exact device.
- Keep a known-working kernel available.
- Do not wipe data unnecessarily.
- Do not flash random boot images from other devices.
- Keep recovery/Fastboot access available before experimenting.
- When testing experimental kernel features, change one major feature at a time so problems are easier to identify.

Void Kernel
Custom kernel project by heySaish

VoidSU
Root management solution for Void Kernel
