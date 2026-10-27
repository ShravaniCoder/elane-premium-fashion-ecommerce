# Élane — Premium Women's Fashion Store

A responsive React + Tailwind storefront starter with separate route components, search and category filters, sorting, product variants, wishlist, cart, checkout validation, order confirmation, account UI, order tracking, metadata, sitemap and robots file.

## Run locally
1. Install Node.js 18+.
2. In this folder run `npm install`.
3. Run `npm run dev` and open the URL printed by Vite.
4. Run `npm run build` before deployment.

## Important production notes
- The checkout creates a local demo order in browser state; it does **not** charge a card or create a server-side order.
- Payment integration is intentionally provider-ready, not falsely marked complete. Implement provider checkout (e.g. Razorpay/Stripe) through a trusted backend, verify payment signatures server-side, and never place secret keys in frontend `.env` variables.
- Account screens use a demo local profile. For production, connect secure authentication, password reset, sessions, and server-side order history.
- Order tracking is a front-end demonstration with sample states. Connect it to your fulfilment API for live tracking.
- Replace `example.com` in `public/sitemap.xml`, `public/robots.txt`, and the canonical URL helper with your real domain.
- Product photos currently use Unsplash image URLs; replace with licensed, optimized brand imagery or generated campaign assets before launch.
