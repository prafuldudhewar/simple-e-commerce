import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="dscriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital 
                products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, 
             a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
             <p>The scope of the e-commerce website project encompasses the development of a user-friendly online platform 
                allowing customers to register, browse products, add items to their cart, securely process payments, and manage orders.
             Additionally, the project will include an admin dashboard for managing products, orders, and user accounts. Non-functional
             aspects such as performance, security, scalability, reliability, accessibility, compatibility, usability, and regulatory 
            compliance will be prioritized to ensure a seamless and satisfying shopping experience for users while meeting industry standards and legal requirements.</p>
        </div>
    </div>
  )
}

export default DescriptionBox