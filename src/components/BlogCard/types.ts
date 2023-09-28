interface IBlogImage {
  label: string;
  url: string;
}

export interface IBlogInfo {
  createTime: string;
  content: string;
  category: string;
  writer: string;
  blogImage: IBlogImage;
  title: string;
}

export interface IBlogCard {
  blogInfo: IBlogInfo | {};
  setBlogInfo: (val: IBlogInfo) => void;
}
