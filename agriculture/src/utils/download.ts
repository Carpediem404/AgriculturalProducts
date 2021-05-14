export function downloadFile(url: string) {
  console.log(url);
  const a = document.createElement('a');
  a.href = url;
  a.download = url.slice(-10);
  a.click();
}
