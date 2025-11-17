# Image Guide for Innovate Engineering Website

This document lists all the image placeholders used throughout the website. Simply replace these files with your actual images, keeping the same filenames.

## Directory Structure

```
eng/
└── images/
    ├── hero/           # Hero carousel images
    ├── projects/       # Project portfolio images
    ├── team/          # Team member photos
    ├── blog/          # Blog post images
    ├── company-overview.jpg
    └── company-timeline.jpg
```

## Image Requirements

### Hero Carousel Images (index.html)
**Location:** `images/hero/`
**Recommended Size:** 1350x600px or larger
**Format:** JPG

1. `hero-1.jpg` - Main hero image (Engineering Excellence)
2. `hero-2.jpg` - Infrastructure Solutions
3. `hero-3.jpg` - Sustainable Engineering
4. `hero-4.jpg` - Expert Consulting

---

### Company Images
**Location:** `images/`

1. **`company-overview.jpg`** (index.html)
   - Used in: About section on homepage
   - Recommended Size: 600x600px
   - Description: General company/office overview image

2. **`company-timeline.jpg`** (about.html)
   - Used in: Company History section
   - Recommended Size: 600x600px
   - Description: Company timeline or historical photo

---

### Project Images
**Location:** `images/projects/`
**Recommended Size:** 800x600px
**Format:** JPG

#### Index.html (Featured Projects)
1. `green-energy-complex.jpg` - Green Energy Complex project
2. `smart-city.jpg` - Smart City Infrastructure project
3. `industrial-automation.jpg` - Industrial Automation project

#### Projects.html (Full Portfolio)
1. `metro-rail.jpg` - Metro Rail Expansion project
2. `solar-farm.jpg` - Solar Farm Development project
3. `manufacturing-facility.jpg` - Manufacturing Facility Upgrade
4. `wastewater-plant.jpg` - Wastewater Treatment Plant project
5. `smart-bridge.jpg` - Smart Bridge Construction project
6. `wind-farm.jpg` - Wind Farm Development project

---

### Team Member Photos
**Location:** `images/team/`
**Recommended Size:** 400x400px (square)
**Format:** JPG

1. `eng-asante.jpg` - CEO & Founder
2. `asante-fante.jpg` - Chief Operations Officer
3. `maguru-anthony.jpg` - Chief Technology Officer
4. `josephine-nakyeyune.jpg` - Director of Projects

---

### Blog Images
**Location:** `images/blog/`
**Recommended Size:** 800x600px
**Format:** JPG

1. `featured-sustainable-infrastructure.jpg` - Featured: Future of Sustainable Infrastructure
2. `solar-technology.jpg` - Advances in Solar Technology Efficiency
3. `ai-urban-planning.jpg` - Integrating AI in Urban Planning
4. `circular-economy.jpg` - Circular Economy in Construction
5. `resilient-design.jpg` - Resilient Design for Extreme Weather
6. `digital-twins.jpg` - The Role of Digital Twins in Engineering
7. `women-in-engineering.jpg` - Women in Engineering: Breaking Barriers

---

## How to Add Your Images

1. **Prepare your images** according to the recommended sizes above
2. **Name your files** exactly as listed (case-sensitive)
3. **Place them in the correct folders** under the `images/` directory
4. **Refresh your browser** to see the images appear

### Example:
```
# If you have a photo for Eng. Asante:
1. Resize/crop the photo to 400x400px
2. Save it as: eng-asante.jpg
3. Place it in: images/team/eng-asante.jpg
4. The image will automatically appear on the About page
```

## Image Optimization Tips

- **Format:** Use JPG for photos, PNG for graphics with transparency
- **Compression:** Compress images to reduce file size (aim for <200KB per image)
- **Resolution:** Use 72 DPI for web images
- **Aspect Ratio:** Maintain the recommended dimensions for best display
- **Quality:** Balance between file size and visual quality (80-85% quality is usually good)

## Fallback Behavior

If an image file is missing, the browser will show:
- A broken image icon, or
- The alt text (where provided), or
- The background color placeholder

## Need Help?

If you need to change image filenames or paths, edit the HTML files:
- `index.html` - Homepage hero and featured sections
- `about.html` - Team photos and company images
- `projects.html` - Project portfolio images
- `blog.html` - Blog post images

Search for `images/` in the HTML files to find all image references.
