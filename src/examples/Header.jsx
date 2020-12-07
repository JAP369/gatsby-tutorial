import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        title
        author
        data
        description
        person {
          age
          name
        }
      }
    }
  }
`

const Header = () => {
  // const data = useStaticQuery(getData)
  // console.log(data)

  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h2>title : {data.site.siteMetadata.title}</h2>
      <h2>name : {data.site.siteMetadata.person.name}</h2> */}
      <h2>title : {title}</h2>
      <h2>name : {name}</h2>
    </div>
  )
}

export default Header

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// const ComponentName = () => {

//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           author
//           data
//           description
//           person {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <h2>{data.site.siteMetadata.person.age}</h2>
//       <pre>{JSON.stringify(data, null, 4)}</pre>
//     </div>
//   )
// }

// export default ComponentName
