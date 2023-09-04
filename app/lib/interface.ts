export interface Post {
    [x: string]: any;
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt: string;
  }
  