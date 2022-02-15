# WeatherForecast

![light-1](https://user-images.githubusercontent.com/76439397/153962760-284f9aa7-f876-4f17-a03c-94dc21f2c44f.jpg)
![dark-2](https://user-images.githubusercontent.com/76439397/153962850-3b0ca99d-dc50-49c2-acb8-a20f157c0737.jpg)
![dark-3](https://user-images.githubusercontent.com/76439397/153962860-9cd14263-b4e7-4232-b0db-3a055fd903b9.jpg)
![light-4](https://user-images.githubusercontent.com/76439397/153962867-1aeb57fd-4502-410f-95cf-81f389f635f3.jpg)

# Demonstração do projeto

https://user-images.githubusercontent.com/76439397/153962944-d5a11d29-2c4a-4ded-af48-a580bd6af3d9.mp4

# Projeto

Este projeto consiste em um aplicativo onde é apresentado para o usuário informações meteorológicas de sua localização atual. O aplicativo também pode apresentar ao usuário informações meteorológicas de uma determinada cidade e a previsão do tempo de sua localização atual nos próximos dias. Neste aplicativo foram utilizados conceitos como styled-components, criação de hooks para centralizar informações de estados, utilização de informações fornecidas por uma API e utilização do lottie.

IMPORTANTE: O expo pede ao usuário a permissão de acessar a localização atual do usuário. Para o bom funcionamento do aplicativo é necessário aceitar o pedido do expo.

- site da API: https://openweathermap.org/

# Funcionalidades

- Usuário recebe informações meteorológicas de sua localização atual;
- Usuário pode procurar por informações meteorológicas de uma cidade que ele digitou;
- Usuário pode receber a previsão do tempo dos próximos dias de sua localização atual;
- Usuário pode mudar a cor do aplicativo nas configurações apertando no botão do “modo noturno”;

# QR CODE:

IMPORTANTE: é necessário ter o aplicativo do expo para testar o projeto:

![qrcode](https://user-images.githubusercontent.com/76439397/153963082-61f69188-ca9f-4bf0-bee8-6945f3f9dab1.png)

# Tecnologias

- React Native;
- Typescript;
- expo;
- React navigation;
- axios;
- lottie;
- styled-components;
- useContext;
- hooks;
- e outras tecnologias.

# Executando o projeto

Após realizar o download do projeto é necessário ir no site https://openweathermap.org/ e conseguir uma chave de API. Em seguida dirija-se ao arquivo “.env.example”. Tire do nome do arquivo o “.example” e coloque a sua chave de API no arquivo. Depois execute o arquivo utilizando o expo. Dentro do arquivo aceite o pedido do expo de acessar as informações de localização atual do usuário e com isso o aplicativo deve estar funcionando normalmente.

IMPORTANTE: Se você está utilizando um emulador para executar o aplicativo eu sugiro acessar as documentações do expo para auxiliá-lo em permitir a localização do emulador: https://docs.expo.dev/versions/latest/sdk/location/#enabling-emulator-location  
