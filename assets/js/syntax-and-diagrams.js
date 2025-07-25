// =============================================================================
// SYNTAX HIGHLIGHTING & DIAGRAM INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
  
  // =============================================================================
  // MERMAID CONFIGURATION
  // =============================================================================
  
  // Mermaid is now handled via ES modules in head.html
  
  // =============================================================================
  // PRISM.JS CONFIGURATION
  // =============================================================================
  
  if (typeof Prism !== 'undefined') {
    // Configure Prism autoloader
    Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/';
    
    // Add copy button functionality (optional enhancement)
    if (Prism.plugins.toolbar) {
      Prism.plugins.toolbar.registerButton('copy-to-clipboard', {
        text: 'Copy',
        onClick: function (env) {
          const code = env.code;
          navigator.clipboard.writeText(code).then(function() {
            console.log('Code copied to clipboard');
          });
        }
      });
    }
  }
  
  // =============================================================================
  // ERROR HANDLING & FALLBACKS
  // =============================================================================
  
  // Handle cases where libraries fail to load
  setTimeout(function() {
    // Check if Prism loaded properly
    if (typeof Prism === 'undefined') {
      console.warn('Prism.js failed to load - code blocks will display as plain text');
    }
    
    // Mermaid is now handled via ES modules in head.html
  }, 2000);
  
});

// =============================================================================
// PERFORMANCE OPTIMIZATION
// =============================================================================

// Lazy load syntax highlighting for code blocks not in viewport
if ('IntersectionObserver' in window) {
  const codeBlocks = document.querySelectorAll('pre[class*="language-"]');
  const codeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && typeof Prism !== 'undefined') {
        Prism.highlightElement(entry.target.querySelector('code'));
        codeObserver.unobserve(entry.target);
      }
    });
  });
  
  codeBlocks.forEach(block => {
    codeObserver.observe(block);
  });
}