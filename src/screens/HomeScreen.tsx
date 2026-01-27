import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useCounterStore } from '../store/counterStore';
import { CounterButton } from '../components/CounterButton';
import { theme } from '../constants/theme';

export default function HomeScreen() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterLabel}>Counter</Text>
          <Text style={styles.counterValue}>{count}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <CounterButton
            title="+"
            onPress={increment}
            variant="primary"
          />
          
          <CounterButton
            title="−"
            onPress={decrement}
            variant="secondary"
          />
          
          <CounterButton
            title="Reset"
            onPress={reset}
            variant="danger"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl * 2,
  },
  counterLabel: {
    fontSize: 24,
    fontWeight: '300',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  counterValue: {
    fontSize: 72,
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});