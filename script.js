// Example: JavaScript Array with key features
const features = [
    "Semantic HTML Tags (header, footer, main, section, etc.)",
    "Responsive Design with Flexbox & Media Queries",
    "Interactive Forms with JavaScript Validation",
    "Dynamic Content Generation Using Arrays",
    "CSS Animations and Transitions"
];

// Dynamically render the feature list on the homepage
const featureList = document.getElementById('feature-list');
features.forEach(feature => {
    let li = document.createElement('li');
    li.textContent = feature;
    featureList.appendChild(li);
});

// Contact Form Submission (Simple Alert for Now)
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});
