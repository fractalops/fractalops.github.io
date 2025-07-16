// Theme toggle functionality
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-toggle-icon');
  const body = document.body;
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply the saved theme
  if (currentTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    themeIcon.textContent = '☀️';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌙';
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  });
})();

// Mobile sidebar functionality
(function() {
  const mobileSidebarToggle = document.getElementById('mobile-sidebar-toggle');
  const mobileSidebarOverlay = document.getElementById('mobile-sidebar-overlay');
  const sidebar = document.querySelector('.sidebar');
  
  if (!mobileSidebarToggle || !sidebar) return;
  
  // Toggle mobile sidebar
  function toggleMobileSidebar() {
    const isOpen = sidebar.classList.contains('mobile-open');
    
    if (isOpen) {
      sidebar.classList.remove('mobile-open');
      mobileSidebarOverlay.classList.remove('active');
      mobileSidebarToggle.textContent = '📋 Recent Posts';
      document.body.style.overflow = '';
    } else {
      sidebar.classList.add('mobile-open');
      mobileSidebarOverlay.classList.add('active');
      mobileSidebarToggle.textContent = '✕ Close';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }
  
  // Event listeners
  mobileSidebarToggle.addEventListener('click', toggleMobileSidebar);
  mobileSidebarOverlay.addEventListener('click', toggleMobileSidebar);
  
  // Close sidebar when clicking a post link
  const sidebarLinks = sidebar.querySelectorAll('a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (sidebar.classList.contains('mobile-open')) {
        toggleMobileSidebar();
      }
    });
  });
  
  // Close sidebar on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar.classList.contains('mobile-open')) {
      toggleMobileSidebar();
    }
  });
})();