const bar = document.getElementById('loading-bar');
const container = document.getElementById('loading-bar-container');
if (!bar || !container) throw new Error("Missing elements in DOM");

const finishLoading = () => {
    // 1. Instantly snap from the pseudo-loading state (90%) to completion (100%)
    bar.style.width = '100%';

    // 2. Wait for the width animation to hit the edge, then fade the bar out gracefully
    setTimeout(() => {
        container.style.transition = 'opacity 0.4s ease';
        container.style.opacity = '0';

        // 3. Reset the bar cleanly under the hood for the next user interaction
        setTimeout(() => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
            container.style.transition = 'none';
            container.style.opacity = '1';
        }, 400);
    }, 300);
};

const setupLinkInterceptors = () => {
    document.querySelectorAll('a[href]').forEach(anchor => {
        const href = anchor.getAttribute('href');
        const target = anchor.getAttribute('target');

        if (!href || href.startsWith('#') || href.startsWith('http') || target === '_blank' || anchor.hasAttribute('download'))
            return;

        anchor.addEventListener('click', () => {
            // Re-enable smooth transitions in case it was stripped during resetting
            bar.style.transition = 'width 2s cubic-bezier(0.08, 0.82, 0.17, 1)';
            
            // Instantly shoot across to 90% while the server processes the page switch
            bar.style.width = '90%';
        });
    });
};

// Execute based on loading environment state
if (document.readyState === 'complete') {
    finishLoading();
    setupLinkInterceptors();
} else {
    window.addEventListener('load', () => {
        finishLoading();
        setupLinkInterceptors();
    });
}
