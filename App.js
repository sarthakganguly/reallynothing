import React from 'react';
import { View, Button } from 'react-native';

const App = () => {
  const handleButtonPress = () => {
    // Do nothing
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Click me" onPress={handleButtonPress} />
    </View>
  );
};

export default App;
