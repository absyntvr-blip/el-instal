# El Instal - Strona wizytówkowa

Nowoczesna strona wizytówkowa dla firmy El Instal - instalacje elektryczne i teletechniczne.

## 🚀 Technologie

- **Next.js 16** - Framework React
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Stylowanie
- **Framer Motion** - Animacje
- **Lucide React** - Ikony

## 📦 Instalacja

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Struktura projektu

```
/app
  /page.tsx          # Główna strona
  /layout.tsx        # Layout aplikacji
  /globals.css       # Globalne style
/components
  /Hero.tsx          # Sekcja hero
  /About.tsx         # O nas
  /Services.tsx      # Usługi
  /Process.tsx       # Proces pracy
  /Technologies.tsx  # Technologie
  /Contact.tsx       # Kontakt
  /Navigation.tsx    # Nawigacja
  /Footer.tsx        # Stopka
  /AnimatedBackground.tsx # Animowane tło
```

## 🎨 Kolory

- **Tło:** `#0A0A0A` (głęboka czerń)
- **Akcent:** `#00D9FF` (elektryczny niebieski)
- **Szary:** `#2A2A2A` (cynkowa szarość)
- **Ostrzeżenie:** `#FF6B00` (pomarańczowy)

## 🚀 Deployment

### GitHub

```bash
git init
git add .
git commit -m "Initial commit: El Instal website"
git remote add origin https://github.com/[username]/el-instal.git
git push -u origin main
```

### Vercel

1. Połącz repozytorium GitHub z Vercel
2. Framework Preset: Next.js
3. Build Command: `npm run build`
4. Output Directory: `.next`
5. Deploy!

## 📝 Notatki

- Formularz kontaktowy wymaga konfiguracji backendu (np. API Route w Next.js lub FormSpree)
- Animowane tło może wpływać na wydajność na starszych urządzeniach
- Wszystkie animacje są zoptymalizowane pod kątem 60fps
