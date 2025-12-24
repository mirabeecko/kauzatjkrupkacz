#!/bin/bash

echo "🔍 Fixing text contrast across the website..."

# Fix low contrast text colors across all pages
find app -name "*.tsx" -type f | while read file; do
  # Skip if file doesn't contain problematic patterns
  if ! grep -q "text-white/80\|text-slate-50\|text-gray-50" "$file" 2>/dev/null; then
    continue
  fi

  echo "Processing: $file"

  # Fix text-white/80 on colored backgrounds -> make it text-slate-100 or text-white
  # On blue/purple/dark backgrounds
  sed -i '' 's/text-white\/80/text-slate-100/g' "$file"

  # Fix text-white/60 -> text-slate-200
  sed -i '' 's/text-white\/60/text-slate-200/g' "$file"

  # Fix text-slate-50 on light backgrounds -> text-slate-900
  # This needs context, so let's be more specific
  # If it's in a bg-white or bg-slate context
  sed -i '' 's/bg-white\/60 p-3/bg-white\/80 p-3/g' "$file"
done

echo "✅ Text contrast fixed!"
