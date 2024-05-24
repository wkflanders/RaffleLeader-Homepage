import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css'; // Import the CSS module

const BlogListPage = ({ metadata, items }) => {
  const { siteConfig } = useDocusaurusContext();
  const { title, description } = siteConfig;

  const isExternalUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const blogPosts = items.map(({ content }) => {
    const { frontMatter, metadata } = content;
    const { permalink, title, description } = metadata;
    const imageUrl = frontMatter.image
      ? isExternalUrl(frontMatter.image)
        ? frontMatter.image
        : `/img/${frontMatter.image}`
      : `/img/default-blog-image.jpg`; // Construct the image path from static/img or use external URL

    return {
      permalink,
      title,
      description,
      imageUrl,
      featured: frontMatter.featured || false,
    };
  });

  let featuredPost = blogPosts.find(post => post.featured);
  const nonFeaturedPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout title={title} description={description}>
      <div className={styles.blogListPage}>
        <div className={styles.blogListContainer}>
          <div className={styles.blogListHeader}>
            <h1>Raffle Leader Blog</h1>
            <p>Finally create fully customizable contests and giveaways in WordPress!</p>
          </div>
          {featuredPost && (
            <div className={styles.featuredPost}>
              <img src={featuredPost.imageUrl} alt={featuredPost.title} />
              <div className={styles.featuredPostContent}>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.description}</p>
                <Link to={featuredPost.permalink}>Read more &rarr;</Link>
              </div>
            </div>
          )}
          <div className={styles.blogListItems}>
            {nonFeaturedPosts.map((post, index) => (
              <div className={styles.blogListItem} key={index}>
                <img src={post.imageUrl} alt={post.title} />
                <div className={styles.blogListItemContent}>
                  <div>
                    <h2 className={styles.blogListItemTitle}>{post.title}</h2>
                    <p className={styles.blogListItemDescription}>{post.description}</p>
                  </div>
                  <div className={styles.blogListItemReadMore}>
                    <Link to={post.permalink}>Read more &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogListPage;
