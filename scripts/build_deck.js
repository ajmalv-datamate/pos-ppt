const fs = require('fs');
const path = require('path');

const slidesData = [
  {
    num: 1,
    type: 'full',
    tag: 'Enterprise Platform Directory',
    badge: '16 Verified Real App Modules',
    title: 'Purple Keys POS: Executive System Modules & Capabilities',
    modules: [
      { slide: 3, icon: '🔐', name: 'Operator Sign In', cat: 'Security & Auth', desc: 'Secure user ID and password authentication with multi-store location assignment.' },
      { slide: 4, icon: '🏢', name: 'Location & Outlet', cat: 'Multi-Store Setup', desc: 'Instant outlet switching across Banquet, Barrel, Complimentary, and Home Delivery.' },
      { slide: 5, icon: '🍽️', name: 'Table View Floor', cat: 'Dine-In Operations', desc: 'Real-time color-coded dining tables, running OT/KOT indicators, and table transfers.' },
      { slide: 6, icon: '⚡', name: 'Speed Ordering Menu', cat: 'Counter & Dining', desc: 'Touch-optimized categorized menu, dynamic search, and instant Save & eBill.' },
      { slide: 7, icon: '🍸', name: 'Cocktail Builder', cat: 'Mixology Control', desc: 'Peg recipe validation, real-time stock substitute selection, and zero-leakage control.' },
      { slide: 8, icon: '🔢', name: 'Item Quantity Modifier', cat: 'Order Staging', desc: 'Fast portion and quantity selection dialog with stock availability verification.' },
      { slide: 9, icon: '👥', name: 'Customer Selection', cat: 'Guest Hospitality', desc: 'Instant guest lookup by mobile number, quick customer creation, and loyalty tracking.' },
      { slide: 10, icon: '⏱️', name: 'Live Order View', cat: 'Order Tracking', desc: 'Centralized live monitoring of active OTs, elapsed timers, waiter tags, and prep status.' },
      { slide: 11, icon: '📋', name: 'KOT Kitchen Ticket', cat: 'Kitchen Logistics', desc: 'Chef order dispatch with Accept/Reject actions, cooking stages, and runner ready alerts.' },
      { slide: 12, icon: '📂', name: 'Navigation Menu', cat: 'System Hub', desc: 'Full-featured drawer for fast navigation to Live View, Reports, Sync, and Settings.' },
      { slide: 13, icon: '📦', name: 'Orders Register', cat: 'Fulfillment & Bill', desc: 'Delivered order tracking with guest info, room service routes, and 1-tap billing.' },
      { slide: 14, icon: '📑', name: 'Bills Archive & Audit', cat: 'Fiscal Ledger', desc: 'Complete historical transaction records with view, edit, delete, and Excel export.' },
      { slide: 15, icon: '📇', name: 'Customer Directory', cat: 'CRM & Loyalty', desc: 'Comprehensive guest database with birthdates, anniversaries, and contact profiles.' },
      { slide: 16, icon: '🖨️', name: 'Printer Management', cat: 'Hardware Spooler', desc: 'Multi-device thermal management for USB, Network LAN, and Bluetooth printers.' },
      { slide: 17, icon: '🛡️', name: 'User Rights & RBAC', cat: 'Role Governance', desc: 'Granular user permission assignment across Bill Entry, Kitchen View, and Table Merges.' },
      { slide: 18, icon: '📊', name: 'Strategic Executive ROI', cat: 'Business Impact', desc: '30% faster table turnover, 100% bar stock accuracy, and enterprise scalability.' }
    ]
  },
  {
    num: 2,
    type: 'split',
    img: 'presentation_assets/screen_02_architecture.svg',
    screenBadge: '🏛️ System Architecture Flow',
    pins: [
      { num: 1, text: 'Google Flutter 3 Multiplatform Engine' },
      { num: 2, text: 'Sub-10ms Local Hive NoSQL Database' },
      { num: 3, text: 'SignalR Real-Time WebSocket Bus' }
    ],
    cat: 'Core Architecture • Screen 1 of 1',
    title: 'Enterprise Architecture & Data Flow',
    desc: 'Purple Keys POS combines Google Flutter with Clean Architecture and an offline-first Hive NoSQL database, ensuring sub-10ms UI responsiveness and zero downtime even during total network drops.',
    highlights: [
      { icon: '📱', title: 'Google Flutter 3 UI', desc: 'Hardware-accelerated 60 FPS touch interface running identically across Windows terminals, Android tablets, and mobile devices.' },
      { icon: '💾', title: 'Local Hive Storage', desc: 'Embedded local NoSQL database serializes catalog master data, table occupancy, and orders without relying on active network.' },
      { icon: '⚡', title: 'Reactive BLoC Streams', desc: 'Unidirectional data flow guarantees predictable state management and clean separation between UI widgets and domain logic.' },
      { icon: '🔗', title: 'Oracle & SignalR Sync', desc: 'ASP.NET Core REST API backed by Oracle database with two-way SignalR WebSockets for instant multi-terminal synchronization.' }
    ],
    sop: {
      title: 'Enterprise Architectural Standards',
      steps: [
        'Presentation layer communicates exclusively with BLoC Cubits, completely decoupled from network clients.',
        'All orders and item edits persist locally in Hive NoSQL before triggering network synchronization requests.',
        'Network Sentinel monitors connection quality, auto-queuing offline operations with cryptographic UUID tracking.'
      ]
    },
    pills: ['Google Flutter 3', 'BLoC Pattern', 'Hive NoSQL', 'Dio REST', 'SignalR Hub', 'Oracle Enterprise DB']
  },
  {
    num: 3,
    type: 'split',
    img: 'presentation_assets/real_01_login.jpg',
    screenBadge: '🔐 Real POS Screen • Operator Login',
    pins: [
      { num: 1, text: 'Purple Key POS Smart Branding' },
      { num: 2, text: 'Operator Credentials (User ID & Password)' },
      { num: 3, text: 'Direct Prompt Support Integration' }
    ],
    cat: 'Security & Authentication • Screen 1 of 2',
    title: 'Operator Sign In & Session Initialization',
    desc: 'Provides a branded, high-security portal for cashiers, waitstaff, and managers to log into their assigned shift sessions with cryptographic credential verification.',
    highlights: [
      { icon: '🛡️', title: 'Cryptographic Auth', desc: 'Secure token-based JWT authentication preventing credential interception across local and wireless hotel networks.' },
      { icon: '👤', title: 'Role-Based Initialization', desc: 'Automatically provisions active permissions, default outlet locations, and cashier registers upon successful sign in.' },
      { icon: '⏱️', title: 'Inactivity Protection', desc: 'Background inactivity watchdog begins monitoring idle time to enforce the 30-minute automated auto-lock guard.' },
      { icon: '📞', title: 'Direct Enterprise Support', desc: 'Embedded enterprise helpdesk contacts for prompt Datamate technical assistance during shift handovers.' }
    ],
    sop: {
      title: 'Operator Sign In Flow',
      steps: [
        'Launch Purple Keys POS on the terminal and enter assigned User ID and password.',
        'Tap "Login →" to authenticate credentials against the local security cache and central server.',
        'Upon successful verification, system prompts for operational location and department assignment.'
      ]
    },
    pills: ['JWT Authentication', 'Role Provisioning', 'Session Watchdog', 'Datamate Support', 'Shift Kickoff']
  },
  {
    num: 4,
    type: 'split',
    img: 'presentation_assets/real_02_location_select.jpg',
    screenBadge: '🏢 Real POS Screen • Location Selection',
    pins: [
      { num: 1, text: 'Login Success Notification Toast' },
      { num: 2, text: 'Active Location List (Banquet, Barrel, Complimentary)' },
      { num: 3, text: 'Location Code Identification (e.g., Code: 14)' }
    ],
    cat: 'Multi-Store Setup • Screen 2 of 2',
    title: 'Location & Departmental Outlet Routing',
    desc: 'Enables operators to dynamically bind their POS session to specific revenue centers such as Banquet, Barrel Bar, Home Delivery, or Restaurant with distinct tax and inventory rules.',
    highlights: [
      { icon: '🏬', title: 'Multi-Outlet Flexibility', desc: 'Seamlessly switch operations between Banquet (Code: 14), Barrel (Code: 5), Home Delivery (Code: 11), and Dining.' },
      { icon: '📦', title: 'Dedicated Inventory Depots', desc: 'Automatically deducts liquor and kitchen stocks from the exact cellar or pantry assigned to that specific location.' },
      { icon: '🧾', title: 'Location-Specific Tax Rules', desc: 'Applies tailored fiscal invoice sequences, service charges, and VAT rules based on the selected revenue center.' },
      { icon: '⚡', title: 'Instant Shift Binding', desc: 'One-tap confirmation sets up the entire ordering terminal with the department menu catalog and table layout.' }
    ],
    sop: {
      title: 'Location Selection Protocol',
      steps: [
        'Following login, the "Select Location" dialog lists all authorized business outlets.',
        'Select the operational zone (e.g., BANQUET Code: 14) matching your shift assignment.',
        'Tap "Confirm" to load the outlet-specific table floor layout and price books.'
      ]
    },
    pills: ['Multi-Outlet Support', 'Cellar Stock Routing', 'Departmental Billing', 'Revenue Center Binding', 'Fast Switch']
  },
  {
    num: 5,
    type: 'split',
    img: 'presentation_assets/real_03_table_view.jpg',
    screenBadge: '🍽️ Real POS Screen • Table View',
    pins: [
      { num: 1, text: 'Running OT (Table 602) & Running KOT (Table 502)' },
      { num: 2, text: 'Available Tables with Green Accent (504, 605, 607)' },
      { num: 3, text: 'Transfer KOT (Alt+T/F8) & Merge Table (Alt+M/F9) Actions' }
    ],
    cat: 'Dine-In Operations • Screen 1 of 1',
    title: 'Interactive Dining Room Table View & Status Grid',
    desc: 'Displays the live dining room floor with color-coded table occupancy, running order counts, quick keyboard shortcuts (F5 Refresh, Alt+T Transfer, Alt+M Merge), and sub-second table selection.',
    highlights: [
      { icon: '🔴', title: 'Running OT / KOT Indicators', desc: 'Immediately highlights tables with active orders (e.g. Table 602 with 1 order, Table 502 with 2 orders) in clear alert red/purple.' },
      { icon: '🟢', title: 'Available Table Grid', desc: 'Displays vacant tables with green indicators (504, 605, 607, 606, 508, 406) ready for instant guest seating.' },
      { icon: '⌨️', title: 'Complete Function Key Shortcuts', desc: 'F5 Refresh, Alt+L/F6 Location, Alt+O/F7 Outlet, Alt+R/F4 Reserve, Alt+T/F8 Transfer, and Alt+M/F9 Merge.' },
      { icon: '🔄', title: 'Real-Time Floor Sync', desc: 'SignalR syncs table status changes across waiter tablets and cashier terminals in less than 50 milliseconds.' }
    ],
    sop: {
      title: 'Table Seating & Status Protocol',
      steps: [
        'Observe the floor plan to identify available tables or active running checks.',
        'Tap any green available table or type table number (0-9) to launch the speed ordering catalog.',
        'Use Alt+T or Alt+M to transfer running KOTs or merge multiple tables when guest seating expands.'
      ]
    },
    pills: ['Floor Grid View', 'Running KOT/OT Badges', 'Function Keys (F1-F9)', 'Transfer & Merge', 'Real-Time SignalR']
  },
  {
    num: 6,
    type: 'split',
    img: 'presentation_assets/real_04_menu_catalog.jpg',
    screenBadge: '⚡ Real POS Screen • Speed Ordering',
    pins: [
      { num: 1, text: 'Categorized Menu Tabs (Appetizer, Beverage, Big Plates)' },
      { num: 2, text: 'Item Cards with Price, Code & Shortcode Search' },
      { num: 3, text: 'Active Order Check Panel with "Save & eBill" Action' }
    ],
    cat: 'Speed Billing • Screen 1 of 2',
    title: 'High-Throughput Menu Catalog & Speed Ordering',
    desc: 'Engineered for rapid order entry with visual item cards, veg/non-veg tags, quick category filtering, order check staging, and one-tap "Save & eBill" fiscal settlement.',
    highlights: [
      { icon: '🏷️', title: 'Fast Category Navigation', desc: 'Instant switching across Appetizer, Beverage, Big Plates, Brandy IMFL, Cocktail, Coffee Shop, and Dessert.' },
      { icon: '🔍', title: 'Sub-10ms Shortcode Search', desc: 'Type item codes (#PLPNT, #CPS, #CSN) or names for immediate instant local Hive database retrieval.' },
      { icon: '🛒', title: 'Active Order Check Panel', desc: 'Displays current order (#57442 Bot no #416), assigned waiter (Anu), item lines, and calculated tax breakdown.' },
      { icon: '💳', title: 'Save & eBill Action', desc: 'Direct 1-tap green action button dispatches KOT/BOT and triggers electronic billing without secondary menus.' }
    ],
    sop: {
      title: 'Catalog Order Entry Procedure',
      steps: [
        'Select category tab or press Ctrl+/ to search items by name or shortcode.',
        'Tap "+ Add" on the item card (e.g. Club Sandwich Non ₹360) to stage it in the right-side check.',
        'Review the order total (₹378 with tax) and tap "Save & eBill" or "Update OT" to dispatch.'
      ]
    },
    pills: ['Speed Catalog', 'Shortcode Search', 'eBill Settlement', 'Active Check Panel', 'Touch Optimized']
  },
  {
    num: 7,
    type: 'split',
    img: 'presentation_assets/real_06_cocktail_builder.png',
    screenBadge: '🍸 Real POS Screen • Cocktail Builder',
    subViews: [
      { label: 'Cocktail Builder Dialog', src: 'presentation_assets/real_06_cocktail_builder.png' },
      { label: 'Cocktail Catalog Selection', src: 'presentation_assets/real_05_cocktail_catalog.png' },
      { label: 'Stock Warning Alert', src: 'presentation_assets/real_17_stock_warning.jpg' }
    ],
    pins: [
      { num: 1, text: 'Active Cocktail (OASIS RUM 4 PEG)' },
      { num: 2, text: 'Ingredients Slot (OASIS CLASSIC RUM 1 LTR - Out of stock)' },
      { num: 3, text: 'Available Substitutes (BACARDI BLACK, BACARDI GINGER 30ml)' }
    ],
    cat: 'Liquor Control & Mixology • Screen 1 of 1',
    title: 'Intelligent Cocktail Builder & Stock Substitution',
    desc: 'The intelligent mixology engine enforces exact liquor portioning, validates cellar inventory, and enables seamless 1-click substitute liquor selection, eliminating excise penalties and bar revenue leakage.',
    highlights: [
      { icon: '🍹', title: 'Recipe Master Control', desc: 'Every cocktail recipe links to exact peg/milliliter requirements configured in the enterprise master tables.' },
      { icon: '🔄', title: '1-Click Liquor Substitution', desc: 'When primary liquor is depleted (e.g. Oasis Classic Rum), compatible category liquors are surfaced automatically.' },
      { icon: '⚡', title: 'Sub-300ms Memory Cache', desc: 'Preloads recipe ingredients in background memory cache, eliminating the legacy 2.5-second modal loading lag.' },
      { icon: '🛡️', title: 'Zero Bar Stock Variance', desc: 'Guarantees 100% balance between physical bar bottle volume and POS fiscal sales records, eliminating stock loss.' }
    ],
    sop: {
      title: 'Cocktail Selection & Substitute Flow',
      steps: [
        'Select cocktail product (e.g. OASIS RUM 4 PEG) from the categorized beverage menu.',
        'The Cocktail Builder opens, displaying required ingredients and current cellar stock status.',
        'If primary liquor is out of stock, select an available substitute (e.g. Bacardi Black) and tap confirm.'
      ]
    },
    pills: ['Mixology Engine', 'Stock Substitution', 'Peg Volume Control', 'Excise Compliance', 'Zero Bar Variance']
  },
  {
    num: 8,
    type: 'split',
    img: 'presentation_assets/real_07_item_qty_select.png',
    screenBadge: '🔢 Real POS Screen • Quantity Modifier',
    pins: [
      { num: 1, text: '1 Items Available & 1 Selected Count' },
      { num: 2, text: 'Club Sandwich Non Line Item with Available Count (1)' },
      { num: 3, text: 'Quantity Increment / Decrement & Confirm Selection Button' }
    ],
    cat: 'Order Staging • Screen 1 of 1',
    title: 'Line Item Quantity Modifier & Stock Verification',
    desc: 'A dedicated modal dialog providing granular portion control, real-time stock availability verification, and rapid quantity adjustments before finalizing line items in the active check.',
    highlights: [
      { icon: '➕', title: 'Touch Quantity Modifiers', desc: 'Ergonomic plus/minus stepper buttons allowing waitstaff to quickly scale quantities for large group orders.' },
      { icon: '📦', title: 'Live Stock Availability', desc: 'Displays real-time kitchen availability counts (e.g. Avail: 1), preventing staff from over-ordering exhausted dishes.' },
      { icon: '🔍', title: 'Item Search Within Modal', desc: 'Dedicated search bar inside the modal to quickly locate sub-variants or portion sizes on the fly.' },
      { icon: '✅', title: '1-Tap Selection Confirmation', desc: 'Vibrant confirmation button displaying total selected units for instantaneous check line injection.' }
    ],
    sop: {
      title: 'Quantity Modification Protocol',
      steps: [
        'Tap an order item in the catalog to open the quantity and modifier selection modal.',
        'Use the + and - buttons to adjust requested portions while checking the real-time availability indicator.',
        'Tap "Confirm Selection" to apply modified quantities directly to the active table check.'
      ]
    },
    pills: ['Quantity Steppers', 'Stock Verification', 'Portion Control', 'Group Orders', 'Rapid Staging']
  },
  {
    num: 9,
    type: 'split',
    img: 'presentation_assets/real_08_customer_select.jpg',
    screenBadge: '👥 Real POS Screen • Customer Select',
    pins: [
      { num: 1, text: 'Customer Search Bar by Name or Mobile' },
      { num: 2, text: 'Customer List with Contact Phone (e.g., 5345545454)' },
      { num: 3, text: '+ Add New Customer & Select Customer Actions' }
    ],
    cat: 'Guest Hospitality • Screen 1 of 1',
    title: 'Customer Selection & Guest Profiling',
    desc: 'Facilitates fast guest assignment by searching names or mobile numbers, enrolling new customers in seconds, and linking orders to guest profiles for loyalty rewards and digital billing.',
    highlights: [
      { icon: '🔍', title: 'Instant Mobile Search', desc: 'Search across 100+ registered customers in sub-10ms by typing partial phone numbers or guest names.' },
      { icon: '➕', title: 'Instant New Guest Enrollment', desc: 'One-tap "+ Add New" button allows immediate registration of walk-in guests without leaving the ordering flow.' },
      { icon: '💳', title: 'Loyalty & Credit Linking', desc: 'Links settled checks to customer loyalty points, ledger credits, and digital WhatsApp/SMS invoices.' },
      { icon: '⏭️', title: 'Skip Option for Fast Counter', desc: 'Features a dedicated "Skip" option for express walk-up counter transactions where customer tagging is optional.' }
    ],
    sop: {
      title: 'Customer Assignment Flow',
      steps: [
        'When creating an order, the Customers List dialog presents quick search and recent guest profiles.',
        'Enter customer mobile number or select a registered profile (e.g. 24344 - 5345545454).',
        'Tap "Select Customer" to attach profile to the check, or tap "Skip" for anonymous counter dining.'
      ]
    },
    pills: ['Guest Lookup', 'Mobile Search', 'Quick Enrollment', 'Loyalty Tracking', 'Digital Invoicing']
  },
  {
    num: 10,
    type: 'split',
    img: 'presentation_assets/real_09_order_view_live.png',
    screenBadge: '⏱️ Real POS Screen • Live Order View',
    pins: [
      { num: 1, text: 'Order View & OT View Tabs with Success Notification' },
      { num: 2, text: 'Active Orders: Table 602, 502, A2 with Elapsed Time (15 min)' },
      { num: 3, text: 'Status Dots (Not Accepted, Prep Started, Serve, Served)' }
    ],
    cat: 'Order Tracking • Screen 1 of 1',
    title: 'Live Order View & Preparation Status Board',
    desc: 'The centralized operational tracking board displaying active dining orders, OT numbers, assigned waitstaff, preparation duration, and real-time cooking status across all floor tables.',
    highlights: [
      { icon: '📊', title: 'Dual Order View / OT View', desc: 'Switch seamlessly between table-centric order aggregation and granular kitchen order ticket (OT) streams.' },
      { icon: '⏱️', title: 'Elapsed Time SLA Tracking', desc: 'Monitors preparation duration (e.g., 15 min elapsed), alerting supervisors to slow dishes before guests complain.' },
      { icon: '🟣', title: 'Visual Status Progression', desc: 'Color-coded lifecycle dots: Not Accepted (Purple), Prep Started (Blue), Serve (Orange), and Served (Green).' },
      { icon: '➕', title: '1-Tap "Add Items" Modifier', desc: 'Enables waitstaff to quickly append additional drinks or desserts to an active running table order.' }
    ],
    sop: {
      title: 'Order Status Monitoring Protocol',
      steps: [
        'Floor captains and expediters monitor the Live Order View to verify kitchen preparation flow.',
        'Track color-coded status badges to identify when dishes are marked ready for runner table delivery.',
        'Tap "+ Add Items" against any table row to rapidly fire follow-up rounds to the bar or kitchen.'
      ]
    },
    pills: ['Live Tracking Board', 'Preparation SLAs', 'Status Lifecycle', 'Table Expedition', 'Runner Coordination']
  },
  {
    num: 11,
    type: 'split',
    img: 'presentation_assets/real_10_kot_ordered_items.png',
    screenBadge: '📋 Real POS Screen • KOT Ordered Items',
    pins: [
      { num: 1, text: 'Kitchen Order Ticket Header (KOT - OT Number 417)' },
      { num: 2, text: 'Line Item (CLUB SANDWICH NON - NOT ACCEPTED)' },
      { num: 3, text: 'Chef Action Triggers: ✓ ACCEPT and ✕ REJECT' }
    ],
    cat: 'Kitchen Logistics • Screen 1 of 1',
    title: 'Digital KOT Kitchen Dispatch & Chef Control',
    desc: 'Provides an interactive digital Kitchen Order Ticket (KOT) workflow allowing kitchen chefs to review incoming dish tickets, accept or reject line items, and transition status to preparation.',
    highlights: [
      { icon: '👨‍🍳', title: 'Chef Accept / Reject Actions', desc: 'Direct touch buttons on kitchen screens allow cooks to acknowledge tickets or reject items if ingredients are suddenly depleted.' },
      { icon: '🔢', title: 'OT Chronological Sequence', desc: 'Displays OT tickets (417, 416, 415, 414, 141) in strict chronological sequence to uphold first-in first-out kitchen fairness.' },
      { icon: '🔄', title: 'Status Lifecycle Progression', desc: 'Transitions line items through Not Accepted, Preparation Started, Ready to Serve, and Served.' },
      { icon: '⌨️', title: 'ESC Key Fast Dismissal', desc: 'Instant ESC keyboard shortcut allows busy cooks to dismiss the ticket view and return to full kitchen queue.' }
    ],
    sop: {
      title: 'Kitchen Ticket Acceptance Flow',
      steps: [
        'Chef receives real-time ticket notification on kitchen screen displaying item and table info.',
        'Cook taps "✓ ACCEPT" to start preparation, automatically updating waiter handhelds to "Prep Started".',
        'Upon cooking completion, chef updates status to "Ready to Serve" to notify food runners.'
      ]
    },
    pills: ['Digital KOT', 'Chef Touch Actions', 'FIFO Sequencing', 'Preparation Stages', 'Runner Alerts']
  },
  {
    num: 12,
    type: 'split',
    img: 'presentation_assets/real_11_nav_drawer.png',
    screenBadge: '📂 Real POS Screen • Navigation Drawer',
    pins: [
      { num: 1, text: 'Purple Keys Header with Active Notification Badges' },
      { num: 2, text: 'Primary Navigation Modules (Home, Live View, Reports)' },
      { num: 3, text: 'Administrative Tools (Sync Data, User Rights, Printers)' }
    ],
    cat: 'System Hub • Screen 1 of 1',
    title: 'Executive Navigation Drawer & System Hub',
    desc: 'The master navigation drawer providing rapid, slide-out access to all operational and administrative hubs: Live View, Reports, Customer View, Data Sync, User Rights, and Printer Management.',
    highlights: [
      { icon: '🏠', title: 'Operational Quick Links', desc: 'Instant 1-tap navigation to Home dashboard, Live order tracking view, and comprehensive business Reports.' },
      { icon: '👥', title: 'Customer & Loyalty Management', desc: 'Direct launcher for Customer Directory and CRM guest profile management.' },
      { icon: '🔄', title: '1-Tap Offline Data Sync', desc: 'Sync Data action manually flushes queued offline orders and updates master catalog data from the server.' },
      { icon: '⚙️', title: 'Administrative Configuration', desc: 'Centralized access point for RBAC User Rights, Hardware Printer Spooling, and POS App Settings.' }
    ],
    sop: {
      title: 'System Navigation Workflow',
      steps: [
        'Tap the hamburger menu icon (☰) in the top-left corner to slide out the navigation drawer.',
        'Select desired operational destination (e.g., Reports, User Rights, or Printer Management).',
        'Drawer auto-dismisses upon selection, loading the requested workspace with zero screen latency.'
      ]
    },
    pills: ['Master Drawer', 'Quick Navigation', 'Sync Launcher', 'Administrative Hub', 'Modular Ergonomics']
  },
  {
    num: 13,
    type: 'split',
    img: 'presentation_assets/real_12_orders_register.png',
    screenBadge: '📦 Real POS Screen • Orders Register',
    pins: [
      { num: 1, text: 'Orders Summary & Today Filter (3 Records, Total: ₹720.00)' },
      { num: 2, text: 'Order Row (Order #415, Table 502, Guest Vishal Sharma, DELIVERED)' },
      { num: 3, text: 'Direct "BILL ORDER" Fiscal Settlement Action' }
    ],
    cat: 'Fulfillment & Billing • Screen 1 of 1',
    title: 'Orders Register & Delivery Fulfillment',
    desc: 'The centralized transaction register tracking completed and delivered orders across dining rooms and room service, with guest details, mobile numbers, and 1-tap "BILL ORDER" checkout.',
    highlights: [
      { icon: '📋', title: 'Real-Time Order Register', desc: 'Displays daily order stream with Order No, Table number, Location, Guest Name, Mobile, Status, and Amount.' },
      { icon: '✅', title: 'Delivered Status Tracking', desc: 'Confirms successful dish delivery (e.g. DELIVERED badge) before cashiers finalize billing.' },
      { icon: '💳', title: '1-Tap BILL ORDER Action', desc: 'Instant action button opens the settlement screen with pre-filled amounts and taxes ready for payment collection.' },
      { icon: '⌨️', title: 'Keyboard Grid Controls', desc: 'Navigate rows with arrow keys, bill orders with Ctrl+B, expand details with Space, and refresh with F5.' }
    ],
    sop: {
      title: 'Order Settlement Flow from Register',
      steps: [
        'Open Orders register to view all active and delivered orders for the current business day.',
        'Locate the table or room service order (e.g. Order #415 for Guest Vishal Sharma).',
        'Tap "BILL ORDER" to proceed directly to multi-tender payment settlement and print the final invoice.'
      ]
    },
    pills: ['Orders Register', 'Fulfillment Verification', 'Bill Order Trigger', 'Room Service Delivery', 'Keyboard Nav']
  },
  {
    num: 14,
    type: 'split',
    img: 'presentation_assets/real_13_bills_archive.png',
    screenBadge: '📑 Real POS Screen • Bills Archive',
    pins: [
      { num: 1, text: 'Bills Archive Header (1 Records, Total Revenue: ₹378.00)' },
      { num: 2, text: 'Bill Row (Bill No: 1401, Phone: 5345545454, Name: 24344, Payment: None)' },
      { num: 3, text: 'Action Buttons: VIEW, EDIT, DELETE & EXCEL Export' }
    ],
    cat: 'Fiscal Ledger • Screen 1 of 1',
    title: 'Completed Bills Archive & Fiscal Ledger Audit',
    desc: 'An immutable historical ledger of all settled bills with date/outlet filters, revenue totals, detailed invoice inspection, manager reprint controls, and one-click Excel data export.',
    highlights: [
      { icon: '🗄️', title: 'Comprehensive Bill Records', desc: 'Complete historical invoice log capturing Bill No, Customer Phone, Guest Name, Table, Payment tender, and Time.' },
      { icon: '👁️', title: 'Deep Invoice Inspection', desc: '"VIEW" action opens full itemized invoice breakdown with taxes, discounts, and cashier signature.' },
      { icon: '📊', title: 'One-Click Excel Export', desc: 'Export financial billing ledgers directly to Microsoft Excel for corporate accounting and tax audits.' },
      { icon: '🛡️', title: 'Protected Edit & Delete Actions', desc: 'Strict security controls prevent unauthorized bill modifications; changes require manager 2FA authorization.' }
    ],
    sop: {
      title: 'Bill Audit & Export Procedure',
      steps: [
        'Access Bills archive from navigation drawer and select target date range and outlet location.',
        'Inspect individual invoice lines (e.g. Bill #1401) using the "VIEW" button to review tax details.',
        'Tap "EXCEL" to download an official spreadsheet archive for hotel accounts and daily auditing.'
      ]
    },
    pills: ['Fiscal Archive', 'Excel Export', 'Invoice Inspection', 'Tamper Protection', 'Auditing Ledger']
  },
  {
    num: 15,
    type: 'split',
    img: 'presentation_assets/real_14_customer_directory.png',
    screenBadge: '📇 Real POS Screen • Customer Directory',
    pins: [
      { num: 1, text: 'Customer Directory Header (100 Registered Guests)' },
      { num: 2, text: 'Guest Profile Rows (ID #106, #125, #96, #129, #25) with Contact Info' },
      { num: 3, text: 'Milestone Tracking (DOB, Anniversary) & + New Customer Action' }
    ],
    cat: 'CRM & Loyalty • Screen 1 of 1',
    title: 'Customer Directory & VIP Milestone CRM',
    desc: 'The centralized hospitality CRM managing registered customer profiles, phone numbers, email addresses, birthdays, and anniversaries to personalize dining service and drive repeat visits.',
    highlights: [
      { icon: '👥', title: 'Centralized Guest Profiles', desc: 'Maintains comprehensive directory of registered patrons with customer ID, name, address, phone, and email.' },
      { icon: '🎂', title: 'Milestone Tracking (DOB & Anniversary)', desc: 'Records birthdays and wedding anniversaries, enabling staff to prepare complimentary cakes and VIP tables.' },
      { icon: '🔍', title: 'Dynamic Name & Phone Search', desc: 'Search instant guest records in sub-10ms by typing partial phone digits or customer surnames.' },
      { icon: '📥', title: 'CSV / Excel Directory Export', desc: 'Export customer contact lists for targeted hotel marketing, festival greetings, and promotional campaigns.' }
    ],
    sop: {
      title: 'Customer Directory CRM Flow',
      steps: [
        'Open Customer Directory from navigation menu to review registered patron records.',
        'Tap "+ New Customer" to enroll a regular guest with their contact number, birthday, and anniversary.',
        'Use the search filter to pull up existing guest history when coordinating VIP reservations.'
      ]
    },
    pills: ['Hospitality CRM', 'Milestone Tracking', 'VIP Profiling', 'Contact Directory', 'Targeted Marketing']
  },
  {
    num: 16,
    type: 'split',
    img: 'presentation_assets/real_15_printer_management.png',
    screenBadge: '🖨️ Real POS Screen • Printer Management',
    pins: [
      { num: 1, text: 'Multi-Protocol Filter Tabs (All, USB, Network, Thermal, Bluetooth)' },
      { num: 2, text: 'Device Status Indicator & Setup Prompt' },
      { num: 3, text: 'Auto-Detect OS Printers & + Add Printer Device Actions' }
    ],
    cat: 'Hardware Peripherals • Screen 1 of 1',
    title: 'Thermal Printer Connection & Peripheral Spooling',
    desc: 'Driverless hardware management supporting USB, Network LAN, ESC/POS thermal printers, Bluetooth mobile belts, and automated OS printer auto-detection with instant test printing.',
    highlights: [
      { icon: '🖨️', title: 'Multi-Protocol Filter Tabs', desc: 'Dedicated configuration panels for USB direct-connected, Network LAN Ethernet, Thermal, and Bluetooth devices.' },
      { icon: '🔍', title: 'Auto-Detect OS Printers', desc: 'One-tap scan discovers all operating system installed print drivers and raw USB ports automatically.' },
      { icon: '➕', title: 'Add Printer Device Wizard', desc: 'Custom IP address and port setup for routing kitchen order tickets directly to remote chef stations.' },
      { icon: '🔄', title: 'Auto-Failover Spooler', desc: 'Automatically redirects print jobs to backup receipt printers if paper runs out, avoiding missing orders.' }
    ],
    sop: {
      title: 'Printer Setup & Test Procedure',
      steps: [
        'Navigate to Printer Management in the system drawer to configure hardware peripherals.',
        'Tap "Auto-Detect OS Printers" to automatically register local USB thermal devices.',
        'Or tap "+ Add Printer Device" to configure network IP printers for Kitchen (KOT) and Bar (BOT) stations.'
      ]
    },
    pills: ['ESC/POS Spooler', 'Auto-Detection', 'Network LAN Printers', 'USB Thermal', 'Auto-Failover']
  },
  {
    num: 17,
    type: 'split',
    img: 'presentation_assets/real_16_user_rights_rbac.png',
    screenBadge: '🛡️ Real POS Screen • User Rights (RBAC)',
    pins: [
      { num: 1, text: 'User Selection Dropdown & "Save Rights" Action' },
      { num: 2, text: 'Granular Menu Access (Bill Entry, Kitchen View, Order View, Merge Table)' },
      { num: 3, text: 'Transaction Code Mapping (e.g. TRNPOS0020, TRNPOS0015)' }
    ],
    cat: 'Role Governance • Screen 1 of 1',
    title: 'User Rights Assignment & RBAC Governance',
    desc: 'Strict role-based access control protecting revenue by assigning explicit menu permissions (Bill Entry, Kitchen View, Order Entry, Table Merges) with transaction code mapping per employee.',
    highlights: [
      { icon: '🔐', title: 'Granular Menu Access Control', desc: 'Assign or restrict 25+ discrete POS capabilities including Bill Entry, Order View, Merge Table, and Transfer KOT.' },
      { icon: '🏷️', title: 'Transaction Code Mapping', desc: 'Each permission maps to formal enterprise transaction codes (e.g., TRNPOS0020, TRNPOS0015, TRNPOS0003).' },
      { icon: '⚡', title: '1-Tap "Grant All" / "Revoke All"', desc: 'Quick authorization buttons to rapidly provision full manager rights or restrict seasonal trainee accounts.' },
      { icon: '🛡️', title: 'Fraud & Void Elimination', desc: 'Ensures servers cannot delete items or apply unverified discounts without explicit administrative privileges.' }
    ],
    sop: {
      title: 'User Rights Provisioning Flow',
      steps: [
        'Select the target employee from the "Select user" dropdown in User Rights assignment.',
        'Check specific permitted operational capabilities (e.g. Order Entry, Live View, Transfer KOT).',
        'Tap "Save rights" to immediately enforce updated role permissions across all network terminals.'
      ]
    },
    pills: ['RBAC Governance', 'Transaction Codes', 'Privilege Separation', 'Fraud Prevention', 'Instant Enforcement']
  },
  {
    num: 18,
    type: 'full',
    tag: 'Executive Strategic Value & ROI',
    badge: 'Enterprise Business Transformation',
    title: 'Purple Keys POS: Executive Impact & Business Value',
    roadmap: [
      {
        icon: '⚡',
        badge: 'Efficiency',
        title: '30% Faster Table Turnover',
        desc: 'Sub-second speed ordering, instant dual KOT/BOT split dispatch, and fast multi-tender settlements maximize dining revenue during peak hours.',
        points: ['Reduces ordering bottlenecks', 'Accelerates food runner delivery', 'Increases peak shift table turnover']
      },
      {
        icon: '🍸',
        badge: 'Liquor Control',
        title: '100% Bar Stock Reconciliation',
        desc: 'Recipe-based peg tracking and 1-click substitute validation eliminate unauthorized pouring and inventory variance.',
        points: ['Exact millimeter volume control', 'Zero unrecorded bar comps', 'Full state excise compliance']
      },
      {
        icon: '🛡️',
        badge: 'Financial Integrity',
        title: 'Zero Leakage & 2FA Fraud Prevention',
        desc: 'Strict RBAC security, 30-minute auto-locks, and manager-authorized voids prevent cashier tampering and unauthorized discounts.',
        points: ['Eliminates unauthorized item voids', 'Immutable financial transaction logs', 'Transparent cash drawer reconciliation']
      },
      {
        icon: '📡',
        badge: 'High Availability',
        title: '99.99% Offline Operational Uptime',
        desc: 'Local Hive NoSQL storage ensures registers and printers never stop working during network disruptions or server maintenance.',
        points: ['Zero lost dining transactions', 'Instant local print spooling', 'Seamless auto-reconciliation on sync']
      },
      {
        icon: '📊',
        badge: 'Leadership BI',
        title: 'Real-Time Enterprise Decision Making',
        desc: 'Integrated executive dashboard and scheduled analytics deliver granular insights into revenue velocity and server efficiency.',
        points: ['Instant gross margin visibility', 'Automated executive email briefings', 'Optimized staff scheduling']
      },
      {
        icon: '🏛️',
        badge: 'Scalability',
        title: 'Enterprise Multi-Outlet Expansion',
        desc: 'Centralized Oracle database and SignalR architecture effortlessly support multi-property chains and high-volume hotels.',
        points: ['Standardized multi-outlet master data', 'Centralized recipe & price control', 'Unified enterprise fiscal compliance']
      }
    ]
  }
];

function buildHtml() {
  const totalSlides = slidesData.length;
  let slidesHtml = '';

  for (const s of slidesData) {
    if (s.type === 'full' && s.num === 1) {
      slidesHtml += `
        <!-- SLIDE 1: SYSTEM OVERVIEW - COMPLETE ACTIVE MODULES -->
        <div class="slide-deck active full-layout" id="deck-1">
            <div>
                <div style="display:flex; gap:8px; align-items:center;">
                    <span class="category-chip chip-core">${s.tag}</span>
                    <span class="badge-tag-core">${s.badge}</span>
                </div>
                <h1 style="margin-top: 6px; font-size: 26px;">${s.title}</h1>

                <!-- 16 VERIFIED MODULES DIRECTORY -->
                <div class="front-modules-grid">
                    ${s.modules.map(m => `
                    <div class="front-module-card" onclick="goToSlide(${m.slide})" style="cursor: pointer;" title="Open ${m.name} Slide">
                        <div class="front-module-header">
                            <div class="front-module-icon">${m.icon}</div>
                            <div class="front-module-text">
                                <span class="front-module-name">${m.name}</span>
                                <span class="front-module-category">${m.cat}</span>
                            </div>
                        </div>
                        <p class="front-module-desc">${m.desc}</p>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
      `;
    } else if (s.type === 'split') {
      slidesHtml += `
        <!-- SLIDE ${s.num}: MODULE - ${s.title.toUpperCase()} -->
        <div class="slide-deck split-layout" id="deck-${s.num}">
            <div class="phone-mockup-wrapper">
                <div class="real-screenshot-frame" onclick="openLightbox('${s.img}')">
                    <img src="${s.img}" id="screen-img-${s.num}" class="real-screenshot-img" alt="${s.title}">
                    <div class="zoom-hint-badge">🔍 Zoom Image</div>
                </div>
                <div class="screen-badge-label">${s.screenBadge}</div>

                ${s.subViews ? `
                <div style="display:flex; gap:6px; margin-top:6px; width:100%; justify-content:center; flex-wrap:wrap;">
                  ${s.subViews.map((v, vIdx) => `
                    <button class="thumb-btn ${vIdx === 0 ? 'active' : ''}" onclick="switchScreenView(${s.num}, '${v.src}', this)">${v.label}</button>
                  `).join('')}
                </div>
                ` : ''}

                <!-- Annotated Callout Legend -->
                <div class="callout-legend-card">
                  ${s.pins.map(p => `
                    <div class="callout-legend-item">
                      <span class="callout-pin">${p.num}</span>
                      <span>${p.text}</span>
                    </div>
                  `).join('')}
                </div>
            </div>

            <div class="content-panel">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <button class="overview-back-chip" onclick="goToSlide(1)">🏠 16 Modules Directory</button>
                  <span class="category-chip chip-core">${s.cat}</span>
                </div>
                
                <h1>${s.title}</h1>
                <p class="section-desc">${s.desc}</p>

                <!-- 2x2 Highlights Grid -->
                <div class="highlights-grid">
                  ${s.highlights.map(h => `
                    <div class="feature-box">
                      <div class="box-title">${h.icon} ${h.title}</div>
                      <div class="box-desc">${h.desc}</div>
                    </div>
                  `).join('')}
                </div>

                <!-- Operating / Training Guide Card -->
                <div class="training-guide-card">
                  <div class="training-guide-title">📋 Standard Operating Procedure (SOP)</div>
                  ${s.sop.steps.map((st, sIdx) => `
                    <div class="step-row">
                      <span class="step-index">${sIdx + 1}</span>
                      <span>${st}</span>
                    </div>
                  `).join('')}
                </div>

                <!-- Architectural Drawer Pills -->
                <div class="drawer-pill-grid">
                  ${s.pills.map(p => `
                    <span class="drawer-pill pill-new">⚡ ${p}</span>
                  `).join('')}
                </div>
            </div>
        </div>
      `;
    } else if (s.type === 'full' && s.num === totalSlides) {
      slidesHtml += `
        <!-- SLIDE 18: EXECUTIVE STRATEGIC VALUE & ROI ROADMAP -->
        <div class="slide-deck full-layout" id="deck-${s.num}">
            <div>
                <div style="display:flex; gap:8px; align-items:center;">
                    <span class="category-chip chip-core">${s.tag}</span>
                    <span class="badge-tag-core">${s.badge}</span>
                </div>
                <h1 style="margin-top: 6px; font-size: 26px;">${s.title}</h1>

                <div class="roadmap-grid">
                  ${s.roadmap.map(r => `
                    <div class="roadmap-card col-2">
                        <div class="roadmap-card-header">
                            <div class="roadmap-icon-box" style="background:#F3E8FF; color:#7C3AED; border:1px solid #DDD6FE;">${r.icon}</div>
                            <span class="roadmap-badge" style="background:#F3E8FF; color:#7C3AED; border:1px solid #DDD6FE;">${r.badge}</span>
                        </div>
                        <h3 class="roadmap-card-title">${r.title}</h3>
                        <p class="roadmap-card-desc">${r.desc}</p>
                        <ul class="roadmap-list">
                          ${r.points.map(pt => `<li>${pt}</li>`).join('')}
                        </ul>
                    </div>
                  `).join('')}
                </div>
            </div>
        </div>
      `;
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purple Keys POS - Executive Enterprise Platform Presentation</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-page: #F8FAFC;
            --card-bg: #FFFFFF;
            --brand-primary: #7C3AED;
            --brand-dark: #2E0832;
            --brand-blue: #0284C7;
            --brand-grad: linear-gradient(135deg, #7C3AED 0%, #4A154B 100%);
            --text-heading: #0F172A;
            --text-body: #334155;
            --text-muted: #64748B;
            --border-light: #E2E8F0;
            --success: #10B981;
            --warning: #F59E0B;
            --danger: #EF4444;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
            background: var(--bg-page);
            color: var(--text-body);
            overflow: hidden;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        /* Top White Header with Official Logos */
        .top-navbar {
            height: 68px;
            background: #FFFFFF;
            border-bottom: 1px solid var(--border-light);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
            z-index: 100;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }

        .brand-cluster {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .official-logo-img {
            height: 40px;
            object-fit: contain;
            display: block;
        }

        .brand-divider {
            width: 1px;
            height: 24px;
            background: #CBD5E1;
            margin: 0 4px;
        }

        .brand-tag {
            font-size: 12px;
            font-weight: 700;
            background: #F3E8FF;
            color: #7C3AED;
            padding: 4px 12px;
            border-radius: 100px;
        }

        .navbar-controls {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .slide-indicator {
            font-size: 14px;
            font-weight: 700;
            color: var(--text-muted);
        }

        .fullscreen-btn {
            background: #F1F5F9;
            border: 1px solid #CBD5E1;
            color: #334155;
            padding: 6px 14px;
            border-radius: 8px;
            font-size: 12.5px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
            text-decoration: none;
        }

        .fullscreen-btn:hover {
            background: #E2E8F0;
        }

        /* Presentation Workspace */
        .viewport-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px 40px;
            position: relative;
        }

        .slide-deck {
            position: absolute;
            width: 100%;
            max-width: 1420px;
            height: 84vh;
            background: var(--card-bg);
            border-radius: 20px;
            border: 1px solid var(--border-light);
            box-shadow: 0 12px 36px rgba(15, 23, 42, 0.06), 0 2px 6px rgba(15, 23, 42, 0.04);
            display: none !important;
            padding: 24px 36px;
            overflow-y: auto;
            animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .slide-deck.active {
            display: flex !important;
        }

        .slide-deck.active.split-layout {
            display: grid !important;
        }

        .slide-deck.active.full-layout {
            display: flex !important;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(10px) scale(0.99);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .split-layout {
            grid-template-columns: 500px 1fr;
            gap: 40px;
            width: 100%;
            align-items: center;
        }

        .full-layout {
            flex-direction: column;
            width: 100%;
            height: 100%;
            justify-content: space-between;
        }

        /* Screen Mockup Frame */
        .phone-mockup-wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            gap: 8px;
        }

        .real-screenshot-frame {
            width: 100%;
            max-width: 500px;
            height: 330px;
            background: #0F172A;
            border-radius: 16px;
            border: 6px solid #0F172A;
            box-shadow: 0 16px 36px rgba(15, 23, 42, 0.14), 0 0 0 1px #E2E8F0;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .real-screenshot-frame:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 44px rgba(124, 58, 237, 0.28), 0 0 0 2px #7C3AED;
        }

        .real-screenshot-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: #FFFFFF;
            display: block;
        }

        .zoom-hint-badge {
            position: absolute;
            bottom: 10px;
            background: rgba(15, 23, 42, 0.85);
            color: #FFFFFF;
            font-size: 10.5px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 100px;
            backdrop-filter: blur(4px);
            pointer-events: none;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .screen-badge-label {
            font-size: 11.5px;
            font-weight: 700;
            color: #7C3AED;
            background: #F3E8FF;
            padding: 4px 14px;
            border-radius: 100px;
            text-align: center;
        }

        /* Callout Legend Card */
        .callout-legend-card {
            width: 100%;
            background: #F1F5F9;
            border-radius: 10px;
            padding: 8px 12px;
            margin-top: 4px;
            display: flex;
            flex-direction: column;
            gap: 4px;
            font-size: 11px;
        }

        .callout-legend-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #334155;
            font-weight: 600;
        }

        .callout-pin {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #7C3AED;
            color: #FFF;
            font-size: 10px;
            font-weight: 800;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        /* Content Column */
        .content-panel {
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-width: 820px;
        }

        .category-chip {
            display: inline-block;
            align-self: flex-start;
            padding: 4px 12px;
            border-radius: 6px;
            background: #F3E8FF;
            border: 1px solid #E9D5FF;
            color: #7C3AED;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .overview-back-chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 12px;
            background: #F1F5F9;
            border: 1px solid #CBD5E1;
            border-radius: 6px;
            color: #475569;
            font-size: 11px;
            font-weight: 700;
            cursor: pointer;
            width: fit-content;
            transition: all 0.2s ease;
        }

        .overview-back-chip:hover {
            background: #E2E8F0;
            color: #0F172A;
            border-color: #94A3B8;
        }

        .thumb-btn {
            background: #F1F5F9;
            border: 1px solid #CBD5E1;
            color: #475569;
            font-size: 10.5px;
            font-weight: 700;
            padding: 4px 10px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .thumb-btn.active,
        .thumb-btn:hover {
            background: #7C3AED;
            border-color: #7C3AED;
            color: #FFFFFF;
        }

        .chip-core {
            background: #F3E8FF;
            border-color: #E9D5FF;
            color: #7C3AED;
        }

        .badge-tag-core {
            background: #F1F5F9;
            color: #475569;
            font-size: 10px;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border: 1px solid #E2E8F0;
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }

        h1 {
            font-size: 26px;
            font-weight: 800;
            color: var(--text-heading);
            letter-spacing: -0.5px;
            margin: 0;
            line-height: 1.25;
        }

        .section-desc {
            font-size: 14.5px;
            color: #334155;
            line-height: 1.55;
            background: #F8FAFC;
            border-left: 4px solid #7C3AED;
            padding: 12px 18px;
            border-radius: 0 10px 10px 0;
            margin: 0;
            box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
        }

        .highlights-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        .feature-box {
            background: #F8FAFC;
            border: 1px solid var(--border-light);
            border-radius: 10px;
            padding: 9px 12px;
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        .box-title {
            font-size: 12.5px;
            font-weight: 700;
            color: var(--text-heading);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .box-desc {
            font-size: 11.5px;
            color: var(--text-body);
            line-height: 1.4;
        }

        /* Standard Operating Procedure Guide */
        .training-guide-card {
            background: #F0FDF4;
            border: 1px solid #BBF7D0;
            border-radius: 10px;
            padding: 8px 14px;
        }

        .training-guide-title {
            font-size: 11px;
            font-weight: 800;
            color: #166534;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .step-row {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 11.5px;
            color: #1F2937;
            margin-bottom: 3px;
            line-height: 1.35;
        }

        .step-index {
            background: #16A34A;
            color: #FFF;
            font-size: 9px;
            font-weight: 800;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            margin-top: 1px;
        }

        .drawer-pill-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 2px;
        }

        .drawer-pill {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 6px;
            padding: 3px 8px;
            font-size: 10.5px;
            font-weight: 600;
            color: #334155;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }

        .drawer-pill.pill-new {
            background: #F3E8FF;
            border-color: #DDD6FE;
            color: #6B21A8;
            font-weight: 700;
        }

        /* Slide 1: 4x4 Front Modules Directory */
        .front-modules-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
            margin-top: 14px;
        }

        .front-module-card {
            background: #FFFFFF;
            border: 1px solid var(--border-light);
            border-radius: 12px;
            padding: 12px 14px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            box-shadow: 0 1px 4px rgba(15, 23, 42, 0.04);
            transition: all 0.2s ease;
        }

        .front-module-card:hover {
            border-color: #C084FC;
            box-shadow: 0 6px 16px rgba(124, 58, 237, 0.12);
            transform: translateY(-2px);
        }

        .front-module-header {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .front-module-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: #F3E8FF;
            color: #7C3AED;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
            border: 1px solid #E9D5FF;
        }

        .front-module-text {
            display: flex;
            flex-direction: column;
            gap: 1px;
            min-width: 0;
        }

        .front-module-name {
            font-size: 13.5px;
            font-weight: 800;
            color: var(--text-heading);
            letter-spacing: -0.2px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .front-module-category {
            font-size: 10px;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .front-module-desc {
            font-size: 11px;
            line-height: 1.45;
            color: #64748B;
            margin: 0;
            padding-top: 6px;
            border-top: 1px solid #F1F5F9;
        }

        /* Slide 18: Feature Roadmap Grid */
        .roadmap-grid {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 14px;
            margin-top: 14px;
        }

        .roadmap-card {
            background: #FFFFFF;
            border: 1px solid var(--border-light);
            border-radius: 14px;
            padding: 14px 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
            transition: all 0.25s ease;
        }

        .roadmap-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 24px rgba(124, 58, 237, 0.12);
            border-color: #C084FC;
        }

        .roadmap-card.col-2 {
            grid-column: span 2;
        }

        .roadmap-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }

        .roadmap-icon-box {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
        }

        .roadmap-badge {
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 3px 9px;
            border-radius: 100px;
        }

        .roadmap-card-title {
            font-size: 14px;
            font-weight: 800;
            color: var(--text-heading);
            letter-spacing: -0.2px;
            line-height: 1.3;
            margin: 0;
        }

        .roadmap-card-desc {
            font-size: 11px;
            line-height: 1.45;
            color: #475569;
            margin: 0;
        }

        .roadmap-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
            border-top: 1px solid #F1F5F9;
            padding-top: 6px;
        }

        .roadmap-list li {
            font-size: 10.5px;
            color: #334155;
            display: flex;
            align-items: flex-start;
            gap: 6px;
            line-height: 1.35;
        }

        .roadmap-list li::before {
            content: "✓";
            color: #7C3AED;
            font-weight: 800;
            font-size: 11px;
            flex-shrink: 0;
            margin-top: 1px;
        }

        /* Bottom Action Bar */
        .action-bar {
            height: 60px;
            background: #FFFFFF;
            border-top: 1px solid var(--border-light);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 40px;
        }

        .btn {
            background: #FFFFFF;
            border: 1px solid var(--border-light);
            color: var(--text-heading);
            padding: 8px 20px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .btn:hover {
            background: #F8FAFC;
            border-color: #CBD5E1;
        }

        .btn-brand {
            background: var(--brand-primary);
            border-color: var(--brand-primary);
            color: #FFF;
        }

        .btn-brand:hover {
            background: #6D28D9;
        }

        .tips-text {
            font-size: 12px;
            color: var(--text-muted);
        }

        /* Lightbox Modal */
        .lightbox-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(15, 23, 42, 0.88);
            backdrop-filter: blur(8px);
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
        }

        .lightbox-modal.open {
            display: flex;
        }

        .lightbox-img {
            max-height: 90vh;
            max-width: 90vw;
            border-radius: 18px;
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(255, 255, 255, 0.2);
            object-fit: contain;
        }

        .lightbox-close {
            position: absolute;
            top: 24px;
            right: 32px;
            background: rgba(255, 255, 255, 0.2);
            color: #FFF;
            border: none;
            font-size: 24px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>

    <!-- TOP NAVBAR WITH OFFICIAL LOGOS -->
    <div class="top-navbar">
        <div class="brand-cluster">
            <img src="presentation_assets/purplekeys_logo.png" alt="Purple Keys Logo" class="official-logo-img">
            <div class="brand-divider"></div>
            <img src="presentation_assets/datamate_logo.png" alt="Datamate Logo" style="height: 28px; object-fit: contain;">
            <div class="brand-divider"></div>
            <span class="brand-tag">Executive Platform Presentation</span>
        </div>
        <div class="navbar-controls">
            <a href="PurpleKeys_POS_Executive_Presentation.pptx" download class="fullscreen-btn">📥 Download PPT (.pptx)</a>
            <button class="fullscreen-btn" onclick="toggleFullScreen()">⛶ Fullscreen</button>
            <div class="slide-indicator" id="slideCount">Slide 1 of ${totalSlides}</div>
        </div>
    </div>

    <!-- VIEWPORT WORKSPACE -->
    <div class="viewport-wrapper">
        ${slidesHtml}
    </div>

    <!-- BOTTOM ACTION BAR -->
    <div class="action-bar">
        <div class="tips-text">💡 Tip: Use your <b>Left (←)</b> and <b>Right (→)</b> arrow keys to navigate. Click any screen to zoom full size!</div>
        <div style="display:flex; gap:12px;">
            <button class="btn" id="prevBtn" onclick="prevSlide()">← Previous Slide</button>
            <button class="btn btn-brand" id="nextBtn" onclick="nextSlide()">Next Slide →</button>
        </div>
    </div>

    <!-- FULLSCREEN IMAGE LIGHTBOX MODAL -->
    <div class="lightbox-modal" id="lightboxModal" onclick="closeLightbox()">
        <button class="lightbox-close" onclick="closeLightbox()">✕</button>
        <div style="position:relative; max-width:90vw; max-height:90vh; display:flex; align-items:center; justify-content:center;" onclick="event.stopPropagation()">
            <img src="" id="lightboxImg" class="lightbox-img" alt="Zoomed View">
        </div>
    </div>

    <!-- SCRIPT FOR SLIDE CONTROLS & LIGHTBOX -->
    <script>
        let currentSlide = 1;
        const totalSlides = ${totalSlides};

        function goToSlide(n) {
            currentSlide = n;
            updateSlide();
        }

        function openLightbox(src) {
            const modal = document.getElementById('lightboxModal');
            const img = document.getElementById('lightboxImg');
            img.src = src;
            modal.classList.add('open');
        }

        function closeLightbox() {
            const modal = document.getElementById('lightboxModal');
            modal.classList.remove('open');
        }

        function switchScreenView(slideNum, src, btn) {
            const img = document.getElementById('screen-img-' + slideNum);
            if (img) {
                img.src = src;
                const parent = img.closest('.real-screenshot-frame');
                if (parent) {
                    parent.setAttribute('onclick', "openLightbox('" + src + "')");
                }
            }
            if (btn && btn.parentElement) {
                btn.parentElement.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        }

        function updateSlide() {
            document.querySelectorAll('.slide-deck').forEach((deck, idx) => {
                const isActive = (idx + 1) === currentSlide;
                deck.classList.toggle('active', isActive);
            });
            document.getElementById('slideCount').innerText = 'Slide ' + currentSlide + ' of ' + totalSlides;
            document.getElementById('prevBtn').disabled = currentSlide === 1;
            document.getElementById('nextBtn').innerText = currentSlide === totalSlides ? 'Restart Deck ↺' : 'Next Slide →';
        }

        function nextSlide() {
            if (currentSlide < totalSlides) {
                currentSlide++;
            } else {
                currentSlide = 1;
            }
            updateSlide();
        }

        function prevSlide() {
            if (currentSlide > 1) {
                currentSlide--;
                updateSlide();
            }
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'f' || e.key === 'F') toggleFullScreen();
        });

        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }

        updateSlide();
    </script>
</body>
</html>
`;
}

const htmlOutput = buildHtml();
fs.writeFileSync('D:/Ajmal/POS-Flutter/index.html', htmlOutput, 'utf8');
fs.writeFileSync('D:/Ajmal/POS-Flutter/Executive_Presentation_Viewer.html', htmlOutput, 'utf8');
console.log('Successfully written D:/Ajmal/POS-Flutter/index.html and Executive_Presentation_Viewer.html with all real pictures!');
