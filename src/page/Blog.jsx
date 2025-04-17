import React from 'react'
import { Link } from 'react-router-dom';

function Blog() {
    return (
        <div>
            <div className="header_absolute cover-background ds s-overlay s-parallax">
                <section className="page_title ds s-py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="bold">All Blog</h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active"> Blog</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section>
                <div className="opportunity_div_4 py-5 bg-graphic">
                    <div className="container">
                        <div className='blog-single'>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog