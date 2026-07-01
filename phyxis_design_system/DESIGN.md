---
name: PhyXis Design System
colors:
  surface: '#111316'
  surface-dim: '#111316'
  surface-bright: '#37393d'
  surface-container-lowest: '#0c0e11'
  surface-container-low: '#1a1c1f'
  surface-container: '#1e2023'
  surface-container-high: '#282a2d'
  surface-container-highest: '#333538'
  on-surface: '#e2e2e6'
  on-surface-variant: '#becab9'
  inverse-surface: '#e2e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#899484'
  outline-variant: '#3f4a3c'
  surface-tint: '#78dc77'
  primary: '#78dc77'
  on-primary: '#00390a'
  primary-container: '#4caf50'
  on-primary-container: '#003c0b'
  inverse-primary: '#006e1c'
  secondary: '#a5c8ff'
  on-secondary: '#00315f'
  secondary-container: '#006ec9'
  on-secondary-container: '#eaf0ff'
  tertiary: '#ffb1c7'
  on-tertiary: '#650032'
  tertiary-container: '#f26f9d'
  on-tertiary-container: '#690034'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#94f990'
  primary-fixed-dim: '#78dc77'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005313'
  secondary-fixed: '#d4e3ff'
  secondary-fixed-dim: '#a5c8ff'
  on-secondary-fixed: '#001c3a'
  on-secondary-fixed-variant: '#004786'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#ffb1c7'
  on-tertiary-fixed: '#3e001c'
  on-tertiary-fixed-variant: '#861948'
  background: '#111316'
  on-background: '#e2e2e6'
  surface-variant: '#333538'
  surface-charcoal: '#1E2227'
  border-subtle: '#2C323A'
  indicator-blue: '#2196F3'
  glow-green: rgba(76, 175, 80, 0.15)
  data-blue: '#0D47A1'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 26px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  sidebar-width: 260px
---

## Brand & Style

The design system is engineered for a professional, academic, and modern digital ecosystem dedicated to university physics laboratory practices. The brand personality is rooted in **precision, academic rigor, and technological sophistication**. It aims to evoke a sense of focus and reliability, transforming complex experimental data into an intuitive, tool-like experience.

The visual style is a blend of **Corporate Modern** and **Engineering Minimalism**. It utilizes high-contrast dark surfaces to reduce eye strain during long lab sessions, paired with vibrant functional accents that mimic the phosphorescence of lab equipment displays. The interface maintains an "industrial tool" feel through the use of grid-based layouts, subtle glows for active states, and crisp, systematic information density. This ensures that the platform feels less like a typical website and more like a high-performance scientific instrument.

## Colors

The palette is optimized for a **Dark Mode** environment, prioritizing legibility and cognitive focus.

- **Primary (#4CAF50):** A vibrant lab-green used for primary actions, success states, and indicating active experimental equipment.
- **Secondary (#1976D2):** A deep technical blue utilized for data visualization, secondary indicators, and progress tracking.
- **Neutral (#121417):** A deep charcoal/slate foundation that provides a non-distracting backdrop for 3D simulations and dense data cards.
- **Functional Accents:** Subtle gray-blue borders (#2C323A) are used to define zones without adding visual noise. "Glow" variants of the primary green are used for active equipment highlighting in the 3D canvas.

## Typography

This design system employs **Inter** as its sole typeface to ensure maximum clarity in data-dense layouts. The typography is treated with a systematic, utilitarian approach.

- **Headlines:** Use tight letter spacing and heavier weights to provide clear section anchors.
- **Body:** Standardized for readability in Indonesian (Bahasa Indonesia), with generous line heights for long-form reports and AI-generated assessments.
- **Labels:** Small caps or bold weights are used for data points, unit measurements (e.g., "m/s²"), and sidebar navigation items to create a distinct hierarchy between data values and descriptive labels.

## Layout & Spacing

The design system follows a **Fixed Grid** model for administrative and assessment dashboards, and a **Contextual/Fluid** model for the 3D Simulation Canvas.

- **Grid:** A 12-column grid is used for desktop layouts, collapsing to 4 columns on mobile.
- **Sidebar:** A persistent left-hand sidebar navigation provides access to modules, KPS Passport, and Reports.
- **Rhythm:** A 4px baseline grid ensures tight, engineering-tool precision.
- **Density:** Spacing is kept compact (8px-16px) in data cards and sliders to allow more information to be visible without scrolling, crucial for laboratory monitoring.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** rather than traditional shadows.

- **Base Layer:** The deepest slate (#121417) used for the main background.
- **Container Layer:** Slightly lighter charcoal (#1E2227) for cards, sidebars, and panels.
- **Active State:** Uses **Subtle Glows** (0px 0px 12px) in the primary green color to indicate "powered on" equipment or active lab steps.
- **Outlines:** High-precision, low-contrast borders (#2C323A) define UI boundaries, maintaining a flat but structured feel reminiscent of technical blueprints.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding provides a professional, modern feel that avoids the "sharpness" of older software while maintaining the structured look required for scientific tools. 

- **Buttons & Inputs:** Use the base `rounded` (4px).
- **Cards & Modal Containers:** Use `rounded-lg` (8px).
- **Badges/Status Indicators:** Are strictly rectangular or slightly rounded to differentiate from interactive "pill" buttons.

## Components

- **Data-Dense Cards:** Background in `surface-charcoal` with a `border-subtle`. Header contains `label-md` for the metric title and `headline-md` for the value.
- **Primary Buttons:** Solid `primary` green background with black text for maximum contrast. No gradient.
- **Sliders:** Minimalist track with a high-contrast `secondary` blue thumb. Value readouts appear immediately above the thumb.
- **Toggle Switches:** Small, technical toggles using the `primary` green for the "On" state, emitting a faint glow.
- **Badges (KPS Passport):** Low-saturation background colors with high-contrast text. "Lulus" (Passed) uses a subtle green tint; "Belum Lulus" (Not Yet Passed) uses a subtle neutral-gray tint.
- **3D Canvas Overlays:** Semi-transparent dark panels (80% opacity) positioned at the bottom or sides of the simulation area, housing step-by-step instructions.
- **Sidebar Navigation:** Active items use a vertical green border on the left and a subtle `glow-green` background highlight.