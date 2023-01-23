import React, { useEffect, useState } from 'react';
import db from '../firebase';
import './PlanScreen.css';
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function PlanScreen() {
  const [products, setProducts] = useState({});
  const user = useSelector(selectUser);
  const [subscription, setSubscription]= useState(null);


  useEffect(()=>{
    db.collection('customers')
    .doc(user.uid)
    .collection('subscriptions')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(async (subscription) => {
            setSubscription({
              role: subscription.data().role,
              current_period_end: subscription.data().current_period_end
              .seconds,
              current_period_start: subscription.data().current_period_end
              .seconds,
            });

      })
    })

  }, [user.uid]);

  console.log(subscription);

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then(querySnapshot => {
        const products = {};
        querySnapshot.forEach(async productDoc => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach(price => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data()
            };
          });
        });
        setProducts(products);
        console.log(products);
      })
      .catch(error => {
        console.log('Error fetching products: ', error);
      });
  }, []);

  console.log(subscription);
  const loadCheckout = async (priceId) => {
    console.log('loadCheckout function called');
    const docRef = await db.collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
      price: priceId,
      success_url:window.location.origin,
      cancel_url:window.location.origin,
  
      });
    docRef.onSnapshot(async(snap) =>{ 
      const {error, sessionId} = snap.data(); 
  
      if (error) {
        //show an error to your customer and
        //inspect your cloud function logs inthe Firebase console.
        alert(`An error occured: ${error.message}`);
      }
  
      if (sessionId) {
        
        //we have a session, lets redirect to checkout
        //init stripe
  
        const stripe = await loadStripe("pk_test_51MS0t5B2Q2Sv9OKuJGfXyccMh0tDxdhoLx2jTr1XxozWzAo5EUUpmV5n18oEk3otSug0bP0EVd672tWqD1rCNn4I00W5yvovus")/*publishable key*/ 
  
        stripe.redirectToCheckout({sessionId});
      }
    });
  };

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {

        const isCurrentPackage= productData.name
        ?.toLowerCase()
        .includes(subscription?.role);

        return (
          <div className="planScreen_plan">
            <div className="planScreen_info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button 
              onClick={() => 
                  !isCurrentPackage && loadCheckout(productData.prices.priceId)
                }
              >
                  {isCurrentPackage ? "Current Package":"subscribe"}
                
                
            </button>
              
          </div>
        );
      })}
    </div>
  );
}

export default PlanScreen;
