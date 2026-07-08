/* ==========================================================================
   WanderAI - Smart Travel Assistant
   Script File: Animations, Theme Manager, Modals, FAQs, and Chatbot Copilot
   ========================================================================== */

// --- Destination Mock Database ---
const DESTINATIONS_DB = {
    'Goa': {
        code: 'GOA',
        budget: '₹15,000 - ₹25,000 / person',
        season: 'November to February',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        desc: 'Goa is India\'s pocket-sized paradise, renowned for its golden beaches, vibrant nightlife, Portuguese architectural legacy, and rich seafood culinary experience.',
        activities: [
            'Beach Hopping (Baga, Calangute, and Palolem)',
            'Scuba Diving at Grand Island & parasailing',
            'Trekking to Dudhsagar Waterfalls & spice plantation tour',
            'Exploring Old Goa Churches (Basilica of Bom Jesus)',
            'Scenic Mandovi River Sunset Cruise'
        ],
        itinerary: `
            <div class="copilot-itinerary">
                <div class="copilot-stat-row">
                    <span class="copilot-badge budget">💰 ₹15k - ₹25k</span>
                    <span class="copilot-badge season">☀️ Nov - Feb</span>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 1: North Goa Beaches</div>
                    <div class="copilot-day-text">Arrive at Goa Airport. Transfer to hotel. Relax at Baga Beach, explore shacks, and experience local nightlife.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 2: Heritage & South Goa</div>
                    <div class="copilot-day-text">Explore Old Goa churches, walk through the Portuguese styled Fontainhas Latin Quarter, and enjoy a quiet sunset at Miramar beach.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 3: Water Adventures</div>
                    <div class="copilot-day-text">Take a morning boat cruise, try scuba diving near Grand Island, and relax with a beachside candlelit dinner.</div>
                </div>
            </div>
        `
    },
    'Ooty': {
        code: 'OOTY',
        budget: '₹12,000 - ₹18,000 / person',
        season: 'October to June',
        img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80',
        desc: 'Known as the Queen of Hill Stations, Ooty offers gorgeous misty hills, tea estate plantations, historical heritage bungalows, and cool pleasant temperatures.',
        activities: [
            'Riding the Nilgiri Mountain Toy Train (UNESCO Site)',
            'Strolling around Pykara Lake and waterfalls',
            'Walking through the Government Botanical Gardens',
            'Boating on Ooty Lake & cycling the perimeter',
            'Trekking up Doddabetta Peak for panoramic views'
        ],
        itinerary: `
            <div class="copilot-itinerary">
                <div class="copilot-stat-row">
                    <span class="copilot-badge budget">💰 ₹12k - ₹18k</span>
                    <span class="copilot-badge season">🍃 Oct - Jun</span>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 1: Garden Walks & Lakes</div>
                    <div class="copilot-day-text">Arrive in Ooty. Explore the Botanical Gardens, ride a rowboat on Ooty Lake, and shop for handmade chocolates at Mall Road.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 2: Nilgiri Train & Coonoor</div>
                    <div class="copilot-day-text">Hop on the UNESCO Toy Train down to Coonoor. Visit Sim\'s Park, Lamb\'s Rock, and walk through green tea fields.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 3: Peaks & Waterfalls</div>
                    <div class="copilot-day-text">Trek Doddabetta Peak in the morning. Afternoon trip to Pykara waterfalls and speed-boating on Pykara Lake.</div>
                </div>
            </div>
        `
    },
    'Munnar': {
        code: 'MUNR',
        budget: '₹14,000 - ₹22,000 / person',
        season: 'September to May',
        img: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=800&q=80',
        desc: 'Munnar is a scenic hill town in Kerala, famous for its lush tea garden carpets, wildlife reserves, cascading waterfalls, and misty peaks.',
        activities: [
            'Spotting the endangered Nilgiri Tahr at Eravikulam National Park',
            'Trekking to Anamudi Peak (highest in South India)',
            'Visiting the Tata Tea Museum and tasting organic leaves',
            'Boating on Mattupetty Dam & visiting Echo Point',
            'Exploring the beautiful Lakkam Waterfalls'
        ],
        itinerary: `
            <div class="copilot-itinerary">
                <div class="copilot-stat-row">
                    <span class="copilot-badge budget">💰 ₹14k - ₹22k</span>
                    <span class="copilot-badge season">🍵 Sep - May</span>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 1: Tea Plantations & Tasting</div>
                    <div class="copilot-day-text">Check-in at Munnar resort. Tour the Tata Tea Museum, walk through green tea plantations, and capture photos at Lakkam Waterfalls.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 2: Wildlife & Echo Lakes</div>
                    <div class="copilot-day-text">Early morning hike in Eravikulam National Park. Afternoon boating at Mattupetty Dam and shout out at Echo Point.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 3: Top Station Clouds</div>
                    <div class="copilot-day-text">Drive up to Top Station for stunning panoramic views above the clouds. Stroll in blossom park on the return loop.</div>
                </div>
            </div>
        `
    },
    'Kodaikanal': {
        code: 'KODI',
        budget: '₹11,000 - ₹16,000 / person',
        season: 'April to June & Sept to Oct',
        img: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80',
        desc: 'Nestled in the hills of Tamil Nadu, Kodaikanal is known as the Gift of the Forest, offering serene lake waters, misty cliffs, and beautiful forest trails.',
        activities: [
            'Boating & cycling around the star-shaped Kodaikanal Lake',
            'Scenic walking along Coaker\'s Walk cliff edge',
            'Trekking down to the historical Guna Caves (Devil\'s Kitchen)',
            'Viewing majestic rock shapes at Pillar Rocks',
            'Hiking through tall pine trees at the Pine Forest'
        ],
        itinerary: `
            <div class="copilot-itinerary">
                <div class="copilot-stat-row">
                    <span class="copilot-badge budget">💰 ₹11k - ₹16k</span>
                    <span class="copilot-badge season">🌸 Apr - Jun</span>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 1: Star Lake & Cliff Walks</div>
                    <div class="copilot-day-text">Arrive in Kodai. Cycle around the star-shaped lake, rent a paddle boat, and walk Coaker\'s Walk at sunset.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 2: Caves & Pillar Rocks</div>
                    <div class="copilot-day-text">Explore the ancient Pine Forest. Hike down to the Guna Caves, and capture photographs at the Pillar Rocks viewpoint.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 3: Dolphin\'s Nose Trek</div>
                    <div class="copilot-day-text">Trek down the rocky trail to Dolphin\'s Nose for a sheer view of the valley below. Visit the Bryant Park botanical gardens.</div>
                </div>
            </div>
        `
    },
    'Pondicherry': {
        code: 'POND',
        budget: '₹10,000 - ₹15,000 / person',
        season: 'October to March',
        img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        desc: 'A former French colony, Pondicherry blends French architecture with traditional Indian heritage, tranquil spiritual communes, and beautiful rocky beaches.',
        activities: [
            'Cycling tour of the yellow-walled French Quarter',
            'Visiting the Auroville meditation dome (Matrimandir)',
            'Taking a ferry ride to the isolated Paradise Beach',
            'Walking along the Promenade beach front road',
            'Tasting French croissants & woodfired pizzas'
        ],
        itinerary: `
            <div class="copilot-itinerary">
                <div class="copilot-stat-row">
                    <span class="copilot-badge budget">💰 ₹10k - ₹15k</span>
                    <span class="copilot-badge season">🇫🇷 Oct - Mar</span>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 1: French Quarter Heritage</div>
                    <div class="copilot-day-text">Arrive in Pondy. Rent a bicycle to explore the French Colony streets, visit Sri Aurobindo Ashram, and walk the Promenade.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 2: Auroville spiritual dome</div>
                    <div class="copilot-day-text">Visit Auroville and walk up to the golden Matrimandir viewing point. Evening dinner at an authentic French cafe.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 3: Paradise Beach ferry</div>
                    <div class="copilot-day-text">Take a boat ferry ride to Paradise Beach for gold sand swimming and water sports. Stop at Chunnambar backwaters.</div>
                </div>
            </div>
        `
    },
    'Manali': {
        code: 'MNLI',
        budget: '₹18,000 - ₹28,000 / person',
        season: 'Oct - Feb (Snow) & Mar - Jun',
        img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
        desc: 'Manali is a high-altitude Himalayan resort town, ideal for snow skiing, paragliding, river rafting, and scenic valley road trips.',
        activities: [
            'Paragliding, zorbing, and quad-biking in Solang Valley',
            'Trekking to Rohtang Pass for glacier snow sports',
            'Hiking to Jogini Waterfalls through orchards',
            'Visiting the historical wooden Hadimba Temple',
            'Shopping for woollens at Old Manali Mall Road'
        ],
        itinerary: `
            <div class="copilot-itinerary">
                <div class="copilot-stat-row">
                    <span class="copilot-badge budget">💰 ₹18k - ₹28k</span>
                    <span class="copilot-badge season">❄️ Oct - Feb</span>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 1: Hadimba Temple & Cafes</div>
                    <div class="copilot-day-text">Arrive in Manali. Explore Hadimba Temple in the pine forests, walk around Old Manali, and dine at local live music cafes.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 2: Solang Valley Adventures</div>
                    <div class="copilot-day-text">Full day trip to Solang Valley. Enjoy paragliding, ride the cable car, and hike to the scenic Jogini Waterfalls.</div>
                </div>
                <div class="copilot-day-card">
                    <div class="copilot-day-title">Day 3: Snow at Rohtang Pass</div>
                    <div class="copilot-day-text">Take a day tour to Rohtang Pass (snow levels permitting) to experience mountain slopes, skiing, and snow scooter rides.</div>
                </div>
            </div>
        `
    }
};

// ==========================================
// A. Initialization & Loading Screen
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    // Dismiss loading screen after a short simulated build delay
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.visibility = 'hidden';
            }, 500);
        }
        // Fire animations
        initScrollAnimations();
        initStatsCounters();
    }, 1200);

    // Load theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});

// ==========================================
// B. Navigation & Theme Management
// ==========================================
const siteHeader = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
});

// Dark/Light Theme Selector
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = themeToggleBtn.querySelector('.sun-icon');
const moonIcon = themeToggleBtn.querySelector('.moon-icon');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
}

// Mobile Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close nav menu on links click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Active states highlighting
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ==========================================
// C. Stats Counters & Scroll Reveal
// ==========================================
function initStatsCounters() {
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const speed = 200; // time in ms
                const increment = Math.ceil(target / speed);
                
                let count = 0;
                const updateCount = () => {
                    count += increment;
                    if (count < target) {
                        counter.innerText = count.toLocaleString() + '+';
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target.toLocaleString() + '+';
                    }
                };
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
}

function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => revealObserver.observe(reveal));
}

// ==========================================
// D. Destination Carousel Controls
// ==========================================
const destinationsGrid = document.getElementById('destinations-grid');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');

carouselNext.addEventListener('click', () => {
    destinationsGrid.scrollBy({ left: 350, behavior: 'smooth' });
});

carouselPrev.addEventListener('click', () => {
    destinationsGrid.scrollBy({ left: -350, behavior: 'smooth' });
});

// ==========================================
// E. Detailed Destination Modal
// ==========================================
const destModal = document.getElementById('destination-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalBudget = document.getElementById('modal-budget');
const modalSeason = document.getElementById('modal-season');
const modalDescription = document.getElementById('modal-description');
const modalActivities = document.getElementById('modal-activities');
const modalCtaBtn = document.getElementById('modal-cta-btn');

let currentActiveLocationName = '';

function openModal(destName) {
    const data = DESTINATIONS_DB[destName];
    if (!data) return;

    currentActiveLocationName = destName;
    modalImg.src = data.img;
    modalTitle.innerText = destName;
    modalBudget.innerText = data.budget;
    modalSeason.innerText = `Best Season: ${data.season}`;
    modalDescription.innerText = data.desc;

    // Populate activities list
    modalActivities.innerHTML = '';
    data.activities.forEach(act => {
        const li = document.createElement('li');
        li.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span>${act}</span>
        `;
        modalActivities.appendChild(li);
    });

    // Set Send to Assistant CTA behavior
    modalCtaBtn.onclick = () => {
        closeModal();
        toggleChat(true); // Ensure open
        triggerCopilotRouteUpdate(destName);
    };

    destModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // freeze background scroll
}

function closeModal() {
    destModal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
    if (e.target === destModal) {
        closeModal();
    }
}

// ==========================================
// F. FAQ Accordion Functions
// ==========================================
document.querySelectorAll('.faq-item').forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
        const body = item.querySelector('.faq-body');
        const isActive = item.classList.contains('active');

        // Close all other active items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-body').style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add('active');
            body.style.maxHeight = body.scrollHeight + 'px';
        } else {
            item.classList.remove('active');
            body.style.maxHeight = null;
        }
    });
});

// ==========================================
// G. Form Validation & Submits
// ==========================================
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your inquiry has been forwarded to WanderAI agents. Response ETA: < 1 hour.`);
        e.target.reset();
    }
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    if (email) {
        alert(`Welcome aboard! Subscription registered for: ${email}`);
        e.target.reset();
    }
}

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// H. WanderAI Flight Assistant HUD Widget
// ==========================================
const chatHud = document.getElementById('chat-hud');
const chatLauncher = document.getElementById('chat-launcher');
const chatMessages = document.getElementById('chat-messages');
const chatInputField = document.getElementById('chat-input-field');

function toggleChat(forceOpen = false) {
    const isActive = chatHud.classList.contains('active');
    
    // Animate takeoff rotation on launcher click
    chatLauncher.classList.add('active');
    setTimeout(() => {
        chatLauncher.classList.remove('active');
    }, 500);

    if (forceOpen || !isActive) {
        chatHud.classList.add('active');
        scrollToBottom();
    } else {
        chatHud.classList.remove('active');
    }
}

function scrollToBottom() {
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 50);
}

// Dynamic Flight Route simulation in HUD
const routeEndLabel = document.getElementById('route-end');
const hudFlightCurve = document.getElementById('hud-flight-curve');
const hudPlaneIcon = document.querySelector('.hud-route-container .hud-route-plane');

function triggerCopilotRouteUpdate(destName) {
    const data = DESTINATIONS_DB[destName];
    if (!data) return;

    // Update labels in route view
    routeEndLabel.innerHTML = `${data.code} <span>${destName}, IN</span>`;

    // Trigger airplane takeoff path animation reset
    hudPlaneIcon.style.animation = 'none';
    hudFlightCurve.style.animation = 'none';
    
    // Reflow trick to restart CSS animations
    void hudPlaneIcon.offsetWidth; 
    
    hudPlaneIcon.style.animation = 'flightPath 5s infinite cubic-bezier(0.4, 0, 0.2, 1)';
    
    // Welcome message customized
    showTypingIndicator();
    setTimeout(() => {
        removeTypingIndicator();
        appendMessage('assistant', `
            <strong>✈️ Welcome to your WanderAI Copilot Plan for ${destName}!</strong> <br>
            I've initialized the Delhi (DEL) to ${destName} (${data.code}) flight mapping vectors. Here are the calculated details:
            ${data.itinerary}
            <br>
            Would you like me to change the plan parameters (e.g. adjust for adventure, couples style, or lower budget limit)?
        `);
    }, 1500);
}

// Chat Send Commands
function sendUserMessage() {
    const text = chatInputField.value.trim();
    if (!text) return;

    // Add user text bubble
    appendMessage('user', text);
    chatInputField.value = '';
    
    // Analyze input patterns
   showTypingIndicator();

fetch("http://localhost:5000/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: text
    })
})
.then(response => response.json())
.then(data => {

    removeTypingIndicator();

    const destination = data.destination;
    if (!destination) {

    appendMessage(
        'assistant',
        data.reply || "❌ I can only answer travel-related questions."
    );

    return;
    }

    if (DESTINATIONS_DB[destination]) {

        updateHUDRouteMap(destination);

        appendMessage(
            'assistant',
            `
            <strong>✈️ ${destination} Travel Plan</strong><br>
            ${DESTINATIONS_DB[destination].itinerary}
            `
        );

    } else {

        appendMessage(
            'assistant',
            `Sorry, I couldn't identify a destination.`
        );

    }

})
.catch(error => {

    removeTypingIndicator();

    appendMessage(
        'assistant',
        '⚠️ Backend connection failed.'
    );

    console.error(error);

});
}

function handleChatKeyPress(e) {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
}

function handleSuggestion(chipText) {
    appendMessage('user', `Help me plan a ${chipText}`);
    showTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        processMockAIQuery(chipText);
    }, 1500);
}

function triggerVoice() {
    alert("Microphone listening... Say something like 'Plan a trip to Goa'.");
    // Simulating heard message
    chatInputField.value = "Plan a budget vacation to Goa";
}

function insertEmoji() {
    chatInputField.value += " 🌴";
}

// Appends speech bubble to log
function appendMessage(sender, htmlContent) {
    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const wrapper = document.createElement('div');
    wrapper.className = `msg-wrapper ${sender}`;
    
    const avatar = sender === 'user' ? '👤' : '✈️';
    
    wrapper.innerHTML = `
        <div class="msg-avatar">${avatar}</div>
        <div class="msg-bubble">
            ${htmlContent}
            <span class="msg-time">${timeString}</span>
        </div>
    `;
    
    chatMessages.appendChild(wrapper);
    scrollToBottom();
}

// Typing indicators
function showTypingIndicator() {
    const wrapper = document.createElement('div');
    wrapper.className = 'msg-wrapper assistant typing-indicator';
    wrapper.id = 'typing-indicator';
    wrapper.innerHTML = `
        <div class="msg-avatar">✈️</div>
        <div class="msg-bubble">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(wrapper);
    scrollToBottom();
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Mock AI Engine Rule Parser
function processMockAIQuery(queryText) {
    const query = queryText.toLowerCase();

    // Check destinations keywords
    if (query.includes('goa') || query.includes('beach')) {
        updateHUDRouteMap('Goa');
        appendMessage('assistant', `
            <strong>🏝️ Goa Coastal Copilot Log</strong> <br>
            Calculating ideal flight sequences... Verified flights to Dabolim Airport (GOI) start at ₹4,500 round-trip.
            ${DESTINATIONS_DB['Goa'].itinerary}
        `);
    } 
    else if (query.includes('ooty') || query.includes('valley')) {
        updateHUDRouteMap('Ooty');
        appendMessage('assistant', `
            <strong>🌲 Ooty Nilgiris Mountain Log</strong> <br>
            Calculating optimal toy train schedules... Nearest airport is Coimbatore (CJB). Transit times match.
            ${DESTINATIONS_DB['Ooty'].itinerary}
        `);
    } 
    else if (query.includes('munnar') || query.includes('tea')) {
        updateHUDRouteMap('Munnar');
        appendMessage('assistant', `
            <strong>🍵 Munnar Tea Estate Log</strong> <br>
            Connecting flight nodes to Cochin Airport (COK). Scenic road taxi transfer calculated at 3.5 hours.
            ${DESTINATIONS_DB['Munnar'].itinerary}
        `);
    } 
    else if (query.includes('kodaikanal') || query.includes('mist')) {
        updateHUDRouteMap('Kodaikanal');
        appendMessage('assistant', `
            <strong>🌸 Kodaikanal Pine Ridge Log</strong> <br>
            Nearest node is Madurai Airport (IXM). Average taxi rentals from Madurai to Kodai is ₹3,200.
            ${DESTINATIONS_DB['Kodaikanal'].itinerary}
        `);
    } 
    else if (query.includes('pondicherry') || query.includes('french')) {
        updateHUDRouteMap('Pondicherry');
        appendMessage('assistant', `
            <strong>🇫🇷 Pondicherry French Quarter Log</strong> <br>
            Ferry links to Paradise Beach loaded. Direct airport connections via Chennai (MAA) are active.
            ${DESTINATIONS_DB['Pondicherry'].itinerary}
        `);
    } 
    else if (query.includes('manali') || query.includes('mountain') || query.includes('snow')) {
        updateHUDRouteMap('Manali');
        appendMessage('assistant', `
            <strong>🏔️ Manali Snowy Pass Log</strong> <br>
            Glacier passes checked. Flights via Bhuntar (KUU) or luxury overnight bus schedules from Delhi active.
            ${DESTINATIONS_DB['Manali'].itinerary}
        `);
    }
    // Check styled tags
    else if (query.includes('couple')) {
        appendMessage('assistant', `
            <strong>❤️ Romantic Escape Copilot Filtered</strong> <br>
            I recommend targeting **Munnar** or **Pondicherry**! <br>
            - **Munnar**: Misty mountain walks, private luxury tea plantation treehouse stays. (Est: ₹22,000 / couple)
            - **Pondicherry**: Strolling French heritage quarters and candlelit oceanside dining. (Est: ₹15,000 / couple)
            <br>Which of these should I map on the route HUD?
        `);
    }
    else if (query.includes('family')) {
        appendMessage('assistant', `
            <strong>👨‍👩‍👧 Family Tour Filtered</strong> <br>
            I recommend targeting **Ooty** or **Goa**! <br>
            - **Ooty**: UNESCO historical Toy Train ride, botanical garden picnics, star lake boating.
            - **Goa**: Water parks, shallow beaches (North Goa), historical fort climbs.
            <br>Let me know which you prefer so I can load the itinerary!
        `);
    }
    else if (query.includes('budget')) {
        appendMessage('assistant', `
            <strong>🎒 Budget Travel Plan Filtered</strong> <br>
            I recommend targeting **Pondicherry** or **Kodaikanal**! <br>
            - **Pondicherry**: Stays under ₹1,500/night. Free ashram tours, Promenade walks.
            - **Kodaikanal**: Star lake bicycling (₹100/hr), pine walks, and cave visits.
            <br>Tell me which destination to load onto the map HUD!
        `);
    }
    else if (query.includes('international')) {
        appendMessage('assistant', `
            <strong>🌍 International Flights Modeler</strong> <br>
            WanderAI global modules are currently in preview. <br>
            Currently, our active domestic routes cover **Goa (GOA), Ooty (OOTY), Munnar (MUNR), Kodaikanal (KODI), Pondicherry (POND), and Manali (MNLI)**.
            <br>Ask me about any of these to generate a custom itinerary plan!
        `);
    }
    else {
        appendMessage('assistant', `
            I parsed your query, traveler! 🗺️ <br>
            WanderAI can match your trip if you specify a destination name. Try typing one of these:
            <strong>Goa, Ooty, Munnar, Kodaikanal, Pondicherry, or Manali</strong>.
            <br>Alternatively, click one of the quick suggestions chips below for instant itineraries!
        `);
    }
}

// Side helper to change route map points dynamically when users chat
function updateHUDRouteMap(destName) {

    const data = DESTINATIONS_DB[destName];

    if (!data) return;

    // Update airport code
    document.getElementById("routeCode").textContent = data.code;
    document.getElementById("routeCity").textContent = `${destName}, IN`;

    // Badge
    const badgeIcon = document.getElementById("badgeIcon");
    const badgeText = document.getElementById("badgeText");

    const icons = {
        Goa: "🌴",
        Ooty: "🌲",
        Munnar: "🍵",
        Kodaikanal: "🌸",
        Pondicherry: "🇫🇷",
        Manali: "🏔️"
    };

    badgeIcon.textContent = icons[destName] || "✈️";
    badgeText.textContent = `${destName} Travel`;

    // Restart animation
    hudPlaneIcon.style.animation = "none";
    void hudPlaneIcon.offsetWidth;
    hudPlaneIcon.style.animation =
        "flightPath 5s infinite cubic-bezier(0.4,0,0.2,1)";
    
    const hotelName = document.getElementById("hotelName");
    const hotelDesc = document.getElementById("hotelDesc");

    const activityName = document.getElementById("activityName");
    const activityDesc = document.getElementById("activityDesc");
    if(destName === "Goa"){

    hotelName.textContent = "Taj Exotica Resort";
    hotelDesc.textContent = "Premium beachfront luxury stay matched";

    activityName.textContent = "Grand Island Scuba";
    activityDesc.textContent = "Adventure activities reservation approved";

}

else if(destName === "Ooty"){

    hotelName.textContent = "Savoy Ooty";
    hotelDesc.textContent = "Heritage hill resort";

    activityName.textContent = "Nilgiri Toy Train";
    activityDesc.textContent = "UNESCO heritage railway ride";

}

else if(destName === "Munnar"){

    hotelName.textContent = "Fragrant Nature Resort";
    hotelDesc.textContent = "Tea plantation luxury stay";

    activityName.textContent = "Tea Museum";
    activityDesc.textContent = "Tea estate sightseeing";

}

else if(destName === "Kodaikanal"){

    hotelName.textContent = "The Carlton";
    hotelDesc.textContent = "Lake view premium resort";

    activityName.textContent = "Coaker's Walk";
    activityDesc.textContent = "Beautiful valley viewpoint";

}

else if(destName === "Pondicherry"){

    hotelName.textContent = "Le Pondy Resort";
    hotelDesc.textContent = "Beachfront luxury stay";

    activityName.textContent = "Paradise Beach";
    activityDesc.textContent = "Boat ride and beach experience";

}

else if(destName === "Manali"){

    hotelName.textContent = "Snow Valley Resort";
    hotelDesc.textContent = "Luxury Himalayan stay";

    activityName.textContent = "Solang Valley";
    activityDesc.textContent = "Paragliding and snow adventures";

}
}