import 'react-native-gesture-handler'

import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import Navigation from './src/navigators/Navigation';

export default function App() {
  console.log('Arranque de Sistema...');
  return (
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
  )
}