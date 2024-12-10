/*
async function buscarCep() {
    // Pega o elemento com o ID 'cep' e armazena o VALOR dele na variável cep
    const cep = document.getElementById('cep').value;

    // Verifica se o CEP tem 8 caracteres (qualquer CEP tem que ter exatamente 8 números)
    if (cep.length !== 8) {
        alert('CEP inválido. Certifique-se de digitar 8 números.');
        return; // O return serve para parar a função, pois a última coisa que qualquer função faz é dar o retorno
    }

    // Fazendo a requisição para a API ViaCEP, ou seja, busca na API ViaCep as informações do CEP digitado
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET'  // Especifimos que a requisição é do tipo GET, ou seja, para BUSCAR dados
    });

    const data = await response.json(); // Espera a resposta ser convertida para JSON e  armazena dentro da variável data

    // Verificando se a API retornou erro (por exemplo, se digitamos um CEP que não existe ou num formato que o campo não aceita - com ponto e/ou barra)
    if (data.erro) {
        alert('CEP não encontrado!');
    } else {
        // Exibindo os dados no site
        document.getElementById('logradouro').textContent = data.logradouro || 'Não disponível';
        document.getElementById('bairro').textContent = data.bairro || 'Não disponível';
        document.getElementById('cidade').textContent = data.localidade || 'Não disponível';
        document.getElementById('estado').textContent = data.uf || 'Não disponível';

        document.getElementById('resultado').style.display = 'block';
    }
}
    */


async function buscarCep() {
    // Pega o elemento com o ID 'cep' e armazena o valor dele na variável cep
    const cep = document.getElementById('cep').value;

    // Verifica se o CEP tem 8 caracteres (qualquer CEP tem que ter exatamente 8 números)
    if (cep.length !== 8) {
        alert('CEP inválido. Certifique-se de digitar 8 números.');
        return;
    }

    // Fazendo a requisição para a API ViaCEP, ou seja, busca na API ViaCep as informações do CEP digitado
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET'
    });

    const data = await response.json(); // Espera a resposta ser convertida para JSON e armazena dentro da variável data

    // Verificando se a API retornou erro (por exemplo, se digitamos um CEP que não existe ou num formato que o campo não aceita)
    if (data.erro) {
        alert('CEP não encontrado!');
    } else {
        // Exibindo os dados no site
        document.getElementById('logradouro').textContent = data.logradouro || 'Não disponível';
        document.getElementById('bairro').textContent = data.bairro || 'Não disponível';
        document.getElementById('cidade').textContent = data.localidade || 'Não disponível';
        document.getElementById('estado').textContent = data.uf || 'Não disponível';

        // Exibindo a div de resultados
        document.getElementById('resultado').style.display = 'block';

        document.getElementById('map').style.display = 'block';


        // Pegando as coordenadas de latitude e longitude com base no endereço
        const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}, Brazil`;

        // Fazendo a requisição para a API Nominatim do OpenStreetMap para obter as coordenadas
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${endereco}`);
        const geoData = await geoResponse.json();

        // Verificando se as coordenadas foram encontradas
        if (geoData.length > 0) {
            const lat = geoData[0].lat;
            const lon = geoData[0].lon;

            // Inicializando o mapa usando a biblioteca Leaflet
            // O L é um objeto global fornecido pela biblioteca Leaflet. Ele contém todos os métodos e classes necessários para criar e manipular mapas interativos.

            // Cria uma instância de mapa. O argumento 'map' é o ID de um elemento HTML onde o mapa será renderizado. Ou seja, o mapa será exibido no elemento com o ID "map" 

            const map = L.map('map').setView([lat, lon], 13); // 13 é o nível de zoom do mapa

            // Adicionando o tile layer (camada de mapa) do OpenStreetMap
            // L.tileLayer é um método da biblioteca Leaflet usado para adicionar uma camada de azulejos (também conhecidos como "tiles") ao mapa. Azulejos são as pequenas imagens que formam o mapa, como se fossem "pecinhas" que, juntas, formam o mapa completo.

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Adicionando o marcador no mapa
            L.marker([lat, lon]).addTo(map)
                .bindPopup(`Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf} :)`)
                .openPopup();
        } else {
            alert('Não foi possível encontrar o mapa para este endereço.');
        }
    }
}

