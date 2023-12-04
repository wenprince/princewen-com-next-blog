---
title: 'MadVR with BDRIP Playback'
date: 2022/08/18
author: Princewen
description: Now the HD video viewing experience, the bottleneck is not in the source, nor in the production, but in the player
---

I wrote a basic PotPlayer setup tutorial last year, but with a new monitor in hand this year, it's time to update to use the madVR version. The purpose of this article is to ensure smooth playback of most 24FPS animated videos while configuring madVR in a relatively convenient way, mainly for my laptop's current GTX1070 configuration.

## Required Software

Note: The following content may require some "special technology" to download, or you may need to find a domestic alternative source.

### PotPlayer

Please go directly to the [official website](https://potplayer.daum.net) to download the latest x64 version, which at the time of writing is 210929 (1.7.21564).

The only thing you need to pay attention to is to remember to check the box to install additional codecs in the last step.

### LAVFilters

Please go to [GitHub](https://github.com/Nevcairiel/LAVFilters/releases) to download the latest version directly, the version at the time of writing is 0.75.1.

Just check LAV Video Decoder (x64), LAV Audio Decoder (x64) and LAV Splitter Source (x64) during installation.

### madVR

Please download the latest version directly from the [official website](http://madvr.com), the version at the time of writing is 0.92.17.

Run `install.bat` as administrator.

## System Settings

Adjust the system video-related dynamic range parameters to full. Take NVIDIA driver as an example, in the "Change resolution" section, adjust the depth to the desired value (the tutorial uses 8bit as an example) and change the dynamic range to "Full"; also change the dynamic range to "Full" in the "Adjust video color settings".

![Diagram of changing resolution](https://s3.zstatic.net/images/2023/12/01-b213eea633515fb40219ce15e16adaf2.webp!style:auto)

![Adjust video color setting schematic](https://s3.zstatic.net/images/2023/12/01-298053a6f812a81327449c4bf89f90b4.webp!style:auto)

## Configure PotPlayer

### Adjust playback settings

Turn on the progress bar thumbnail in "Playback".

![Turn on progress bar thumbnails](https://s3.zstatic.net/images/2023/12/01-ce855d0bf35cbff1b6bb916f9266413b.webp!style:auto)

### Turn off all built-in image filters

![Disable all built-in image filters schematic](https://s3.zstatic.net/images/2023/12/01-2b94ec93bb7a3c1dcf167f0128f67d1a.png!style:auto)

### Enable LAVFilters

Switch to "Source Filters/Separators", and click "Add after search" in "Filter/Decoder Management" in the lower right corner, then the searched filters will appear in the left column.

![Add filter schematic](https://s3.zstatic.net/images/2023/12/01-2210037845dbc075d98c3912b892a55c.png!style:auto)

Switch to "LAV Video Decoder" on the left, and check H265 support in "Video Decoder" on the right.

![Schematic diagram of checking H265 support](https://s3.zstatic.net/images/2023/12/01-d9a3b939bb9bf6da799bca344a444c79.png!style:auto)

After OK, set all the ones that can be set as "LAV Splitter Source" to it in the "Source Filter/Splitter" as shown below. Similarly, switch to "Video Decoder" and set all the settings to "LAV Video Decoder" and all the settings to "LAV Audio Decoder" in Audio Decoder.

![Set filter schematic](https://s3.zstatic.net/images/2023/12/01-f6b1b5250807fa7eff13d28541090e20.png!style:auto)

### Video rendering settings

Renderer is set to Madshi (madVR).

![renderer schematic](https://s3.zstatic.net/images/2023/12/01-f6b1b5250807fa7eff13d28541090e20.png!style:auto)

"Color System/Properties" tab, set `YCbCr<->RGB` rule to be selected automatically.

![Conversion rule schematic](https://s3.zstatic.net/images/2023/12/01-2b59d608274c320777cdfbddcd0384d0.png!style:auto)

### Audio rendering settings

Audio output is changed to WASAPI renderer.

![Diagram of audio rendering settings](https://s3.zstatic.net/images/2023/12/01-58ab20d7ccc9f8e135bbd50266ccdd06.png!style:auto)

Turn off the formatting that makes the sound extremely unpleasant.

![Schematic of turning off speciﬁcation](https://s3.zstatic.net/images/2023/12/01-4e6b1e5b7f57f612292a769053cb7570.png!style:auto)

## Set LAVFilters

Enter the LAV Splitter Source settings and open the system tray icon for easy switching of audio and video tracks.

![LAV Splitter Source schematic](https://s3.zstatic.net/images/2023/12/01-f70f42268cc5f1d75747ad13d8fbf314.png!style:auto)

Enter the LAV Video Decoder settings as below, open the system tray and set the corresponding output format, and select D3D11 in the upper right corner of the hardware decoding section.

![LAV Video Decoder schematic](https://s3.zstatic.net/images/2023/12/01-eb56f49fcb601a9d6fa0b18a1bc5369d.png!style:auto)

Enter the LAV Audio Decoder settings, again open the tray icon, turn on Mixing, except for physical multi-channel players, and turn off Clipping Protection to avoid any impact on the audio dynamic range.

![LAV Audio Decoder schematic](https://s3.zstatic.net/images/2023/12/01-dabc19ff0d1b34ffbbf1fe5b6ede9e30.png!style:auto)

## Optimize subtitle rendering

Enter the subtitle settings, set the font rendering method and subtitle style as shown below.

![Subtitle setting schematic](https://s3.zstatic.net/images/2023/12/01-4a3e6a55957d1da1a2dc7a77cea9a4be.png!style:auto)

## Setting up madVR

This configuration is mainly for the GTX1070 graphics card on 1080P 24FPS video playback in 1080P to 1440P resolution, if other types of video and other lagging problems please adjust the configuration separately.

Details of each configuration can be found in the following two articles (freezer).

- [https://zhuanlan.zhihu.com/p/73960527](https://zhuanlan.zhihu.com/p/73960527)
- [https://zhuanlan.zhihu.com/p/73968849](https://zhuanlan.zhihu.com/p/73968849)

The monitor type is selected as "Digital Monitor".

![Display type schematic](https://s3.zstatic.net/images/2023/12/01-40c679ae048c4dfb0714abfc54960a42.png!style:auto)
Clear the scaling setting, check the box depending on your personal situation.

![Scaling settings schematic](https://s3.zstatic.net/images/2023/12/01-8dba3c56f122d380249bcc32a693b957.png!style:auto)
Chroma upscaling using NGU AA High. screen down using SSIM 1D 100%, enable LL, AR choose relaxed or soft depending on the situation, relaxed will be a little sharper, personally use soft.

For screen zooming, set doubling to NGU AA, zooming to Jinc AR and zooming to SSIM 1D 100% AR LL when not enabled.

![screen zooming schematic](https://s3.zstatic.net/images/2023/12/01-3d6cd3979703d99a9c21c4e681877244.png!style:auto)
## Video test

Up to here, the basic settings have been completed, open the video by Tab key to check whether the normal enable can be. The specific settings may vary depending on your preferences, so please take your time to adjust them according to your own preferences.

Please adjust it according to your preference.

![Video test diagram](https://s3.zstatic.net/images/2023/12/01-e716d9f2798e376302243a1110d1f338.png!style:auto)