const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_16x9';

const assetsDir = 'D:/Ajmal/POS-Flutter/presentation_assets';

// PowerPoint Slides with real pictures
const pptSlides = [
  {
    type: 'cover',
    title: 'PURPLE KEYS POS',
    subtitle: 'Next-Generation Enterprise Point-of-Sale Solution',
    desc: 'Complete Modular Architecture & Operational Workflow Overview for Executive Leadership',
    stats: [
      { num: '60 FPS', label: 'Flutter Smooth Touch' },
      { num: '99.99%', label: 'Offline Uptime SLA' },
      { num: '< 300ms', label: 'Mixology Recipe Speed' },
      { num: '0%', label: 'Bar Liquor Leakage' }
    ]
  },
  {
    title: 'Enterprise Architecture & Data Flow',
    cat: 'Core Architecture',
    val: 'Google Flutter 3 with Clean Architecture and an offline-first Hive NoSQL database, ensuring sub-10ms UI responsiveness.',
    img: 'screen_02_architecture.svg',
    points: [
      'Google Flutter 3 Multiplatform engine running across Windows POS terminals and Android/iOS waiter handhelds.',
      'Embedded Hive NoSQL database caches menus, tables, and orders locally for instantaneous sub-10ms performance.',
      'ASP.NET Core REST API backed by Oracle database with two-way SignalR WebSockets for real-time synchronization.'
    ]
  },
  {
    title: 'Operator Sign In & Session Initialization',
    cat: 'Security & Auth',
    val: 'Provides a branded, high-security portal for cashiers and waitstaff to log into shift sessions with cryptographic verification.',
    img: 'real_01_login.jpg',
    points: [
      'Secure token-based JWT authentication preventing credential interception across local and wireless hotel networks.',
      'Automatically provisions active permissions, default outlet locations, and cashier registers upon sign in.',
      'Background inactivity watchdog begins monitoring idle time to enforce the 30-minute automated auto-lock guard.'
    ]
  },
  {
    title: 'Location & Departmental Outlet Routing',
    cat: 'Multi-Store Setup',
    val: 'Enables operators to dynamically bind sessions to specific revenue centers: Banquet, Barrel Bar, Complimentary, or Home Delivery.',
    img: 'real_02_location_select.jpg',
    points: [
      'Multi-outlet flexibility: Seamlessly switch operations between Banquet (Code: 14), Barrel (Code: 5), and Home Delivery.',
      'Dedicated inventory depots: Automatically deducts liquor and kitchen stocks from the exact cellar or pantry assigned.',
      'Location-specific tax rules: Applies tailored fiscal invoice sequences, service charges, and VAT rules.'
    ]
  },
  {
    title: 'Interactive Dining Room Table View',
    cat: 'Dine-In Operations',
    val: 'Displays the live dining room floor with color-coded table occupancy, running order counts, and rapid keyboard actions.',
    img: 'real_03_table_view.jpg',
    points: [
      'Running OT / KOT Indicators: Highlights tables with active orders (Table 602 with 1 order, Table 502 with 2 orders).',
      'Available table grid: Displays vacant tables with green indicators (504, 605, 607, 606, 508, 406) ready for seating.',
      'Complete function key shortcuts: F5 Refresh, Alt+L Location, Alt+O Outlet, Alt+R Reserve, Alt+T Transfer, Alt+M Merge.'
    ]
  },
  {
    title: 'High-Throughput Menu Catalog & Speed Ordering',
    cat: 'Speed Billing',
    val: 'Engineered for rapid order entry with visual item cards, veg/non-veg tags, quick category tabs, and 1-tap "Save & eBill".',
    img: 'real_04_menu_catalog.jpg',
    points: [
      'Fast category navigation: Instant switching across Appetizer, Beverage, Big Plates, Brandy, Cocktail, and Coffee Shop.',
      'Sub-10ms shortcode search: Type item codes (#PLPNT, #CPS, #CSN) or names for immediate local Hive retrieval.',
      'Active order check panel: Displays current order (#57442 Bot no #416), assigned waiter (Anu), and Save & eBill action.'
    ]
  },
  {
    title: 'Intelligent Cocktail Builder & Stock Substitution',
    cat: 'Liquor Control',
    val: 'Enforces exact liquor portioning, validates cellar inventory, and enables seamless 1-click substitute liquor selection.',
    img: 'real_06_cocktail_builder.png',
    points: [
      'Recipe Master Control: Every cocktail recipe links to exact peg/milliliter requirements in enterprise master tables.',
      '1-Click Liquor Substitution: When primary liquor is depleted (e.g. Oasis Classic Rum), substitutes are surfaced automatically.',
      'Zero Bar Stock Variance: Guarantees 100% balance between physical bar bottle volume and POS fiscal sales records.'
    ]
  },
  {
    title: 'Line Item Quantity Modifier & Stock Verification',
    cat: 'Order Staging',
    val: 'A dedicated modal dialog providing granular portion control, real-time stock availability verification, and rapid quantity adjustments.',
    img: 'real_07_item_qty_select.png',
    points: [
      'Touch quantity steppers: Ergonomic plus/minus buttons allowing waitstaff to quickly scale quantities for large groups.',
      'Live stock availability: Displays real-time kitchen availability counts (e.g. Avail: 1), preventing over-ordering exhausted dishes.',
      '1-Tap selection confirmation: Vibrant confirmation button displaying total selected units for instantaneous check line injection.'
    ]
  },
  {
    title: 'Customer Selection & Guest Profiling',
    cat: 'Guest Hospitality',
    val: 'Facilitates fast guest assignment by searching names or mobile numbers, enrolling new customers, and linking loyalty points.',
    img: 'real_08_customer_select.jpg',
    points: [
      'Instant mobile search: Search across 100+ registered customers in sub-10ms by typing partial phone numbers or guest names.',
      'Instant new guest enrollment: One-tap "+ Add New" button allows immediate registration of walk-in guests.',
      'Loyalty & digital invoicing: Links settled checks to customer loyalty points, ledger credits, and digital WhatsApp invoices.'
    ]
  },
  {
    title: 'Live Order View & Preparation Status Board',
    cat: 'Order Tracking',
    val: 'The centralized operational tracking board displaying active dining orders, OT numbers, assigned waitstaff, and cooking status.',
    img: 'real_09_order_view_live.png',
    points: [
      'Dual Order View / OT View: Switch seamlessly between table-centric order aggregation and granular kitchen ticket streams.',
      'Elapsed time SLA tracking: Monitors preparation duration (e.g., 15 min elapsed), alerting supervisors to slow dishes.',
      'Visual status progression: Color-coded lifecycle dots: Not Accepted (Purple), Prep Started (Blue), Serve, and Served.'
    ]
  },
  {
    title: 'Digital KOT Kitchen Dispatch & Chef Control',
    cat: 'Kitchen Logistics',
    val: 'Provides an interactive digital Kitchen Order Ticket (KOT) workflow allowing chefs to accept or reject incoming dish tickets.',
    img: 'real_10_kot_ordered_items.png',
    points: [
      'Chef Accept / Reject actions: Direct touch buttons on kitchen screens allow cooks to acknowledge tickets or reject items.',
      'OT chronological sequence: Displays OT tickets (417, 416, 415, 414, 141) in strict chronological sequence for kitchen fairness.',
      'Status lifecycle progression: Transitions line items through Not Accepted, Preparation Started, Ready to Serve, and Served.'
    ]
  },
  {
    title: 'Executive Navigation Drawer & System Hub',
    cat: 'System Hub',
    val: 'Master navigation drawer providing rapid, slide-out access to all operational hubs: Live View, Reports, Sync, and User Rights.',
    img: 'real_11_nav_drawer.png',
    points: [
      'Operational quick links: Instant 1-tap navigation to Home dashboard, Live order tracking view, and business Reports.',
      'Customer & loyalty management: Direct launcher for Customer Directory and CRM guest profile management.',
      '1-Tap offline data sync: Sync Data action manually flushes queued offline orders and updates master catalog data.'
    ]
  },
  {
    title: 'Orders Register & Delivery Fulfillment',
    cat: 'Fulfillment & Billing',
    val: 'Centralized transaction register tracking delivered orders across dining rooms and room service with 1-tap "BILL ORDER" checkout.',
    img: 'real_12_orders_register.png',
    points: [
      'Real-time order register: Displays daily order stream with Order No, Table number, Location, Guest Name, Mobile, and Status.',
      'Delivered status tracking: Confirms successful dish delivery (e.g. DELIVERED badge) before cashiers finalize billing.',
      '1-Tap BILL ORDER action: Instant action button opens settlement screen with pre-filled amounts ready for payment collection.'
    ]
  },
  {
    title: 'Completed Bills Archive & Fiscal Ledger Audit',
    cat: 'Fiscal Ledger',
    val: 'An immutable historical ledger of all settled bills with date/outlet filters, revenue totals, and one-click Excel data export.',
    img: 'real_13_bills_archive.png',
    points: [
      'Comprehensive bill records: Historical invoice log capturing Bill No, Customer Phone, Guest Name, Table, and Payment tender.',
      'Deep invoice inspection: "VIEW" action opens full itemized invoice breakdown with taxes, discounts, and cashier signature.',
      'One-click Excel export: Export financial billing ledgers directly to Microsoft Excel for corporate accounting and tax audits.'
    ]
  },
  {
    title: 'Customer Directory & VIP Milestone CRM',
    cat: 'CRM & Loyalty',
    val: 'Hospitality CRM managing registered guest profiles, phone numbers, birthdays, and anniversaries to drive repeat visits.',
    img: 'real_14_customer_directory.png',
    points: [
      'Centralized guest profiles: Maintains comprehensive directory of registered patrons with customer ID, name, phone, and email.',
      'Milestone tracking (DOB & Anniversary): Records birthdays and wedding anniversaries, enabling staff to prepare complimentary perks.',
      'Dynamic name & phone search: Search instant guest records in sub-10ms by typing partial phone digits or customer surnames.'
    ]
  },
  {
    title: 'Thermal Printer Connection & Peripheral Spooling',
    cat: 'Hardware Peripherals',
    val: 'Driverless hardware management supporting USB, Network LAN, ESC/POS thermal printers, and automated OS printer auto-detection.',
    img: 'real_15_printer_management.png',
    points: [
      'Multi-protocol filter tabs: Dedicated panels for USB direct-connected, Network LAN Ethernet, Thermal, and Bluetooth devices.',
      'Auto-Detect OS Printers: One-tap scan discovers all operating system installed print drivers and raw USB ports automatically.',
      'Auto-failover spooler: Automatically redirects print jobs to backup receipt printers if paper runs out, avoiding missing orders.'
    ]
  },
  {
    title: 'User Rights Assignment & RBAC Governance',
    cat: 'Role Governance',
    val: 'Strict role-based access control protecting revenue by assigning explicit menu permissions with transaction code mapping per employee.',
    img: 'real_16_user_rights_rbac.png',
    points: [
      'Granular menu access control: Assign or restrict 25+ discrete POS capabilities including Bill Entry, Order View, and Table Merge.',
      'Transaction code mapping: Each permission maps to formal enterprise transaction codes (e.g., TRNPOS0020, TRNPOS0015).',
      'Fraud & void elimination: Ensures servers cannot delete items or apply unverified discounts without explicit administrative privileges.'
    ]
  },
  {
    title: 'Executive Strategic Value & ROI Transformation',
    cat: 'Strategic ROI',
    val: 'Empowering enterprise hospitality with 30% faster table turnover, 100% bar stock accuracy, and zero revenue leakage.',
    img: 'screen_17_offline_sync.svg',
    points: [
      '30% Faster Table Turnover: Sub-second speed ordering and instant dual KOT/BOT split dispatch maximize peak-hour covers.',
      '100% Bar Stock Reconciliation: Recipe peg tracking and substitute validation eliminate unauthorized pouring and inventory loss.',
      '99.99% Offline Operational Uptime: Local Hive NoSQL storage ensures registers and printers never stop working during outages.'
    ]
  }
];

pptSlides.forEach((s, idx) => {
  const slide = pptx.addSlide();

  if (s.type === 'cover') {
    // Cover Slide
    slide.background = { color: '2E0832' };

    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.8, y: 0.8, w: 11.7, h: 5.6,
      fill: { color: '3B0D40' },
      line: { color: '7C3AED', width: 2 }
    });

    slide.addText('PURPLE KEYS POS', {
      x: 1.2, y: 1.3, w: 10.9, h: 0.8,
      fontSize: 34, fontFace: 'Arial', color: 'FFFFFF', bold: true, letterSpacing: 2
    });

    slide.addText(s.subtitle, {
      x: 1.2, y: 2.1, w: 10.9, h: 0.5,
      fontSize: 18, fontFace: 'Arial', color: 'C084FC', bold: true
    });

    slide.addText(s.desc, {
      x: 1.2, y: 2.7, w: 10.9, h: 0.6,
      fontSize: 13, fontFace: 'Arial', color: 'E2E8F0'
    });

    // Stats Grid
    s.stats.forEach((st, sIdx) => {
      const xPos = 1.2 + (sIdx * 2.7);
      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: xPos, y: 3.7, w: 2.5, h: 1.8,
        fill: { color: '240529' },
        line: { color: '7C3AED', width: 1.5 }
      });
      slide.addText(st.num, {
        x: xPos + 0.1, y: 3.9, w: 2.3, h: 0.7,
        fontSize: 24, fontFace: 'Arial', color: '38BDF8', bold: true, align: 'center'
      });
      slide.addText(st.label, {
        x: xPos + 0.1, y: 4.7, w: 2.3, h: 0.5,
        fontSize: 11, fontFace: 'Arial', color: 'E2E8F0', align: 'center'
      });
    });
  } else {
    // Detail Slide
    slide.background = { color: 'F8FAFC' };

    // Top Header Banner
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0, y: 0, w: 13.33, h: 1.0,
      fill: { color: 'FFFFFF' },
      line: { color: 'E2E8F0', width: 1 }
    });

    slide.addText(s.cat.toUpperCase(), {
      x: 0.8, y: 0.15, w: 8.0, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: '7C3AED', bold: true
    });

    slide.addText(s.title, {
      x: 0.8, y: 0.42, w: 8.0, h: 0.45,
      fontSize: 20, fontFace: 'Arial', color: '0F172A', bold: true
    });

    slide.addText(`Slide ${idx + 1} of ${pptSlides.length}`, {
      x: 10.0, y: 0.35, w: 2.5, h: 0.35,
      fontSize: 12, fontFace: 'Arial', color: '64748B', bold: true, align: 'right'
    });

    // Left Column: Embedded Image / Screen Screenshot
    const imgPath = path.join(assetsDir, s.img);
    if (fs.existsSync(imgPath)) {
      slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
        x: 0.8, y: 1.25, w: 5.8, h: 5.5,
        fill: { color: '0F172A' },
        line: { color: 'E2E8F0', width: 2 }
      });
      slide.addImage({
        path: imgPath,
        x: 0.85, y: 1.3, w: 5.7, h: 5.4,
        sizing: { type: 'contain', w: 5.7, h: 5.4 }
      });
    }

    // Right Column: Executive Summary Card & Bullet Points
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 6.9, y: 1.25, w: 5.6, h: 1.6,
      fill: { color: 'FFFFFF' },
      line: { color: '7C3AED', width: 2 }
    });

    slide.addText('EXECUTIVE BUSINESS VALUE', {
      x: 7.1, y: 1.35, w: 5.2, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: '7C3AED', bold: true
    });

    slide.addText(s.val, {
      x: 7.1, y: 1.65, w: 5.2, h: 1.1,
      fontSize: 12.5, fontFace: 'Arial', color: '1E293B', bold: true
    });

    // Key Operational Capabilities
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 6.9, y: 3.05, w: 5.6, h: 3.7,
      fill: { color: 'FFFFFF' },
      line: { color: 'E2E8F0', width: 1 }
    });

    slide.addText('KEY OPERATIONAL CAPABILITIES & SOP', {
      x: 7.1, y: 3.2, w: 5.2, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: '0F172A', bold: true
    });

    const bulletItems = s.points.map(pt => ({
      text: pt,
      options: { fontSize: 11, fontFace: 'Arial', color: '334155', breakLine: true }
    }));

    slide.addText(bulletItems, {
      x: 7.1, y: 3.55, w: 5.2, h: 3.0,
      bullet: { type: 'bullet', code: '25AA' }
    });
  }
});

const outPath = 'D:/Ajmal/POS-Flutter/PurpleKeys_POS_Executive_Presentation.pptx';
pptx.writeFile({ fileName: outPath }).then(() => {
  console.log(`PowerPoint updated successfully with all real pictures at: ${outPath}`);
}).catch(err => {
  console.error('Error generating PPTX:', err);
});
