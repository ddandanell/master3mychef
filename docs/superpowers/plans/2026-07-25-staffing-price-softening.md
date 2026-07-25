# Staffing Pages Price Softening

**Goal:** Remove or downplay specific pricing on staffing pages so visitors focus on services and contact us for quotes.

**Pages:**
- `/staffing` (`src/pages/StaffingPage.tsx`)
- `/staffing/private-chef-placement` (`src/pages/StaffingPlacementPage.tsx`)
- `/staffing/live-in-chef` (`src/pages/StaffingLiveInPage.tsx`)
- `/staffing/villa-staff` (`src/pages/StaffingVillaStaffPage.tsx`)
- `/staffing/household-staff` (`src/pages/StaffingHouseholdPage.tsx`)
- `/staffing/for-villa-managers` (`src/pages/StaffingVillaManagersPage.tsx`)
- `/staffing/for-hotels-restaurants` (`src/pages/StaffingHotelsPage.tsx`)

**Approach:**
1. Audit each page for visible prices, salary numbers, rate ranges, and placement-fee language.
2. Replace hard figures with value-focused copy and "Contact us for a tailored quote" CTAs.
3. Keep service descriptions and staff types intact.
4. Build, verify no price-floor warnings, deploy.
