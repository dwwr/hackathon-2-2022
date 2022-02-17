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


Documentation:

- https://devkitpro.org/wiki/Getting_Started
- https://www.3dbrew.org/wiki/Setting_up_Development_Environment
- https://github.com/devkitPro/pacman/releases/tag/v1.0.2
- https://devkitpro.org/wiki/devkitPro_pacman
- https://github.com/devkitPro/3ds-examples
