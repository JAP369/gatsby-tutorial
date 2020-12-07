import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => { 
  return (
    <Layout>
      <div className={styles.page}>
        <h1>blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima atque
          voluptate sint in modi! Nemo ratione deleniti ipsum vero ad?
        </p>
      </div>
    </Layout>
  )
}

export default blog
