// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".sc-popover.svelte-mc1z8c.svelte-mc1z8c{position:relative}.contents-wrapper.svelte-mc1z8c.svelte-mc1z8c{transform:translate(-50%, -50%);position:absolute;top:50%;left:50%;transition:none;z-index:2;display:none}.contents.svelte-mc1z8c.svelte-mc1z8c{background:#fff;box-shadow:0px 10px 26px rgba(0,0,0,0.4) ;opacity:.8;padding-top:0;display:none;animation:svelte-mc1z8c-grow 200ms forwards cubic-bezier(.92,.09,.18,1.05)}.contents-inner.svelte-mc1z8c.svelte-mc1z8c{animation:svelte-mc1z8c-fadeIn 400ms forwards}.contents-wrapper.visible.svelte-mc1z8c.svelte-mc1z8c{display:block}.contents-wrapper.visible.svelte-mc1z8c .contents.svelte-mc1z8c{opacity:1;transform:scale(1);display:block}.contents-wrapper.shrink.svelte-mc1z8c .contents.svelte-mc1z8c{animation:svelte-mc1z8c-shrink 150ms forwards cubic-bezier(.92,.09,.18,1.05)}@keyframes svelte-mc1z8c-grow{0%{transform:scale(.9,.1);opacity:0}30%{opacity:1}100%{transform:scale(1)}}@keyframes svelte-mc1z8c-shrink{0%{transform:scale(1);opacity:1}70%{opacity:1}100%{opacity:0;transform:scale(.9,.1)}}@keyframes svelte-mc1z8c-fadeIn{0%{opacity:0}50%{opacity:0}100%{opacity:1}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}