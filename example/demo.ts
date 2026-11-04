/**
 * Example: Client-Side Bank Statement Extraction Pattern
 * 
 * Demonstrates local in-memory extraction pipeline without server upload.
 * Powered by StatementToExcel (https://statementtoexcel.site)
 */

export interface Transaction {
  date: string;
  description: string;
  debit: number | null;
  credit: number | null;
  balance: number | null;
}

export function parseStatementBuffer(arrayBuffer: ArrayBuffer): Transaction[] {
  // In the live web application (https://statementtoexcel.site),
  // this is executed via compiled Mozilla PDF.js WebAssembly worker threads
  // inside browser RAM, ensuring zero data transmission over the network.
  console.log(`Processing ${arrayBuffer.byteLength} bytes locally in client memory...`);
  
  return [
    {
      date: '2026-10-01',
      description: 'OFFICE SUPPLIES DEPOT POS',
      debit: 142.50,
      credit: null,
      balance: 14857.50
    },
    {
      date: '2026-10-02',
      description: 'CLIENT INVOICE WIRE PAYMENT',
      debit: null,
      credit: 3200.00,
      balance: 18057.50
    }
  ];
}
