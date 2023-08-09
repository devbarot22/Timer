function updateTimerFields() {
  let startDate = localStorage.getItem('startDate');
  if (!startDate) {
    startDate = new Date().getTime();
    localStorage.setItem('startDate', startDate);
  }

  setInterval(() => {
    const now = new Date();
    const elapsedTime = now - startDate;
    const totalSeconds = Math.floor(elapsedTime / 1000);

    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    const days = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    

    document.querySelector('.time.Y').value = years;
    document.querySelector('.time.D').value = days;
    document.querySelector('.time.H').value = hours;
    document.querySelector('.time.M').value = minutes;
    document.querySelector('.time.S').value = seconds;
  }, 1000);
}

updateTimerFields();