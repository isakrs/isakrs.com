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
    const internshipDays = Number(element.dataset.experiencePriorDays || 0);
    if (!Number.isInteger(startYear) || !Number.isInteger(startMonth) || startMonth < 1 || startMonth > 12 || internshipDays < 0 || !Number.isFinite(internshipDays)) return;

    // Continuous work from Yara to Vipps, plus earlier internships only.
    // Dates documented only to the month use month-level precision.
    const fullTimeMonths = (year - startYear) * 12 + month - startMonth;
    const totalMonths = Math.floor(fullTimeMonths + internshipDays * 12 / 365.2425);
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    if (years < 1) return;
    element.textContent = `${years}+ ${years === 1 ? 'year' : 'years'} of experience`;
    element.title = `About ${years} ${years === 1 ? 'year' : 'years'} and ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}, including internships`;
  });
})();
