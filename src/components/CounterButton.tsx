import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

interface CounterButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'increment' | 'decrement' | 'reset';
  disabled?: boolean;
}

export const CounterButton: React.FC<CounterButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}) => {
  const buttonStyle = [
    styles.button,
    styles[variant],
    disabled && styles.disabled,
  ];

  // For counter buttons (increment, decrement, reset), use white text on black background
  const getTextColor = () => {
    if (disabled) return theme.colors.white;
    if (variant === 'increment' || variant === 'decrement' || variant === 'reset') {
      return theme.colors.white;
    }
    return variant === 'secondary' ? theme.colors.dark : theme.colors.white;
  };

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[
        styles.buttonText,
        { color: getTextColor() },
        disabled && styles.disabledText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
  danger: {
    backgroundColor: theme.colors.danger,
  },
  increment: {
    backgroundColor: theme.colors.counterIncrement,
  },
  decrement: {
    backgroundColor: theme.colors.counterDecrement,
  },
  reset: {
    backgroundColor: theme.colors.counterReset,
  },
  disabled: {
    backgroundColor: theme.colors.counterDisabled,
    elevation: 0,
    shadowOpacity: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  disabledText: {
    color: '#ffffff',
    opacity: 0.8,
  },
});