import * as React from 'react';
import { getBlogs } from '../services/blogs';

export function useBlogs() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await getBlogs();
      setBlogs(resp);
    };
    fetchData();
  }, []);
  return blogs;
}
