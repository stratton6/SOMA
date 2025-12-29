// Resources Data
const allResources = {
    books: [
        {
            id: 1,
            title: "Advanced Mathematics Form Five",
            description: "Comprehensive advanced mathematics course for form five students covering all essential topics",
            type: "books",
            category: "mathematics",
            price: "Free",
            thumbnail: "📐",
            driveLink: "books/Advanced Mathematics Form Five.pdf",
            previewLink: "books/Advanced Mathematics Form Five.pdf"
        },
        {
            id: 2,
            title: "S Chand XI Complete",
            description: "Complete S Chand mathematics textbook for class XI with detailed explanations",
            type: "books",
            category: "mathematics",
            price: "Free",
            thumbnail: "📚",
            driveLink: "books/S CHAND XI COMPLETE.pdf",
            previewLink: "books/S CHAND XI COMPLETE.pdf"
        },
        {
            id: 3,
            title: "S Chand XII",
            description: "S Chand mathematics textbook for class XII - advanced topics and problems",
            type: "books",
            category: "mathematics",
            price: "Free",
            thumbnail: "📚",
            driveLink: "books/S CHANDS XII.pdf",
            previewLink: "books/S CHANDS XII.pdf"
        },
        {
            id: 4,
            title: "Physics Mastering Notes",
            description: "Complete physics notes covering all essential concepts and practical applications",
            type: "books",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "books/physics notes mastering 2_250625_115443.pdf",
            previewLink: "books/physics notes mastering 2_250625_115443.pdf"
        }
    ],
    papers: [
        {
            id: 5,
            title: "Physics 1 Exam & Answers",
            description: "Physics 1 examination papers with complete answers and solutions",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/PHYSICS 1 - Exam n Answers - MSOMIBORA.COM (9).pdf",
            previewLink: "papers/PHYSICS 1 - Exam n Answers - MSOMIBORA.COM (9).pdf"
        },
        {
            id: 6,
            title: "Physics 1 Exam Paper - Variant 025954",
            description: "Physics 1 examination with answers and detailed solutions",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_025954.pdf",
            previewLink: "papers/PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_025954.pdf"
        },
        {
            id: 7,
            title: "Physics 1 Exam Paper - Variant 030128",
            description: "Physics 1 examination papers with detailed solutions and explanations",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_2_030128.pdf",
            previewLink: "papers/PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_2_030128.pdf"
        },
        {
            id: 8,
            title: "Physics 1 Exam Paper - Variant 030111",
            description: "Physics 1 examination paper with complete answers",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_4_030111.pdf",
            previewLink: "papers/PHYSICS 1 - Exam n Answers - MSOMIBORA.COM_4_030111.pdf"
        },
        {
            id: 9,
            title: "Physics 1 Exam Paper - Variant 030030",
            description: "Physics 1 examination with solutions and answers for practice",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/Physics 1 - Exam n Answers - MsomiBora.com_6_030030.pdf",
            previewLink: "papers/Physics 1 - Exam n Answers - MsomiBora.com_6_030030.pdf"
        },
        {
            id: 10,
            title: "Physics 1 - WazaElimu Edition",
            description: "Physics 1 past papers from WazaElimu collection with solutions",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/PHYSICS 1 - WazaElimu.com (3).pdf",
            previewLink: "papers/PHYSICS 1 - WazaElimu.com (3).pdf"
        },
        {
            id: 11,
            title: "Physics Form Five - WazaElimu",
            description: "Complete Physics Form 5 examination papers and detailed solutions",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/PHYSICS F5 Wazaelimu.com -1.pdf",
            previewLink: "papers/PHYSICS F5 Wazaelimu.com -1.pdf"
        },
        {
            id: 12,
            title: "Physics Form Six",
            description: "Physics Form 6 advanced examination papers for advanced learners",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/PHYSICS F6 tie mryghalis com .pdf",
            previewLink: "papers/PHYSICS F6 tie mryghalis com .pdf"
        },
        {
            id: 13,
            title: "Physics 1 Core Concepts",
            description: "Physics 1 fundamental concepts and past papers for comprehensive study",
            type: "papers",
            category: "physics",
            price: "Free",
            thumbnail: "⚛️",
            driveLink: "papers/PHYSICS-1.pdf",
            previewLink: "papers/PHYSICS-1.pdf"
        }
    ]
};

// Page Navigation
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    if (pages.length > 0) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const page = document.getElementById(pageId);
        if (page) {
            page.classList.add('active');
        } else {
            const e404 = document.getElementById('404');
            if (e404) e404.classList.add('active');
        }
        window.scrollTo(0, 0);

        if (pageId === 'books') {
            renderResources(allResources.books, 'books');
        } else if (pageId === 'papers') {
            renderResources(allResources.papers, 'papers');
        }
    } else {
        if (pageId === 'home') window.location.href = 'index.html';
        else if (pageId === 'books') window.location.href = 'books.html';
        else if (pageId === 'papers') window.location.href = 'papers.html';
        else if (pageId === 'contact') window.location.href = 'index.html#contact';
    }
}

// JS_PART_2_MARKER

// Render Resources
function renderResources(resources, type) {
    const containerId = type === 'books' ? 'booksList' : 'papersList';
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    if (resources.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem; color: rgba(224, 224, 224, 0.6); font-size: 1.1rem;">No resources found.</div>';
        return;
    }

    resources.forEach((resource, index) => {
        const item = document.createElement('div');
        item.className = 'resource-item';
        item.id = resource.id;
        item.style.animationDelay = `${index * 0.05}s`;

        item.innerHTML = `
            <div class="resource-info">
                <div class="resource-header">
                    <span class="resource-icon" loading="lazy">${resource.thumbnail}</span>
                    <h3 class="resource-title">${resource.title}</h3>
                </div>
                <p class="resource-description">${resource.description}</p>
                <div class="resource-meta">
                    <span class="resource-badge">${resource.price}</span>
                </div>
            </div>
            <div class="resource-actions">
                <button class="list-btn btn-preview" onclick="viewResource('${resource.previewLink}')" title="Preview this resource">👁️ Preview</button>
                <button class="list-btn btn-download-item" onclick="downloadResource('${resource.driveLink}')" title="Download this resource">⬇️ Download</button>
                <button class="list-btn btn-share" onclick="shareResource('${resource.title}', '${resource.driveLink}')" title="Share this resource">📤 Share</button>
                <button class="list-btn btn-copy" onclick="copyToClipboard('${resource.driveLink}')" title="Copy link to clipboard">📋 Copy</button>
            </div>
        `;

        container.appendChild(item);
    });
}

// Filter Resources
function filterResources(category, type) {
    let filtered = allResources[type];

    if (category !== 'all') {
        filtered = filtered.filter(r => r.category === category);
    }

    renderResources(filtered, type);
}

// Search Resources
function performSearch(type) {
    const inputId = type === 'books' ? 'booksSearchInput' : 'papersSearchInput';
    const searchInput = document.getElementById(inputId);
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const resources = allResources[type];

    const filtered = resources.filter(r =>
        r.title.toLowerCase().includes(searchTerm) ||
        r.description.toLowerCase().includes(searchTerm)
    );

    renderResources(filtered, type);
}

// Search as you type
function handleSearchInput(type) {
    const inputId = type === 'books' ? 'booksSearchInput' : 'papersSearchInput';
    const suggestionsId = type === 'books' ? 'booksSearchSuggestions' : 'papersSearchSuggestions';
    const searchInput = document.getElementById(inputId);
    const suggestionsContainer = document.getElementById(suggestionsId);

    if (!searchInput || !suggestionsContainer) return;

    const searchTerm = searchInput.value.toLowerCase();
    const resources = allResources[type];

    suggestionsContainer.innerHTML = '';

    if (searchTerm.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    const filtered = resources.filter(r =>
        r.title.toLowerCase().includes(searchTerm) ||
        r.description.toLowerCase().includes(searchTerm)
    );

    if (filtered.length > 0) {
        suggestionsContainer.style.display = 'block';
        filtered.forEach(r => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.textContent = r.title;
            item.onclick = () => {
                searchInput.value = r.title;
                suggestionsContainer.style.display = 'none';
                performSearch(type);
            };
            suggestionsContainer.appendChild(item);
        });
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

// Event Listeners for Search Inputs
document.addEventListener('DOMContentLoaded', () => {
    const booksInput = document.getElementById('booksSearchInput');
    if (booksInput) booksInput.addEventListener('input', () => handleSearchInput('books'));

    const papersInput = document.getElementById('papersSearchInput');
    if (papersInput) papersInput.addEventListener('input', () => handleSearchInput('papers'));
});

// JS_PART_3_MARKER

// View Resource
function viewResource(previewLink) {
    if (previewLink) {
        const modal = document.createElement('div');
        modal.className = 'preview-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            animation: fadeIn 0.3s ease-out;
        `;

        const fileName = previewLink.split('/').pop();

        modal.innerHTML = `
            <div style="position: relative; width: 95%; max-width: 1600px; height: 90vh; background: var(--darker); border: 2px solid var(--primary); border-radius: 20px; overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 0 60px rgba(0, 212, 255, 0.4);">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 25px; background: linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%); border-bottom: 2px solid var(--primary);">
                    <div>
                        <h2 style="color: white; margin: 0 0 5px 0; font-size: 1.5rem; font-weight: 900;">📄 ${fileName}</h2>
                        <p style="color: rgba(224, 224, 224, 0.7); margin: 0; font-size: 0.9rem;">PDF Document</p>
                    </div>
                    <div>
                        <button onclick="toggleFullScreen()" style="background: var(--primary); color: var(--darker); border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 24px; cursor: pointer; transition: all 0.3s; font-weight: bold; flex-shrink: 0; margin-right: 10px;">⛶</button>
                        <button onclick="printPDF('${previewLink}')" style="background: var(--primary); color: var(--darker); border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 24px; cursor: pointer; transition: all 0.3s; font-weight: bold; flex-shrink: 0; margin-right: 10px;">⎙</button>
                        <button onclick="this.closest('.preview-modal').remove()" style="background: var(--primary); color: var(--darker); border: none; border-radius: 50%; width: 40px; height: 40px; font-size: 24px; cursor: pointer; transition: all 0.3s; font-weight: bold; flex-shrink: 0;">×</button>
                    </div>
                </div>
                <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 40px; flex-direction: column; text-align: center;">
                    <iframe src="${previewLink}" style="width: 100%; height: 100%; border: none;" title="PDF Preview">
                        <p>Your browser does not support iframes.</p>
                    </iframe>
                </div>
                <div style="padding: 20px; background: rgba(0, 212, 255, 0.05); border-top: 2px solid var(--primary); display: flex; justify-content: space-around; align-items: center;">
                    <div style="text-align: center;">
                        <p style="color: var(--primary); font-weight: 700; margin: 0;">PDF File</p>
                        <p style="color: rgba(224, 224, 224, 0.7); margin: 5px 0 0 0; font-size: 0.9rem;">High Quality</p>
                    </div>
                    <div style="width: 2px; height: 40px; background: var(--primary); opacity: 0.3;"></div>
                    <div style="text-align: center;">
                        <p style="color: var(--primary); font-weight: 700; margin: 0;">Free Access</p>
                        <p style="color: rgba(224, 224, 224, 0.7); margin: 5px 0 0 0; font-size: 0.9rem;">No Registration</p>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    } else {
        alert('Preview not available.');
    }
}

// Download Resource
function downloadResource(driveLink) {
    if (driveLink) {
        const link = document.createElement('a');
        link.href = driveLink;
        link.setAttribute('download', driveLink.split('/').pop());
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Download link not available.');
    }
}

// Share Resource
function shareResource(title, url) {
    const fullUrl = url.startsWith('http') ? url : window.location.origin + '/' + url;

    if (navigator.share) {
        navigator.share({
            title: title,
            url: fullUrl
        }).then(() => {
            console.log('Thanks for sharing!');
        })
            .catch(console.error);
    } else {
        navigator.clipboard.writeText(fullUrl).then(() => {
            alert('Link copied to clipboard');
        });
    }
}

// Copy to Clipboard
function copyToClipboard(url) {
    const fullUrl = url.startsWith('http') ? url : window.location.origin + '/' + url;
    navigator.clipboard.writeText(fullUrl).then(() => {
        alert('Link copied to clipboard');
    });
}

// Handle Form Submit
function handleSubmit(event) {
    event.preventDefault();
    alert('Message received! Thank you for reaching out. The owner will contact you soon.');
    event.target.reset();
}

// JS_PART_4_MARKER

// Typewriter Effect
const phrases = [
    "Your Gateway to Knowledge",
    "Excellence in Education",
    "Empowering Students Worldwide",
    "Learn. Grow. Succeed."
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        element.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        element.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Loader
const hideLoader = () => {
    const loader = document.getElementById('loader');
    if (loader && !loader.classList.contains('hidden')) {
        loader.classList.add('hidden');
    }
};

window.addEventListener('load', () => {
    setTimeout(hideLoader, 500);
});

setTimeout(hideLoader, 3000);

// Start typewriter
setTimeout(typeWriter, 500);

// Initial render - Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    const booksContainer = document.getElementById('booksList');
    if (booksContainer) renderResources(allResources.books, 'books');

    const papersContainer = document.getElementById('papersList');
    if (papersContainer) renderResources(allResources.papers, 'papers');

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('nav-active');
            const expanded = navLinks.classList.contains('nav-active');
            hamburger.setAttribute('aria-expanded', expanded);
        });

        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('nav-active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('nav-active');
            }
        });
    }

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Cookie Consent
    const cookieBanner = document.getElementById('cookie-consent-banner');
    const cookieAcceptBtn = document.getElementById('cookie-accept-btn');

    if (cookieBanner && cookieAcceptBtn) {
        if (!localStorage.getItem('cookieConsent')) {
            setTimeout(() => {
                cookieBanner.classList.add('visible');
            }, 2000);
        }

        cookieAcceptBtn.addEventListener('click', () => {
            cookieBanner.classList.remove('visible');
            localStorage.setItem('cookieConsent', 'true');
        });
    }

    // Parallax effect
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }
});
