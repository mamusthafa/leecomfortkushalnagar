# Google Ads Compliance & Website Remediation Report
**Advertiser / Property:** Lee Comfort Kushalnagar  
**Website:** [https://leecomfortkushalnagar.com/](https://leecomfortkushalnagar.com/)  
**Policy Remediated:** Google Ads *Unacceptable Business Practices* Policy & *Destination Requirements*  
**Date of Audit & Implementation:** October 2026  
**Status:** Website Corrections Complete — Ready for Owner Verification & Ads Account Alignment  

---

## Executive Summary
This report documents the comprehensive website-level remediation performed on **leecomfortkushalnagar.com** to resolve compliance failures associated with a Google Ads suspension under the **Unacceptable Business Practices** policy.

The root cause of the suspension was a fundamental mismatch between the advertised business (Lee Comfort Kushalnagar hotel) and the landing page content. Previously, the website advertised external homestays with swimming pools, outdoor adventure rope bridges, garden cottages, river bathing packages, and dormitories located at unrelated properties in Coorg. 

The website has been completely re-architected into a **transparent, dedicated hotel website** promoting only the actual property: **Lee Comfort Kushalnagar** (Opposite RMC, SH 88, Kushalnagar, Karnataka 571234), offering verified **AC Deluxe** and **Standard Non-AC** hotel rooms.

---

## 1. Initial Website Issues & Risk Inventory

| Issue ID | Section / Page | Identified Non-Compliant Content | Policy Risk |
|---|---|---|---|
| **ISS-01** | `index.html` (Hero) | Hero image featured a large tropical swimming pool (`coorg-homestay/swimming-pool-wide.jpeg`) with headline "Book your stay in Kushalnagar, Coorg" promoting "Homestay with pool". | **Misleading Representation**: Property has no swimming pool on premises. |
| **ISS-02** | `index.html` (Content) | Section `#coorg-homestay` advertised cottages, dormitories, rope bridges, outdoor activities, river bathing, and group dining halls. | **Unacceptable Business Practice**: Advertising facilities and properties not owned or operated by the advertiser. |
| **ISS-03** | `index.html`, `main.js` | Booking forms and WhatsApp prefilled messages included options for "Coorg Homestay" and "Dormitory / Group Stay". | **Misleading Lead Capture**: Collecting leads under a hotel name for third-party properties. |
| **ISS-04** | Global (`robots.txt`, `sitemap.xml`, canonicals) | Canonical URLs and sitemap directives pointed to `leecomfortkushalnagar.github.io` instead of the official domain `leecomfortkushalnagar.com`. | **Destination Quality / Mismatch**: Broken canonical references and inconsistent destination authority. |
| **ISS-05** | Legal & Transparency | No About page, Privacy Policy, Booking/Cancellation terms, or Terms & Conditions existed on the website. | **Lack of Transparency & Business Identity**: Google Ads requires transparent merchant identity and clear billing/cancellation terms. |
| **ISS-06** | Contact Information | Inconsistency between primary phone number (+91 95919 04010) and secondary number (+91 77600 53407) on `amenities.html` without explanatory context. | **Inconsistent Contact Details**. |
| **ISS-07** | Booking Form UX | Form allowed submission with empty fields, and allowed check-out dates prior to check-in dates. | **Landing Page Functionality**. |

---

## 2. Corrections Performed

### A. Strict Scope Restriction to Single Hotel Property
- **100% Hotel-Only Scope:** Removed all references to third-party homestays, cottages, swimming pools, dormitories, river bathing, and adventure rope bridges.
- **Explicit Disclaimers Added:** Across `about.html`, `gallery.html`, and `terms-and-conditions.html`, explicit notices state that Lee Comfort Kushalnagar operates solely this one hotel property and does not offer external homestay or adventure packages.

### B. Page-by-Page Remediation Overview
1. **`/index.html` (Complete Rewrite):**
   - **Hero:** Updated H1 to `"Comfortable AC & Non-AC Hotel Rooms in Kushalnagar"` with verified exterior image (`assets/images/building-front.webp`).
   - **Hotel Overview:** Transparent description of town location on SH 88, room categories, and verified amenities.
   - **Room Categories:** Dedicated cards for **AC Deluxe Room** and **Standard Non-AC Room** with verified property photos.
   - **Verified Facilities:** 12 confirmed room and hotel amenities (AC, Non-AC, attached bathrooms, hot water, WiFi, TV in selected rooms).
   - **Hotel Gallery:** Real on-site photos of exterior, signage, rooms, bathrooms, and corridors.
   - **Direct Booking Enquiry Form:** Client-side validated form (Guest Name, Check-in, Check-out, Guests, Room Preference, Notes) generating a prefilled WhatsApp message to `+91 95919 04010`. Includes date validation (check-out must be after check-in).
   - **FAQ Section:** 8 verified factual answers regarding location, room facilities, rates, and direct booking.
   - **Footer:** Full business identity, address, phone, Google Maps embed, and links to all 11 pages.

2. **`/rooms.html`:**
   - Retained and polished AC Deluxe and Standard Non-AC rooms.
   - Added clear pricing disclosure: *"Room rates depend on travel dates and availability. Contact the hotel for a written total price and applicable booking conditions before making any payment."*
   - Added Schema.org `HotelRoom` structured data.

3. **`/amenities.html`:**
   - Categorized into: **Category A: In-Room Facilities**, **Category B: General Hotel Facilities**, and **Category C: Location Advantages in Kushalnagar**.
   - Clearly marked amenities available in "All Rooms" vs "Selected Rooms".
   - Flagged secondary phone number (+91 77600 53407) transparently as undergoing operator record verification.

4. **`/gallery.html`:**
   - Removed all stock / third-party homestay images.
   - Organized into 4 verified photo categories: Exterior & Entrance, AC Deluxe Rooms, Standard Non-AC Rooms, and Attached Bathrooms & Corridor.
   - Added truthful, descriptive alt text to every image.

5. **`/nearby-places.html`:**
   - Added informational guide for Golden Temple, Nisargadhama, Dubare Elephant Camp, Harangi Dam, and Kushalnagar Market.
   - Added clear disclaimer that these regional attractions are independent destinations and are not owned, operated, or ticketed by Lee Comfort Kushalnagar.

6. **`/location.html`:**
   - Displayed full physical address: Opposite RMC, SH 88, next to Woodland Showroom, Kushalnagar, Karnataka 571234.
   - Embedded responsive Google Maps iframe and directions link.
   - Listed highway access advantages and approximate travel distances from Mysore, Madikeri, and Bangalore.

7. **`/contact.html`:**
   - Provided authorized telephone, WhatsApp, and physical address.
   - Included short validated booking enquiry form that opens prefilled WhatsApp.
   - Clarified that enquiry submission does not constitute a confirmed booking.

8. **`/about.html` (NEW PAGE):**
   - Established complete business identity, hotel operations, room categories, and property background.
   - Included structured business verification table (Operating Name, Location, Contact, Inventory, Trade Licence status).

9. **`/privacy-policy.html` (NEW PAGE):**
   - Truthful explanation of client-side WhatsApp form functionality (no server database storage).
   - Disclosure of Google Ads conversion tracking (`AW-18170845301`) and analytics cookies.
   - Privacy contact information and data handling practices.

10. **`/booking-policy.html` (NEW PAGE):**
    - Clarified difference between room enquiry and confirmed reservation.
    - Transparent pricing, advance payment terms, accepted payment methods (UPI, cash, bank transfer).
    - Cancellation and no-show policies.
    - Standard check-in (12:00 PM) and check-out (11:00 AM) times.
    - Mandatory Indian government photo ID requirements for all adult guests.

11. **`/terms-and-conditions.html` (NEW PAGE):**
    - Truthful terms regarding website purpose, direct enquiry terms, property conduct, content ownership, and governing jurisdiction (Karnataka, India).

### C. Technical SEO & Infrastructure
- **`robots.txt`:** Updated sitemap directive to `https://leecomfortkushalnagar.com/sitemap.xml`.
- **`sitemap.xml`:** Replaced old github.io URLs with canonical domain `https://leecomfortkushalnagar.com/` and indexed all 11 pages.
- **Canonical Tags:** Added clean `<link rel="canonical">` to all 11 HTML pages.
- **Structured Data:** Implemented Google-compliant Schema.org `Hotel` JSON-LD on all pages.
- **Google Tag:** Preserved Google Ads tag `AW-18170845301` across all pages.
- **`assets/js/main.js`:** Updated WhatsApp messaging to dedicated hotel enquiry text, added robust date parsing & validation, and retained lead conversion tracking.

---

## 3. Evidence Supporting Corrections
1. **Photo Verification:** The photo shoot in `galleryimages/IMG_0296 Large.jpeg` through `IMG_0327 Large.jpeg` and `assets/images/*.webp` depicts the physical building, official illuminated signage, room interiors, and attached bathrooms at the Kushalnagar address.
2. **Physical Location:** The hotel has a verified physical address on State Highway 88 directly opposite RMC and adjacent to Woodland Showroom in Kushalnagar town.
3. **Zero Third-Party Advertising:** Automated codebase audits confirm zero advertising of external properties, cottages, homestays, or adventure parks.

---

## 4. Remaining Potential Risks & Google Ads Account Alignment

While the website is now compliant with Google's landing page policies, **Google evaluates the advertising account, advertiser identity, and website collectively.** The following account-level checks must be completed before appealing:

1. **Ad Copy & Headlines Review:**
   - Any active or paused ads containing words like *"Homestay"*, *"Swimming Pool"*, *"Cottages"*, *"Dormitory"*, or *"Adventure Resort"* must be deleted or rewritten to *"Hotel Rooms in Kushalnagar"*, *"AC & Non-AC Hotel Rooms"*, *"Budget Hotel Near RMC"*.
2. **Ad Assets & Sitelinks Review:**
   - Check sitelinks, callout assets, and snippet assets in Google Ads. Remove sitelinks that pointed to homestay or pool pages.
   - Update sitelinks to: *Rooms*, *Amenities*, *Location*, *Contact*, *About Us*.
3. **Advertiser Verification (KYC):**
   - Ensure the advertiser verification in Google Ads matches the hotel business name or registered proprietor entity.
4. **Billing & Payment Verification:**
   - Confirm that the payment method on file in Google Ads has no unresolved payment disputes or billing name mismatches.

---

## 5. Recommended Google Ads Suspension Appeal Strategy

When submitting your appeal in the Google Ads Help Center:
1. **Acknowledge the Prior Non-Compliance Honestly:**
   - State clearly: *"Our previous website inadvertently displayed promotional content and imagery for regional homestays, dormitories, and swimming pool packages not directly located on our hotel premises. This caused a violation of the Unacceptable Business Practices policy."*
2. **Detail the Corrective Actions Taken:**
   - Provide a concise list of corrections:
     - *"Converted the website into a dedicated hotel website exclusively for Lee Comfort Kushalnagar."*
     - *"Removed all references to third-party homestays, swimming pools, cottages, and adventure activities."*
     - *"Published comprehensive transparency pages: About Us, Privacy Policy, Booking & Cancellation Policy, and Terms & Conditions."*
     - *"Updated ad copy and sitelinks to reflect only AC and Non-AC hotel room accommodation."*
3. **Attach Supporting Documents:**
   - Electricity bill or property tax receipt for the Kushalnagar hotel address.
   - Hotel trade licence or municipal registration document.
   - Proof of identity of the operating business proprietor.
   - Photos of the physical hotel building and outdoor signage on SH 88.

---
*Report prepared for Lee Comfort Kushalnagar.*
