import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from '../styles/AppStyles';

export default function BarcodeScannerScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [barcodeData, setBarcodeData] = useState<string>('');

  if (!permission) {
    // Camera permissions are still loading
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={styles.message}>📷 We need camera permission to scan barcodes</Text>
        <TouchableOpacity style={styles.scanButton} onPress={requestPermission}>
          <Text style={styles.scanButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarcodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    setBarcodeData(data);
  };

  const resetScanner = () => {
    setScanned(false);
    setBarcodeData('');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <CameraView
        style={styles.camera}
        facing={facing}
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['ean13', 'ean8'],
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>📦 Barcode Scanner</Text>
            <Text style={styles.instructionText}>
              {scanned ? '✓ Barcode detected!' : 'Point at an EAN barcode'}
            </Text>
          </View>

          {!scanned && <View style={styles.scanFrame} />}

          {barcodeData ? (
            <View style={styles.resultContainer}>
              <Text style={styles.resultLabel}>Scanned Code</Text>
              <Text style={styles.resultText}>{barcodeData}</Text>
            </View>
          ) : null}
        </View>
      </CameraView>
      
      {scanned && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.scanButton} onPress={resetScanner}>
            <Text style={styles.scanButtonText}>🔄 Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
