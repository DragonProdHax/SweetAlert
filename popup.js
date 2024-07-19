document.addEventListener('DOMContentLoaded', function() {
    const injectButton = document.getElementById('injectButton');
  
    injectButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: injectSweetAlert
        });
      });
    });
  
    function injectSweetAlert() {
      // Inject SweetAlert script into the webpage
      let script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
      script.onload = function() {
        // Example usage: alert('Hello world!') with SweetAlert
        alert('SweetAlert has been injected!');
      };
      document.head.appendChild(script);
    }
  });
  