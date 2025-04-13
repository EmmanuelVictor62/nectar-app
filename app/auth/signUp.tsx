import EyeIcon from "@/assets/icons/eye.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuthStore, UserType } from "@/stores/useAuthStore";
import { styles } from "@/styles/signInStyles";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

const SignUpScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const setUser = useAuthStore((state) => state.setUser);

  const { control, handleSubmit } = useForm();

  const router = useRouter();

  const handleSignUp = (data: any) => {
    const user: UserType = {
      name: data.username,
      email: data.email,
      password: data.password,
    };

    setTimeout(() => {
      setIsLoading(true);
      setUser(user);
      router.replace("/shop");
    }, 2000);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Sign up</Text>
        <Text style={styles.textDescription}>
          Enter your credentials to continue
        </Text>
      </View>
      <View style={styles.inputWrapper}>
        <Input
          name="username"
          label="Username"
          placeholder="John Doe"
          control={control}
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          name="email"
          label="Email"
          placeholder="test@gmail.com"
          control={control}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Input
          name="password"
          label="Password"
          control={control}
          secureTextEntry={!isPasswordVisible}
          maxLength={30}
          icon={
            <EyeIcon
              width={16}
              height={16}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          }
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Text style={styles.termsOfService}>
          By continuing you agree to our Terms of Service and Privacy Policy.
        </Text>
        <Button
          title="Sign Up"
          onPress={handleSubmit(handleSignUp)}
          loading={isLoading}
        />
        <Pressable style={styles.signUpLinkContainer}>
          <Text style={styles.signUpLinkText}>Already have an account? </Text>
          <Link href="/auth/signIn" style={styles.signUpLink}>
            <Text>Sign In</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUpScreen;
