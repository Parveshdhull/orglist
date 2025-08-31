{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            android_sdk.accept_license = true;
            allowUnfree = true;
          };
        };

        androidComposition = pkgs.androidenv.composeAndroidPackages {
          # Latest build tools versions
          buildToolsVersions = [
            "36.0.0"
            "35.0.0"
            "34.0.0"
          ];

          # Latest platform versions
          platformVersions = [
            "36"
            "35" # Android 15
            "34" # Android 14
          ];

          # Support for more architectures
          abiVersions = [
            "x86_64"
            "arm64-v8a"
          ];

          includeEmulator = true;
          emulatorVersion = "35.5.8";

          includeSystemImages = true;
          systemImageTypes = [
            "google_apis"
            "google_apis_playstore"
          ];

          includeNDK = false;
          # Latest NDK versions
          ndkVersions = [
            "28.2.13676358" # NDK r28 (latest stable)
            "27.3.13750724" # NDK r27d (LTS)
          ];

          # Latest CMake version
          cmakeVersions = [ "3.31.0" ];

          # Additional useful tools
          includeExtras = [
            "extras;android;m2repository"
            "extras;google;m2repository"
          ];
        };

        androidSdk = androidComposition.androidsdk;
      in
      {
        devShells.default = pkgs.mkShell {
          # Environment variables for Android SDK
          ANDROID_SDK_ROOT = "${androidSdk}/libexec/android-sdk";
          ANDROID_HOME = "${androidSdk}/libexec/android-sdk";

          # Gradle optimization
          GRADLE_OPTS = "-Dorg.gradle.project.android.aapt2FromMavenOverride=${androidSdk}/libexec/android-sdk/build-tools/35.0.0/aapt2";

          # OpenGL support for emulator
          LD_LIBRARY_PATH = "${pkgs.libglvnd}/lib:${pkgs.libGL}/lib";

          # Java configuration
          JAVA_HOME = "${pkgs.jdk17}";

          buildInputs = with pkgs; [
            # Android development
            androidSdk

            # Node.js (latest LTS)
            nodejs_22
            corepack

            # Java (updated to JDK 21)
            jdk17

            # Additional useful tools
            crudini
            git

            # For React Native development
            watchman

            # Optional: Android Studio if desired
            android-studio
          ];

          shellHook = ''
            echo "Android development environment loaded!"
            echo "Android SDK: $ANDROID_SDK_ROOT"
            echo "Java: $(java -version 2>&1 | head -1)"
            echo "Node.js: $(node --version)"
            echo ""
            echo "To create an AVD, run:"
            echo "avdmanager create avd --force --name phone --package 'system-images;android-35;google_apis;x86_64'"
            echo ""
            echo "To start the emulator, run:"
            echo "emulator -avd phone"
          '';
        };
      }
    );
}
