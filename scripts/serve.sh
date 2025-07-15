#!/bin/bash
# scripts/serve.sh
# Serve the Jekyll site locally with live reload

set -e

# TODO: Ensure you have bundler and dependencies installed
bundle install

# Serve with live reload
bundle exec jekyll serve --livereload 