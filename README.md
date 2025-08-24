# 🦦 Capivara App

Uma aplicação web educativa e interativa sobre a capivara, o maior roedor do mundo. Este projeto oferece uma experiência rica em informações sobre a biologia, habitat, conservação e curiosidades deste fascinante animal sul-americano.

## ✨ Funcionalidades

- **Seção Hero**: Apresentação visual impactante com imagem da capivara em seu habitat natural
- **Taxonomia**: Informações científicas sobre a classificação da espécie
- **Geografia**: Distribuição geográfica e habitats da capivara
- **Biologia**: Características físicas, comportamento e ciclo de vida
- **Conservação**: Status de conservação e esforços de proteção
- **Curiosidades**: Fatos interessantes e pouco conhecidos
- **Galeria de Fotos**: Imagens em alta qualidade da capivara
- **Design Responsivo**: Interface adaptável para todos os dispositivos
- **Tema Escuro/Claro**: Suporte a diferentes temas visuais

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19, TypeScript
- **Estilização**: Tailwind CSS 4, CSS Modules
- **Componentes UI**: Radix UI, shadcn/ui
- **Formulários**: React Hook Form, Zod
- **Animações**: Tailwind CSS Animate, Framer Motion
- **Ícones**: Lucide React
- **Gerenciamento de Estado**: React Hooks
- **Build Tool**: Next.js App Router

## 📋 Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm
- Git

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/victimnn/capivara-app.git
   cd capivara-app
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
capivara-app/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   ├── ui/                # Componentes de UI reutilizáveis
│   ├── biology-section.tsx
│   ├── conservation-section.tsx
│   ├── curiosities-section.tsx
│   ├── footer.tsx
│   ├── geography-section.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── photo-gallery.tsx
│   └── taxonomy-section.tsx
├── hooks/                  # Custom hooks
├── lib/                    # Utilitários e configurações
├── public/                 # Arquivos estáticos e imagens
└── styles/                 # Estilos adicionais
```

## 🎨 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento
- `pnpm build` - Gera a build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa a verificação de código

## 🌟 Características do Design

- **Interface Moderna**: Design limpo e intuitivo
- **Paleta de Cores**: Tons de verde que remetem ao habitat natural da capivara
- **Tipografia**: Hierarquia visual clara e legível
- **Animações**: Transições suaves e interações responsivas
- **Acessibilidade**: Componentes acessíveis seguindo padrões WCAG

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- Desktops e laptops
- Tablets
- Smartphones
- Diferentes orientações de tela

## 🔧 Personalização

O projeto utiliza:
- **Tailwind CSS** para estilização rápida e consistente
- **CSS Variables** para temas personalizáveis
- **Componentes modulares** para fácil manutenção
- **TypeScript** para desenvolvimento seguro e escalável

## 📚 Recursos Educativos

- Informações científicas precisas sobre a capivara
- Imagens de alta qualidade do animal em seu habitat
- Dados sobre conservação e biodiversidade
- Conteúdo adaptado para diferentes públicos

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Projeto**: [Capivara App](https://github.com/victimnn/capivara-app)
- **Issues**: [GitHub Issues](https://github.com/victimnn/capivara-app/issues)

## 🙏 Agradecimentos

- Comunidade Next.js
- Equipe do Tailwind CSS
- Contribuidores do shadcn/ui
- Todos que apoiam a conservação da biodiversidade

---

**Desenvolvido com ❤️ para educar sobre a incrível capivara e promover a conservação da biodiversidade sul-americana.**

