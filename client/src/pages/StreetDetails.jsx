import StreetLightDetails from "../components/streetLightDetails";
import styles from "./StreetDetails.module.css";

function StreetDetails() {
  return (
    <>
      <h1 className={styles.heading}>Track your Streetlight details</h1>
      <StreetLightDetails
        name="A1"
        imgSrc="https://media.istockphoto.com/id/532190428/photo/shining-lamps-post.jpg?s=612x612&w=0&k=20&c=v1s2EMoirBoion0BzUtpluy5oqxgfXObtwdhDgYgP0M="
      />
      <StreetLightDetails
        name="A2"
        imgSrc="https://tapetum.in/cdn/shop/products/nightjar_cd879e23-01b9-43c8-a787-15a57496f1dd_1024x1024@2x.png?v=1623225146"
      />
      <StreetLightDetails
        name="A3"
        imgSrc="https://i.pinimg.com/564x/a1/38/4b/a1384b89b787a7e1e0f44fe64d6f9115.jpg"
      />
    </>
  );
}

export default StreetDetails;
