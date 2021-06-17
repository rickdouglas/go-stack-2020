import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
});

export default api;

/**
 * Como preencher a base Url:
 * iOS com Emulador : localhost mais a porta que ta sendo executada o projeto
 * iOS com dispositivo físico utiliza-se o ip fisico da maquina que esta rodando o servidor
 * ao inves de localhost.
 * Android com Emulador: (adv reverse tcp:3333 tcp:3333) - redireciona a porta do dispositivo para o emulador
 * e depois usa localhost normal.
 * Android com Emulador: IP especifico para o emulador do android 10.0.2.2 (Android Studio)
 * Android com dispositivo fisico - ip da maquina que ta rodando o servidor
 * 
 */
