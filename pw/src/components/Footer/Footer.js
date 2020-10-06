/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Footer = ({ children }) => {
  return (
    <footer id="colophon" className="site-footer">
      <section className="footer-block" id="contact-id">
        <div className="footer-block-flex">
          <div>
            <img
              src="https://res.cloudinary.com/ddpjamzmz/image/upload/logo-small.png"
              alt
            />
            <p>
              We provide full service
              <br />
              eyelash extension
              <br />
              and brow shaping.
            </p>
          </div>
          <div>
            <p>
              <span>Address &amp; Phone</span>
            </p>
            <p>
              2041 W Belmont Ave
              <br />
              Chicago, IL, 60618
              <br />
              (224) 423 67 43
            </p>
          </div>
          <div>
            <p>
              <span>Business hours</span>
            </p>
            <p>
              Mon — Fri: 10am — 8pm
              <br />
              Sat: 10am — 5pm
              <br />
              Sun: by appointment only
            </p>
          </div>
          <div>
            <p>
              <span>Social media</span>
            </p>
            <p>
              <a
                href="https://instagram.com/emerald_lashes?igshid=lynbhxc7u72s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <br />
              <a
                href="https://www.facebook.com/emeraldlasheschicago/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <br />
              <a
                href="https://yelp.to/qTKq/qOh9NWqrt5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yelp
              </a>
            </p>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <a
              href="https://www.vagaro.com/emeraldlashes/book-now"
              target="_blank"
            >
              Book online
            </a>
          </div>
          <div>
            <a href="https://www.lashfortech.com/" target="_blank">
              Visit store
            </a>
          </div>
          <div>
            <a href="/training?v=3943d8795e03">Training</a>
          </div>
        </div>
        <div className="footer-credits">
          <p>
            Created by{" "}
            <a href="https://mynydesign.com" target="_blank">
              AntCompany IT
            </a>{" "}
            in Storozhynets
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/ddpjamzmz/image/upload/bottom-left.png"
          alt
          className="leaf-bottom-left"
        />
        <img
          src="https://res.cloudinary.com/ddpjamzmz/image/upload/bottom-right-01.png"
          alt
          className="leaf-bottom-right"
        />
      </section>
    </footer>
  )
}

export default Footer
