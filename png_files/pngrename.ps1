# Rename notes-#.png files to notes-###.png with zero padding (preserve any -1 suffix)

Get-ChildItem -Filter "notes-*.png" | ForEach-Object {
    $oldName = $_.Name
    # Match pattern: notes-(number)(optional -1).png
    if ($oldName -match '^notes-(\d+)(-1)?\.png$') {
        $num = [int]$matches[1]
        $suffix = $matches[2]
        # Format number with leading zeros to 3 digits
        $newNum = '{0:D3}' -f $num
        $newName = "notes-$newNum$suffix.png"

        if ($oldName -ne $newName) {
            # Rename the file
            Rename-Item -LiteralPath $_.FullName -NewName $newName
            Write-Host "Renamed '$oldName' -> '$newName'"
        }
    }
}
