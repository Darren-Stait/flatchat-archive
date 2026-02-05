document.addEventListener('DOMContentLoaded', () => {
  const includes = document.querySelectorAll('[data-include]');
  if (!includes.length) return;

  includes.forEach(async el => {
    const url = el.getAttribute('data-include');
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
      const html = await res.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      // Replace the placeholder with the loaded content
      el.replaceWith(...Array.from(wrapper.childNodes));
      // Re-run to support nested includes
      if (document.querySelector('[data-include]')) {
        const evt = new Event('DOMContentLoaded');
        document.dispatchEvent(evt);
      }
    } catch (err) {
      console.error('Include failed:', url, err);
    }
  });
});