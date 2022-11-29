import axios from "axios";
import blogFormatter from "../helpers/blogFormatter";
import * as awsAPI from "./APIhelper";
const blogKey = "AIzaSyDng2g4J0ETOXSj1Jco92ObLLXAEV3MqH8";
const blogId = "3201784034968895846";
const baseUrl = "https://www.googleapis.com/blogger/v3/blogs";

export const listBlogPosts = () => {
  return axios
    .get(`${baseUrl}/${blogId}/posts?maxResults=50&key=${blogKey}`)
    .then((blog) => blog.data.items)
    .then((blogItems)=>blogItems.sort((a,b)=>new Date(b.published)-new Date(a.published)))
    .then((blogItems) => blogItems.map((item) => blogFormatter(item)))
}

export const getBlogPostbyPostId = (postId) => {
  return axios
    .get(`${baseUrl}/${blogId}/posts/${postId}?key=${blogKey}`)
    .then((blog) => blog.data)
    .then((blogItem) => blogFormatter(blogItem));
};

export const searchBlogPostbyQueryTerms = (term) => {
  return axios
    .get(`${baseUrl}/${blogId}/posts/search?q=${term}&key=${blogKey}`)
    .then((blog) => (blog.data.items ? blog.data.items : []));
};

export const listPostRecord = () => {
  return awsAPI.unAuthedGetData(`/v1/public/post`, `publicRESTv1`);
};

export const incrementPostRecord = (postId) => {
  return awsAPI.unAuthedGetData(
    `/v1/public/post/${postId}/increment`,
    `publicRESTv1`
  );
};
