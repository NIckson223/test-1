function sendMessage(event) {
    event.preventDefault();
    getData();
}

async function getData() {
    let userData = document.querySelector('.input').value.trim();
    if(userData == "") return false;

    let API = "sk-proj-FEOLCmOpG4PLMrdDyO5mT3BlbkFJOOhs7FNcBkpiivAITSLi"

    try {
        let response = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: userData}],
                max_tokens: 500
            })
        })

        let data = await response.json();
        console.log(data)
    } catch(error) {
        console.log("Error: ", error)
    }
}
