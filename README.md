# Next.js and MDX Starter

> The fastest way to ship a website ⚡︎

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fmdx-starter&project-name=mdx-starter&repository-name=mdx-starter&demo-url=https%3A%2F%2Fmdx.bridger.to)

---

Learn more about [MDX](https://mdxjs.com) and [Markdown](https://www.markdownguide.org).

How [MDX works with Next.js](https://nextjs.org/docs/app/building-your-application/configuring/mdx).

---

This is a starter template for building websites using Next.js and MDX. It provides a fast and efficient way to create content-driven websites with the power of React components and the simplicity of Markdown.

## Features

- Next.js 14 with App Router
- MDX support for content creation
- Tailwind CSS for styling
- Dark mode support with next-themes
- Typography plugin for Tailwind CSS
- Customizable components
- Ready-to-use layout components

## Quick Start

1. Clone the repository:
```
git clone https://github.com/brijr/mdx-starter.git
cd mdx-starter
```

2. Install dependencies:
```
npm install
```

3. Run the development server:
```
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/`: Contains the main application code
- `components/`: Reusable React components
- `lib/`: Utility functions and helpers
- `public/`: Static assets
- `styles/`: Global styles and Tailwind CSS configuration

## Writing Content

Create your content using MDX files in the `app` directory. You can use a mix of Markdown and React components in your MDX files.

Example:

```1:9:app/page.mdx
import { ThemeToggle } from "@/components/theme/theme-toggle";

# Hello World!

This is the [MDX Starter Template](https://github.com/brijr/mdx-starter). It is built with [brijr/craft](https://github.com/brijr/craft) and [shadcn/ui](https://ui.shadcn.com). Below you will find an example of the markdown home page -> `/page.tsx`.

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fmdx-starter&project-name=mdx-starter&repository-name=mdx-starter&demo-url=https%3A%2F%2Fmdx.bridger.to">
  <img src="https://vercel.com/button" alt="Deploy with Vercel" />
</a>
```


## Customization

### Theming

The project uses `next-themes` for dark mode support. You can customize the theme in the `tailwind.config.ts` file.

### Typography

The Tailwind CSS typography plugin is included for consistent and beautiful typography. Customize it in the `tailwind.config.ts` file.

### Components

Custom components are available in the `components` directory. You can use these in your MDX files or create new ones as needed.

## Deployment

This project is ready to be deployed on Vercel. Click the button below to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbrijr%2Fmdx-starter&project-name=mdx-starter&repository-name=mdx-starter&demo-url=https%3A%2F%2Fmdx.bridger.to)

## Learn More

- [MDX Documentation](https://mdxjs.com)
- [Markdown Guide](https://www.markdownguide.org)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
