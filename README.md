# BioMedCells
Aplicativo que permite a simulação da contagem de células fora do laboratório, além de oferecer funcionalidades como um atlas de células, contagem interativa de células e revisão de laudos. Os alunos podem comparar seus resultados com os de profissionais, facilitando o treinamento prático e aprimorando suas habilidades em hematologia.

## Tecnologia
- Desenvolvido com a linguagem de programação typescript utilizando a biblioteca React Native.
- Utiliza a API [backend_biomedcells](https://github.com/RoboticaCesmac/backend_biomedcells) para ler os conteúdos e salvar.

## Como instalar
- Instale o NodeJS<br/>

- Instale as dependências com o comando "npm install"<br/>

- Crie um arquivo .env na pasta raíz do projeto e adicione a URL da API ao arquivo, como no exemplo abaixo:
```
EXPO_PUBLIC_API_URL = http://ip/BioMedCellsAdmin
```

- Utilize "npx expo start" para iniciar o aplicativo no modo desenvolvimento.

## Autores
- Milton Althayde (Aluno de Biomedicina, autor da ideia) <br/>
- Arthur Kenzo (Aluno de Sistemas de Informação, desenvolvedor) <br/>
- Carlos Alberto (Professor de Sistemas de Informação, orientador do Arthur) <br/>
- Carlos André (Professor de Biomedicina, orientador do Milton)