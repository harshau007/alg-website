// import React from "react";

// const TutorialPage = () => {

//   return (
//     <div className="flex flex-col items-center p-8 bg-[#161a1e] text-white">
//       <h1 className="text-4xl font-bold mb-10 mt-[10rem] text-center">
//         Installation Videos
//       </h1>

//       <div className="flex flex-col items-center justify-center w-full mb-12 md:flex-row">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Verify your Arch Linux GUI Download
//           </h1>
//           <p className="text-lg">
//             In this video, we take a look at how to verify that you have
//             downloaded exactly what I uploaded using the Secure Hash Algorithm
//             (SHA). The Secure Hash Algorithms are a family of cryptographic hash
//             functions. A cryptographic hash is like a signature for a data set.
//             If you would like to compare two sets of raw data (source of the
//             file, text or similar) it is always better to hash it and compare
//             SHA256 values. This is why I provide the SHA256 checksums in a file
//             named sha256sum.txt. This makes it suitable for checking integrity
//             of your download. <br />
//             <br />
//             In this video, I will show you how to get a SHA256 checksum and
//             compare with the strings I have provided, to ensure the legitimacy
//             of the download. I will cover how you can do this on Windows and
//             Linux. I have explained on Windows 11, however, the steps are
//             applicable to Windows 10 and Windows 7. Simillarly, the steps show
//             for Linux are done on Arch, but can be done on any Linux
//             Distribution. You can find the checksums here as well.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/wtZjRXOny7Q?si=wnDXpHw9IYzeRIvB"
//             title="Verify Your Arch Linux GUI Downloads with Secure Hash Algorithm"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full md:flex-row-reverse">
//         <div className="w-1/2 p-4">
//           <h1 className="mb-4 text-4xl font-semibold">
//             ALG Automatic Installation
//           </h1>
//           <p className="text-lg">
//             In this video, we take a look at how to install Arch Linux using a
//             GUI installer (Calamares). In this video we install Arch Linux on
//             UEFI/GPT setup with automatic partining. ALG developers do not
//             encourage automatic partitoning. The primary reason is the creation
//             of the boot and home partitions, within the root parition.
//             <br />
//             <br />
//             In this video we use the ALG Minimal ISO. The automatic
//             installation, can be performed with the help of all 10 ALG ISOs, for
//             both the UEFI/GPT setup, as well as BIOS/MBR setup.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/0gAjgxGGzjw?si=j7JxyIlT3llRzugU"
//             title="Easy Way to install Arch Linux in 2021"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full mb-12 md:flex-row">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             ALG Installation on Legacy BIOS using MBR partitioning scheme
//           </h1>
//           <p className="text-lg">
//             In this video, we take a look at how to install Arch Linux, with a
//             GUI installer, on a Legacy/MBR setup. In this video, emphasis has
//             been given on partitioning, and a whole 10 minute session is
//             dedicated to explaining the partitioning.
//             <br />
//             <br />
//             In this video we use the ALG Pure ISO. The manual installation we
//             did here, can be performed with the help of all 10 ALG editions, for
//             the Legacy/MBR setup.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/smdZdPLHjWc?si=Oj2h2AhYCU-Uc0M2"
//             title="Install Arch Linux on Legacy BIOS with MBR"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <h1 className="text-4xl font-bold mb-10 mt-[5rem] text-center">
//         Multi-Boot with other OS
//       </h1>

//       <div className="flex flex-col items-center w-full mb-12 md:flex-row">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Dual Boot with Windows 10 Legacy/MBR
//           </h1>
//           <p className="text-lg">
//             In this video, we take a look at how to use the ALG ISOs, to dual
//             boot Arch Linux with Windows 10 on Legacy BIOS boot mode, using the
//             MBR (Master Boot Record) partitioning scheme.
//             <br />
//             <br />
//             In this video, we use the Manjaro KDE edition. The steps to dual
//             boot Arch with Windows is same as shown here. I have done this in
//             500GB HDD installed on a desktop.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/Ltiup47QIMU?si=-AYWZI25kXCZqVM-"
//             title="Dual Boot Windows 10 &amp; Manjaro 20 - Legacy BIOS"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full md:flex-row-reverse">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Dual Boot with Windows 10 UEFI/GPT
//           </h1>
//           <p className="text-lg">
//             In this video, we take a look at how to use the ALG ISOs, to dual
//             boot Arch Linux with Windows 10 on UEFI BIOS boot mode, using the
//             GPT paritioning scheme.
//             <br />
//             <br />
//             In this video, we use the ALG Flagship Edition (Plasma Themed). The
//             steps performed in this video can be done with all 10 ALG editions.
//             <br />
//             <br />
//             This dual-boot have been done on an ASUS laptop, with 256GB NVMe
//             SSD. 50 GB space was unallocated for Arch, from the existing 100GB
//             of the D: Drive. Swap of 4GB was created to accomodate for the
//             lesser physical memory installed on the hardware.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/zGvGkuVEx0M?si=KVJoFwiRx_iw_o6q"
//             title="Dual Boot Windows 10 &amp; Arch Linux | UEFI/GPT | GUI Method | 2022"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <h1 className="text-4xl font-bold mb-10 mt-[5rem] text-center">
//         Arch Linux Specific Videos
//       </h1>

//       <div className="flex flex-col items-center w-full mb-12 md:flex-row">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Install Software from AUR (pamac as example)
//           </h1>
//           <p className="text-lg text-wrap">
//             In this video, we take a look at how to install software from the
//             Arch User Repository (AUR). The AUR exposes the Arch Linux user to
//             the largest software database in the entire Linux community.
//             <br />
//             <br />
//             Software in the AUR is not compiled, most of the time and has to be
//             done locally. In this video we discuss two methods:
//             <br />
//             <br />
//             <span className="text-wrap">
//               &ensp; 1. Manual Method with makepkg (paru is the example)
//               <br />
//               &ensp; 2. With help of an AUR helper (that was just installed in
//               the step above), and pamac-all is the example.
//             </span>
//             <br />
//             <br />
//             Alternate title to this video can also be How to install Pamac. The
//             reason pamac is not included in the ALG ISOs is because pamac is
//             Manjaro's project. It has nothing to do with Arch directly, apart
//             from the fact the many people actually like it.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/BwvQUtv1eM0?si=haAqkAhQg4cTXLyh"
//             title="How to Install Software from the Arch User Repository?"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full md:flex-row-reverse">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Install Google Chrome On Arch Linux
//           </h1>
//           <p className="text-lg">
//             This video is simillar to the above video. We take a look at how to
//             install Google's Chrome Browser from AUR.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/f2lY3k5o84w?si=Nh6zwIq7igMJN622"
//             title="Install Google Chrome in Arch Linux or Manjaro 20 via AUR"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full mb-12 md:flex-row">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Install Zoom On Arch Linux
//           </h1>
//           <p className="text-lg text-wrap">
//             This video is simillar to the above two videos. We take a look at
//             how to install Zoom video conferencing tool. We see two methods, one
//             from official ZOOM download center and second from the AUR.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/hR97lCdizmk?si=KJTh_A-rqVy0TBBS"
//             title="Install Zoom in Arch Linux or Manjaro"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full mb-12 md:flex-row">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Make Bootable USB in Windows (7, 8, 10, 11)
//           </h1>
//           <p className="text-lg text-wrap">
//             In this video, we take a look at how to make a bootable USB of a
//             Linux distribution, on Windows. In this video, as an example, I will
//             make the Arch Linux GUI Gnome Edition.
//             <br />
//             <br />I am doing this on Windows 11, however, the steps can be
//             performed on Windows 7, 8 or 10.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/7ND2fiaFfic?si=tL3F1uR3APz83CJ8"
//             title="How to Make bootable Linux USB in Windows 11 | Rufus | Legacy/UEFI"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full md:flex-row-reverse">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Make Bootable USB with dd on any Linux Distro
//           </h1>
//           <p className="text-lg">
//             In this video, we take a look at how to make a bootable USB of a
//             Linux distribution, on another Linux distribution. In this video, as
//             an example, I will make the Manjaro bootable USB on Ubuntu.
//             <br />
//             <br />
//             The method show here can be used to make Arch Linux GUI's bootable
//             USB from any Linux distribution.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/KQGedNCA1E4?si=AN6v6lThBaJZAmn5"
//             title="Make Bootable Linux USB in any Linux Distro | dd command"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full mb-12 md:flex-row">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Install and Setup VirtualBox in Arch Linux
//           </h1>
//           <p className="text-lg text-wrap">
//             In this video, we take a look at how to install and setup VirtualBox
//             in Arch Linux.
//             <br />
//             <br />
//             Although I have done this on Vanilla Arch Linux with the stock
//             kernel, you can do this on all Arch based distributions, with
//             different kernels. For the stock kernel, you must select the
//             <span className="text-pink-400">
//               &nbsp;virtualbox-host-modules-arch
//             </span>{" "}
//             and if you are using the
//             <br />
//             <br />
//             &emsp;∘ LTS Kernel
//             <br />
//             &emsp;∘ Zen Kernel
//             <br />
//             &emsp;∘ Hardened Kernel
//             <br />
//             &emsp;∘ any other unofficiall kernel
//             <br />
//             <br />
//             then you should install the{" "}
//             <span className="text-pink-400">virtualbox-host-dkms</span>.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/m6ZeH1L2734?si=-9RMlKIVHUYhd4hM"
//             title="How to USE VirtualBox to try Linux | Beginners Guide"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full md:flex-row-reverse">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             How to use VirtualBox to try Arch Linux GUI or any Linux
//           </h1>
//           <p className="text-lg">
//             In this video, we take a look at how to use VirtualBox.
//             <br />
//             <br />I will show you how to setup a template which you can use to
//             try out all Arch Linux, and all other Arch Linux based Distributions
//             like Manjaro, ArcoLinux, etc.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/RJs70jQi7Wk?si=QgY8b1ZgZoQCs465"
//             title="How to Install &amp; Setup VirtualBox in Arch Linux"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>

//       <div className="flex flex-col items-center w-full mb-12 md:flex-row">
//         <div className="p-4 md:w-1/2">
//           <h1 className="mb-4 text-4xl font-semibold">
//             Fixing broken bootloader
//           </h1>
//           <p className="text-lg text-wrap">
//             In this video, we take a look at how to use the ALG ISOs, to fix
//             broken GRUB bootloader. This method works if you have partitioned,
//             according to the recommended way of partitioning. Please have a look
//             of the installation section.
//             <br />
//             <br />
//             In this video, we are using the ALG Pure ISO. ALG developers
//             recommend you to use the ALG ISO you used to install Arch Linux.
//           </p>
//         </div>
//         <div className="p-4 md:w-1/2">
//           <iframe
//             className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
//             src="https://www.youtube-nocookie.com/embed/XsE34MdHTqI?si=vC8tAgFGx8EseZTV"
//             title="Fix GRUB Rescue Error in Arch Linux"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TutorialPage;
"use client";
import Loader from "../lib/loader";
import HandleYT from "../lib/HandleYT";
import { Suspense } from "react";
import React from "react";
const install = [
  {
    title: "Verify your Arch Linux GUI Download",
    description: `In this video, we take a look at how to verify that you have downloaded exactly what I uploaded using the Secure Hash Algorithm (SHA). The Secure Hash Algorithms are a family of cryptographic hash functions. A cryptographic hash is like a signature for a data set. If you would like to compare two sets of raw data (source of the file, text or similar) it is always better to hash it and compare SHA256 values. This is why I provide the SHA256 checksums in a file named sha256sum.txt. This makes it suitable for checking integrity of your download. 
    In this video, I will show you how to get a SHA256 checksum and compare with the strings I have provided, to ensure the legitimacy of the download. I will cover how you can do this on Windows and Linux. I have explained on Windows 11, however, the steps are applicable to Windows 10 and Windows 7. Simillarly, the steps show for Linux are done on Arch, but can be done on any Linux Distribution. You can find the checksums here as well.`,
    url: "wtZjRXOny7Q",
  },
  {
    title: "ALG Automatic Installation",
    description: `In this video, we take a look at how to install Arch Linux using a GUI installer (Calamares). In this video we install Arch Linux on UEFI/GPT setup with automatic partining. ALG developers do not encourage automatic partitoning. The primary reason is the creation of the boot and home partitions, within the root parition.
    In this video we use the ALG Minimal ISO. The automatic installation, can be performed with the help of all 10 ALG ISOs, for both the UEFI/GPT setup, as well as BIOS/MBR setup.`,
    url: "0gAjgxGGzjw",
  },
  {
    title: "ALG Installation on Legacy BIOS using MBR partitioning scheme",
    description: `In this video, we take a look at how to install Arch Linux, with a GUI installer, on a Legacy/MBR setup. In this video, emphasis has been given on partitioning, and a whole 10 minute session is dedicated to explaining the partitioning.
    In this video we use the ALG Pure ISO. The manual installation we did here, can be performed with the help of all 10 ALG editions, for the Legacy/MBR setup.`,
    url: "smdZdPLHjWc",
  },
];
const multiboot = [
  {
    title: "Dual Boot with Windows 10 Legacy/MBR",
    description: `In this video, we take a look at how to use the ALG ISOs, to dual boot Arch Linux with Windows 10 on Legacy BIOS boot mode, using the MBR (Master Boot Record) partitioning scheme.
    In this video, we use the Manjaro KDE edition. The steps to dual boot Arch with Windows is same as shown here. I have done this in 500GB HDD installed on a desktop.`,
    url: "Ltiup47QIMU",
  },
  {
    title: "Dual Boot with Windows 10 UEFI/GPT",
    description: `In this video, we take a look at how to use the ALG ISOs, to dual boot Arch Linux with Windows 10 on UEFI BIOS boot mode, using the GPT paritioning scheme.
    In this video, we use the ALG Flagship Edition (Plasma Themed). The steps performed in this video can be done with all 10 ALG editions.
    This dual-boot have been done on an ASUS laptop, with 256GB NVMe SSD. 50 GB space was unallocated for Arch, from the existing 100GB of the D: Drive. Swap of 4GB was created to accomodate for the lesser physical memory installed on the hardware.`,
    url: "zGvGkuVEx0M",
  },
];

const archSpecific = [
  {
    title: "Install Software from AUR (pamac as example)",
    description: `In this video, we take a look at how to install software from the Arch User Repository (AUR). The AUR exposes the Arch Linux user to the largest software database in the entire Linux community.
    Software in the AUR is not compiled, most of the time and has to be done locally. In this video we discuss two methods:
    1. Manual Method with makepkg (paru is the example)
    2. With help of an AUR helper (that was just installed in the step above), and pamac-all is the example.
    Alternate title to this video can also be How to install Pamac. The reason pamac is not included in the ALG ISOs is because pamac is Manjaro's project. It has nothing to do with Arch directly, apart from the fact the many people actually like it.`,
    url: "BwvQUtv1eM0",
  },
  {
    title: "Install Google Chrome On Arch Linux",
    description: `This video is simillar to the above video. We take a look at how to install Google's Chrome Browser from AUR.`,
    url: "f2lY3k5o84w",
  },
  {
    title: "Install Zoom On Arch Linux",
    description: `This video is simillar to the above two videos. We take a look at how to install Zoom video conferencing tool. We see two methods, one from official ZOOM download center and second from the AUR.`,
    url: "hR97lCdizmk",
  },
];

const miscellaneous = [
  {
    title: "Make Bootable USB in Windows (7, 8, 10, 11)",
    description: `In this video, we take a look at how to make a bootable USB of a Linux distribution, on Windows. In this video, as an example, I will make the Arch Linux GUI Gnome Edition.
    I am doing this on Windows 11, however, the steps can be performed on Windows 7, 8 or 10.`,
    url: "7ND2fiaFfic",
  },
  {
    title: "Make Bootable USB with dd on any Linux Distro",
    description: `In this video, we take a look at how to make a bootable USB of a Linux distribution, on another Linux distribution. In this video, as an example, I will make the Manjaro bootable USB on Ubuntu.
    The method show here can be used to make Arch Linux GUI's bootable USB from any Linux distribution.`,
    url: "KQGedNCA1E4",
  },
  {
    title: "Install and Setup VirtualBox in Arch Linux",
    description: `In this video, we take a look at how to install and setup VirtualBox in Arch Linux.
    Although I have done this on Vanilla Arch Linux with the stock kernel, you can do this on all Arch based distributions, with different kernels. For the stock kernel, you must select the virtualbox-host-modules-arch and if you are using the
    \n- LTS Kernel
    \n- Zen Kernel
    \n- Hardened Kernel
    \n- Any other unofficiall kernel
    then you should install the virtualbox-host-dkms.`,
    url: "m6ZeH1L2734",
  },
  {
    title: "How to use VirtualBox to try Arch Linux GUI or any Linux",
    description: `In this video, we take a look at how to use VirtualBox.
    I will show you how to setup a template which you can use to try out all Arch Linux, and all other Arch Linux based Distributions like Manjaro, ArcoLinux, etc.`,
    url: "RJs70jQi7Wk",
  },
  {
    title: "Fixing broken bootloader",
    description:
      "In this video, we take a look at how to fix a broken bootloader in Arch Linux. Sometimes, after updates, you may find yourself stuck with the bootloader, and unable to boot into the operating system. This can happen because of:\nRepeated updates over a long period of time.\nHardware issues, like sudden poweroff.\nBugs in new updates.This video covers the steps to fix the bootloader in a majority of cases.",
    url: "XsE34MdHTqI",
  },
];
const TutorialPage = () => {
  return (
    <div className="flex flex-col items-center md:py-10 sm:px-12 md:px-20 lg:px-28 px-6 py-6 bg-[#161a1e] text-white">
      <h1 className="mb-4 text-3xl font-bold text-center mt-36 md:text-5xl md:mb-10">
        Installation Videos
      </h1>

      {install.map((video, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-2 md:gap-6 w-full mb-12 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="p-4 md:w-1/2">
            <h1 className="mb-2 text-xl font-semibold md:text-3xl">
              {video.title}
            </h1>
            {video.description.split("\n").map((line, idx) => (
              <p key={idx} className="mb-3 ">
                {line}
              </p>
            ))}
          </div>
          <div className="md:w-1/2">
            <Suspense fallback={<Loader />}>
              <HandleYT
                videoId={video.url}
                className="w-full h-[300px] md:h-[500px] rounded-2xl"
              />
            </Suspense>
          </div>
        </div>
      ))}

      <h1 className="mt-4 mb-4 text-3xl font-bold text-center md:text-5xl md:mb-10">
        Multi-Boot with other OS
      </h1>

      {multiboot.map((video, index) => (
        <div
          key={index}
          className={`flex flex-col items-center w-full mb-12 gap-2 md:gap-6 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="p-4 md:w-1/2">
            <h1 className="mb-2 text-xl font-semibold md:text-3xl">
              {video.title}
            </h1>
            {video.description.split("\n").map((line, idx) => (
              <p key={idx} className="mb-3">
                {line}
              </p>
            ))}
          </div>
          <div className="md:w-1/2">
            <Suspense fallback={<Loader />}>
              <HandleYT
                videoId={video.url}
                className="w-full h-[300px] md:h-[500px] rounded-2xl"
              />
            </Suspense>
          </div>
        </div>
      ))}
      <h1 className="mt-4 mb-4 text-3xl font-bold text-center md:text-5xl md:mb-10">
        Arch Linux Specific videos
      </h1>
      {archSpecific.map((video, index) => (
        <div
          key={index}
          className={`flex flex-col items-center w-full gap-2 md:gap-6 mb-12 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="p-4 md:w-1/2">
            <h1 className="mb-2 text-xl font-semibold md:text-3xl">
              {video.title}
            </h1>
            {video.description.split("\n").map((line, idx) => (
              <p key={idx} className="mb-3">
                {line}
              </p>
            ))}
          </div>
          <div className="md:w-1/2">
            <Suspense fallback={<Loader />}>
              <HandleYT
                videoId={video.url}
                className="w-full h-[300px] md:h-[500px] rounded-2xl"
              />
            </Suspense>
          </div>
        </div>
      ))}
      <h1 className="mt-4 mb-4 text-3xl font-bold text-center md:text-5xl md:mb-10">
        Miscellaneous Topics
      </h1>

      {miscellaneous.map((video, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-2 md:gap-6 w-full mb-12  ${
            index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="p-4 md:w-1/2">
            <h1 className="mb-2 text-xl font-semibold md:text-3xl">
              {video.title}
            </h1>
            {video.description.split("\n").map((line, idx) => (
              <p key={idx} className="mb-3">
                {line}
              </p>
            ))}
          </div>
          <div className="md:w-1/2">
            <Suspense fallback={<Loader />}>
              <HandleYT
                videoId={video.url}
                className="w-full h-[300px] md:h-[500px] rounded-2xl"
              />
            </Suspense>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TutorialPage;
