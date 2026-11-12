(() => {
  const current = new Intl.DateTimeFormat('en', {
    timeZone: 'Europe/Oslo',
    year: 'numeric',
    month: 'numeric',
  }).formatToParts(new Date());
  const year = Number(current.find(part => part.type === 'year').value);
  const month = Number(current.find(part => part.type === 'month').value);

  document.querySelectorAll('[data-experience-start]').forEach(element => {
    const [startYear, startMonth] = element.dataset.experienceStart.split('-').map(Number);
    if (!Number.isInteger(startYear) || !Number.isInteger(startMonth) || startMonth < 1 || startMonth > 12) return;
    const years = year - startYear - (month < startMonth ? 1 : 0);
    if (years < 1) return;
    element.textContent = `${years}+ ${years === 1 ? 'year' : 'years'} of experience`;
  });
})();
