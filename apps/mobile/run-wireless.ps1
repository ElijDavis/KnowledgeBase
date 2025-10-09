# Wireless Expo Run Script
# Replace with your device IP & port
$deviceIP = "192.168.4.219:37451"

Write-Host "🔗 Connecting to Android device at $deviceIP..."
adb connect $deviceIP | Out-Host

# Wait a bit to ensure connection stabilizes
Start-Sleep -Seconds 2

Write-Host "🚀 Launching Expo on Android..."
npx expo run:android
