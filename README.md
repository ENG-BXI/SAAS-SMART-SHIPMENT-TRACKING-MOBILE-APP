# SAAS Smart Shipment Tracking — Mobile App

A production-ready Expo mobile application for shipment tracking, built with React Native, Expo Router, and multilingual support.

## Overview

This mobile app is part of a logistics platform, focused on delivering package tracking and driver operations through a modern native interface.

The app includes:

- Expo Router-based navigation
- `react-i18next` localization with 10 supported languages
- Dark mode and RTL layout support
- Secure storage for user settings and language preference
- Native settings screen with language selection and about page
- Mobile-friendly tracking UI and shipment status views

## Key features

- **Localization**: English, Arabic, Chinese, Hindi, Spanish, French, Bengali, Portuguese, Russian, Urdu
- **RTL support**: automatic layout direction for Arabic and Urdu
- **Dark mode**: theme switching built into the settings screen
- **About page**: developer information and contact links
- **Secure storage**: selected language persistence via `expo-secure-store`
- **Modern UI**: Tailwind-style UI with NativeWind and custom components

## Requirements

- Node.js 20+ recommended
- Expo CLI installed globally or use `npx expo`
- Android Studio / iOS Simulator for native testing
- Optional: device testing via Expo Development Client

## Setup

```bash
cd mobile-app
npm install
```

## Run locally

```bash
cd mobile-app
npm run start
```

Then choose one of the available targets in the Expo CLI output:

- Android emulator
- iOS simulator
- Web browser
- Expo Go / Development Client

## Useful scripts

```bash
npm run start      # Start Expo development server
npm run android    # Run on Android device or emulator
npm run ios        # Run on iOS simulator
npm run web        # Run web version in browser
npm run lint       # Run Expo linting
```

## Project structure

```text
mobile-app/            
├── assets/            # Images, fonts, icons, and static assets
├── src/               # App source code
│   ├── app/           # Expo Router screens and layouts
│   ├── components/    # Shared UI components
│   ├── features/      # Feature-based screens and components
│   ├── hooks/         # Custom hooks
│   ├── i18n/          # i18n initialization
│   ├── lib/           # Constants and utilities
│   └── locales/       # Translation JSON files
├── package.json       # Expo package config and scripts
└── README.md          # Mobile app documentation
```

## Translation support

The mobile app supports translations for the settings screen, onboarding, shipment flow, and the About page. Language selection is stored securely and applied across the app.

## Developer info

- **Name:** Abdulrhman Muneer Al-Jaidi
- **Role:** Software Engineer (MERN Stack, Next.js, Nest.js, React Native & Expo)
- **Website:** https://abdulrhman-portfolio-code.vercel.app/

## Notes

- Use the `universal-cookie` package only in the web code if needed.
- Keep translation keys consistent in `src/locales/*.json`.
- The app is built with Expo SDK 57 and NativeWind for styling.

## License

This repo is currently public.
