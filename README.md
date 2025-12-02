# 📦 EAN Barcode Scanner App

A modern React Native application built with Expo SDK 54 that scans EAN barcodes using the device camera with a sleek, neon-styled interface.

## ✨ Features

- 📷 **Real-time barcode scanning** using device camera
- 🔢 **EAN-13 and EAN-8 support** for product barcodes
- 🎨 **Modern UI** with neon-blue theme and dark mode
- 📐 **Visual scan frame** to guide scanning
- 💫 **Smooth animations** and glow effects
- 🔄 **Quick rescan** functionality
- 📱 **Responsive design** adapts to different screen sizes

## 🛠️ Technologies

- **React Native** 0.81.5
- **Expo SDK** 54.0
- **TypeScript** 5.3
- **expo-camera** 17.0 (barcode scanning)
- **React** 19.1

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app (SDK 54)
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

## 🚀 Installation

1. Clone the repository and navigate to the project folder

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

## 🎯 Running the App

1. Start the Expo development server:
```bash
npx expo start
```

Or with tunnel for better connectivity:
```bash
npx expo start --tunnel
```

2. Scan the QR code:
   - **iOS**: Use Camera app → Opens in Expo Go
   - **Android**: Use Expo Go app → Scan QR code

## 📖 Usage Guide

1. **Grant Permissions**: Allow camera access when prompted
2. **Position Barcode**: Point camera at an EAN barcode within the blue frame
3. **View Result**: Scanned number appears at the bottom with neon styling
4. **Scan Again**: Tap the blue "🔄 Scan Again" button for another scan

## 📁 Project Structure

```
Viikkotehtävä 6/
├── src/
│   ├── screens/
│   │   └── BarcodeScannerScreen.tsx    # Main scanner component
│   └── styles/
│       └── AppStyles.ts                # UI styles with neon theme
├── App.tsx                              # Entry point
├── app.json                             # Expo configuration
├── package.json                         # Dependencies
├── tsconfig.json                        # TypeScript config
└── babel.config.js                      # Babel configuration
```

## 🎨 UI Features

- **Dark theme** with black background
- **Neon cyan** (#00E5FF) accent color
- **Glowing effects** on scan results
- **Custom scan frame** for better UX
- **Smooth status transitions**
- **Touch-optimized buttons**

## 🔐 Permissions

Camera permission is required and configured in `app.json`:
- **iOS**: `NSCameraUsageDescription`
- **Android**: `CAMERA` permission

## 📱 Supported Barcode Formats

- **EAN-13**: Standard product barcodes (13 digits)
- **EAN-8**: Shortened product barcodes (8 digits)

## 🐛 Troubleshooting

### App won't start
```bash
# Clear cache and restart
npx expo start --clear
```

### Package version conflicts
```bash
# Reinstall with legacy peer deps
npm install --legacy-peer-deps
```

### "Failed to download remote update"
```bash
# Use tunnel mode for better connectivity
npx expo start --tunnel
```

## 📝 Notes

- Requires physical device with camera (won't work in simulator/emulator)
- Ensure good lighting for optimal scanning
- Keep barcode within the scan frame for best results
