#!/bin/bash

# Script to fix mobile padding across all pages
# Reduces padding on mobile while keeping reasonable margins

echo "🔧 Fixing mobile padding across all pages..."

# Find all .tsx files in app directory
find app -name "*.tsx" -type f | while read file; do
  echo "Processing: $file"

  # Fix container padding - change px-8 to px-3 md:px-8 (only if not already responsive)
  sed -i '' 's/px-8 py-/px-3 md:px-8 py-/g' "$file"
  sed -i '' 's/px-8 max-w/px-3 md:px-8 max-w/g' "$file"
  sed -i '' 's/container mx-auto px-8">/container mx-auto px-3 md:px-8">/g' "$file"

  # Fix py-12 to py-6 md:py-12 (only if not already responsive)
  sed -i '' -E 's/py-12([^0-9]|$)/py-6 md:py-12\1/g' "$file"

  # Fix py-16 to py-8 md:py-16 (only if not already responsive)
  sed -i '' -E 's/py-16([^0-9]|$)/py-8 md:py-16\1/g' "$file"

  # Fix p-8 to p-4 md:p-8 in cards and boxes (only if not already responsive)
  sed -i '' -E 's/([^-])p-8 /\1p-4 md:p-8 /g' "$file"

  # Fix p-6 to p-4 md:p-6 (only if not already responsive)
  sed -i '' -E 's/([^-])p-6 /\1p-4 md:p-6 /g' "$file"

  # Clean up any double md: that might have been created
  sed -i '' 's/md:md:/md:/g' "$file"
  sed -i '' 's/px-3 md:px-8 md:px-8/px-3 md:px-8/g' "$file"
  sed -i '' 's/py-6 md:py-12 md:py-12/py-6 md:py-12/g' "$file"
  sed -i '' 's/py-8 md:py-16 md:py-16/py-8 md:py-16/g' "$file"
  sed -i '' 's/p-4 md:p-8 md:p-8/p-4 md:p-8/g' "$file"
  sed -i '' 's/p-4 md:p-6 md:p-6/p-4 md:p-6/g' "$file"
done

echo "✅ Done! Mobile padding has been optimized."
echo "📱 Mobile devices will now use less padding for better text width."
