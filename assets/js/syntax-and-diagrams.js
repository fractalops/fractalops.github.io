// =============================================================================
// SYNTAX HIGHLIGHTING & DIAGRAM INITIALIZATION
// =============================================================================

document.addEventListener('DOMContentLoaded', function() {
  
  // =============================================================================
  // MERMAID CONFIGURATION
  // =============================================================================
  
  // Mermaid is handled via ES modules in head.html
  
  // =============================================================================
  // HIGHLIGHT.JS INITIALIZATION
  // =============================================================================
  
  // Simple and reliable syntax highlighting
  if (typeof hljs !== 'undefined') {
    hljs.highlightAll();
  } else {
    console.warn('Highlight.js failed to load - code blocks will display as plain text');
  }
  
});