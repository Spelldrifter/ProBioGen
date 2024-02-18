
FROM node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder