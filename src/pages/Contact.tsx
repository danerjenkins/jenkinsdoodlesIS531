export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <p style={{ marginTop: "1rem", maxWidth: "600px" }}>
        We're happy to answer questions or help you find the right puppy for 
        your family.
      </p>

      <div style={{ marginTop: "1.5rem", fontSize: "1rem" }}>
        <p><strong>Email:</strong> danerogerjenkins@gmail.com</p>
        <p><strong>Phone:</strong> (702)767-3350</p>
        <p><strong>Location:</strong> Provo, UT</p>
      </div>

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
