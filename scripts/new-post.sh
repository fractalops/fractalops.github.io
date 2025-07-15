#!/bin/bash

# Simple script to create new blog posts for Rands & Sense
# Usage: ./scripts/new-post.sh "Your Post Title"

if [ -z "$1" ]; then
    echo "Usage: ./scripts/new-post.sh \"Your Post Title\""
    echo "Example: ./scripts/new-post.sh \"Tax-Free Savings Guide\""
    exit 1
fi

# Get current date
DATE=$(date +%Y-%m-%d)

# Convert title to filename format
TITLE="$1"
FILENAME=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g')
FILEPATH="_posts/${DATE}-${FILENAME}.md"

# Check if file already exists
if [ -f "$FILEPATH" ]; then
    echo "Error: File $FILEPATH already exists!"
    exit 1
fi

# Create the new post file
cat > "$FILEPATH" << EOF
---
layout: post
title: "$TITLE"
date: $DATE
categories: [category1, category2]
tags: [tag1, tag2, south-africa]
excerpt: "Write a one-sentence summary that will appear in previews and search results."
---

# $TITLE

Start with a compelling introduction that hooks your reader immediately. What problem does this post solve?

## The South African Context

Always include SA-specific information:
- Local bank names and products
- Rand amounts and examples
- Local regulations or tax implications
- Cultural considerations

## Step-by-Step Guide

Give actionable advice:

### Step 1: [Action Item]
Specific instructions with local examples.

### Step 2: [Next Action]
More detailed guidance with Rand amounts.

### Step 3: [Final Step]
Clear completion criteria.

## Common Mistakes to Avoid

What should readers watch out for? This is crucial for financial content.

## Quick Action Plan

**This week:**
- [ ] Specific action item
- [ ] Another specific action item

**This month:**
- [ ] Longer-term goal
- [ ] Measurement criteria

## Key Takeaways

- Bullet point summary
- Of main points
- For easy scanning

---

*Next week: Tease your next post topic to keep readers engaged.*
EOF

echo "✅ Created new post: $FILEPATH"
echo "📝 Edit the file to add your content"
echo "🏷️  Don't forget to update categories and tags"
echo "📅 File is dated for today ($DATE)"