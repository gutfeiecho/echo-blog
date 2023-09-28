import { BlogCard } from "@/components";
import React from "react";
import styles from "./index.module.less";
const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.content_blog_container}>
        <BlogCard />
      </div>
    </div>
  );
};

export default Home;
