import { SiteConfig, ContactConfig } from "@/types"

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "http://localhost:3000/"  // baseURL prob can happunn

export const siteConfig: SiteConfig = {
  name: "DocEase",
  author: "redpangilinan",
  description:
    "An AI based doctor appointment systum.",
  keywords: [
    "Doctor",
    "Appointment",
    "Landing Page",
    "Slot Booking",
  ],
  url: {
    base: baseUrl,
    author: "",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "",
}
