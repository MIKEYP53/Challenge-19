const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.style.visibility = 'visible';
});

// install on click event handler
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  butInstall.style.visibility = 'hidden';
});

// installed app event handler
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});