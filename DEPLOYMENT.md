# 🚀 Instrukcja deploymentu - El Instal

## Krok 1: Push na GitHub

```bash
cd el-instal

# Inicjalizacja git (jeśli jeszcze nie)
git init

# Dodanie wszystkich plików
git add .

# Pierwszy commit
git commit -m "Initial commit: El Instal website"

# Dodanie remote (zastąp [username] swoim username)
git remote add origin https://github.com/absyntvr-blip/el-instal.git

# Push na GitHub
git branch -M main
git push -u origin main
```

**Alternatywnie przez GitHub CLI:**
```bash
gh repo create el-instal --public --source=. --remote=origin
git push -u origin main
```

## Krok 2: Deployment na Vercel

### Opcja A: Przez Vercel Dashboard

1. Przejdź na [vercel.com](https://vercel.com)
2. Zaloguj się (możesz użyć konta GitHub)
3. Kliknij **"Add New Project"**
4. Wybierz repozytorium `el-instal` z listy
5. Vercel automatycznie wykryje Next.js
6. Ustawienia (powinny być automatyczne):
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
7. Kliknij **"Deploy"**

### Opcja B: Przez Vercel CLI

```bash
# Instalacja Vercel CLI (jeśli nie masz)
npm i -g vercel

# Login
vercel login

# Deploy
cd el-instal
vercel

# Production deploy
vercel --prod
```

## Krok 3: Konfiguracja domeny (opcjonalnie)

1. W Vercel Dashboard przejdź do ustawień projektu
2. Kliknij **"Domains"**
3. Dodaj swoją domenę (np. `el-instal.pl`)
4. Skonfiguruj DNS zgodnie z instrukcjami Vercel

## ⚙️ Konfiguracja formularza kontaktowego

Formularz kontaktowy obecnie symuluje wysyłkę. Aby działał prawdziwie, możesz:

### Opcja 1: API Route w Next.js

Utwórz plik `app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Tutaj dodaj logikę wysyłki email (np. przez Resend, SendGrid, etc.)
  // Przykład z Resend:
  // await resend.emails.send({ ... });
  
  return NextResponse.json({ success: true });
}
```

### Opcja 2: FormSpree

1. Zarejestruj się na [formspree.io](https://formspree.io)
2. Utwórz nowy formularz
3. Skopiuj endpoint URL
4. Zaktualizuj `components/Contact.tsx` - zmień `handleSubmit` aby wysyłał do FormSpree

### Opcja 3: EmailJS

1. Zarejestruj się na [emailjs.com](https://www.emailjs.com)
2. Skonfiguruj serwis email
3. Zainstaluj: `npm install @emailjs/browser`
4. Zaktualizuj `components/Contact.tsx`

## 📝 Zmiany do wprowadzenia przed produkcją

- [ ] Zaktualizuj numer telefonu w `components/Contact.tsx`
- [ ] Zaktualizuj email w `components/Contact.tsx`
- [ ] Dodaj prawdziwe imię i nazwisko w `components/Contact.tsx`
- [ ] Skonfiguruj formularz kontaktowy (patrz wyżej)
- [ ] Dodaj prawdziwe logotypy partnerów w `components/Technologies.tsx` (opcjonalnie)
- [ ] Zaktualizuj meta tags w `app/layout.tsx` jeśli potrzebujesz SEO

## ✅ Checklist przed deploymentem

- [x] Projekt kompiluje się bez błędów
- [x] Wszystkie komponenty są responsywne
- [x] Animacje działają płynnie
- [ ] Formularz kontaktowy działa (wymaga konfiguracji)
- [ ] Wszystkie linki działają
- [ ] Testy na różnych urządzeniach (mobile, tablet, desktop)

## 🎉 Gotowe!

Po deploymentzie strona będzie dostępna pod adresem:
`https://el-instal.vercel.app` (lub twoja domena)

---

**Uwaga:** Projekt wymaga Node.js >= 20.9.0 do buildowania, ale Vercel automatycznie używa odpowiedniej wersji.
