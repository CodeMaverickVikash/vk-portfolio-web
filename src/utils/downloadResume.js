/**
 * Utility function to handle resume download
 * @param {string} fileName - The name of the resume file (default: 'vmresume.pdf')
 * @param {string} downloadName - The name to save the file as (default: 'vmresume.pdf')
 */
export const handleDownloadResume = (
  fileName = 'vmresume.pdf',
  downloadName = 'vmresume.pdf'
) => {
  // Create a link element
  const link = document.createElement('a');
  // Set the href to the resume file path in public folder
  link.href = process.env.PUBLIC_URL + `/assests/${fileName}`;
  // Set the download attribute with the desired filename
  link.download = downloadName;
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Default resume download function
 * Downloads the default resume file
 */
export const downloadDefaultResume = () => {
  handleDownloadResume('vmresume.pdf', 'vmresume.pdf');
};

