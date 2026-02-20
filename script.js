document.addEventListener('DOMContentLoaded', () => {
  // simple language toggle
  const langBtn = document.getElementById('langBtn');
  langBtn.addEventListener('click', () => {
    langBtn.textContent = langBtn.textContent === 'EN' ? 'FR' : 'EN';
  });
});

    setTimeout(() => {
      const loadingScreen = document.getElementById('loading-screen');
      const mainContent = document.getElementById('main-content');
      
      loadingScreen.classList.add('fade-out');
      mainContent.classList.add('visible');
      
      // Remove loading screen from DOM after fade out
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 2500);

 const headline = document.getElementById('headline');
        const textVisible = headline.querySelector('.text-visible'); 

        headline.addEventListener('mousemove', (e) => {
            const rect = headline.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            // console.log(`rect:${rect}%  Mouse X: ${x}%, Mouse Y: ${y}% , rect.width:${rect.width}, rect.height:${rect.height} 
            //   e.clientX:${e.clientX}, e.clientY:${e.clientY} rect.left:${rect.left}, rect.top:${rect.top}` );
            
            headline.style.setProperty('--mouse-x', `${x}%`);
            headline.style.setProperty('--mouse-y', `${y}%`);
        });

        // headline.addEventListener('mouseleave', () => {
        //     headline.style.setProperty('--mouse-x', '50%');
        //     headline.style.setProperty('--mouse-y', '50%');
        // });