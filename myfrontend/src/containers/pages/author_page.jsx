import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_blog_list_author } from '../../redux/actions/blog/blog';

import {TranlateComponent   , TranslateValue} from "../../components/settings/language";
import Layout from '../../hocs/layouts/layout';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/navegation/navbar';
import Footer from '../../components/navegation/myFooter';
import Grid from '../display_db/grid/blog_grid';
import '../../styles/pages/author_page.css'

const AuthorPage = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.blog.blog_list);
  const params = useParams();
  const slug = params.slug || 'false';
  const api_url = import.meta.env.VITE_API_URL ; 
  const lang = TranslateValue('lang');
  useEffect(() => {
    if (slug) {
      dispatch(get_blog_list_author(slug));
    }
  }, [dispatch, slug]);
  

  if (!list || list.length === 0) {
    return (
      <div className="loading-item">
        <TranlateComponent   value="load" />
        <div className="loading-dot-line">
          <div className="dot d1"></div>
          <div className="dot d2"></div>
          <div className="dot d3"></div>
        </div>
      </div>
    );
  }

  const author = list[0]?.author; 
  if (!author) {
    return <div>Author not found.</div>; 
  }

  return (
    <Layout>
      <Helmet>
        <title>only one | blog</title>
        <meta
          name="description"
          content="Agency of software. service of creations of web pages"
        />
        <meta
          name="keywords"
          content="desarrollador de software, software development, create my own web page, crear my propia pagina web"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Federico Guainchay" />
        <meta name="publisher" content="Federico Guakinchay" />

        <meta property="og:title" content="only one | sofware Development" />
        <meta
          property="og:description"
          content="Agency of software. service of creations of web pages"
        />
        <meta property="og:url" content={`${api_url}/author/${slug}`} />
        <meta property="og:image" content={`${api_url}${author.picture}`} />

        <meta
          name="twitter:title"
          content="only one | sofware Development"
        />
        <meta
          name="twitter:description"
          content="Agency of software. service of creations of web pages"
        />
        <meta name="twitter:url" content={`${api_url}/author/${slug}`} />
        <meta name="twitter:image" content={`${api_url}${author.picture}`} />

        <link rel="canonical" href={`${api_url}/author/${slug}`} />
      </Helmet>
      <Navbar />
      <div className="nav-site">This is my web page</div>
      <main className="main-author-page">
        <div className="Author_card_big">
          <img src={`${api_url}${author.picture}`} alt={author.last_name} />
          <div>
            <h2>
              {author.first_name} {author.last_name}
            </h2>
            <p>{lang? `${author.description_en} spañol`: `${author.description_en} english`}</p> 
            <p>{author.email}</p>
          </div>
        </div>
      <h1 className='author-page-title'>{`Lastest articles from ${author.first_name} ${author.last_name}`}</h1>
      <section className="Proyect__section">
        <Grid objects={list} go="Blog" />
      </section>
      </main>
      <Footer />
    </Layout>
  );
};

export default AuthorPage;
