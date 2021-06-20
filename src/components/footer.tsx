/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        {` `}
        <span sx={{fontWeight: `semibold`}}>Get in touch&nbsp;&nbsp; </span>
        {` `}
        <span>
          <a href="mailto:amandakriguer@gmail.com">
          e-mail
          </a>
        </span>
        {` `}
        &nbsp;
        {` `}
        <Link
          aria-label="Link to the author's linkedin"
          href="https://www.linkedin.com/in/amandakriguer/?locale=en_US"
        >
          linkedin
        </Link>
        {` `}
        &nbsp;
        {` `}
        <Link
          aria-label="Link to the author's behance"
          href="https://www.behance.net/amandakriguer"
        >
          behance
        </Link>
      </div>
      <div>
      &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
