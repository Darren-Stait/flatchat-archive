document.addEventListener('DOMContentLoaded', () => {
  loadIncludes();
});

async function loadIncludes() {
  const includes = document.querySelectorAll('[data-include]');
  if (!includes.length) return;

  for (const el of includes) {
    const url = el.getAttribute('data-include');

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status + ' ' + res.statusText);

      const html = await res.text();
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;

      el.replaceWith(...Array.from(wrapper.childNodes));
    } catch (err) {
      console.error('Include failed:', url, err);
    }
  }

  // After all replacements, check again (supports nesting)
  if (document.querySelector('[data-include]')) {
    loadIncludes();
  }
}
