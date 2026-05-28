import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
const viewers = document.querySelectorAll<HTMLElement>("[data-pdf]");

viewers.forEach(async (viewer) => {

    const pdfUrl = viewer.dataset.pdf;
    if (!pdfUrl) return;
    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;

    // Calculate dynamic target width based on the parent's actual width minus its horizontal padding (p-4 = 32px)
    const containerPadding = 32;
    const targetWidth = (((viewer.clientWidth > 600) ? 700 : viewer.clientWidth)  || 800) - containerPadding; 

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {

        const page = await pdf.getPage(pageNum);

        // 1. Dynamic Resolution scaling based on parent container width
        const unscaledViewport = page.getViewport({ scale: 1.0 });
        const scale = targetWidth / unscaledViewport.width;
        const viewport = page.getViewport({ scale: scale });

        // 2. High-DPI / Retina Display Sharpness Fix
        const pixelRatio = window.devicePixelRatio || 1;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        if (!context) continue;

        // Set actual render resolution (multiplied by pixel ratio)
        canvas.width = viewport.width * pixelRatio;
        canvas.height = viewport.height * pixelRatio;

        // Set visual display size via CSS
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;
        canvas.className = "rounded-lg flex-shrink-0 shadow-none";

        // Scale the context to match the high-res backing store
        context.scale(pixelRatio, pixelRatio);

        await page.render({
            canvas,
            canvasContext: context,
            viewport
        }).promise;

        viewer.appendChild(canvas);

        // Create the page number indicator badge
        const pageIndicator = document.createElement("div");
        const pageWrapper = document.createElement("div");
        const totalPages = pdf.numPages;

        // Using Tailwind positioning to stick it to the top-right corner of the page
        pageIndicator.className = "absolute top-3 right-3 bg-neutral/80 backdrop-blur-xs text-neutral-content px-3 py-1 rounded-full text-xs font-semibold select-none";
        pageIndicator.textContent = `${pageNum} / ${totalPages}`;

        // Create a wrapper container for each page
        pageWrapper.className = "relative flex-shrink-0 flex justify-center w-full mb-6";
        pageWrapper.appendChild(canvas);
        pageWrapper.appendChild(pageIndicator);
        
        // Append the wrapped page to the main viewer
        viewer.appendChild(pageWrapper);
    }
});
