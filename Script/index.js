function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  timeElement.textContent = new Date().getTime();
}
setInterval(updateTime, 1000);
updateTime();