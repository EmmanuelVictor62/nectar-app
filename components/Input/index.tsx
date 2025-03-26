import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import { styles } from "./style";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCorrect?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  style?: object;
  icon?: React.ReactNode;
  control: Control<FieldValues>;
  rules?: any;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  numberOfLines,
  secureTextEntry,
  keyboardType = "default",
  autoCorrect = false,
  autoCapitalize = "none",
  multiline,
  style,
  maxLength,
  icon,
  control,
  rules,
}) => {
  return (
    <View style={styles.inputWrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer, style]}>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              numberOfLines={numberOfLines}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              autoCorrect={autoCorrect}
              autoCapitalize={autoCapitalize}
              multiline={multiline}
              maxLength={maxLength}
              style={styles.input}
            />
          )}
        />
        {icon && icon}
      </View>
      <ErrorMessage control={control} name={name} />
    </View>
  );
};

export default Input;

export const ErrorMessage = ({
  control,
  name,
}: {
  control: Control<FieldValues>;
  name: string;
}) => {
  const { errors } = control._formState;
  const error = errors[name];
  if (!error) return null;

  return (
    <Text style={styles.errorText}>{error.message as React.ReactNode}</Text>
  );
};
