import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import AppStack from './AppStack';
import AuthProvider from './src/context/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <AppStack />
    </AuthProvider>
  );
}
