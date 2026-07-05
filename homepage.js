document.addEventListener("DOMContentLoaded", () => {
    let grid = document.getElementById("items-grid");

    // Fallback items embedded directly in the script.
    // If index.html is opened directly via file://, browser security (CORS) blocks the fetch() call.
    // In that case, we fall back to these hardcoded items so the page still displays correctly.
    const FALLBACK_ITEMS = [
        {
            "name": "duolingo",
            "time": "1 Year",
            "price": "20,000 IDQ",
            "image": "assets/software-license-imgs/duolingo-seeklogo.png",
            "description": "Learn a new language with Duolingo Plus! Enjoy an ad-free experience, offline access, and progress tracking to make your language learning journey more effective and enjoyable."
        },
        {
            "name": "Chat GPT pluse",
            "time": "1 Month",
            "price": "15,000 IDQ",
            "image": "assets/chatgpt.png",
            "description": "Unlock the full power of AI with a private, secure Chat GPT Plus account. Includes priority access during peak times, faster response speeds, and access to GPT-4."
        },
        {
            "name": "Chat GPT pluse",
            "time": "6 Months",
            "price": "75,000 IDQ",
            "image": "assets/chatgpt.png",
            "description": "Unlock the full power of AI with a private, secure Chat GPT Plus account. Includes priority access during peak times, faster response speeds, and access to GPT-4."
        },
        {
            "name": "Perplexity",
            "time": "1 Year",
            "price": "20$",
            "image": "assets/software-license-imgs/perplexityai.png",
            "description": "Experience the future of AI with Perplexity AI. Get a private account for enhanced capabilities, faster responses, and priority access to cutting-edge features."
        },
        {
            "name": "Adobe creative-cloud",
            "time": "1 Year",
            "price": "100,000 IDQ",
            "image": "assets/software-license-imgs/creative-cloud.png",
            "description": "Unlock your creativity with Adobe Creative Cloud. Get a private account for access to premium features, faster performance, and priority support."
        },
        {
            "name": "Canva",
            "time": "1 Year",
            "price": "10,000 IDQ",
            "image": "assets/software-license-imgs/canva.png",
            "description": "Elevate your designs with Canva Pro. Enjoy a private account featuring premium templates, advanced tools, and priority access to new features."
        },
        {
            "name": "Windows 10",
            "time": "Permnante",
            "price": "10,000 IDQ",
            "image": "assets/software-license-imgs/windows.png",
            "description": "Get a genuine Windows 10 license with a private account for enhanced security, faster updates, and priority support from Microsoft."
        },
        {
            "name": "Windows 11",
            "time": "Permnante",
            "price": "10,000 IDQ",
            "image": "assets/software-license-imgs/windows11 (2).png",
            "description": "Get a genuine Windows 11 license with a private account for enhanced security, faster updates, and priority support from Microsoft."
        },
        {
            "name": "Gemini",
            "time": "1 Month",
            "price": "15,000 IDQ",
            "image": "assets/software-license-imgs/google-gemini-seeklogo.png",
            "description": "Unlock the full potential of AI with a private Google Gemini account. Enjoy faster response times, priority access to new features, and enhanced security for your interactions."
        },
        {
            "name": "Capcut",
            "time": "1 Month",
            "price": "7,000 IDQ",
            "image": "assets/software-license-imgs/capcut-seeklogo.png",
            "description": "Unlock premium features with CapCut Pro. Get a private account for ad-free editing, advanced tools, and priority access to new effects."
        },
        {
            "name": "Youtube premium",
            "time": "1 Year",
            "price": "10,000 IDQ",
            "image": "assets/youtube.png",
            "description": "Enjoy ad-free videos, offline downloads, and background play with YouTube Premium. Get a private account for enhanced security and priority support."
        },
        {
            "name": "Office",
            "time": "1 Year",
            "price": "15,000 IDQ",
            "image": "assets/software-license-imgs/office.png",
            "description": "Boost your productivity with Microsoft Office 365. Get a private account for access to premium features, faster updates, and priority support."
        },
        {
            "name": "Envato",
            "time": "1 Month",
            "price": "35,000 IDQ",
            "image": "assets/software-license-imgs/envato.png",
            "description": "Unlock premium assets with Envato Elements. Get a private account for unlimited downloads, faster access, and priority support."
        }
    ];

    // Helper function to build and render cards
    function renderItems(items) {
        grid.innerHTML = "";
        items.forEach((item) => {
            let card = document.createElement("div");
            card.className = "item-card";

            let img = document.createElement("img");
            img.src = item.image;
            img.alt = "not found";
            img.className = "imges";
            img.id = "imges";

            let namePrice = document.createElement("div");
            namePrice.className = "name-price";

            let nameH2 = document.createElement("h2");
            nameH2.className = "name";
            nameH2.innerText = item.name;

            let timeH3 = document.createElement("h3");
            timeH3.className = "time";
            timeH3.innerText = item.time;

            let priceH2 = document.createElement("h2");
            priceH2.className = "price";
            priceH2.innerText = item.price;

            let descP = document.createElement("p");
            descP.id = "description";
            descP.className = "hidden";
            descP.innerText = item.description;

            namePrice.appendChild(nameH2);
            namePrice.appendChild(timeH3);
            namePrice.appendChild(priceH2);
            namePrice.appendChild(descP);

            card.appendChild(img);
            card.appendChild(namePrice);

            card.addEventListener("click", () => {
                window.location.href = `product.html?name=${encodeURIComponent(item.name)}&price=${encodeURIComponent(item.price)}&imgSrc=${encodeURIComponent(item.image)}&time=${encodeURIComponent(item.time)}&desc=${encodeURIComponent(item.description)}`;
            });

            grid.appendChild(card);
        });
    }

    // Try fetching from the JSON file first
    fetch("data/items.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON file");
            }
            return response.json();
        })
        .then(data => {
            const items = data.items || [];
            renderItems(items);
        })
        .catch(error => {
            console.warn("Could not fetch items dynamically (likely due to opening via file:// protocol). Loading fallback items...", error);
            // Render the fallback items array so the page still works locally out of the box
            renderItems(FALLBACK_ITEMS);
        });
});