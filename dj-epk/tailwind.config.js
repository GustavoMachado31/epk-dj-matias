/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // A sua fonte local para o logo
        'logo': ['FonteDoMatias', 'sans-serif'],
        // A fonte Dark que desceu para a frase
        'gothic': ['UnifrakturMaguntia', 'cursive'],
        // Fonte para textos longos
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Oswald', 'sans-serif'],
      },
      colors: {
        // Preto absoluto e tons de carvão texturizados
        background: "#000000",
        'background-alt': "#0A0A0A", // Um cinza quase preto
        foreground: "#EEEEEE",
        
        // O Vermelho Quente/Chama
        primary: {
          DEFAULT: "#D32F2F", // Vermelho Crimson
          foreground: "#FFFFFF",
          'glow': "#FF1744", // Vermelho brilhante para efeitos
        },
        
        // Cores de suporte sombrias
        card: "#111111",
        border: "#222222",
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#A0A0A0",
        },
      },

      keyframes: {
        'smoke-y': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.1' },
          '50%': { transform: 'translateY(-50px) scale(1.1)', opacity: '0.3' },
        },
        'smoke-x': {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)', opacity: '0.1' },
          '50%': { transform: 'translateX(60px) rotate(5deg)', opacity: '0.2' },
        }
      },
      animation: {
        'smoke-slow': 'smoke-y 15s ease-in-out infinite',
        'smoke-drift': 'smoke-x 20s ease-in-out infinite alternate',
      },
      // Efeito de brilho vermelho (Text Shadow)
      textShadow: {
        'glow-red': '0 0 10px rgba(255, 23, 68, 0.7)',
      },
    },
  },
  plugins: [
    // Plugin simples para text-shadow (necessário instalar: npm install -D tailwindcss-textshadow)
    require('tailwindcss-textshadow'),
  ],
}