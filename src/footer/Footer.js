import React from 'react'
import './footer.css'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <div className='footer'>
                <div className="footer_moveToTop" onClick={scrollToTop}>
                    <ArrowDropUpIcon />
                    Back to top
                </div>
                <div className="footer_content">
                    <div className="footer_content_item">
                        <h3>Get to Know Us</h3>
                        <div className="footer_items_detail">
                            About Us
                        </div>
                        <div className="footer_items_detail">
                            Careers
                        </div>
                        <div className="footer_items_detail">
                            Press Releases
                        </div>
                        <div className="footer_items_detail">
                            Amazon Cares
                        </div>
                        <div className="footer_items_detail">
                            Gift a Smile
                        </div>
                    </div>
                    <div className="content_first">
                        <h3>Connect with Us</h3>
                        <div className="footer_items_detail">
                            Facebook
                        </div>
                        <div className="footer_items_detail">
                            Twitter
                        </div>
                        <div className="footer_items_detail">
                            Instagram
                        </div>
                    </div>
                    <div className="content_first">
                        <h3>Make Money with Us</h3>
                        <div className="footer_items_detail">
                            Sell on Amazon
                        </div>
                        <div className="footer_items_detail">
                            Sell under Amazon Accelerator
                        </div>
                        <div className="footer_items_detail">
                            Amazon Global Selling
                        </div>
                        <div className="footer_items_detail">
                            Become an Affiliate
                        </div>
                        <div className="footer_items_detail">
                            Fulfilment by Amazon
                        </div>
                        <div className="footer_items_detail">
                            Advertise Your Products
                        </div>
                        <div className="footer_items_detail">
                            Amazon Pay on Merchants
                        </div>
                    </div>
                </div>
                <img className="footer_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo" />
            </div>
            <div className="footer_copyright">
                <p>Conditions of Use & SalePrivacy NoticeInterest-Based Ads© 1996-2021, Amazon-clone, Inc. or its affiliates</p>
            </div>
        </>
    )
}

export default Footer
