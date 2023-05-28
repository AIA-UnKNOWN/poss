#!/bin/bash

if [ -z "$1" ]; then
  echo "No component name provided. Do it like this './generate-component.sh ComponentName'"
  exit 1
fi

# Creates a directory first with the name you passed
mkdir src/components/"$1"

# Generates the essential files
touch src/components/"$1"/index.ts \
      src/components/"$1"/"$1".tsx \
      src/components/"$1"/"$1".hook.ts \
      src/components/"$1"/"$1".test.tsx \
      src/components/"$1"/"$1".stories.tsx
