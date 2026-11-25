const fs = require('fs');
const path = require('path');

// 29 Modules reordered as requested:
// Screens 1 to 6, then Screens 20 to 26, then Screens 7 to 19, then Screens 27 to 29
const docModules = [
  {
    step: 1,
    heading: 'Step 1 : LOGIN',
    img: 'presentation_assets/doc_img_01.png',
    cat: 'Security & Auth',
    icon: '🔐',
    explanation: 'Secure operator login portal with cryptographic user ID and password authentication for authorized staff access.'
  },
  {
    step: 2,
    heading: 'Step 2: Once logged IN',
    img: 'presentation_assets/doc_img_02.png',
    cat: 'Location Selection',
    icon: '🏢',
    explanation: 'Departmental location selection dialog allowing operators to bind their shift session to specific dining areas or bars.'
  },
  {
    step: 3,
    heading: 'Step 3 Dashboard',
    img: 'presentation_assets/doc_img_03.png',
    cat: 'Floor Management',
    icon: '🍽️',
    explanation: 'Interactive dining floor dashboard displaying real-time color-coded table occupancy, running order counts, and rapid keyboard shortcuts.'
  },
  {
    step: 4,
    heading: 'Transfer OT (Full Table Transfer)',
    img: 'presentation_assets/doc_img_04.png',
    cat: 'Table Operations',
    icon: '🔄',
    explanation: 'Allows seamless transfer of an entire active table\'s orders and KOT tickets from a source table to any available destination table.'
  },
  {
    step: 5,
    heading: 'Transfer OT(Item wise Transfer)',
    img: 'presentation_assets/doc_img_05.png',
    cat: 'Table Operations',
    icon: '🔀',
    explanation: 'Granular order transfer window enabling staff to select specific items and split quantities across different dining tables.'
  },
  {
    step: 6,
    heading: 'MERGE OT',
    img: 'presentation_assets/doc_img_06.png',
    cat: 'Table Operations',
    icon: '👥',
    explanation: 'Enables combining multiple active or vacant tables into a single consolidated dining check with custom remarks.'
  },
  // Screens 20 to 26 moved here after Screen 6
  {
    step: 7,
    heading: 'Normal Mode',
    img: 'presentation_assets/doc_img_20.png',
    cat: 'Kitchen Monitoring',
    icon: '⏱️',
    explanation: 'Live kitchen order overview monitoring active table tickets, elapsed prep times, waiter assignments, and stage summaries.'
  },
  {
    step: 8,
    heading: 'Triggered',
    img: 'presentation_assets/doc_img_21.png',
    cat: 'Kitchen Dispatch',
    icon: '🔔',
    explanation: 'Kitchen order ticket inspection dialog allowing kitchen staff to trigger preparation workflows item by item.'
  },
  {
    step: 9,
    heading: 'Kitchen Screen',
    img: 'presentation_assets/doc_img_22.png',
    cat: 'Kitchen KOT',
    icon: '👨‍🍳',
    explanation: 'Dedicated Kitchen Order Ticket summary queue enabling chefs to accept incoming orders and initiate cooking.'
  },
  {
    step: 10,
    heading: 'Kitchen Update Status',
    img: 'presentation_assets/doc_img_23.png',
    cat: 'Kitchen KOT',
    icon: '🍳',
    explanation: 'Interactive kitchen dispatch screen for advancing dish preparation status to ready-to-serve or rejecting line items.'
  },
  {
    step: 11,
    heading: 'To Serve Items',
    img: 'presentation_assets/doc_img_24.png',
    cat: 'Service Logistics',
    icon: '🛎️',
    explanation: 'Waitstaff notification dashboard summarizing prepared food items that are cooked and awaiting table service.'
  },
  {
    step: 12,
    heading: 'Serving items :',
    img: 'presentation_assets/doc_img_25.png',
    cat: 'Service Logistics',
    icon: '🍱',
    explanation: 'Runner confirmation dialog to mark prepared kitchen items as delivered and served to the guest\'s table.'
  },
  {
    step: 13,
    heading: 'Billing Orders',
    img: 'presentation_assets/doc_img_26.png',
    cat: 'Checkout Register',
    icon: '💰',
    explanation: 'Active table order summary displaying served items, tax calculations, and final payment collection buttons.'
  },
  // Screens 7 to 19 continue here
  {
    step: 14,
    heading: 'BOT SAVE',
    img: 'presentation_assets/doc_img_07.png',
    cat: 'Speed Ordering',
    icon: '⚡',
    explanation: 'Speed ordering catalog interface featuring categorized menu navigation, item shortcode search, and one-tap order saving.'
  },
  {
    step: 15,
    heading: 'BOT SAVE (Order Comments)',
    headingDoc: 'BOT SAVE',
    img: 'presentation_assets/doc_img_08.png',
    cat: 'Speed Ordering',
    icon: '💬',
    explanation: 'Allows operators to attach customized preparation instructions and kitchen notes directly to individual ordered items or entire tickets.'
  },
  {
    step: 16,
    heading: 'SAVED ORDERS',
    img: 'presentation_assets/doc_img_09.png',
    cat: 'Order Register',
    icon: '📋',
    explanation: 'Central register displaying all active and delivered orders ready for immediate settlement and invoicing.'
  },
  {
    step: 17,
    heading: 'Billed with Payment NONE',
    img: 'presentation_assets/doc_img_10.png',
    cat: 'Billing Status',
    icon: '⚠️',
    explanation: 'Flags tables with unbilled orders and prompts cashiers with one-click direct access to final bill processing.'
  },
  {
    step: 18,
    heading: 'Unsettled Bill View',
    img: 'presentation_assets/doc_img_11.png',
    cat: 'Audit & Review',
    icon: '🔍',
    explanation: 'Detailed invoice preview window displaying ordered items, tax breakdowns, and pending payment status before final settlement.'
  },
  {
    step: 19,
    heading: 'SETTLING THE UNSETTLED BILL',
    img: 'presentation_assets/doc_img_12.png',
    cat: 'Audit & Review',
    icon: '📑',
    explanation: 'Centralized bills audit ledger listing all unsettled transactions with direct actions to edit, view, or settle payments.'
  },
  {
    step: 20,
    heading: 'EDIT  UnSettled Bill',
    img: 'presentation_assets/doc_img_13.png',
    cat: 'Bill Modification',
    icon: '✏️',
    explanation: 'Allows updating payment splits, business types, discounts, and parcel charges on an existing open bill.'
  },
  {
    step: 21,
    heading: 'Bill Edit with Tips',
    img: 'presentation_assets/doc_img_14.png',
    cat: 'Gratuity & Tips',
    icon: '💵',
    explanation: 'Provides optional gratuity and tip entry with preconfigured percentages or custom amounts attributed to specific staff members.'
  },
  {
    step: 22,
    heading: 'Direct Bill Settling with Multi payment',
    img: 'presentation_assets/doc_img_15.png',
    cat: 'Payment Checkout',
    icon: '💳',
    explanation: 'Enables instant checkout from the ordering screen with direct multi-payment method routing and non-chargeable order toggles.'
  },
  {
    step: 23,
    heading: 'Multi Payment Screen',
    img: 'presentation_assets/doc_img_16.png',
    cat: 'Payment Checkout',
    icon: '💳',
    explanation: 'Multi-tender payment interface supporting flexible bill splitting across cash, credit cards, UPI, vouchers, and corporate accounts.'
  },
  {
    step: 24,
    heading: 'Bill View',
    img: 'presentation_assets/doc_img_17.png',
    cat: 'Settled Receipt',
    icon: '🧾',
    explanation: 'Completed invoice view confirming full payment collection, tender breakdown, and receipt audit details.'
  },
  {
    step: 25,
    heading: 'Available Themes',
    img: 'presentation_assets/doc_img_18.png',
    cat: 'Personalization',
    icon: '🌙',
    explanation: 'High-contrast dark mode display option optimizing readability and reducing eye strain for low-light hospitality environments.'
  },
  {
    step: 26,
    heading: 'Side Menu',
    img: 'presentation_assets/doc_img_19.png',
    cat: 'Navigation Hub',
    icon: '📂',
    explanation: 'Global navigation drawer providing instant access to Live View, Reports, Customer Directory, Sync Data, and System Settings.'
  },
  // Screens 27 to 29
  {
    step: 27,
    heading: 'User Rights Screen',
    img: 'presentation_assets/doc_img_27.png',
    cat: 'Security & RBAC',
    icon: '🛡️',
    explanation: 'Role-based access control interface for assigning granular staff permissions across billing, kitchen views, and table management.'
  },
  {
    step: 28,
    heading: 'Print management Screen',
    img: 'presentation_assets/doc_img_28.png',
    cat: 'Hardware & Printers',
    icon: '🖨️',
    explanation: 'Comprehensive hardware configuration utility for managing USB, Network LAN, ESC/POS Thermal, and Bluetooth receipt printers.'
  },
  {
    step: 29,
    heading: 'App Settings Screen',
    img: 'presentation_assets/doc_img_29.png',
    cat: 'System Preferences',
    icon: '⚙️',
    explanation: 'Centralized application preferences screen for theme controls, offline cache management, cloud database sync, and station defaults.'
  }
];

function buildHtml() {
  const totalSlides = 2 + docModules.length; // Slide 1: Cover, Slide 2: Enterprise Directory, Slide 3-31: 29 Screens

  // Render Directory Cards
  const dirCardsHtml = docModules.map((m, idx) => {
    const targetSlide = idx + 3;
    return `
      <div class="dir-card" onclick="goToSlide(${targetSlide})">
        <div class="dir-card-header">
          <span class="dir-card-icon">${m.icon}</span>
          <span class="dir-card-badge">${m.cat}</span>
          <span class="dir-card-num">#${m.step < 10 ? '0' + m.step : m.step}</span>
        </div>
        <div class="dir-card-title">${m.heading}</div>
        <div class="dir-card-desc">${m.explanation}</div>
        <div class="dir-card-footer">
          <span>View Screen Slide →</span>
        </div>
      </div>
    `;
  }).join('');

  // Render 29 Module Slides
  const moduleSlidesHtml = docModules.map((m, idx) => {
    const slideNum = idx + 3;
    return `
      <!-- Slide ${slideNum}: ${m.heading} -->
      <section class="slide-deck split-layout" id="slide-${slideNum}" data-slide="${slideNum}">
        <div class="screenshot-column">
          <div class="screenshot-frame" onclick="openLightbox('${m.img}', '${m.heading.replace(/'/g, "\\'")}')">
            <img src="${m.img}" alt="${m.heading}" class="screenshot-img" loading="lazy" />
            <div class="zoom-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
              <span>Click to Enlarge</span>
            </div>
          </div>
          <div class="screenshot-meta">
            <span class="meta-tag">Screen ${m.step} of 29</span>
            <span class="meta-name">${m.img.split('/').pop()}</span>
          </div>
        </div>

        <div class="details-column">
          <div class="module-nav-bar">
            <button class="back-dir-btn" onclick="goToSlide(2)">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Enterprise Platform Directory
            </button>
            <span class="category-pill">${m.cat}</span>
          </div>

          <h2 class="slide-title">${m.heading}</h2>

          <div class="explanation-card">
            <div class="card-lead-label">
              <span class="lead-icon">${m.icon}</span>
              <span>FUNCTIONAL OVERVIEW</span>
            </div>
            <p class="explanation-text">${m.explanation}</p>
          </div>

          <div class="quick-nav-pills">
            <button class="nav-pill-btn" onclick="goToSlide(2)">Directory Grid</button>
            ${slideNum > 3 ? `<button class="nav-pill-btn" onclick="prevSlide()">← Prev Screen</button>` : ''}
            ${slideNum < totalSlides ? `<button class="nav-pill-btn primary" onclick="nextSlide()">Next Screen →</button>` : ''}
          </div>
        </div>
      </section>
    `;
  }).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purple Keys POS - Executive Presentation</title>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-page: #F8FAFC;
            --card-bg: #FFFFFF;
            --brand-primary: #7C3AED;
            --brand-primary-light: #F3E8FF;
            --brand-dark: #2E0832;
            --brand-gradient: linear-gradient(135deg, #7C3AED 0%, #4A154B 100%);
            --text-heading: #0F172A;
            --text-body: #334155;
            --text-muted: #64748B;
            --border-light: #E2E8F0;
            --border-hover: #CBD5E1;
            --shadow-sm: 0 2px 4px rgba(15, 23, 42, 0.04);
            --shadow-md: 0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
            --shadow-lg: 0 20px 35px -5px rgba(124, 58, 237, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.04);
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

        /* Top Bar */
        .top-navbar {
            height: 64px;
            background: #FFFFFF;
            border-bottom: 1px solid var(--border-light);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 32px;
            z-index: 100;
            flex-shrink: 0;
        }

        .brand-cluster {
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
        }

        .official-logo-img {
            height: 36px;
            object-fit: contain;
            display: block;
        }

        .brand-divider {
            width: 1px;
            height: 22px;
            background: #CBD5E1;
        }

        .brand-badge {
            font-size: 11.5px;
            font-weight: 700;
            background: var(--brand-primary-light);
            color: var(--brand-primary);
            padding: 4px 10px;
            border-radius: 9999px;
            letter-spacing: 0.3px;
        }

        .navbar-controls {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .dir-nav-btn {
            background: #F1F5F9;
            border: 1px solid var(--border-hover);
            color: var(--text-heading);
            padding: 6px 14px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
        }

        .dir-nav-btn:hover {
            background: var(--brand-primary-light);
            border-color: var(--brand-primary);
            color: var(--brand-primary);
        }

        .slide-indicator {
            font-size: 13.5px;
            font-weight: 700;
            color: var(--text-muted);
            min-width: 100px;
            text-align: center;
        }

        .icon-btn {
            background: #F8FAFC;
            border: 1px solid var(--border-light);
            color: var(--text-heading);
            width: 36px;
            height: 36px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
        }

        .icon-btn:hover {
            background: #E2E8F0;
        }

        .primary-nav-btn {
            background: var(--brand-primary);
            color: #FFFFFF;
            border: none;
            padding: 7px 16px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
        }

        .primary-nav-btn:hover {
            opacity: 0.92;
            transform: translateY(-1px);
        }

        /* Viewport */
        .viewport-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 32px;
            position: relative;
            overflow: hidden;
        }

        .slide-deck {
            width: 100%;
            max-width: 1400px;
            height: calc(100vh - 104px);
            background: var(--card-bg);
            border-radius: 16px;
            border: 1px solid var(--border-light);
            box-shadow: var(--shadow-md);
            display: none !important;
            padding: 32px 40px;
            position: relative;
            overflow-y: auto;
            animation: fadeIn 0.25s ease-out forwards;
        }

        .slide-deck.active {
            display: flex !important;
        }

        .slide-deck.active.split-layout {
            display: grid !important;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Slide 1: Cover Slide */
        .cover-slide {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: linear-gradient(135deg, #FFFFFF 0%, #FAF5FF 100%);
            gap: 28px;
        }

        .cover-header-tag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--brand-primary-light);
            color: var(--brand-primary);
            padding: 6px 18px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 700;
        }

        .cover-title {
            font-size: 46px;
            font-weight: 800;
            color: var(--brand-dark);
            line-height: 1.15;
            max-width: 900px;
        }

        .cover-subtitle {
            font-size: 18px;
            font-weight: 500;
            color: var(--text-muted);
            max-width: 720px;
            line-height: 1.5;
        }

        .cover-stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 220px);
            gap: 20px;
            margin-top: 10px;
        }

        .cover-stat-box {
            background: #FFFFFF;
            border: 1px solid var(--border-light);
            border-radius: 12px;
            padding: 18px;
            box-shadow: var(--shadow-sm);
        }

        .cover-stat-num {
            font-size: 28px;
            font-weight: 800;
            color: var(--brand-primary);
        }

        .cover-stat-label {
            font-size: 12px;
            font-weight: 600;
            color: var(--text-muted);
            margin-top: 4px;
        }

        .cover-actions {
            display: flex;
            gap: 14px;
            margin-top: 10px;
        }

        .btn-large {
            padding: 12px 28px;
            font-size: 15px;
            font-weight: 700;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: none;
        }

        .btn-primary-large {
            background: var(--brand-primary);
            color: #FFFFFF;
            box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35);
        }

        .btn-primary-large:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(124, 58, 237, 0.45);
        }

        .btn-secondary-large {
            background: #F1F5F9;
            color: var(--text-heading);
            border: 1px solid var(--border-hover);
        }

        .btn-secondary-large:hover {
            background: #E2E8F0;
        }

        /* Slide 2: Enterprise Platform Directory */
        .directory-slide {
            flex-direction: column;
            padding: 28px 36px;
            gap: 20px;
            overflow-y: auto;
        }

        .dir-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border-light);
        }

        .dir-title-area h2 {
            font-size: 28px;
            font-weight: 800;
            color: var(--text-heading);
        }

        .dir-title-area p {
            font-size: 14px;
            color: var(--text-muted);
            margin-top: 4px;
        }

        .dir-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
            gap: 16px;
            padding-bottom: 24px;
        }

        .dir-card {
            background: #FFFFFF;
            border: 1px solid var(--border-light);
            border-radius: 12px;
            padding: 16px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            flex-direction: column;
            gap: 10px;
            box-shadow: var(--shadow-sm);
        }

        .dir-card:hover {
            border-color: var(--brand-primary);
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .dir-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .dir-card-icon {
            font-size: 20px;
        }

        .dir-card-badge {
            font-size: 11px;
            font-weight: 700;
            background: var(--brand-primary-light);
            color: var(--brand-primary);
            padding: 2px 8px;
            border-radius: 9999px;
        }

        .dir-card-num {
            font-size: 11px;
            font-weight: 700;
            color: var(--text-muted);
        }

        .dir-card-title {
            font-size: 14.5px;
            font-weight: 700;
            color: var(--text-heading);
            line-height: 1.3;
        }

        .dir-card-desc {
            font-size: 12.5px;
            color: var(--text-body);
            line-height: 1.45;
            flex: 1;
        }

        .dir-card-footer {
            font-size: 11.5px;
            font-weight: 700;
            color: var(--brand-primary);
            display: flex;
            align-items: center;
            gap: 4px;
            margin-top: 4px;
        }

        /* Split Layout (29 Screens) */
        .split-layout {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 36px;
            align-items: center;
            height: 100%;
        }

        .screenshot-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
            height: 100%;
        }

        .screenshot-frame {
            width: 100%;
            height: calc(100vh - 220px);
            max-height: 580px;
            background: #0F172A;
            border-radius: 14px;
            border: 4px solid #1E293B;
            box-shadow: 0 16px 36px rgba(15, 23, 42, 0.12);
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;
            transition: all 0.2s;
        }

        .screenshot-frame:hover {
            transform: scale(1.01);
            border-color: var(--brand-primary);
            box-shadow: 0 20px 40px rgba(124, 58, 237, 0.22);
        }

        .screenshot-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: #0F172A;
            display: block;
        }

        .zoom-pill {
            position: absolute;
            bottom: 12px;
            background: rgba(15, 23, 42, 0.85);
            color: #FFFFFF;
            font-size: 11px;
            font-weight: 700;
            padding: 5px 12px;
            border-radius: 9999px;
            backdrop-filter: blur(4px);
            pointer-events: none;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .screenshot-meta {
            display: flex;
            justify-content: space-between;
            width: 100%;
            font-size: 11.5px;
            color: var(--text-muted);
            font-weight: 600;
            padding: 0 4px;
        }

        .meta-tag {
            color: var(--brand-primary);
            font-weight: 700;
        }

        /* Details Column */
        .details-column {
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            padding: 12px 0;
        }

        .module-nav-bar {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .back-dir-btn {
            background: #F1F5F9;
            border: 1px solid var(--border-hover);
            color: var(--text-body);
            padding: 5px 12px;
            border-radius: 6px;
            font-size: 12px;
            font-weight: 700;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
        }

        .back-dir-btn:hover {
            background: var(--brand-primary-light);
            color: var(--brand-primary);
            border-color: var(--brand-primary);
        }

        .category-pill {
            font-size: 11px;
            font-weight: 700;
            background: var(--brand-primary-light);
            color: var(--brand-primary);
            padding: 4px 10px;
            border-radius: 9999px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .slide-title {
            font-size: 32px;
            font-weight: 800;
            color: var(--text-heading);
            line-height: 1.25;
        }

        .explanation-card {
            background: #F8FAFC;
            border: 1.5px solid #E2E8F0;
            border-left: 5px solid var(--brand-primary);
            border-radius: 12px;
            padding: 24px;
            box-shadow: var(--shadow-sm);
        }

        .card-lead-label {
            font-size: 11.5px;
            font-weight: 800;
            color: var(--brand-primary);
            letter-spacing: 0.8px;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
        }

        .lead-icon {
            font-size: 16px;
        }

        .explanation-text {
            font-size: 17px;
            color: var(--text-heading);
            line-height: 1.6;
            font-weight: 500;
        }

        .quick-nav-pills {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        .nav-pill-btn {
            background: #FFFFFF;
            border: 1px solid var(--border-hover);
            color: var(--text-heading);
            padding: 8px 18px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
        }

        .nav-pill-btn:hover {
            background: #F1F5F9;
        }

        .nav-pill-btn.primary {
            background: var(--brand-primary);
            color: #FFFFFF;
            border-color: var(--brand-primary);
        }

        .nav-pill-btn.primary:hover {
            opacity: 0.92;
        }

        /* Lightbox */
        .lightbox-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(15, 23, 42, 0.94);
            backdrop-filter: blur(8px);
            z-index: 9999;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 40px;
        }

        .lightbox-overlay.active {
            display: flex;
        }

        .lightbox-content {
            position: relative;
            max-width: 95vw;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .lightbox-img {
            max-width: 95vw;
            max-height: 84vh;
            object-fit: contain;
            border-radius: 10px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
            background: #000;
        }

        .lightbox-caption {
            color: #FFFFFF;
            margin-top: 12px;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
        }

        .lightbox-close {
            position: absolute;
            top: -36px;
            right: 0;
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: #FFFFFF;
            font-size: 24px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background 0.2s;
        }

        .lightbox-close:hover {
            background: rgba(255, 255, 255, 0.4);
        }
    </style>
</head>
<body>

    <!-- Header Navbar -->
    <header class="top-navbar">
        <div class="brand-cluster" onclick="goToSlide(1)">
            <img src="presentation_assets/datamate_logo.png" alt="Datamate Logo" class="official-logo-img">
            <div class="brand-divider"></div>
            <img src="presentation_assets/purplekeys_logo.png" alt="Purple Keys Logo" class="official-logo-img">
            <span class="brand-badge">Executive Deck</span>
        </div>

        <div class="navbar-controls">
            <button class="dir-nav-btn" onclick="goToSlide(2)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                Platform Directory
            </button>
            <button class="icon-btn" id="prevBtn" onclick="prevSlide()" title="Previous Slide (Left Arrow)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <span class="slide-indicator" id="slideCount">Slide 1 of ${totalSlides}</span>
            <button class="icon-btn" id="nextBtn" onclick="nextSlide()" title="Next Slide (Right Arrow)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
            <button class="icon-btn" onclick="toggleFullScreen()" title="Toggle Fullscreen (F)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
            </button>
        </div>
    </header>

    <!-- Main Viewport -->
    <main class="viewport-wrapper">

        <!-- Slide 1: Cover Slide -->
        <section class="slide-deck cover-slide active" id="slide-1" data-slide="1">
            <div class="cover-header-tag">
                <span>⭐</span>
                <span>ENTERPRISE POINT-OF-SALE SYSTEM</span>
            </div>
            <h1 class="cover-title">Purple Keys POS: Operational System Workflow Presentation</h1>
            <p class="cover-subtitle">A comprehensive executive walkthrough detailing all 29 production screens, departmental workflows, and operational procedures across hospitality environments.</p>

            <div class="cover-stats-grid">
                <div class="cover-stat-box">
                    <div class="cover-stat-num">29</div>
                    <div class="cover-stat-label">Core System Modules</div>
                </div>
                <div class="cover-stat-box">
                    <div class="cover-stat-num">100%</div>
                    <div class="cover-stat-label">Live Verified Workflows</div>
                </div>
                <div class="cover-stat-box">
                    <div class="cover-stat-num">Sub-10ms</div>
                    <div class="cover-stat-label">Instant Offline Execution</div>
                </div>
            </div>

            <div class="cover-actions">
                <button class="btn-large btn-primary-large" onclick="goToSlide(2)">
                    <span>Explore Enterprise Directory</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button class="btn-large btn-secondary-large" onclick="goToSlide(3)">
                    <span>Start Step-by-Step Deck</span>
                </button>
            </div>
        </section>

        <!-- Slide 2: Enterprise Platform Directory -->
        <section class="slide-deck directory-slide" id="slide-2" data-slide="2">
            <div class="dir-header">
                <div class="dir-title-area">
                    <h2>Enterprise Platform Directory</h2>
                    <p>Complete directory of all 29 verified modules and operational workflows. Click any module to jump to its detailed view.</p>
                </div>
                <button class="primary-nav-btn" onclick="goToSlide(3)">
                    <span>Begin Tour (Step 1) →</span>
                </button>
            </div>

            <div class="dir-grid">
                ${dirCardsHtml}
            </div>
        </section>

        <!-- Slides 3 to ${totalSlides}: 29 Screen Slides -->
        ${moduleSlidesHtml}

    </main>

    <!-- Lightbox Modal -->
    <div class="lightbox-overlay" id="lightboxModal" onclick="closeLightbox()">
        <div class="lightbox-content" onclick="event.stopPropagation()">
            <button class="lightbox-close" onclick="closeLightbox()">✕</button>
            <img src="" alt="" class="lightbox-img" id="lightboxImg">
            <div class="lightbox-caption" id="lightboxCaption"></div>
        </div>
    </div>

    <!-- Interactive Navigation Scripts -->
    <script>
        let currentSlide = 1;
        const totalSlides = ${totalSlides};

        function goToSlide(n) {
            if (n >= 1 && n <= totalSlides) {
                currentSlide = n;
                updateSlide();
            }
        }

        function updateSlide() {
            document.querySelectorAll('.slide-deck').forEach((deck, idx) => {
                const isActive = (idx + 1) === currentSlide;
                deck.classList.toggle('active', isActive);
                if (isActive) {
                    deck.scrollTop = 0;
                }
            });

            document.getElementById('slideCount').innerText = 'Slide ' + currentSlide + ' of ' + totalSlides;
            document.getElementById('prevBtn').disabled = currentSlide === 1;
            document.getElementById('nextBtn').disabled = currentSlide === totalSlides;
        }

        function nextSlide() {
            if (currentSlide < totalSlides) {
                currentSlide++;
                updateSlide();
            }
        }

        function prevSlide() {
            if (currentSlide > 1) {
                currentSlide--;
                updateSlide();
            }
        }

        function openLightbox(src, title) {
            document.getElementById('lightboxImg').src = src;
            document.getElementById('lightboxCaption').innerText = title;
            document.getElementById('lightboxModal').classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightboxModal').classList.remove('active');
        }

        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen().catch(() => {});
                }
            }
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                if (document.getElementById('lightboxModal').classList.contains('active')) return;
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                if (document.getElementById('lightboxModal').classList.contains('active')) return;
                prevSlide();
            } else if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'f' || e.key === 'F') {
                toggleFullScreen();
            }
        });

        // Initialize first slide
        updateSlide();
    </script>
</body>
</html>`;
}

// Generate index.html in the current repository
const htmlOutput = buildHtml();
fs.writeFileSync(path.join(__dirname, '..', 'index.html'), htmlOutput, 'utf8');
console.log('Successfully generated index.html with reordered modules and updated Step 2 text!');
