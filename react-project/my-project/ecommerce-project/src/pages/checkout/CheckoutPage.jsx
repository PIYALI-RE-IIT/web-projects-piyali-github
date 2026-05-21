import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import "./checkoutHeader.css";
import "./CheckoutPage.css";
import CheckoutLockIcon from "../../assets/images/icons/checkout-lock-icon.png";
import Logo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/mobile-logo.png";
import { PaymentSummary } from "./PaymentSummary";
import { DeliveryOptions } from "./DeliveryOptions";
import { OrderSummary } from "./OrderSummary";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const deliveryOptionsData = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
    };

    const paymentSummaryData = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    deliveryOptionsData();
    paymentSummaryData();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={Logo} />
              <img className="mobile-logo" src={MobileLogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src={CheckoutLockIcon} />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          {/* <div className="order-summary">
                        {deliveryOptions.length > 0 && cart.map((cartItem) => {

                            const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                                return deliveryOption.id === cartItem.deliveryOptionId;
                            })

                            return (
                                <div key={cartItem.productId} className="cart-item-container" >
                                    <div className="delivery-date">
                                         Delivery date: {dayjs(selectedDeliveryOption.
                                        estimatedDeliveryTimeMs).format('dddd, MMMM D')} 
                                    </div>

                                    <div className="cart-item-details-grid">
                                        <img className="product-image"
                                            src={cartItem.product.image} />

                                        <div className="cart-item-details">
                                            <div className="product-name">
                                                {cartItem.product.name}
                                            </div>
                                            <div className="product-price">
                                                {formatMoney(cartItem.product.priceCents)}
                                            </div>
                                            <div className="product-quantity">
                                                <span>
                                                    Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                                </span>
                                                <span className="update-quantity-link link-primary">
                                                    Update
                                                </span>
                                                <span className="delete-quantity-link link-primary">
                                                    Delete
                                                </span>
                                            </div>
                                        </div>

                                        <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} />
                                    </div>
                                </div>
                            );
                        })}

                    </div> */}
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
