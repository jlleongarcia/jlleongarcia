---
title: "Learning about 3D Printing and more"
date: 2025-12-31
draft: true
tags: ["Tinkering"]
summary: abcd
url: 'starting-with-3dprinting'
---

## Choosing a Printer

People recommended me: [Prusa](https://www.prusa3d.com/) or BambuLabs

* https://www.prusa3d.com/page/how-to-choose-a-3d-printer_229126/

{{< details title="What to Know before choosing a 3D Printer 📌" closed="true" >}}

I found interesting the following resources:

* https://all3dp.com/2/3d-printing-for-beginners-all-you-need-to-know-to-get-started/
* https://www.prusa3d.com/page/basics-of-3d-printing-with-josef-prusa_490/
* https://www.reddit.com/r/3Dprinting/wiki/gettingstarted/
* https://www.reddit.com/r/prusa3d/comments/1eau9je/give_it_to_me_prusa_vs_bambu/
* https://www.reddit.com/r/BambuLab/comments/1cqn7ua/why_bambu_over_prusa_specifically_p1s_vs_prusa_mk4/

1. Type of 3D Printer (Technology)
- **FDM (Fused Deposition Modeling):** 
  - Uses [filament](https://www.prusa3d.com/category/filament/).
  - Great for functional prototypes, larger objects, and lower-cost printing.
  - Suitable for most hobbyists and general users.
- **SLA (Stereolithography):** 
  - Uses resin.
  - Offers higher resolution, ideal for intricate details like miniatures, jewelry, or dental models.
- **Other Technologies (e.g., SLS):** 
  - Mainly for industrial applications.
  - Typically more expensive and complex.

**Recommendation:** If you're a beginner or hobbyist, an FDM printer is usually a good starting point.

2. Build Volume
- **What to Know:** Build volume refers to the maximum size of objects you can print. Larger build volumes allow you to print bigger objects in one go, but they also mean a bigger, often more expensive printer.
- **Questions to Ask:** What size do you need? Are you printing small, intricate models or larger prototypes?

3. Print Material Compatibility
- **FDM Materials:** PLA, ABS, PETG, and flexible filaments like TPU.
- **SLA Materials:** Different types of resins (standard, tough, flexible, etc.).
- **What to Know:** Each material has different properties (strength, flexibility, temperature resistance), and some printers handle specific materials better. Ensure the printer supports the materials you intend to use.

4. Resolution and Print Quality
- **Layer Height:** The smaller the layer height, the finer the print details. 
  - FDM printers: 0.1-0.3 mm.
  - SLA printers: As low as 0.025 mm.
- **What to Know:** Higher resolution usually means longer print times. If detail is crucial, SLA might be better; otherwise, FDM offers a good balance.

5. Ease of Use
- **What to Know:** Some 3D printers are more user-friendly, especially for beginners, while others require advanced knowledge for calibration, maintenance, or troubleshooting.
- **Features to Look For:** Auto-bed leveling, filament sensors, touchscreen interfaces, and good support/documentation can make the printer easier to use.

6. Cost
- **Upfront Cost:** Includes the printer’s price, assembly (if you choose a kit vs. pre-assembled), accessories, and upgrades.
- **Operating Costs:** Filament or resin, replacement parts (nozzles, print beds), electricity, and time spent troubleshooting.
- **What to Know:** An affordable printer may be enticing, but factor in long-term costs and reliability. Mid-range printers (like Prusa i3 MK4) often offer better durability and support, reducing headaches over time.

7. Post-Processing
- **What to Know:** Some printers, especially SLA, require post-processing (e.g., cleaning and curing). For FDM, you might need to remove supports and sand the prints. Consider how much post-processing effort you’re willing to handle.

8. Community and Support
- **What to Know:** A strong user community and customer support can be invaluable, especially if you're new to 3D printing. 
- **Check:** Does the manufacturer provide regular software updates? Is there an active forum or helpdesk for troubleshooting?

9. Software Compatibility
- **Slicing Software:** Most 3D printers use slicer software to convert 3D models into G-code instructions.
- **What to Know:** Ensure the printer supports widely-used, open-source slicers like PrusaSlicer, Cura, or others. Check if the printer's software is easy to use, frequently updated, and supports various file formats (STL, OBJ, 3MF).

10. Print Speed
- **What to Know:** Faster printing speeds save time, but they can reduce print quality, especially on complex objects. FDM printers typically print slower than SLA printers, but this varies based on the model and settings.

- **For Beginners:** Focus on ease of use, price, and material compatibility. The **Prusa Mini+** or **i3 MK4** are great choices.
- **For Professionals or Enthusiasts:** Look into build volume, resolution, and software features. Consider a **Prusa XL** for FDM or an **SL1S Speed** for SLA printing.

{{< /details >}}

## 3DPrint Designs


{{< details title="Where to get 3DPrint Designs 📌" closed="true" >}}

* https://www.printables.com/es
* https://thangs.com/
* [maker world](https://makerworld.com/en/3d-models)
* ThingyVerse

> STL files! and you can do cool thinks like [this miniPC of ~1.2L](https://www.youtube.com/watch?v=_Euus3cum5k)

* https://www.reddit.com/r/3Dprinting/comments/1ep78yx/is_thingiverse_still_the_standard_place_to_get/
* https://www.reddit.com/r/3Dprinting/comments/ozg8xj/creality_vs_prusa_3d_printers/
* https://teachingtechyt.github.io/calibration.html

{{< /details >}}

What cool things you can do? How about a **3d printed Hydrofoil**?

{{< youtube RdVfVoCJZQM >}}

> It seems they used Prusa for it


### Software for DYI Designs

Prusa 3D printers primarily require files in G-code format for printing. G-code is the standard language used by most 3D printers to control the movements of the printer's components and manage the printing process.

* Model File Formats: STL, OBJ, 3MF (input files for slicing).
* Print File Format: G-code (file format used by Prusa printers to execute the print).

* I made some notes on [how to install some design programs](https://jalcocert.github.io/Linux/docs/debian/foss_engineering):
    * Blender
    * FreeCad
    * OpenSCad
    * https://github.com/nkallen/plasticity?tab=readme-ov-file

* Slice the Model:
    * Use a slicer software like PrusaSlicer to convert your 3D model file (e.g., STL, OBJ, or 3MF) into G-code.
    * Other Software: Slic3r, OctoPrint, Cura, Repetier-Host

### The Costs of 3DPrinting

{{< details title="RaspAP with Mullvad 📌" closed="true" >}}

| **Category**               | **Item**                      | **Expected Price (USD)**     |
|----------------------------|-------------------------------|-----------------------------|
| **Primary Consumables**     | Filament                      | $20 - $50 per kg            |
|                            | Resin                         | $50 - $150 per liter        |
| **Operational Costs**       | Electricity                   | Varies (Typically $5 - $20 per month) |
|                            | Nozzles                       | $5 - $20 each               |
|                            | Print Bed Adhesives           | $5 - $15                    |
| **Maintenance Costs**       | Lubricants                    | $5 - $15                    |
|                            | Build Plates/Print Beds       | $20 - $60                   |
|                            | Replacement Parts (e.g., belts, fans, extruders, hot ends) | $10 - $100+ depending on the part |
| **Post-Processing Supplies**| Sandpaper                     | $5 - $20                    |
|                            | Isopropyl Alcohol (IPA)       | $10 - $30 per gallon        |
|                            | Curing Materials (UV light, curing stations) | $30 - $200+ depending on the setup |

{{< /details >}}




## My 3D Printing Plans

Can't wait to make some mechanism design and see it work.

* There is an **awsome project by Gabemorris12** - https://github.com/gabemorris12/mechanism
    * ...which I forked and have pending to [give it a serious trial](https://github.com/JAlcocerT/mechanism)
* Most likely I will start with [a simple, yet useful Slider-Crank](https://github.com/JAlcocerT/Slider-Crank)

> If you like mechanism, you can have a look at my [Bicycle Dynamics Simulator](https://github.com/JAlcocerT/Bike_dynamic_simulator)


### Prusa + Raspberry Pi

<!-- https://www.youtube.com/watch?v=qQmQ9ZpvHUo -->

<!-- {{< youtube id="v=qQmQ9ZpvHUo" autoplay="false" >}} -->
{{< youtube "qQmQ9ZpvHUo" >}}


---

## FAQ

Very interesting video: western vs eastern design - https://www.youtube.com/watch?v=8UAsN9wvePE

* https://forocoches.com/foro/showthread.php?t=8677592
* https://forocoches.com/foro/showthread.php?t=6621713

### Designs as Code

1. **GIMP with python** - https://docs.gimp.org/2.10/en_GB/gimp-filters-python-fu.html

Before we start writing Python scripts in GIMP, we need to install the Python-Fu plug-in. This plug-in enables GIMP to run Python scripts.

2. **FreeCAD with Python** - https://wiki.freecad.org/Python_scripting_tutorial
    * Query2CAD: [Generating CAD models using natural language queries](https://arxiv.org/html/2406.00144v1)


### Free Software for 3D Printing

1. **OctoPrint** - https://octoprint.org/
    * https://github.com/OctoPrint/OctoPrint
    * https://www.raspberrypi.com/tutorials/set-up-raspberry-pi-octoprint/
    * https://depau.github.io/3dprint-wiki/wiki/hardware/octoprint-devices/

> The snappy web interface for your 3D printer.

* **Klipper** - https://github.com/Klipper3d/klipper

>  Klipper is a 3d-printer firmware 

### Other DIY Stuff

* Someone made a [**3D Printed HydroFoil** and shared it in this YT Video](https://www.youtube.com/watch?v=Iz0Ar_6GvfA)

* [Micro Racer Car](https://github.com/StuckAtPrototype/Racer)
  * https://www.youtube.com/watch?v=6jzG-BMannc