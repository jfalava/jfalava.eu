document.addEventListener('DOMContentLoaded', () => {
    const copyLink = document.getElementById('email-copy');
    const link = document.getElementById('email-content');

    copyLink.addEventListener('click', () => {
      const linkText = link.textContent;

      navigator.clipboard.writeText(linkText)
        .then(() => {
          console.log('Link copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy link: ', err);
        });
    });
  });