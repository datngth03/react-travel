import React from "react";
import styled from "styled-components";
import cuba from "../assets/cubacity.jpg";
import paris from "../assets/pariscity.jpg";
import japan from "../assets/Japan.jpg";
import Button from "./Button";
export default function Destinations() {
   const handleDiscoverMore = () => {
      // Redirect to the specified URL when the button is clicked
      window.open("https://travel.usnews.com/rankings/worlds-best-vacations/", "_blank");
      console.log("clicked!");
   };

   const data = [
      {
         name: "Cuba City",
         image: cuba,
      },
      {
         name: "Paris",
         image: paris,
      },
      {
         name: "Japan",
         image: japan,
      },
   ];
   return (
      <Section id="destination">
         <div className="info">
            <h2>
               Top <span>Destinations</span> In The World
            </h2>
            <p>
               It is a long established fact that a reader will be distracted by the readable
               content of a page when looking at its layout from it.
            </p>
            <Button id="button" text="Discover More" onClick={handleDiscoverMore} />
         </div>

         <div className="destinations">
            {data.map(({ name, image }) => {
               return (
                  <div className="destination" key={name}>
                     <div className="image">
                        <img src={image} alt="destinations" />
                     </div>
                     <div className="name">
                        <h3>{name}</h3>
                     </div>
                  </div>
               );
            })}
         </div>
      </Section>
   );
}

const Section = styled.section`
   display: flex;
   gap: 5rem;
   .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 3rem;
      h2 {
         font-size: 3rem;
         line-height: 3rem;
         span {
            color: var(--primary-color);
         }
      }
      p {
         color: var(--secondary-text);
      }
      #button {
         &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
         }
         border-radius: 10px; // Adjust the border-radius as needed
            overflow: hidden;
      }
   }
   .destinations {
      flex: 2;
      display: flex;
      gap: 2rem;
      .destination {
         position: relative;
         img {
            width: 100%;
            height: 20rem;
            // object-fit: contain;
            border-radius: 10px; // Adjust the border-radius as needed
            // overflow: hidden;
            
         }
         &:hover {
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 10px; // Adjust the border-radius as needed
            overflow: hidden;
         }
         .name {
            position: absolute;
            bottom: 0rem;
            height: 100%;
            width: 100%;
            background: linear-gradient(
               to bottom,
               #ffffff14,
               #000000ae
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            display: flex;
            flex-direction: column-reverse;
            h3 {
               margin-left: 1rem;
               font-size: 1.5rem;
               color: white;
            }
            border-radius: 10px; // Adjust the border-radius as needed
            overflow: hidden;
         }
      }
   }
   @media screen and (min-width: 280px) and (max-width: 1080px) {
      margin: 0rem 2rem;
      flex-direction: column;
      gap: 3rem;
      .destinations {
         flex-direction: column;
         .destination {
            img {
               width: 100%;
            }
         }
      }
   }
`;
