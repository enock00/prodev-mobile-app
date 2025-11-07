import { FACEBOOKLOGO, GOOGLELOGO } from "@/constants";
import { styles } from "@/styles/_join";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        
        <View style={styles.iconsection}>
          <Text>⬅</Text>
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Login</Text>
          <Text style={styles.subText}>Welcome back! Log in now</Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput style={styles.formControl} placeholder="Enter your email" />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                placeholder="Enter your password"
                secureTextEntry
                style={styles.passwordControl}
              />
              <Text>👁️</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("./join")}>
            <Text style={styles.signupSubTitleText}> Sign up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

