# Auto wireless connect & run Expo on Android
Write-Host "📡 Searching for paired Android devices via adb..."

# Step 1: List available wireless devices from adb
$adbDevices = & adb devices -l | Select-String "model:"

if ($adbDevices -match "(\d{1,3}\.){3}\d{1,3}:\d{4,5}") {
    $device = $matches[0]
    Write-Host "✅ Found wireless device: $device"
}
else {
    Write-Host "⚠️ No wireless device detected. Trying to reconnect..."
    Write-Host "➡️ Please open Developer Options > Wireless debugging on your phone"
    Write-Host "➡️ Tap 'Pair device with pairing code' and note the IP:port"
    Write-Host ""
    $device = Read-Host "Enter device IP:port (e.g. 192.168.1.105:43215)"
}

# Step 2: Connect wirelessly
Write-Host "🔗 Connecting to $device..."
& adb connect $device | Out-Host

# Step 3: Run the Expo project
Write-Host "🚀 Launching Expo project on Android..."
npx expo run:android
Write-Host "✅ Done! Your app should be running on the device."