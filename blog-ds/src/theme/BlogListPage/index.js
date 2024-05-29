import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
    const { permalink, title, description, date } = metadata;
    const imageUrl = frontMatter.image
      ? isExternalUrl(frontMatter.image)
        ? frontMatter.image
        : useBaseUrl(`/img/${frontMatter.image}`)
      : useBaseUrl('/img/default-blog-image.png');

    return {
      permalink,
      title,
      description,
      imageUrl,
      date: new Date(date),
      featured: frontMatter.featured || false,
    };
  });

  // Sort blog posts chronologically with most recent first
  blogPosts.sort((a, b) => b.date - a.date);

  let featuredPost = blogPosts.find(post => post.featured);
  const nonFeaturedPosts = blogPosts.filter(post => !post.featured);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 7; // Set posts per page to 7 since 1 will be featured

  // Calculate the posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = nonFeaturedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(nonFeaturedPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <Layout title={title} description={description}>
      <div className={styles.blogListPage}>
        <div className={styles.blogListContainer}>
          <div className={styles.blogListHeader}>
            <h1>Raffle Leader Blog</h1>
            <p>Finally create fully customizable contests and giveaways in WordPress!</p>
          </div>
          {currentPage === 1 && featuredPost && (
            <div className={styles.featuredPost}>
              <img src={featuredPost.imageUrl} alt={featuredPost.title} />
              <div className={styles.featuredPostContent}>
                <h2 className={styles.featuredPostTitle}>
                  <Link to={featuredPost.permalink}>{featuredPost.title}</Link>
                </h2>
                <p>{featuredPost.description}</p>
                <Link to={featuredPost.permalink}>Read more &rarr;</Link>
              </div>
            </div>
          )}
          <div className={styles.blogListItems}>
            {currentPosts.map((post, index) => (
              <div className={styles.blogListItem} key={index}>
                <img src={post.imageUrl} alt={post.title} />
                <div className={styles.blogListItemContent}>
                  <div>
                    <h2 className={styles.blogListItemTitle}>
                      <Link to={post.permalink}>{post.title}</Link>
                    </h2>
                    <p className={styles.blogListItemDescription}>{post.description}</p>
                  </div>
                  <div className={styles.blogListItemReadMore}>
                    <Link to={post.permalink}>Read more &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? styles.active : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogListPage;
