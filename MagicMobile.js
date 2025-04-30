/**
 * MagicMobile.js
 * Biblioteca para transformação automática de páginas web para mobile
 * Com estilo inspirado na Apple e utilizando Tailwind CSS 4
 * 
 * Uso:
 * 1. Inclua o script do Tailwind CSS 4 Browser
 * 2. Inclua esta biblioteca
 * 3. Chame MagicMobile.transform() para transformar a página
 */

(function(global) {
    'use strict';
  
    // Verifica se Tailwind CSS está disponível
    function ensureTailwind() {
      return new Promise((resolve, reject) => {
        if (document.querySelector('script[src*="tailwindcss/browser"]')) {
          resolve();
          return;
        }
        
        const tailwindScript = document.createElement('script');
        tailwindScript.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4';
        tailwindScript.onload = resolve;
        tailwindScript.onerror = () => reject(new Error('Não foi possível carregar o Tailwind CSS'));
        document.head.appendChild(tailwindScript);
      });
    }
  
    // Classe principal
    class MagicMobile {
      static async transform(options = {}) {
        try {
          // Carrega Tailwind CSS se não estiver presente
          await ensureTailwind();
          
          // Configurações padrão
          const config = {
            appleStyle: true,
            fixNavigation: true,
            optimizeImages: true,
            adjustFonts: true,
            darkMode: false,
            ...options
          };
  
          // Aplica as transformações
          this.addViewport();
          this.makeResponsive();
          
          if (config.appleStyle) {
            this.applyAppleStyle();
          }
          
          if (config.fixNavigation) {
            this.transformNavigation();
          }
          
          if (config.optimizeImages) {
            this.optimizeImages();
          }
          
          if (config.adjustFonts) {
            this.adjustFonts();
          }
          
          if (config.darkMode) {
            this.enableDarkMode();
          }
          
          // Adiciona eventos para interatividade
          this.setupEvents();
          
          console.log('🪄 MagicMobile: Transformação concluída!');
          return true;
        } catch (error) {
          console.error('MagicMobile error:', error);
          return false;
        }
      }
  
      // Adiciona meta viewport se não existir
      static addViewport() {
        if (!document.querySelector('meta[name="viewport"]')) {
          const meta = document.createElement('meta');
          meta.name = 'viewport';
          meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
          document.head.appendChild(meta);
        }
      }
  
      // Aplica classes responsivas aos elementos principais
      static makeResponsive() {
        // Aplica ao body
        document.body.classList.add('w-full', 'overflow-x-hidden');
        
        // Container principal
        const mainContainer = document.querySelector('main') || document.querySelector('.container') || document.querySelector('#content');
        if (mainContainer) {
          mainContainer.classList.add('w-full', 'px-4', 'mx-auto', 'max-w-screen-lg');
        }
        
        // Busca tabelas e as torna responsivas
        document.querySelectorAll('table').forEach(table => {
          const wrapper = document.createElement('div');
          wrapper.classList.add('overflow-x-auto', 'w-full', 'my-4');
          table.parentNode.insertBefore(wrapper, table);
          wrapper.appendChild(table);
          table.classList.add('w-full', 'text-sm');
        });
        
        // Ajusta forms
        document.querySelectorAll('form').forEach(form => {
          form.classList.add('w-full', 'flex', 'flex-col', 'gap-4');
          
          // Ajusta inputs
          form.querySelectorAll('input, select, textarea').forEach(input => {
            if (input.type !== 'checkbox' && input.type !== 'radio') {
              input.classList.add('w-full', 'p-2', 'border', 'rounded-lg');
            }
          });
        });
        
        // Adiciona media queries para classes responsivas
        this.addResponsiveStyles();
      }
  
      // Adiciona media queries para classes responsivas
      static addResponsiveStyles() {
        const responsiveStyle = document.createElement('style');
        responsiveStyle.setAttribute('type', 'text/tailwindcss');
        responsiveStyle.textContent = `
          @layer utilities {
            @media (max-width: 768px) {
              .mm-desktop-only { display: none !important; }
              .mm-flex-col-mobile { flex-direction: column !important; }
              .mm-full-width-mobile { width: 100% !important; }
              .mm-text-center-mobile { text-align: center !important; }
              .mm-my-2-mobile { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
              .mm-px-4-mobile { padding-left: 1rem !important; padding-right: 1rem !important; }
            }
          }
        `;
        document.head.appendChild(responsiveStyle);
        
        // Aplica classes personalizadas
        document.querySelectorAll('.row, .flex, [class*="d-flex"]').forEach(el => {
          el.classList.add('mm-flex-col-mobile');
        });
        
        document.querySelectorAll('[class*="col-"], [class*="w-"], .card').forEach(el => {
          el.classList.add('mm-full-width-mobile');
        });
      }
  
      // Aplica estilo inspirado na Apple
      static applyAppleStyle() {
        // Aplica estilo para trabalhar com Tailwind CSS 4 Browser
        const tailwindStyle = document.createElement('style');
        tailwindStyle.setAttribute('type', 'text/tailwindcss');
        tailwindStyle.textContent = `
          @theme {
            --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            --color-background: #f9fafb;
            --color-blue-500: #3b82f6;
            --color-blue-600: #2563eb;
          }
          
          @layer base {
            body {
              font-family: var(--font-family-sans);
              background-color: var(--color-background);
            }
            
            button, .btn, [type="button"], [type="submit"] {
              @apply rounded-lg px-4 py-2 font-medium transition duration-200 ease-in-out;
              @apply bg-blue-500 text-white hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400;
            }
            
            input, select, textarea {
              @apply rounded-lg border border-neutral-300 px-4 py-2 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:outline-none;
            }
            
            h1, h2, h3, h4, h5, h6 {
              @apply font-medium leading-tight;
            }
          }
        `;
        document.head.appendChild(tailwindStyle);
        document.head.appendChild(fontStyle);
        
        // Aplica classes do Tailwind para elementos comuns
        document.querySelectorAll('button, .btn, [type="button"], [type="submit"]').forEach(button => {
          button.classList.add('rounded-lg', 'px-4', 'py-2', 'font-medium', 'bg-blue-500', 'text-white', 'hover:bg-blue-600');
        });
        
        // Cards com estilo Apple
        document.querySelectorAll('.card, [class*="card"]').forEach(card => {
          card.classList.add('bg-white', 'rounded-xl', 'shadow', 'overflow-hidden', 'border', 'border-neutral-100');
        });
        
        // Headers
        const header = document.querySelector('header') || document.querySelector('nav:first-child');
        if (header) {
          header.classList.add('sticky', 'top-0', 'z-50', 'bg-white', 'backdrop-blur-lg', 'bg-opacity-70', 'border-b', 'border-neutral-200');
        }
      }
  
      // Transforma a navegação para estilo mobile
      static transformNavigation() {
        const nav = document.querySelector('nav') || document.querySelector('header');
        if (!nav) return;
        
        // Verifica se já existe um menu mobile
        if (nav.querySelector('.mm-mobile-menu')) return;
        
        // Salva os links originais
        const navLinks = Array.from(nav.querySelectorAll('a:not([class*="logo"])'));
        
        // Se tiver mais de 3 links, cria um menu hambúrguer
        if (navLinks.length > 3) {
          // Cria o botão de menu
          const menuButton = document.createElement('button');
          menuButton.classList.add('mm-menu-button', 'lg:hidden', 'p-2');
          menuButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          `;
          
          // Cria o container do menu mobile
          const mobileMenu = document.createElement('div');
          mobileMenu.classList.add('mm-mobile-menu', 'hidden', 'fixed', 'inset-0', 'bg-white', 'z-50', 'flex', 'flex-col', 'p-4');
          
          // Adiciona o botão de fechar
          const closeButton = document.createElement('button');
          closeButton.classList.add('self-end', 'p-2');
          closeButton.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          `;
          
          // Adiciona os links para o menu mobile
          const linkContainer = document.createElement('div');
          linkContainer.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'flex-1', 'gap-4');
          
          navLinks.forEach(link => {
            const newLink = link.cloneNode(true);
            newLink.classList.add('text-xl', 'py-2', 'px-4', 'w-full', 'text-center');
            linkContainer.appendChild(newLink);
          });
          
          mobileMenu.appendChild(closeButton);
          mobileMenu.appendChild(linkContainer);
          document.body.appendChild(mobileMenu);
          
          // Insere o botão de menu na navegação
          nav.appendChild(menuButton);
          
          // Adiciona os eventos
          menuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
          });
          
          closeButton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
          });
          
          // Esconde os links originais em telas pequenas
          navLinks.forEach(link => {
            link.classList.add('hidden', 'lg:inline-block');
          });
        }
      }
  
      // Otimiza imagens para mobile
      static optimizeImages() {
        document.querySelectorAll('img').forEach(img => {
          // Adiciona classes para responsividade
          img.classList.add('max-w-full', 'h-auto');
          
          // Adiciona lazy loading
          img.loading = 'lazy';
          
          // Se não tiver srcset, adiciona sizes para browsers modernos
          if (!img.srcset && img.src) {
            img.sizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
          }
        });
      }
  
      // Ajusta fontes para melhor legibilidade
      static adjustFonts() {
        const fontStyle = document.createElement('style');
        fontStyle.setAttribute('type', 'text/tailwindcss');
        fontStyle.textContent = `
          @layer utilities {
            @media (max-width: 768px) {
              body {
                font-size: 16px !important;
                line-height: 1.5 !important;
              }
              h1 { font-size: 1.8rem !important; }
              h2 { font-size: 1.5rem !important; }
              h3 { font-size: 1.3rem !important; }
              .mm-small-mobile { font-size: 0.875rem !important; }
            }
          }
        `;
        document.head.appendChild(fontStyle);
        
        // Procura textos muito pequenos e ajusta
        document.querySelectorAll('p, span, div').forEach(el => {
          const style = window.getComputedStyle(el);
          const fontSize = parseFloat(style.fontSize);
          if (fontSize < 12) {
            el.classList.add('mm-small-mobile');
          }
        });
      }
  
      // Habilita modo escuro
      static enableDarkMode() {
        const darkStyle = document.createElement('style');
        darkStyle.textContent = `
          @media (prefers-color-scheme: dark) {
            body {
              @apply bg-neutral-900 text-neutral-100;
            }
            .mm-dark-mode {
              @apply bg-neutral-900 text-neutral-100;
            }
            .mm-card-dark {
              @apply bg-neutral-800 border-neutral-700;
            }
            .mm-border-dark {
              @apply border-neutral-700;
            }
          }
        `;
        document.head.appendChild(darkStyle);
        
        // Adiciona listener para mudanças de scheme
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const updateDarkMode = () => {
          if (darkModeMediaQuery.matches) {
            document.documentElement.classList.add('mm-dark-mode');
            document.querySelectorAll('.card, [class*="card"]').forEach(card => {
              card.classList.add('mm-card-dark');
            });
            document.querySelectorAll('[class*="border"]').forEach(el => {
              el.classList.add('mm-border-dark');
            });
          } else {
            document.documentElement.classList.remove('mm-dark-mode');
            document.querySelectorAll('.card, [class*="card"]').forEach(card => {
              card.classList.remove('mm-card-dark');
            });
            document.querySelectorAll('[class*="border"]').forEach(el => {
              el.classList.remove('mm-border-dark');
            });
          }
        };
        
        darkModeMediaQuery.addEventListener('change', updateDarkMode);
        updateDarkMode();
      }
  
      // Configuração de eventos de interação
      static setupEvents() {
        // Melhora a experiência de toque
        document.querySelectorAll('a, button, [role="button"], input[type="submit"]').forEach(el => {
          el.addEventListener('touchstart', function() {
            this.classList.add('mm-active');
          });
          
          el.addEventListener('touchend', function() {
            this.classList.remove('mm-active');
          });
        });
        
        // Detector de scroll para header
        const header = document.querySelector('header') || document.querySelector('nav:first-child');
        if (header) {
          let lastScrollTop = 0;
          window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
              // Scroll para baixo - esconde o header
              header.style.transform = 'translateY(-100%)';
            } else {
              // Scroll para cima - mostra o header
              header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
          });
        }
        
        // Adiciona "Pull to refresh" - apenas visual
        const refreshIndicator = document.createElement('div');
        refreshIndicator.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'flex', 'justify-center', 'items-center', 'pointer-events-none', 'opacity-0', 'transition-opacity');
        refreshIndicator.innerHTML = `
          <div class="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
            <svg class="w-6 h-6 text-blue-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
        `;
        document.body.appendChild(refreshIndicator);
      }
    }
  
    // Expõe a biblioteca globalmente
    global.MagicMobile = MagicMobile;
  
  })(typeof window !== 'undefined' ? window : this);