import { HeroHeader, ContentSection } from "@/types/contents"

/* ====================
[> CUSTOMIZING CONTENT <]
-- Setup image by typing `/image-name.file` (Example: `/header-image.jpg`)
-- Add images by adding files to /public folder
-- Leave blank `` if you don't want to put texts or images
 ==================== */

export const heroHeader: HeroHeader = {
  header: `An AI Based`,
  subheader: `smart doctor appointment system.`,
  image: `/doct.png`,
}

export const featureCards: ContentSection = {
  header: `WHY US`,
  subheader: `OUR SERVICES`,
  content: [
    {
      text: `Efficient Scheduling`,
      subtext: `"Streamlined and hassle-free appointment scheduling for your convenience."`,
      image: `/web.png`,
    },
    {
      text: `Real-Time Doctor Presence`,
      subtext: `"Stay informed with real-time doctor availability for timely medical care."
      `,
      image: `/doct.png`,
    },
    {
      text: `Smart Waitlist Management`,
      subtext: `"Our system prioritizes appointment on the basis of urgency."`,
      image: `/waitlist.png`,
    },
  ],
}

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      image: `/seo.svg`,
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      image: `/performant.svg`,
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      image: `/customize.svg`,
    },
  ],
}

export const features2: ContentSection = {
  header: `Features`,
  subheader: `Why use Next Landing?`,
  image: `/features-img.webp`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`,
      image: `/seo.svg`,
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`,
      image: `/performant.svg`,
    },
    {
      text: `Easy Customizability`,
      subtext: `Change your content and layout with little effort`,
      image: `/customize.svg`,
    },
  ],
}