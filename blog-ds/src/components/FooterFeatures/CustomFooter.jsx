import React from 'react';
import styles from './custom-footer.module.css'; // Import the custom CSS module

const footerNavigation = {
  app: [
    { name: 'Documentation', href: '/docs/intro' },
    { name: 'Blog', href: '/blog' },
    // Add more items here
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    // Add more items here
  ],
};

const CustomFooter = () => {
  return (
    <div className={styles.footerContainer}>
      <footer aria-labelledby="footer-heading" className={styles.footer}>
        <h2 id="footer-heading" className={styles.srOnly}>
          Footer
        </h2>
        <div className={styles.footerContent}>
          <div>
            <h3 className={styles.footerTitle}>App</h3>
            <ul role="list" className={styles.footerList}>
              {footerNavigation.app.map((item) => (
                <li key={item.name} className={styles.footerListItem}>
                  <a href={item.href} className={styles.footerLink}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.footerTitle}>©2024 RAFFLE LEADER, INC.</h3>
            <ul role="list" className={styles.footerList}>
              {footerNavigation.company.map((item) => (
                <li key={item.name} className={styles.footerListItem}>
                  <a href={item.href} className={styles.footerLink}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomFooter;
