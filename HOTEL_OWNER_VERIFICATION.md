# Hotel Owner Verification Checklist
**Property:** Lee Comfort Kushalnagar  
**Address:** Opposite RMC, SH 88, next to Woodland Showroom, Kushalnagar, Karnataka 571234  
**Date:** October 2026  
**Purpose:** Pre-publication business verification before deploying the remediated website and submitting the Google Ads suspension appeal.

---

## Status Classification Legend
- **VERIFIED:** Confirmed through existing property assets, live website records, or verified photo EXIF metadata.
- **NEEDS OWNER CONFIRMATION:** Requires explicit review and sign-off by the property owner before public launch or Google Ads appeal submission.
- **REMOVED:** Non-compliant, misleading, or unrelated content permanently deleted from the codebase.
- **NOT APPLICABLE:** Features not relevant to this single hotel property.

---

## Verification Checklist

| # | Item for Verification | Current Website Implementation | Status | Owner Action Required |
|---|---|---|---|---|
| **1** | **Exact Legal Business Name & Entity** | Displayed as *"Lee Comfort Kushalnagar"*. Formal registered entity name (e.g. Sole Proprietorship, Partnership, Pvt Ltd) not yet stated. | **NEEDS OWNER CONFIRMATION** | Provide exact legal name of the owner or business entity for inclusion in `about.html` and the Google Ads advertiser verification process. |
| **2** | **Hotel Trade Licence / Registration** | Disclosed on `about.html` as: *"Local municipal hotel trade licensing records maintained on-premises at front desk."* | **NEEDS OWNER CONFIRMATION** | Confirm municipal trade licence / registration number or have physical copy ready to upload for the Google Ads appeal. |
| **3** | **Total Room Inventory** | Stated on website as **10 Hotel Rooms** across AC Deluxe and Standard Non-AC categories. | **NEEDS OWNER CONFIRMATION** | Confirm whether the exact room count is 10 rooms or if the count has changed. |
| **4** | **In-Room Amenities & Facilities** | Listed: Air conditioning (AC rooms), Ceiling fans (all rooms), Private attached bathroom, Hot water, In-room TV (selected rooms), WiFi, Wardrobe (selected rooms), Seating table/chair (selected rooms). | **VERIFIED** | Confirm all listed amenities are operational across both room categories. |
| **5** | **Primary Contact Number (+91 95919 04010)** | Configured as primary click-to-call link, footer contact, and official WhatsApp enquiry recipient. | **VERIFIED** | Confirm this line is actively monitored by authorized staff. |
| **6** | **Secondary Contact Number (+91 77600 53407)** | Appeared on previous amenities page. Retained on `amenities.html` and `contact.html` with explicit label: *"Undergoing hotel operator documentation verification"*. | **NEEDS OWNER CONFIRMATION** | Decide whether to keep +91 77600 53407 as an official secondary line or remove it entirely to maintain a single phone number. |
| **7** | **Booking Confirmation & Advance Payment Process** | Disclosed that website form is an enquiry only; advance token deposit may be requested during peak dates; payment accepted via UPI, cash, bank transfer. | **VERIFIED** | Confirm advance deposit percentage (e.g. 50% or fixed token) and UPI/bank details for guest payment. |
| **8** | **Cancellation, Refund & No-Show Terms** | Disclosed on `booking-policy.html` that advance notice is required for cancellations and refunds depend on agreed written terms. No deceptive "100% free cancellation" claims made. | **NEEDS OWNER CONFIRMATION** | Review standard cancellation window (e.g., 24 hours or 48 hours before check-in) and refund percentage. |
| **9** | **Check-in & Check-out Timings** | Standard timings set as: **Check-in: 12:00 PM (Noon)** and **Check-out: 11:00 AM**. | **NEEDS OWNER CONFIRMATION** | Confirm if these match the actual front desk shift schedule. |
| **10** | **Photo Gallery Ownership Confirmation** | 16 on-site photos (`galleryimages/IMG_0296 Large.jpeg` to `IMG_0327 Large.jpeg`) taken at Kushalnagar property + 14 webp images in `assets/images/`. | **VERIFIED** | Confirm all published photos belong strictly to Lee Comfort Kushalnagar. |

---

## Items Permanently Removed from Website

| Removed Non-Hotel Item | Reason for Removal | Status |
|---|---|---|
| Coorg Homestay advertising & packages | Property is a dedicated commercial town hotel, not a rural homestay. | **REMOVED** |
| Swimming pool images & claims | Hotel property has no swimming pool. | **REMOVED** |
| Garden cottages & dormitory stays | Not available at Lee Comfort Kushalnagar. | **REMOVED** |
| Outdoor rope bridges & adventure activities | Belonged to an unrelated external tourist campsite. | **REMOVED** |
| River bathing day packages | Unrelated regional activity falsely advertised as a hotel service. | **REMOVED** |
| Group dining hall packages | Outside scope of standard hotel accommodation. | **REMOVED** |

---

## Instructions for Hotel Owner Prior to Live Deployment

1. **Review this checklist** and confirm items marked **NEEDS OWNER CONFIRMATION**.
2. **Deploy the updated website files** to your production hosting server (`leecomfortkushalnagar.com`).
3. **Inspect the live website** on both desktop and mobile to ensure all pages render as expected.
4. **Log in to Google Ads**:
   - Check all active campaigns and ad groups.
   - Delete any headlines or ad copy referencing homestays, cottages, or swimming pools.
   - Update sitelinks to point to the new pages: `/rooms.html`, `/amenities.html`, `/about.html`, `/location.html`.
5. **Submit the appeal** through the Google Ads account dashboard referencing the corrections detailed in `GOOGLE_ADS_COMPLIANCE_REPORT.md`.
