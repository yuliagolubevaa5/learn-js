//Получите данные о пользователях GitHub

async function getUsers(names) {
    
    let asks = [];
    
    for (let name of names) {
        let response = fetch(`https://api.github.com/users/${name}`)
            .then (response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return null;
                }
            });

        asks.push(response);
    };
    
    let result = await Promise.all(asks);   
    return result;
}
