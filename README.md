# hackathon-2-2022
Hackathon for Olio Apps, Feb 2022

Homebrew applications running on the Nintendo 3DS.

Utilizes [DevkitPro's](https://devkitpro.org/) 3DS toolchain. DevkitPro provides kit for developing homebrew across later generations of Nintendo hardware.

## Getting Started

I followed [these docs](https://www.3dbrew.org/wiki/Setting_up_Development_Environment) from 3DBrew.

First we install Pacman, binaries for Devkitpro-provided libraries. We follow instructions for MacOS and install the .pkg (remember to verify the source code).

 For 3DS, we run `sudo dkp-pacman -S 3ds-dev` to download 3DS-specific tools & libraries. Then, shut down and start up Mac to ensure new environment variables have been set.

 To initilaize this project, this repository uses Devkitpro's boilerplate. This template can be copied from the devkitpro directory to the working directory via `cp -r $DEVKITPRO/examples/3ds/templates/application .`

 This template is made by running `make` inside the application directory. Homebrew applications are compiled into a .3dsx file, which can be served over network and run on a modified 3DS console using Homebrew Launcher.

 In Homebrew Launcher, press "Y" to open NetLoader (ensure console wireless is on). The template application can be loaded by running `$DEVKITPRO/tools/bin/3dslink application.3dsx` from the application directory. Hello world!

## Setting Up Streaming

There are a lot of streaming options. Previously, dealers offered hardware modification but that scene has died off. Software implementations vary in terms of compatibility, support, and upkeep. For MacOS, the only acceptable streaming client is [CuteNTR-OSX](https://github.com/EBLeifEricson/cuteNTR-OSX/releases/), a port of cuteNTR, a portable 3DS streaming client. Other clients include base cuteNTR for Windows and Mac, Snickerstream for Windows, and NitroMac which seems to be fully deprecated.

Setup is tricky so please follow closely. First item is [BootNTR Selector](https://github.com/Nanquitas/BootNTR/releases/tag/v2.13.4)- this software allows the user to select different versions of custom firmware to load, and we use it to load a special firmware which supports screen sharing. Choose CIA or .3ds file, your preference. For old 2/3DS models, use the Mode 3 version of the file. You can also download BootNTR via 3DS Universal Updater.

 To load the correct CFW version to enable screen streaming, we replace the current BOOT.FIRM in the root of the modified 3DS's SD card with a modified version sourced [here](https://github.com/Nanquitas/Luma3DS/releases)

Load the console- it will load in the LumaCFW boot select screen. Turn on "Show NAND or user string in system settings." Complete installing BootNTR Selector on the device, either via downloaded installer or Universal Updater.

Load up BootNTR Selector. Confirm default settings and load version 3.6- should return system to home screen with no visible changes. From the home screen, enter the secret Rosalina via L + Down + Select.

Select `Debugger options...` and then `Enable debugger`. You will be provided with the system's IP address on the topleft of the bottom screen. Take note. Exit Rosalina menu back to the main system menu.

Open your streaming client and enter the 3DS console's IP address, then begin stream. With everything properly set, two windows will open on the desktop, one for each 3ds screen. Get streaming!


## Documentation:

### Getting Started:
- 3ds.hacks.guide
- https://devkitpro.org/wiki/Getting_Started
- https://www.3dbrew.org/wiki/Setting_up_Development_Environment
- https://github.com/devkitPro/pacman/releases/tag/v1.0.2
- https://devkitpro.org/wiki/devkitPro_pacman
- https://github.com/devkitPro/3ds-examples
### Streaming Setup:
- https://github.com/Nanquitas/BootNTR/releases/tag/v2.13.4
- https://github.com/Nanquitas/Luma3DS/releases
- https://github.com/EBLeifEricson/cuteNTR-OSX/releases/
- https://github.com/RattletraPM/Snickerstream/releases
