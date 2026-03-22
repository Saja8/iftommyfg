# IFToMM YFG Events

Umbrella website for IFToMM Young Faculty Group activities, including symposia,
HMDS, summer school, winter school, and meetings.

## Stack

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS

## Local Development

```bash
yarn install
yarn dev
```

Open `http://localhost:3000`.

## Checks

```bash
yarn next lint
yarn next build
```

## Deployment

Recommended deployment path:

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Add the production domain in Vercel.
4. Configure DNS and email forwarding on the chosen domain provider.

## Contact

The site uses a single shared public contact address configured in:

- `app/data/siteContact.ts`
