<div align="center">

# 📊 Bank Statement to Excel & QuickBooks Converter

**100% Client-Side WebAssembly Engine • Zero-Knowledge Privacy Architecture • Zero Cloud Uploads**

[![Website](https://img.shields.io/badge/Live%20App-statementtoexcel.site-0284c7?style=for-the-badge&logo=google-chrome&logoColor=white)](https://statementtoexcel.site)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-22c55e?style=for-the-badge&logo=github&logoColor=white)](https://hassant147.github.io/bank-statement-to-excel-converter/)
[![Free Tools](https://img.shields.io/badge/Free%20Tools-12%20Suite-10b981?style=for-the-badge&logo=wrench&logoColor=white)](https://statementtoexcel.site/tools)
[![Regional Hubs](https://img.shields.io/badge/Regions-12%20Global%20Hubs-3b82f6?style=for-the-badge&logo=globe&logoColor=white)](https://statementtoexcel.site/#regions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Privacy: Zero--Knowledge](https://img.shields.io/badge/Privacy-100%25%20Zero--Knowledge-emerald.svg?style=for-the-badge)](https://statementtoexcel.site/about)

<br/>

[**🚀 Launch Live Converter (Free 3 Pages)**](https://statementtoexcel.site/convert) • [**📑 Read Full Guide**](https://statementtoexcel.site/bank-statement-to-excel) • [**🛠️ 12 Free Financial Tools**](https://statementtoexcel.site/tools) • [**🌐 12 Regional Hubs**](https://statementtoexcel.site/#regions) • [**🛡️ Privacy Architecture**](https://statementtoexcel.site/about)

</div>

---

## 📌 Overview

**[StatementToExcel](https://statementtoexcel.site)** is an open-source, client-side financial document engine designed to parse and convert PDF bank, credit card, and broker statements into structured **Microsoft Excel (.xlsx)**, **QuickBooks Online (.qbo / .csv)**, and **Xero (.csv)** spreadsheets without sending confidential financial records over the internet.

Traditional cloud-based PDF converters (such as DocuClipper, ProperSoft, MoneyThumb, or Tofu) transmit your unencrypted PDF statements to third-party cloud servers. This exposes sensitive corporate and personal account data, violating strict requirements under **GDPR Art. 25**, **GLBA (Gramm-Leach-Bliley Act)**, and CPA professional ethical confidentiality mandates.

**StatementToExcel runs 100% locally in browser RAM using compiled WebAssembly.** Your account numbers, balances, payees, and transaction histories never leave your client machine.

---

## 🌟 Key Capabilities

* **🔒 100% Zero-Knowledge Guarantee:** PDF parsing, 2D sub-pixel spatial text clustering, table reconstruction, and spreadsheet formatting occur entirely within your web browser sandbox. Zero bytes are uploaded to remote servers.
* **📐 Standard 5-Column Financial Layout:** Automatically normalizes messy, multi-column statement layouts into strict double-entry ready format:
  1. `Date` (Standardized `YYYY-MM-DD` or locale preference)
  2. `Description / Payee` (Normalized without internal bank noise)
  3. `Withdrawals / Debits` (Positive floating point numbers)
  4. `Deposits / Credits` (Positive floating point numbers)
  5. `Running Balance` (Computed and mathematically validated)
* **🌍 Multi-Currency & Date Disambiguation:**
  * Auto-detects and formats US (`MM/DD/YYYY`), UK/Europe (`DD/MM/YYYY`), and German/Swiss (`DD.MM.YYYY`) statement dates.
  * Native multi-currency symbol support (`$`, `€`, `£`, `CAD`, `AUD`, `CHF`).
* **⚡ Accounting Software Direct Export:**
  * **Microsoft Excel (.xlsx):** Auto-fitted column widths, true numeric cell typing (no text-formatted numbers), formatted bold header row.
  * **QuickBooks Online (.qbo & CSV):** Pre-formatted 3-column and 4-column bank feeds for 1-click import into QBO, Xero, and Sage.
  * **Open Financial Exchange (.ofx):** Native SGML/OFX feeds for legacy desktop accounting packages.
* **🛡️ Password-Protected Statements:** Decrypts locked monthly PDF statements securely inside browser RAM using client-side WebCrypto before parsing.
* **🛡️ CWE-1236 Defense:** Hardened formula injection protection sanitizes leading whitespace and prefixes (`=`, `+`, `-`, `@`) across Excel and CSV outputs.

---

## 🛠️ Complete Suite of 12 Free Satellite Tools

In addition to core statement conversion, StatementToExcel offers 12 specialized browser-based accounting utilities that operate with zero server uploads:

| # | Free Tool | Formats | Primary Capability |
|---|---|---|---|
| 1 | [**Convert Bank Statement**](https://statementtoexcel.site/convert) | PDF &rarr; XLSX, QBO, CSV | Full studio with live interactive table preview and balance check |
| 2 | [**CSV to QBO Web Connect**](https://statementtoexcel.site/tools/csv-to-qbo) | CSV &rarr; .QBO | Convert spreadsheet exports into QuickBooks Online bank feed files |
| 3 | [**PDF to CSV Converter**](https://statementtoexcel.site/tools/pdf-to-csv) | PDF &rarr; CSV | RFC-4180 compliant bank table extraction without truncation |
| 4 | [**Excel & CSV to QBO**](https://statementtoexcel.site/tools/excel-to-qbo) | XLSX &rarr; .QBO | Fix inverted debit/credit polarities for QuickBooks Online feeds |
| 5 | [**Verify Statement Math**](https://statementtoexcel.site/tools/verify-bank-statement) | Audit Engine | Validates Opening Balance $\pm$ Sum $=$ Closing Balance to the cent |
| 6 | [**Unlock Password PDF**](https://statementtoexcel.site/tools/unlock-bank-statement) | Encrypted PDF | Strip PDF passwords locally in RAM using client-side WebCrypto |
| 7 | [**Merge Bank Statements**](https://statementtoexcel.site/tools/merge-bank-statements) | Multi-PDF | Combine 12 consecutive monthly statements into 1 annual ledger |
| 8 | [**Bank Payee Cleaner**](https://statementtoexcel.site/tools/bank-payee-cleaner) | Text Sanitizer | Strip merchant POS terminal IDs, store numbers, and auth strings |
| 9 | [**Credit Card Statement to Excel**](https://statementtoexcel.site/tools/credit-card-statement-to-excel) | Card PDFs | Dedicated reconciler for Visa, Mastercard, and American Express |
| 10 | [**Apple Card to Excel**](https://statementtoexcel.site/tools/apple-card-statement-to-excel) | Apple Wallet | Extract Apple Card monthly statements with Daily Cash breakdowns |
| 11 | [**PDF Table to Excel**](https://statementtoexcel.site/tools/pdf-table-to-excel) | General Tables | Snaps financial coordinates into aligned Excel grid cells |
| 12 | [**PDF to OFX Converter**](https://statementtoexcel.site/tools/pdf-to-ofx) | PDF &rarr; .OFX | OFX 1.02 feed builder for Quicken, Sage, and desktop packages |

👉 **[Explore All 12 Tools in the Financial Toolkit](https://statementtoexcel.site/tools)**

---

## 🌐 12 Global Regional Banking Hubs

StatementToExcel provides customized regional parsing engines tailored to local dates, currencies, and statutory accounting guidelines:

* 🇺🇸 **[United States Hub](https://statementtoexcel.site/)** - Chase, Bank of America, Wells Fargo, Citi, Capital One (`USD`, `MM/DD/YYYY`, QBO bank feeds)
* 🇬🇧 **[United Kingdom Hub](https://statementtoexcel.site/uk/bank-statement-to-excel)** - Barclays, HSBC UK, Lloyds, NatWest, Monzo, Revolut (`GBP`, `DD/MM/YYYY`, HMRC & BACS compliant)
* 🇪🇺 **[Europe Central Hub](https://statementtoexcel.site/europe/bank-statement-to-excel)** - ING, Santander, BNP Paribas, BBVA (`EUR`, SEPA & ISO 20022 ready)
* 🇩🇪 **[Germany Hub](https://statementtoexcel.site/germany/bank-statement-to-excel)** - Deutsche Bank, Commerzbank, N26, Sparkasse (Kontoauszug, DATEV & GoBD ready, `DD.MM.YYYY`)
* 🇫🇷 **[France Hub](https://statementtoexcel.site/france/bank-statement-to-excel)** - BNP Paribas, Société Générale, Crédit Agricole (Relevé Bancaire, FEC compliant)
* 🇮🇪 **[Ireland Hub](https://statementtoexcel.site/ireland/bank-statement-to-excel)** - AIB, Bank of Ireland, Ulster Bank (Revenue ROS & CT1 ready)
* 🇳🇱 **[Netherlands Hub](https://statementtoexcel.site/netherlands/bank-statement-to-excel)** - ABN AMRO, ING, Rabobank (Bankafschrift, BTW & Exact Online compliant)
* 🇪🇸 **[Spain Hub](https://statementtoexcel.site/spain/bank-statement-to-excel)** - Banco Santander, BBVA, CaixaBank (Extracto Bancario, Norma 43 ready)
* 🇮🇹 **[Italy Hub](https://statementtoexcel.site/italy/bank-statement-to-excel)** - Intesa Sanpaolo, UniCredit, Banco BPM (Estratto Conto, FatturaPA compliant)
* 🇨🇭 **[Switzerland Hub](https://statementtoexcel.site/switzerland/bank-statement-to-excel)** - UBS, Credit Suisse, PostFinance (`CHF`, QR-Bill & ISO 20022 compliant)
* 🇨🇦 **[Canada Hub](https://statementtoexcel.site/canada/bank-statement-to-excel)** - RBC Royal Bank, TD Canada Trust, Scotiabank, BMO (`CAD`, CRA & T2 compliant)
* 🇦🇺 **[Australia Hub](https://statementtoexcel.site/australia/bank-statement-to-excel)** - CBA, ANZ, Westpac, NAB (`AUD`, ATO & BAS ready)

---

## 💼 Solutions for Financial Professionals

* **[For Accountants & CPAs](https://statementtoexcel.site/for/accountants):** Bulk multi-client conversions, immutable audit trails, and strict adherence to client privilege without third-party cloud data exposure.
* **[For Bookkeepers](https://statementtoexcel.site/for/bookkeepers):** Rapid month-end reconciliations, automatic payee sanitization, and immediate QuickBooks feed generation.
* **[For Tax Preparers](https://statementtoexcel.site/for/tax-preparers):** High-speed extraction for shoeboxes of client statements, Schedule C expense compilation, and annual ledger consolidation.
* **[Supported Banks Directory](https://statementtoexcel.site/banks):** Verified coordinate profiles for over 40+ domestic and international banking institutions.
* **[Competitor Comparisons](https://statementtoexcel.site/compare):** Transparent benchmarks vs DocuClipper, ProperSoft, Tofu, MoneyThumb, and Supaclerk.

---

## ⚙️ How It Works (Client-Side Architecture)

```
┌────────────────────────────────────────────────────────┐
│                   CLIENT WEB BROWSER                   │
│                                                        │
│  [ Bank Statement PDF ] (Vector or Digital)            │
│           │                                            │
│           ▼                                            │
│  [ WebAssembly PDF Parser (Mozilla PDF.js Engine) ]    │
│           │                                            │
│           ▼                                            │
│  [ 2D Sub-Pixel Coordinate Clusterer ]                 │
│  - Reconstructs tabular rows and transaction columns   │
│           │                                            │
│           ▼                                            │
│  [ Multi-Locale Date & Currency Regex Disambiguator ]  │
│  - Supports MM/DD/YYYY, DD/MM/YYYY, and DD.MM.YYYY     │
│  - Disambiguates $, €, £, CAD, AUD, CHF                │
│           │                                            │
│           ▼                                            │
│  [ Mathematical Debit/Credit Balance Verification ]    │
│  - Validates Opening &plusmn; Transactions &equals; Closing        │
│           │                                            │
│           ▼                                            │
│  [ In-Memory SheetJS (XLSX) / CSV / QBO Serializer ]   │
│  - Formats cell types & applies CWE-1236 defenses      │
│           │                                            │
│           ▼                                            │
│  [ 1-Click Local File Download (.xlsx / .qbo / .csv) ] │
└────────────────────────────────────────────────────────┘
```

> **Verify for Yourself:** Open your browser's Developer Tools Network Tab (`F12`). When you convert a 50-page PDF, notice that **zero payload bytes are transmitted to any remote server**. Everything is processed in local browser RAM.

---

## 📖 Quickstart Guide

### Option 1: Use the Web Interface (No Installation Required)
Navigate directly to the live production web app:
👉 **[https://statementtoexcel.site/convert](https://statementtoexcel.site/convert)**

1. Drag and drop your bank statement PDF.
2. Choose your target format: **Excel (.xlsx)**, **QuickBooks (.qbo)**, or **CSV**.
3. Select your date preference (Auto-detect, `MM/DD/YYYY`, or `DD/MM/YYYY`).
4. Review transactions in the live interactive table preview.
5. Click **Download Spreadsheet**.

### Option 2: Programmatic Usage (Client-Side Node / TypeScript)
Clone the repository:
```bash
git clone https://github.com/Hassant147/bank-statement-to-excel-converter.git
cd bank-statement-to-excel-converter
npm install
npm test
```

---

## 💳 Pricing & Transparency

* **Free Tier:** 3 pages total (instant in-browser conversion, zero credit card required).
* **Monthly Starter ($19/mo):** 50 pages per month for freelancers and solo proprietors.
* **Professional Plan ($49/mo):** 250 pages per month for active bookkeeping practices.
* **Firm Plan ($99/mo):** 1,000 pages per month for multi-client CPA firms with priority support.

See full pricing details: [https://statementtoexcel.site/pricing](https://statementtoexcel.site/pricing)

---

## ⚖️ Legal & Privacy Compliance

* **GDPR Compliance (EU 2016/679):** Conforms to Article 25 ("Data protection by design and by default"). Because no personal identifiable data (PII) or financial transactions are ever stored on servers, GDPR compliance is architecturally assured.
* **Gramm-Leach-Bliley Act (GLBA):** Fully satisfies financial data privacy safeguards for US accounting firms and CPAs.
* **Terms of Service:** [https://statementtoexcel.site/terms](https://statementtoexcel.site/terms)
* **Privacy Policy:** [https://statementtoexcel.site/privacy](https://statementtoexcel.site/privacy)
* **Company Architecture:** [https://statementtoexcel.site/about](https://statementtoexcel.site/about)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Maintained with ❤️ by <b><a href="https://statementtoexcel.site">StatementToExcel Technologies</a></b>. Free, open, and private financial document parsing for accountants, bookkeepers, and individuals worldwide.</sub>
</div>
