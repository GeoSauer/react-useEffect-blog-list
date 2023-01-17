import * as React from 'react';
import { fetchBlogs } from '../services/blogs';

export function useBlogs() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);
  return blogs;
}
