import React, { useEffect } from "react";
import useStore from "./store";
import styles from "./index.less";
import { IBlogInfo } from "./types";
import BlogImage from "@/assets/images/post.jpg";
import "./index.css";

const BlogCard = () => {
  const blogInfo = useStore((state) => state.blogInfo);
  const setBlogInfo = useStore((state) => state.setBlogInfo);
  useEffect(() => {
    setBlogInfo({
      createTime: "2023-09-28",
      writer: "Lucas",
      content: "这是一条博客",
      blogImage: {
        label: "这是一张播客图片",
        url: "",
      },
      title: "React是如何实现时间切片功能的",
      category: "React源码系列",
    });
  }, []);
  return (
    <div className="blog_card_container">
      <img src={BlogImage} className="blog_image" />
      {Object.keys(blogInfo).length ? (
        <>
          <div className="blog_create_time">
            {(blogInfo as IBlogInfo)?.createTime}
          </div>
          <div>{(blogInfo as IBlogInfo)?.title}</div>
        </>
      ) : null}
    </div>
  );
};

export default BlogCard;
