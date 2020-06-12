import Link from "next/link"
import Layout from "../comps/layout"
import fetch from "isomorphic-unfetch"
import Markdown from "react-markdown"

/* const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
) */

const listTvShows = (show = {}, index = 0) => {
  return (
    <li key={index}>
      <Link href="/p/[id]" as={`/p/${show.id}`}>
        <a>{show.name}</a>
      </Link>
    </li>
  )
}

const Index = (props) => {
  console.log("Index called")
  return (
    <Layout>
      <h1>Batman TV shows</h1>
      <ul>{props && props.shows && props.shows.map(listTvShows)}</ul>
      <div className="markdown">
        <Markdown
          source={`
            This is our blog post.
            Yes. We can have a [link](/link).
            And we can have a title as well.

            ### This is a title

            And here's the content.
          `}
        />
      </div>

      <style jsx global>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
        .markdown {
          font-family: "Arial";
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

Index.getInitialProps = async function (ctx) {
  console.log(ctx.asPath)
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman")
  const data = await res.json()

  /* console.log(`Show data fetched. Count: ${data.length}`)
  console.log({ data }) */

  return {
    shows: data.map((entry) => entry.show),
  }
}
/* export default function Index() {
  return (
    <Layout>
      <h1>Hello Next.js</h1>
    </Layout>
  )
} */

export default Index
