function download() {
  console.log('download() called');
  const element = document.getElementById('main-div');
  if (!element) return console.error('#main-div not found');
  console.log(element.style.height)
  
  const originalStyles = {
    minHeight: element.style.minHeight,
    marginBottom: element.style.marginBottom,
    paddingBottom: element.style.paddingBottom,
  };

  
  element.style.minHeight = 'auto';
  element.style.marginBottom = '0';
  element.style.paddingBottom = '0';
  
  
  const rect = element.getBoundingClientRect();
  const trueHeight = Math.ceil(rect.height);

  html2canvas(element, {
    scale: 3,
    useCORS: true,
    backgroundColor: '#ffffff',
    height: trueHeight,
    windowHeight: trueHeight,
    scrollY: -window.scrollY,
    removeContainer: true, // Add this to remove any temporary containers
  })
    .then((canvas) => {
      console.log('canvas dimensions:', canvas.width, canvas.height);
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Portfolio.pdf');

      // Restore original styles
      Object.assign(element.style, originalStyles);
    })
    .catch((err) => console.error('html2canvas failed:', err));
}