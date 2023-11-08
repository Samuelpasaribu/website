let link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/gh/samuelpasaribu/website/style.css';
document.querySelector('head').appendChild(link);

const targetDomain = 'https://www.samuelpasaribu.com/p/website.html';

function createAlertBox(message) {
  const alertBox = document.createElement('div');
  alertBox.setAttribute('id', 'alertBox');
  alertBox.style.position = 'fixed';
  alertBox.style.top = '50px';
  alertBox.style.left = '50%';
  alertBox.style.transform = 'translateX(-50%)';
  alertBox.style.backgroundColor = '#f2f2f2';
  alertBox.style.border = '1px solid #ddd';
  alertBox.style.borderRadius = '5px';
  alertBox.style.padding = '20px';
  alertBox.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
  alertBox.style.zIndex = '9999';
  alertBox.innerHTML = `<strong>PERINGATAN!</strong> ${message}`;
  document.body.appendChild(alertBox);

  setTimeout(() => {
    document.body.removeChild(alertBox);
    window.location.href = 'https://www.samuelpasaribu.com/p/website.html';
  }, 10000);
}

const currentDomain = window.location.hostname;

if (currentDomain !== targetDomain) {
  createAlertBox('Sumber Daya Ini Diamankan Oleh Ahli Keamanan. Dilarang Mengakses Tanpa Izin.');
}
