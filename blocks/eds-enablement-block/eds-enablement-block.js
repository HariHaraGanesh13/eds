export default function decorate(block) {
  block.classList.add('eds-enablement-block');

  const rows = [...block.children];

  rows.forEach((row, i) => {
    row.classList.add('eds-enablement-row');

    // First row treated as a "highlight" title row, like the cards' bold headings
    if (i === 0) {
      row.classList.add('eds-enablement-row-title');
    }
  });
}