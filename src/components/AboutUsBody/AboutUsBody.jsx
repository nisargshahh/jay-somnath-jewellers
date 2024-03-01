import "./AboutUsBody.css";

const AboutUsPage = () => {
  return (
    <div className="we-are-block">
      <div id="about-us-section">
        <div className="about-us-image">
          <img
            src="../../src/assets/Website_photos/Website_photos/10.png"
            width="600"
            height="500"
            alt="Jay Somnath Jewellers"
          />
        </div>
        <div className="about-us-info">
          <h2>Unveiling the Legacy of Timeless Beauty and Precision</h2>

          <p>
            In the heart of exquisite craftsmanship and timeless elegance stands
            Jay Somnath Jewellers, a beacon of sophistication in the world of
            fine jewelry. Established in 1991, our journey has been one marked
            by passion, precision, and an unwavering commitment to transforming
            dreams into handcrafted masterpieces. At the core of Jay Somnath
            Jewellers lies a legacy steeped in tradition and adorned with the
            brilliance of artistic innovation. Founded in 1991 by visionary
            jeweler Mr. Somnath Patel, the brand has grown from a humble
            inception to a celebrated name synonymous with opulence and
            precision.
          </p>
        </div>
      </div>
      <div className="blank-space"></div>

      <div id="history-section">
        <div className="history-image">
          <img
            src="../../src/assets/Website_photos/Website_photos/2.png"
            width="600"
            height="500"
            alt="Jay Somnath Jewellers"
          />
        </div>

        <div className="history-info">
          <h2>A Symphony of Design and Innovation</h2>

          <p>
            The design philosophy at Jay Somnath Jewellers is a harmonious blend
            of tradition and innovation. We draw inspiration from the rich
            tapestry of Indian heritage, infusing it with modern sensibilities
            to create pieces that are both classic and contemporary. Our design
            team, a coterie of visionaries, is driven by a relentless pursuit of
            perfection. From the initial sketch to the final product, every
            piece undergoes a journey of refinement and innovation. The result
            is a collection that transcends trends, appealing to the
            connoisseurs of timeless beauty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
