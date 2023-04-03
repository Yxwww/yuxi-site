import { EXTERNAL_POSTS_URL, EXTERNAL_URL } from 'src/contents/constants'
import { PostItemList } from 'src/types'
import { getAllPosts } from 'src/utils/serverside'
import { getPostPath } from 'src/utils'

async function generateSiteMap(posts: PostItemList) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${EXTERNAL_URL}</loc>
     </url>
     <url>
       <loc>${EXTERNAL_URL}/resume</loc>
     </url>
     <url>
       <loc>${EXTERNAL_URL}/blogs</loc>
     </url>
     <url>
       <loc>${EXTERNAL_URL}/projects</loc>
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${`${EXTERNAL_POSTS_URL}/${getPostPath(post)}`}</loc>
       </url>
       `
       })
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
  return ''
}

export async function getServerSideProps({ res }) {
  const posts = await getAllPosts()
  // We generate the XML sitemap with the posts data
  const sitemap = await generateSiteMap(posts)

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
