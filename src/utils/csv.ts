export function exportToCSV<T extends Record<string, any>>(
  data: T[],
  filename: string,
  columns?: Array<{ key: keyof T; label: string; formatter?: (value: any) => string }>
) {
  if (!data.length) return;

  // If no columns specified, use all keys from first object
  const cols = columns || Object.keys(data[0]).map(key => ({ key, label: key }));
  
  // Create CSV header
  const headers = cols.map(col => col.label).join(',');
  
  // Create CSV rows
  const rows = data.map(item => 
    cols.map(col => {
      let value = item[col.key];
      
      // Apply formatter if provided
      if (col.formatter) {
        value = col.formatter(value);
      }
      
      // Handle null/undefined values
      if (value === null || value === undefined) {
        value = '';
      }
      
      // Escape commas and quotes
      value = String(value);
      if (value.includes(',') || value.includes('"') || value.includes('\n')) {
        value = `"${value.replace(/"/g, '""')}"`;
      }
      
      return value;
    }).join(',')
  );
  
  // Combine header and rows
  const csvContent = [headers, ...rows].join('\n');
  
  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

export function generateMockPDF(filename: string, content: string = 'Mock PDF Content') {
  const blob = new Blob([content], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${filename}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
}