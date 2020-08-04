# Next.js MDX Blog Starter

Next.js MDX Blog Starter for building blogs with [Next.js](https://nextjs.org/) and [MDX](https://mdxjs.com/), including [Theme UI](https://theme-ui.com/home/) Component Design System, [Vercel Deployment](https://vercel.com/) and more.

View Demo at [nextjs-mdx-blog-starter.vercel.app](https://nextjs-mdx-blog-starter.vercel.app/)

## Deploy

Build and deploy with vercel. [Install vercel](https://vercel.com/download) if you haven’t already

```
npm install && vercel deploy
```

## Customize

You can set properties like your blog title, description, Google Analytics code, social media sharing image and more by editing `blog.config.js`

Content for the about page and the blurb in the header are written in markdown/mdx. You can find markdown content and blog post files in `src/markdown`.

To edit the styling of the site, you can make changes to the theme file at `src/layout/Theme.js`. To further customize the site, refer to the [Theme UI documentation](https://theme-ui.com/getting-started) for making and styling your own components.

## Writing Posts

To write a new post, create a new `.mdx` file in the `src/markdown/posts` directory.

Update the front-matter for the post with its title, excerpt, cover image and the publication date. 

#### Title

The title will appear at the top of the post and will be used in the meta tags for the page.

#### Excerpt

The excerpt will appear on the posts listing and as the meta description for the post page. It can be formatted in markdown. 

#### Cover Image

If included, the cover image will be displayed above the excerpt and post content. It will also be the main image that appears when the post is shared on social media. Be sure to also set the cover image alt value for accessibility.




