import { useEffect } from "react"
import { get_categories } from "../../../redux/actions/blog_categories/blogcategories"
import { connect, ConnectedProps } from 'react-redux';
import { get_author_blog_list , get_author_blog_list_page } from "../../../redux/actions/blog/blog"
import { RootState } from '@redux/reducers';

import DashboardTemplate from "../DashboardTemplate"

// Define types for your state and action props
const mapStateToProps = (state: RootState) => ({
  post: state.blog.author_blog_list,
  categories: state.blog_categories.categories,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

// Connect action creators to props
const mapDispatchToProps = {
  get_author_blog_list,
  get_author_blog_list_page,
  get_categories,
};

// Type inference using `ConnectedProps` for `mapStateToProps` and `mapDispatchToProps`
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

// Props type includes Redux props and any additional props if required
type BlogProps = PropsFromRedux & {
  get_categories: () => void;
};

const Blog: React.FC<BlogProps> = ({
  get_categories,
  categories,
  get_author_blog_list,
  get_author_blog_list_page,
  post,
  count,
  next,
  previous,
  
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
    get_author_blog_list();
  }, [get_categories, get_author_blog_list]);
  return (
  <DashboardTemplate>
    <div className="flex  w-full justify-end mb-[25px] ">
      <button className="button-add" >add a new Blog</button>
    </div>
  </DashboardTemplate>
  )
}

export default connector(Blog)