export const initSW = (): void => {
    // Only attempt registration in production environments
    if (import.meta.env.DEV) {
        console.log('PWA Service Worker registration skipped in development mode.');
        return;
    }

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
            .catch(err => console.error('SW registration failed:', err));
        });
    }
};