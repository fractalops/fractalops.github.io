---
layout: default
title: "GPG Public Key"
permalink: /gpg/
---

# GPG Public Key

<div class="gpg-fingerprint" onclick="copyGpgFingerprint()">
<code>8813 0AB3 1372 3EAD 0E62  6D45 0C85 D00D 9D98 95BD</code>
<span class="gpg-separator">|</span>
<span class="gpg-action">Click to copy</span>
</div>

<script>
function copyGpgFingerprint() {
  const fingerprint = '8813 0AB3 1372 3EAD 0E62  6D45 0C85 D00D 9D98 95BD';
  navigator.clipboard.writeText(fingerprint).then(function() {
    // Show feedback
    const element = document.querySelector('.gpg-fingerprint');
    const action = document.querySelector('.gpg-action');
    const originalText = action.textContent;

    action.textContent = 'Copied!';
    element.classList.add('copied');

    setTimeout(function() {
      action.textContent = originalText;
      element.classList.remove('copied');
    }, 2000);
  });
}
</script>

<style>
.gpg-fingerprint {
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 200ms ease;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
}

.gpg-fingerprint:hover {
  background-color: var(--hover-bg);
  border-color: var(--border-light);
}

.gpg-fingerprint code {
  font-family: "JetBrains Mono", "Fira Code", "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
  font-size: 0.875rem;
  color: var(--text-primary);
  background: none !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

.gpg-separator {
  color: var(--border-light);
  font-size: 1rem;
  user-select: none;
}

.gpg-action {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
  transition: color 200ms ease;
}

.gpg-fingerprint:hover .gpg-action {
  color: var(--text-secondary);
}

.gpg-fingerprint.copied {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: var(--accent-green);
}

.gpg-fingerprint.copied .gpg-action {
  color: var(--accent-green);
}
</style>
