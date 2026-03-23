# MISHI Luxury E-commerce Platform

## Current State
Empty project - no backend logic, no frontend UI.

## Requested Changes (Diff)

### Add
- Full luxury e-commerce platform for brand 'MISHI'
- Two product categories only: Sterling Silver Ornaments (dynamic silver rate pricing) and Royal Ethnic Wear (size selection)
- Dual-admin system: Primary Admin (full access) + Secondary Admin 'Shrimati Ji' (inventory + silver rates + order approval)
- Customer portal: mobile OTP login, order tracking with 5-stage royal timeline, 'My Royal Favorites' wishlist
- 'The MISHI Legacy' About Us page with founder story and 3D journey timeline
- AI MISHI Butler chatbot (scripted responses, bottom-right corner, lion icon)
- PWA manifest for 'Add to Home Screen'
- 3D Glassmorphism UI: backdrop-blur, Royal Gold (#D4AF37) borders, deep dark backgrounds
- Hero section with Lion-Lioness imagery (uploaded reference image used)

### Modify
- Backend: Replace empty actor with full e-commerce logic

### Remove
- Nothing (clean slate)

## Implementation Plan
1. Select authorization + blob-storage components
2. Generate Motoko backend with: user auth/roles, product catalog (2 categories), orders, order tracking, wishlist, silver rate management, dual-admin roles
3. Generate lion/luxury hero imagery
4. Build React frontend: Home, Shop, Product Detail, Cart, Order Tracking, My Royal Favorites, The MISHI Legacy, Customer Login, Admin Dashboard (Primary + Secondary), MISHI Butler chatbot
