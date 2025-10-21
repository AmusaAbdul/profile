function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  const now = new Date();
  const formattedTime = now.toLocaleTimeString(); 
  timeElement.textContent = new Date().getTime();
}

setInterval(updateTime, 1000);
updateTime();

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('[data-testid="test-user-social-twitter"]').onclick = function() {
    window.open('https://x.com/brunolinlcoln?s=21', '_blank', 'noopener,noreferrer');
  };

  document.querySelector('[data-testid="test-user-social-github"]').onclick = function() {
    window.open('https://github.com/AmusaAbdul', '_blank', 'noopener,noreferrer');
  };
});
