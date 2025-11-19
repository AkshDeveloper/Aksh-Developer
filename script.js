
    // Theme toggle (persistent)
    (function(){
      const toggle = document.getElementById('themeToggle');
      const root = document.documentElement;
      const saved = localStorage.getItem('site-theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if(saved){ root.setAttribute('data-theme', saved); }
      else { root.setAttribute('data-theme', prefersDark ? 'dark' : 'light'); }

      function setTheme(t){
        root.setAttribute('data-theme', t);
        localStorage.setItem('site-theme', t);
      }

      toggle.addEventListener('click', ()=>{
        const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        setTheme(current);
      });
    })();

    // Header scroll effect
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Scroll animation
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = () => {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', fadeInOnScroll);
    // Initial check in case elements are already in view
    fadeInOnScroll();

    // Contact form handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      const mailtoLink = `mailto:akshdeveloper0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\n\nMessage:\n' + message)}`;
      
      window.location.href = mailtoLink;
    });

    // Contact buttons in hero section
    document.getElementById('contactEmail').addEventListener('click', function() {
      window.location.href = 'mailto:akshdeveloper0@gmail.com', '_blank';
    });
    
    document.getElementById('contactWhatsApp').addEventListener('click', function() {
      window.open('https://wa.me/7879715312', '_blank');
    });
    
    document.getElementById('contactDiscord').addEventListener('click', function() {
      window.open('https://discord.com/users/1117917474319503371', '_blank');
    });

    // Contact overlay functionality
    const contactOverlay = document.getElementById('contactOverlay');
    const selectedPlanSpan = document.getElementById('selectedPlan');
    const planMessage = document.getElementById('planMessage');
    const closeOverlay = document.getElementById('closeOverlay');
    const emailOption = document.getElementById('emailOption');
    const whatsappOption = document.getElementById('whatsappOption');
    const discordOption = document.getElementById('discordOption');
    
    let selectedPlan = '';
    
    // Add click handlers for pricing buttons
    document.querySelectorAll('.btn-pricing').forEach(button => {
      button.addEventListener('click', function() {
        selectedPlan = this.getAttribute('data-plan');
        selectedPlanSpan.textContent = selectedPlan;
        
        // Update contact links with the selected plan message
        const message = `Hi Aksh! I'm interested in the ${selectedPlan} plan. Let's discuss the details!`;
        const encodedMessage = encodeURIComponent(message);
        
        emailOption.href = `mailto:akshdeveloper0@gmail.com?subject=Inquiry about ${selectedPlan} Plan&body=${encodedMessage}`, '_blank';
        whatsappOption.href = `https://wa.me/7879715312?text=${encodedMessage}` , '_blank';
        discordOption.href = `https://discord.com/users/1117917474319503371`, '_blank';
        
        // Show the overlay
        contactOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
    
    // Close overlay
    closeOverlay.addEventListener('click', function() {
      contactOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
    
    // Close overlay when clicking outside the modal
    contactOverlay.addEventListener('click', function(e) {
      if (e.target === contactOverlay) {
        contactOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Hire Me button
    document.querySelector('.btn-primary').addEventListener('click', function() {
      alert("Thank you for your interest! Let's discuss your project requirements.");
    });
