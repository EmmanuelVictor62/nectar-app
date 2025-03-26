import EyeIcon from "@/assets/icons/eye.svg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { styles } from "@/styles/signInStyles";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";

const SignInScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const { control, handleSubmit } = useForm();

  const router = useRouter();

  const onSubmit = (data: any) => {
    const { email, password } = data;

    setIsLoading(true);
    if (email !== "" && password !== "") {
      setTimeout(() => {
        router.replace("/home");
        setIsLoading(false);
      }, 2000);
    } else {
      alert("Please enter valid email and password");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Sign in</Text>
        <Text style={styles.textDescription}>
          Enter your email and password
        </Text>
      </View>
      <View style={styles.inputWrapper}>
        <Input
          name="email"
          label="Email"
          placeholder="test@gmail.com"
          control={control}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          }}
        />
        <Input
          name="password"
          label="Password"
          control={control}
          secureTextEntry={!isPasswordVisible}
          maxLength={30}
          rules={{
            required: "Password is required",
          }}
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
        <Link href="/auth/signUp" style={styles.forgotPasswordLink}>
          Forgot Password?
        </Link>
        <Button
          title="Log In"
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
        />
        <Pressable style={styles.signUpLinkContainer}>
          <Text style={styles.signUpLinkText}>
            Don&apos;t have an account?{" "}
          </Text>
          <Link href="/auth/signUp" style={styles.signUpLink}>
            <Text>Sign Up</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

export default SignInScreen;
