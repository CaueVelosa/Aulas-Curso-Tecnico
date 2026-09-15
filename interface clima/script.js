const botaoBuscar = document.getElementById("buscar");

botaoBuscar.addEventListener("click", buscarClima);

function buscarClima() {

    const cidade = document.getElementById("cidade").value.trim();

    if (cidade === "") {
        alert("Digite o nome de uma cidade.");
        return;
    }

    const chaveApi = "CHAVE_API";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&units=metric&lang=pt_br`;

    fetch(url)

        .then(function(resposta) {

            if (!resposta.ok) {
                throw new Error("Cidade não encontrada.");
            }

            return resposta.json();
        })

        .then(function(dados) {

            console.log(dados);

            document.getElementById("nomeCidade").textContent =
                dados.name;

            document.getElementById("temperatura").textContent =
                dados.main.temp.toFixed(1);

            document.getElementById("clima").textContent =
                dados.weather[0].description;

            document.getElementById("sensacao").textContent =
                dados.main.feels_like.toFixed(1);

            document.getElementById("umidade").textContent =
                dados.main.humidity;

            const ventoKmH = dados.wind.speed * 3.6;

            document.getElementById("vento").textContent =
                ventoKmH.toFixed(1);


            const condicaoPrincipal = dados.weather[0].main; 
            const idClima = dados.weather[0].id;
            let imagemFundo = "desafio/images/imagem-ceu.jpg";

            if (condicaoPrincipal === "Clear") {
                imagemFundo = "desafio/images/imagem-ceu.jpg";
            } else if (condicaoPrincipal === "Rain" || condicaoPrincipal === "Drizzle" || condicaoPrincipal === "Thunderstorm") {
                imagemFundo = "desafio/images/clima-chuvoso.jpg";
            } else if (condicaoPrincipal === "Clouds") {
                if (idClima === 801 || idClima === 802) {
                    imagemFundo = "desafio/images/clima-nublado.jpg";
                } else {
                    imagemFundo = "desafio/images/clima-nublado.jpg";
                }
            }

            document.body.style.backgroundImage = `url('${imagemFundo}')`;
        })


        .catch(function(erro) {

            console.log("Erro:", erro);

            alert("Não foi possível encontrar a cidade.");
        });
}
283d21c020434ac353042ac07013c458
