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
  const element = document.querySelector('.gpg-fingerprint');
  const action = document.querySelector('.gpg-action');
  const originalText = action.textContent;

  // Try modern clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(fingerprint).then(function() {
      showCopySuccess();
    }).catch(function() {
      fallbackCopy();
    });
  } else {
    fallbackCopy();
  }

  function fallbackCopy() {
    // Fallback for older browsers and mobile
    const textArea = document.createElement('textarea');
    textArea.value = fingerprint;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, 99999); // For mobile devices

    try {
      const successful = document.execCommand('copy');
      if (successful) {
        showCopySuccess();
      } else {
        showCopyError();
      }
    } catch (err) {
      showCopyError();
    }

    document.body.removeChild(textArea);
  }

  function showCopySuccess() {
    action.textContent = 'Copied!';
    element.classList.add('copied');

    setTimeout(function() {
      action.textContent = originalText;
      element.classList.remove('copied');
    }, 2000);
  }

  function showCopyError() {
    action.textContent = 'Copy failed';
    element.classList.add('error');

    setTimeout(function() {
      action.textContent = originalText;
      element.classList.remove('error');
    }, 2000);
  }
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

.gpg-fingerprint.error {
  background-color: rgba(239, 68, 68, 0.1);
  border-color: #ef4444;
}

.gpg-fingerprint.error .gpg-action {
  color: #ef4444;
}

/* Mobile-specific improvements */
@media (max-width: 768px) {
  .gpg-fingerprint {
    padding: 1.25rem;
    gap: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .gpg-fingerprint code {
    font-size: 0.75rem;
    word-break: break-all;
    line-height: 1.4;
  }

  .gpg-separator {
    display: none;
  }

  .gpg-action {
    font-size: 0.875rem;
    align-self: center;
    padding: 0.5rem 1rem;
    background-color: var(--bg-tertiary);
    border-radius: 0.25rem;
    border: 1px solid var(--border-color);
  }

  .gpg-fingerprint:active {
    transform: scale(0.98);
  }
}
</style>
