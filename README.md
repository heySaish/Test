# Void Kernel + VoidSU Flashing Guide

This guide explains how to safely install **Void Kernel** and **VoidSU** on supported Xiaomi devices.

> [!WARNING]
> Flashing a custom kernel or root solution can cause bootloops, soft-bricks, data loss, or other unexpected behavior.
>
> Make sure you understand the steps before continuing. Keep a working recovery or stock boot image available so you can recover your device if something goes wrong.
>
> Void Kernel is currently intended for supported devices and ROM/kernel configurations only. Do not flash it on an unsupported device.

## Supported Device

| Device | Codename |
|---|---|
| POCO M2 Pro | `gram` |
| Xiaomi Miatoll family | `miatoll` |

Always verify your exact device codename before flashing.

You can check it from Android:

```bash
adb shell getprop ro.product.device
```

Or:

```bash
adb shell getprop ro.product.vendor.device
```

Expected value for the POCO M2 Pro:

```text
gram
```

## 1. Requirements

Before starting, make sure you have:

- An unlocked bootloader
- A supported Xiaomi device
- A compatible custom ROM
- A working custom recovery or Fastboot access
- A USB cable
- A PC with `adb` and `fastboot`
- A complete backup of important data
- The correct Void Kernel release
- The correct VoidSU Manager APK, if you want root management

Recommended:

- At least 50% battery
- An original or reliable USB cable
- A known-working stock/custom boot image for recovery

## 2. Install ADB & Fastboot

### Linux

```bash
sudo apt install adb fastboot
```

### Arch Linux

```bash
sudo pacman -S android-tools
```

Verify the installation:

```bash
adb version
fastboot --version
```

## 3. Enable USB Debugging

On your Android device:

1. Open **Settings**.
2. Go to **About phone**.
3. Tap **Build number** seven times.
4. Open **Developer options**.
5. Enable **USB debugging**.

Connect the phone to your PC and check the ADB connection:

```bash
adb devices
```

Your device should appear in the list. If the phone asks for USB debugging authorization, accept the RSA prompt.

## 4. Back Up Before Flashing

A kernel flash normally does not require wiping your data, but always keep a recovery plan.

At minimum, keep:

- The current boot image
- The current `vendor_boot` image, if your ROM uses one
- The recovery image
- Important personal files

If you already have a working kernel, save it before replacing it.

> [!IMPORTANT]
> Do not rely on Void Kernel as your recovery method if the new kernel fails to boot.

## 5. Download the Correct Void Kernel Release

Download the Void Kernel package intended for your exact device. For example:

```text
VoidKernel-<version>-miatoll.zip
```

Before flashing, verify that the package is actually intended for your device. Do not rename a kernel from another device and assume it will work.

## 6. Reboot Into Recovery

From Android:

```bash
adb reboot recovery
```

You can also boot into recovery using the device's hardware key combination.

Once recovery starts, verify that:

- Touch/buttons work correctly
- Internal storage is accessible
- The kernel ZIP is available

## 7. Flash Void Kernel

Copy the kernel ZIP to your device:

```bash
adb push VoidKernel-<version>-miatoll.zip /sdcard/
```

In recovery:

1. Select **Install**.
2. Select the Void Kernel ZIP.
3. Swipe to flash.
4. Wait until the installation finishes.

### Do not

- Interrupt the flashing process.
- Reboot while the ZIP is still being flashed.
- Flash a package intended for another device.
- Wipe data unless the ROM/kernel documentation specifically requires it.

After flashing, select **Reboot → System**.

## 8. First Boot

The first boot after changing the kernel can take longer than normal. Give the device enough time to boot.

If Android starts normally, continue to verification. If the device gets stuck at the boot logo or repeatedly reboots, see [Troubleshooting](#troubleshooting).

## 9. Verify Void Kernel

Once Android has booted, connect through ADB:

```bash
adb shell
```

Check the running kernel:

```bash
uname -a
cat /proc/version
cat /proc/sys/kernel/osrelease
```

Depending on the release, the output should identify the Void Kernel build.

If the Void Kernel sysfs interface is enabled, inspect it with:

```bash
ls -la /sys/kernel/void_kernel/
```

Possible files include:

- `version`
- `banner`
- `compiler`
- `features`
- `health`

For example:

```bash
cat /sys/kernel/void_kernel/version
cat /sys/kernel/void_kernel/banner
cat /sys/kernel/void_kernel/compiler
cat /sys/kernel/void_kernel/features
cat /sys/kernel/void_kernel/health
```

## 10. Install VoidSU

VoidSU is the root-management component designed for Void Kernel. Install the compatible VoidSU Manager APK after confirming that the kernel release supports that Manager version.

```bash
adb install VoidSU.apk
```

You can also install the APK directly from Android. Open VoidSU after installation.

## 11. Verify Root Access

Open a terminal with root support and run:

```bash
su
```

If the root request appears in VoidSU, grant access. Then run:

```bash
id
whoami
```

A successful root shell should report:

```text
uid=0(root)
root
```

Exit the root shell with:

```bash
exit
```

## 12. Verify KernelSU / VoidSU Integration

From a root shell:

```bash
su
cat /proc/version
dmesg | grep -i -E 'kernelsu|voidsu'
```

If your build exposes KernelSU information through sysfs or procfs, those interfaces can be checked as well.

## 13. Verify SUSFS

If the Void Kernel build includes SUSFS, check the kernel configuration:

```bash
zcat /proc/config.gz | grep SUSFS
```

You may see entries such as:

```text
CONFIG_KSU_SUSFS=y
CONFIG_KSU_SUSFS_SUS_PATH=y
CONFIG_KSU_SUSFS_SUS_MOUNT=y
```

The exact configuration depends on the Void Kernel release. You can also inspect the kernel log:

```bash
dmesg | grep -i susfs
```

> [!NOTE]
> SUSFS configuration can change between releases. Do not assume that every SUSFS feature is enabled simply because `CONFIG_KSU_SUSFS=y` exists.

## 14. Verify Void Kernel Features

Void Kernel may expose kernel information through `/sys/kernel/void_kernel/`.

```bash
cat /sys/kernel/void_kernel/features
cat /sys/kernel/void_kernel/health
```

Depending on the build, the features file can report:

- KernelSU / VoidSU
- Scheduler
- BBR / BBRplus
- MGLRU
- Thermal
- Memory

The health file provides a quick overview of the currently running kernel configuration and runtime status.

## 15. Verify Available TCP Congestion Controls

If the build includes additional TCP congestion-control algorithms:

```bash
cat /proc/sys/net/ipv4/tcp_allowed_congestion_control
```

For example:

```text
reno bbr bbrplus cubic
```

Check the currently selected algorithm:

```bash
cat /proc/sys/net/ipv4/tcp_congestion_control
```

## 16. Verify MGLRU

Check whether Multi-Gen LRU is enabled:

```bash
cat /sys/kernel/mm/lru_gen/enabled
dmesg | grep -i lru
```

If available, the output depends on the kernel configuration.

## 17. Verify Kernel Scheduler

Check the available CPU frequency governors:

```bash
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_available_governors
```

Check the current governor:

```bash
cat /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
```

> [!NOTE]
> Available governors depend on the device kernel and ROM configuration.

## 18. Verify Kernel Compiler Information

Void Kernel can expose compiler information through:

```bash
cat /sys/kernel/void_kernel/compiler
cat /proc/version
```

This is useful when reporting bugs because compiler and kernel version information can affect reproducibility.

## 19. Recommended Post-Flash Checks

After the first successful boot, check:

```bash
# Kernel
uname -a

# Root
su -c id

# SELinux
getenforce

# Kernel logs
dmesg | tail -100

# Void Kernel status
cat /sys/kernel/void_kernel/health

# Kernel configuration
zcat /proc/config.gz | grep -E 'KSU|SUSFS|MGLRU|BBR'
```

## Troubleshooting

### 20. If the Device Bootloops

Do not repeatedly force-reboot the device without a recovery plan.

First try entering recovery:

```bash
adb reboot recovery
```

If ADB is unavailable, use the device's hardware key combination.

From recovery, restore the previously working kernel/boot image or flash the known-good kernel package.

If the device can enter Fastboot:

```bash
adb reboot bootloader
fastboot devices
```

You can also use the hardware key combination to enter Fastboot.

### 21. If Android Does Not Boot but Recovery Works

This usually means the device can still be recovered without wiping the entire phone.

Boot into recovery and restore the previous working kernel/boot image. If you made a backup before flashing Void Kernel, restore that backup.

> [!IMPORTANT]
> Do not immediately factory-reset the device. A kernel boot failure does not automatically mean your user data is damaged.

### 22. If Recovery Is Working but ADB Is Not

Some recovery environments may have USB/ADB disabled.

- Use the recovery's built-in file manager to access the kernel package.
- Enable ADB if the recovery provides that option.
- Use the recovery's terminal, if available.

### 23. If the Device Is Stuck at the OEM Logo

A stuck OEM logo can indicate a kernel, ramdisk, vendor compatibility, or early-boot problem.

If ADB is unavailable, recovery or Fastboot may still be accessible. The first recovery step should be restoring the previously working boot/kernel image.

For debugging, collect whatever logs are available from recovery or the previous boot environment.

Useful information includes:

- Device codename
- ROM name and version
- Void Kernel version
- VoidSU version
- Recovery version
- Last working kernel
- Kernel flashing method
- Boot stage where the device stops

## 24. Reporting a Void Kernel Bug

When reporting a problem, provide as much information as possible.

### Device

- POCO M2 Pro / Miatoll
- Codename: `gram`

### ROM

- ROM:
- Android version:
- Build:

### Kernel

- Void Kernel version:
- Build date:

### VoidSU

- VoidSU version:
- Manager version:

### Problem

- What happened:
- When it happened:
- How to reproduce:

### Logs

If Android boots:

```bash
dmesg > dmesg.txt
```

or:

```bash
su -c dmesg > dmesg.txt
```

Also provide:

```bash
uname -a
cat /proc/version
cat /sys/kernel/void_kernel/health
cat /sys/kernel/void_kernel/features
```

## 25. Important Compatibility Notes

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

## 26. Safe Flashing Flow

```text
Verify device codename
          ���
Backup working kernel
          ↓
Download correct release
          ↓
Boot into recovery
          ↓
Flash Void Kernel
          ↓
Reboot Android
          ↓
Verify kernel
          ↓
Install VoidSU Manager
          ↓
Verify root + features
```

## 27. Quick Verification

After everything is installed:

```bash
adb shell uname -a
adb shell su -c id
adb shell getenforce
adb shell cat /sys/kernel/void_kernel/health
```

If all expected checks pass, the device is running Void Kernel with VoidSU successfully.

## Final Notes

- Always use the release intended for your exact device.
- Keep a known-working kernel available.
- Do not wipe data unnecessarily.
- Do not flash random boot images from other devices.
- Keep recovery/Fastboot access available before experimenting.
- When testing experimental kernel features, change one major feature at a time so problems are easier to identify.

---

**Void Kernel**  
Custom kernel project by heySaish

**VoidSU**  
Root management solution for Void Kernel
