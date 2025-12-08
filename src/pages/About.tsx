export default function About() {
  return (
    <div className="about-page" style={{ maxWidth: "750px", margin: "0 auto" }}>

      <h1> Goldendoodle Puppies Ready for Their Forever Homes! </h1>

      <p>
        We have <strong>9 adorable Goldendoodle puppies</strong> available—{" "}
        <strong>5 girls and 4 boys</strong>.
      </p>

      <p>
        <strong>Girls:</strong> Red, White, Purple, Mint, Yellow
        <br />
        <strong>Boys:</strong> Black, Blue, Brown, Green
      </p>

      <p>
        These sweet pups are now ready to go home!
      </p>

      <hr />

      <h2>🐶 About the Puppies</h2>
      <ul>
        <li>
          Raised in a loving home &amp; already working on{" "}
          <strong>litter pan training</strong> (started at 5 weeks!)
        </li>
        <li>
          <strong>Allergy-friendly, non-shedding coats</strong>
        </li>
        <li>
          Come with <strong>first round of vaccines</strong> and{" "}
          <strong>deworming done</strong>
        </li>
        <li>
          Expected adult weight: <strong>35–40 lbs</strong> (mom is ~35, dad is ~40)
        </li>
        <li>
          Will <strong>not</strong> come spayed/neutered
        </li>
      </ul>

      <hr />

      <h2>📍 Pickup &amp; Delivery Options</h2>
      <p>
        We are located in <strong>Provo, Utah</strong>, and are happy to{" "}
        <strong>meet halfway</strong> for Utah families.
      </p>
      <p>
        Traveling further south? We will be driving to{" "}
        <strong>Las Vegas the weekend before Christmas</strong> — perfect for families
        in Vegas or St. George!
      </p>

      <hr />

      <h2>🐾 Reserving a Puppy</h2>
      <h3><strong>Please contact us using the information in the contact page</strong></h3>
      <ul>
        <li>
          <strong>50% non-refundable deposit</strong> to reserve a specific puppy for
          more than one week (through December 20 in Utah; slightly later for
          Vegas/St. George pickups)
        </li>
        <li>
          <strong>25% non-refundable deposit</strong> to hold a puppy for{" "}
          <strong>less than one week</strong>
        </li>
        <li>No deposit required for same day or next day pickup</li>
      </ul>
      <a
        className="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfFMgq2DekFJgc7sPLDrbngpqMusdNRUqiSlC6mRIbGPtIW6A/viewform?usp=header"
        target="_blank"
        style={{ marginTop: "1.5rem", display: "inline-block" }}
      >
        Apply for a Puppy
      </a>
    </div>
  );
}
