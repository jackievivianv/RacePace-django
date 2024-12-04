document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");
    const quickQuestions = document.querySelectorAll(".quick-btn");
    const recommendationList = document.getElementById("recommendation-list");


    const recommendations = {
        "What Running Races do you recommend?": [
            { name: "Berlin Marathon", distance: "42km", date: "21/09/2025", elevation: "200m" },
            { name: "EDP Lisboa Half Marathon", distance: "21km", date: "09/03/2025", elevation: "100m" },
            { name: "San Silvestre Vallecana Madrid", distance: "10km", date: "31/12/2024", elevation: "695m" }
        ],
        "Which Trail Running Races shouldn't I miss?": [
            { name: "Los Andes Trail", distance: "50km", date: "22/05/2024", elevation: "1200m" },
            { name: "Ultra Trail Mont Blanc", distance: "170km", date: "01/09/2024", elevation: "10,000m" }
        ],
        "Which Trail is the highest in Spain?": [
            { name: "Ultra Sierra Nevada", distance: "100km", date: "14/04/2025", elevation: "3000m" }
        ],
        "What shoes do you recommend me for Trail Races?": [
            { name: "Nike", model: "Pegasus Trail 5.0 GORE-TEX", price: "159,99€" },
            { name: "Adidas", model: "Tracerocker 2.0 GORE-TEX", price: "120,00€" },
        ]
    };

    function addMessage(message, sender = "user") {
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", sender);
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showRecommendations(races) {
        recommendationList.innerHTML = "";
        races.forEach(race => {
            const item = document.createElement("div");
            item.classList.add("recommendation-item");
            let content = `<h3>${race.name}</h3>`;

                if (race.distance) {
                    content += `<p><strong>Distance:</strong> ${race.distance}</p>`;
                }

                if (race.model) {
                    content += `<p><strong>Model:</strong> ${race.model}</p>`;
                }

                if (race.date) {
                    content += `<p><strong>Date:</strong> ${race.date}</p>`;
                }

                if (race.price) {
                    content += `<p><strong>Price:</strong> ${race.price}</p>`;
                }

                if (race.elevation) {
                    content += `<p><strong>Elevation:</strong> ${race.elevation}</p>`;
                }

            item.innerHTML = content;
            recommendationList.appendChild(item);
        });
    }

    function handleQuickQuestion(question) {
        addMessage(question, "user");
        addMessage("You can find our recommendations on the right side of the screen.", "bot");
        const response = recommendations[question] || [];
        showRecommendations(response);
    }

    sendButton.addEventListener("click", () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, "user");
            addMessage("Thank you for your message. We will answer you shortly.", "bot");
            userInput.value = "";
        }
    });

    quickQuestions.forEach(element => {
        element.addEventListener("click", () => {
            const question = element.getAttribute("data-question");
            handleQuickQuestion(question);  
        });
    });
});
