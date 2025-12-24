#!/bin/bash

echo "🎨 Fixing question page design..."

# Find all question pages
find app/otazky -name "page.tsx" -type f | while read file; do
  echo "Processing: $file"

  # Fix shrnutí section - make full width with prominent color
  # Change from: p-4 md:p-6 bg-amber-50 rounded-lg border-2 border-amber-300
  # To: -mx-3 md:-mx-8 px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white
  sed -i '' 's/p-4 md:p-6 bg-amber-50 rounded-lg border-2 border-amber-300/negative-margin px-3 md:px-8 py-8 md:py-12 bg-gradient-to-r from-blue-600 to-blue-700/g' "$file"
  sed -i '' 's/negative-margin/-mx-3 md:-mx-8/g' "$file"

  # Change shrnutí title color from amber-900 to white
  sed -i '' 's/text-amber-900 mb-3/text-white mb-4/g' "$file"

  # Change shrnutí content color from amber-900 to white
  sed -i '' 's/<div className="text-amber-900 space-y-2">/<div className="text-white space-y-3">/g' "$file"

  # Fix low contrast text colors - change text-white/80 to text-white or text-slate-900
  sed -i '' 's/text-white\/80/text-slate-100/g' "$file"
  sed -i '' 's/text-white\/60/text-slate-200/g' "$file"

  # Remove borders from FactBox, UnknownBox components by changing border class
  # Keep the rounded and padding but make border more subtle
  sed -i '' 's/border border-/border-2 border-/g' "$file"
done

echo "✅ Question pages design fixed!"
