# FURIA Chat
O FURIA Chat é uma aplicação interativa desenvolvida com React, TypeScript e Vite, que simula uma experiência de conversa com um assistente virtual apaixonado pelo time de esports FURIA. O assistente responde perguntas sobre o time, fornece informações, cria quizzes e interage de forma vibrante e temática. Você pode acessa-lo em https://furiachat.netlify.app/ ou fazer o setup da aplicação localmente na seção Setup deste documento.

# Tecnologias Utilizadas
- React: Biblioteca para construção de interfaces de usuário.
- TypeScript: Superset do JavaScript que adiciona tipagem estática.
- Vite: Ferramenta de build rápida para desenvolvimento web.
- TailwindCSS: Framework CSS para estilização.
- Lucide React: Ícones SVG para React.
- Motion: Biblioteca para animações.
- Google GenAI: API para geração de respostas inteligentes.

# Estrutura do projeto
```
experiencia-conversacional-furia/
├── public/                # Arquivos estáticos
├── src/                   # Código-fonte
│   ├── assets/            # Imagens e outros recursos
│   ├── components/        # Componentes React
│   ├── context/           # Context API para gerenciamento de estado
│   ├── hooks/             # Hooks personalizados
│   ├── styles/            # Estilos globais
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada da aplicação
│   └── IA.ts              # Integração com a API de IA
├── .env                   # Variáveis de ambiente
├── package.json           # Dependências e scripts
├── tailwind.config.js     # Configuração do TailwindCSS
├── tsconfig.json          # Configuração do TypeScript
└── vite.config.ts         # Configuração do Vite
```

# Funcionalidades
- Envio de mensagens: O usuário pode enviar mensagens para o assistente.
- Respostas temáticas: O assistente responde com entusiasmo e informações sobre o time FURIA.
- Quizzes interativos: O assistente pode criar quizzes sobre o time.
- Scroll automático: O chat rola automaticamente para a última mensagem.
- Responsividade: Layout adaptado para dispositivos móveis e desktops.

# Setup
1. Clone o respositório
```
git clone https://github.com/seu-usuario/experiencia-conversacional-furia.git
cd experiencia-conversacional-furia
```

2. Instale as dependências
```
git clone https://github.com/seu-usuario/experiencia-conversacional-furia.git
cd experiencia-conversacional-furia
```

3. Solicite uma API Key do Google Gemini (crie um projeto no Google Cloud Console e depois gere uma key seguindo as instruções deste link https://ai.google.dev/gemini-api/docs/api-key?hl=pt-br

4. Crie e configure um arquivo .env com a variável de ambiente abaixo 
```
VITE_API_KEY="SUA_CHAVE_API"
```

5. Inicie o servidor de desenvolvimento
```
npm run dev
```

Desenvolvido por Gustavo Viana de Souza para FURIA Tech
