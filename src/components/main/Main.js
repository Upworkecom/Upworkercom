import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {ImCross} from 'react-icons/im'
import {FaGlobe} from 'react-icons/fa'
import "../main/Main.css";
import Svg1 from '../images/svg1.svg'
import { content } from "./content";
import { Button } from "../button/Button";


const transition = { duration: 0.5, ease: "easeInOut" };

const postVariants = {
  initial: { y: 100, opacity: 0 },
  enter: { y: 0, opacity: 1, transition },
  exit: { y: -100, opacity: 0, transition }
};

const Post = ({ match }) => {
  const id = Number(match.params.id);
  const { title, description, subTitle, subDescription, imgSrc } = content[id];
  return (
    <motion.div
      className="page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={postVariants}
    >
      <div className="post">
        <div className='content'>
        <div className="link-wrapper">
        <Link  to="/"><ImCross size='30px' color="#292929" /></Link>
      </div>
          <img className="svg" src={Svg1} alt="/"></img> 
          <h1 className="heading">{title}</h1>
          <p className="desciption">{description}</p>
          <div className="sub">
            <FaGlobe size='40px'color="#fff" className="icons" />
              <h2 className="subTitle">{subTitle}</h2>
                <p className="subDescription">{subDescription}</p>       
          </div>
            <Link to='/amazon'>
                <Button className='button'>Scrape Amazon</Button>
              </Link>
        </div>
          <img className="post__img" src={imgSrc} alt={title} />
      </div>
    </motion.div>
  );
};

const postPreviewVariants = {
  initial: { x: "100%", opacity: 0 },
  enter: { x: 0, opacity: 1, transition },
  exit: { x: "-100%", opacity: 0, transition }
};

const PostPreview = ({ id, title, description, imgSrc,icons, className }) => {
  return (
    <motion.div className={className} variants={postPreviewVariants}>   
      <Link to={`/post/${id}`} >
        <img className="post-preview__img" src={imgSrc} alt={title} />
      </Link>      
    </motion.div>
  );
};

const blogVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } }
};

const Blog = () => {
  return (
    <div className="page">
      <h1 className="title">Discover our Scrappers</h1>
      <motion.div
        className="blog-list"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={blogVariants}
      >
        {content.map((post) => (
          <PostPreview key={post.id} {...post} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Main() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Blog} />
              <Route exact path="/post/:id" component={Post} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}
