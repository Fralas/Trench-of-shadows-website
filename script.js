document.addEventListener('mousemove', function(event) {
    const wrapper = document.querySelector('.content-wrapper');
    
    // Calculate the distance from the mouse to the top-left corner of the window
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Define the size of the "focus" area around the mouse (a 200x200px box)
    const focusSize = 200;

    // Set the position of the focus area dynamically
    wrapper.style.setProperty('--focus-x', `${mouseX - focusSize / 2}px`);
    wrapper.style.setProperty('--focus-y', `${mouseY - focusSize / 2}px`);
    
    // Apply a focused class to remove blur inside the area
    wrapper.classList.add('focused');
});
