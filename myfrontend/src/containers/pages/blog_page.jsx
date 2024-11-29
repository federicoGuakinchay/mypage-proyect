import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { get_blog } from '../../redux/actions/blog/blog';

import {TranlateComponent , TranslateValue} from "../../components/settings/language";
import Layout from '../../hocs/layouts/layout';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navegation/navbar';
import Footer from '../../components/navegation/myFooter';
import'../../styles/pages/blog_page.css'
import QuillOptions from '../../components/settings/quill';

const BlogPage = () => {
  const dispatch = useDispatch();
  const api_url = import.meta.env.VITE_API_URL ;
  const post = useSelector((state) => state.blog.post);
  const params  = useParams()
  const slug = params.slug || 'false';
  const lang = TranslateValue('lang')

  useEffect(() => {
    if (slug) {
      dispatch(get_blog(slug));
    }
  }, [dispatch, slug]);

  //change this for an return to   home  page
  if (!post) {
    dispatch(get_blog(slug));
    return(
    <div className="loading-item">
        <TranlateComponent   value="load" />
        <div className="loading-dot-line">
          <div className="dot d1"></div>
          <div className="dot d2"></div>
          <div className="dot d3"></div>
        </div>
      </div>)
  }
  const  content =  (lang=='en') ? JSON.parse(post.content_en) : JSON.parse(post.content_es)
  return (
    <Layout >
    <Helmet>
      <title>only one | blog  </title>
      <meta name='description' content='Agency of software. service of creations of web pages'/>
      <meta name="keywords" content="desarrollador de software, software development, create my own web page , crear my propia pagina web" />
      <meta name='robots' content='all' />
      <meta name='author' content='Federico Guainchay' />
      <meta name='publisher' content='Federico Guakinchay'/>

      <meta property='Og:title'  content='only one | sofware Development'  />
      <meta property='Og:description' content='Agency of software. service of creations of web pages' />
      <meta property='Og:url' />
      <meta property='Og:img' />

      <meta name='twitter:title'content='only one | sofware Development' />
      <meta name='twitter:description' content='Agency of software. service of creations of web pages'/>
      <meta name='twitter:url' />
      <meta name='twitter:img' />

      <link rel="canonical" href="" />
  </Helmet>
  <Navbar/>
  <div className="nav-site">this is my web page</div>
  <main className='main-blog-page'>
    <section className='social-media'></section>
    <section className="blog">
      <div className="blog-detail">
        <div>
          <h1>{post.title}</h1>
            <img
              src={`${api_url}${post.thumbnail}` }
              alt={ (lang=='en') ? `${post.title_en}` : `${post.title_es}` }
              className="blog-thumbnail"
            />
            <QuillOptions content={content} />
          </div>
        </div>
      </section>
      <section className='adds?'>

      </section>
    </main>
      <Footer/>
    </Layout>
  );
};

export default BlogPage;
