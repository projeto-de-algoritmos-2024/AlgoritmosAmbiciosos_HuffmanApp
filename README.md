# Projeto Huffman Encoder

## Informações do Aluno
| Matrícula  | Nome           |
|------------|----------------|
| 170140717 | Eduarda Rodrigues Tavares |
| 211030747 | Filipe Carvalho da Silva  |

---

## Sobre o Projeto
Este projeto implementa o **Algoritmo de Huffman**, que é amplamente utilizado para compressão de dados sem perdas. A aplicação permite visualizar o processo de codificação de um texto em binário usando a Árvore de Huffman, além de exibir os códigos gerados para cada caractere.

### Funcionalidades
- **Cálculo da Frequência de Caracteres**: Analisa o texto de entrada e calcula a frequência de cada caractere.
- **Construção da Árvore de Huffman**: Constrói a árvore binária com base na frequência dos caracteres.
- **Geração de Códigos de Huffman**: Cria um mapa de códigos binários para cada caractere.
- **Codificação do Texto**: Gera a versão codificada do texto original usando os códigos de Huffman.
- **Visualização da Árvore de Huffman**: Apresenta a árvore gerada de forma hierárquica.
- **Exibição dos Códigos**: Mostra os códigos binários associados a cada caractere.

---

## Como Executar o Projeto

### Pré-requisitos
Para executar o projeto, você precisa ter instalado:
- Node.js (versão 14 ou superior)
- NPM (geralmente incluído com o Node.js)
- React (a biblioteca é instalada automaticamente com o projeto)

### Passo a Passo para Execução

1. Clonar o Repositório:
   - Com o terminal aberto, clone o repositório do projeto com o comando:
      ```bash
      git clone https://github.com/projeto-de-algoritmos-2024/Huffman-Encoder.git
      ```
   - Navegue até a pasta do projeto com:
      ```bash
      cd Huffman-Encoder
      ```

2. Instalar Dependências:
   - No diretório do projeto, execute o comando para instalar as dependências:
      ```bash
      npm install
      ```

3. Iniciar o Projeto:
   - No diretório do projeto, execute o comando para iniciar o servidor de desenvolvimento:
      ```bash
      npm start
      ```
   - O projeto será iniciado em `http://localhost:3000`.

---

### Como Usar a Aplicação

1. **Inserir Texto**:
   - No campo de entrada, digite o texto que deseja codificar.
   - Clique no botão **"Criptografar"** para iniciar o processo.

2. **Verificar Resultado**:
   - O texto codificado será exibido na tela.
   - A árvore de Huffman gerada será exibida de forma hierárquica.
   - Uma lista com os códigos de Huffman para cada caractere será apresentada.

3. **Inserir Novo Texto**:
   - Para testar outro texto, basta inserir o novo texto no campo e clicar em **"Criptografar"** novamente.

---

## Tecnologias Utilizadas
- **React**: para a interface interativa e a implementação do algoritmo de Huffman.

---

## Considerações
Este projeto ilustra de maneira prática como o **Algoritmo de Huffman** é utilizado para compressão de dados. Com uma interface interativa, ele conecta teoria e prática, tornando mais fácil entender o funcionamento do algoritmo.

---

## Demonstração em Vídeo
Para mais detalhes, assista à [demonstração em vídeo do projeto](https://youtu.be/Crxt_k_suK8).
