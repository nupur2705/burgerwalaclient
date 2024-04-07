import React from 'react'

const OrderDetails = () => {
  return (
   <section className="orderDetails">
   <main>
    <h1>Order Details</h1>
    <div>
        <h1>Shipping </h1>
        <p>
            <b>Address</b>
            {"sjda 12-32ss dsad"}
        </p>
    </div>
    <div>
        <h1>Contact</h1>
        <p>
            <b>Name</b>
            {"Aliya"}
        </p>
    
    
        <p>
            <b>Phone</b>
            {"9709868542"}
        </p>
        </div>
        <div>
        <h1>Status</h1>
        <p>
            <b>Order Status</b>
            {"Processing"}
        </p>
    
    
        <p>
            <b>Placed at</b>
            {"23-03-2024"}
        </p>
        <p>
            <b>Delivered at</b>
            {"23-03-2024"}
        </p>
        </div>
        <div>
        <h1>Payment</h1>
        <p>
            <b>Payment Method</b>
            {"Online"}
        </p>
    
    
        <p>
            <b>Payment Reference</b>
            #{"asghbvdgh"}
        </p>
        <p>
            <b>Paid At</b>
            {"23-03-2024"}
        </p>
        </div>
        <div>
        <h1>Amount</h1>
        <p>
            <b>Items Total</b>
            ₹{2132}
        </p>
        <p>
            <b>Shipping Charges</b>
            ₹{200}
        </p>
        <p>
            <b>GST</b>
            ₹{232}
        </p>
        <p>
            <b>Total Amount</b>
            ₹{2132+200+232}
        </p>
       
        </div>
        <article>
           <h1>Ordered Items</h1> 
           <div>
            <h4>Cheese Burger</h4>
            <div>
                <span>{12}</span>X<span>{250}</span>
            </div>
           </div>
           <div>
            <h4> Cheese Mix  top loaded Veggie Burger</h4>
            <div>
                <span>{10}</span>X<span>{500}</span>
            </div>
           </div>
           <div>
            <h4>Cheese Chicken Tofu Burger with French fries</h4>
            <div>
                <span>{10}</span>X<span>{750}</span>
            </div>
           </div>
           <div><h4 style={{
            fontWeight: 800,
           }}>Sub Total</h4>
          <div style={{
            fontWeight: 800,
           }}>₹{2132}</div>
           </div>
        </article>
   </main>
   </section>
  )
}

export default OrderDetails