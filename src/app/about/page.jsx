import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      <Image
        src={"/Remon Hassan.jpg"}
        height={300}
        width={300}
        alt="Remon Hassan"
      ></Image>
      <Image
        src={"/images/IMG_0033.jpg"}
        height={300}
        width={300}
        alt="Remon Hassan"
      ></Image>
      <Image
        src="https://i.ibb.co.com/chp80pgP/Handbag-Pro.png"
        height={300}
        width={300}
        alt="hand Bag"
      ></Image>
      <Image
        src="https://images.unsplash.com/photo-1787765977827-44dcefaefdaf"
        height={300}
        width={300}
        alt="Orange Sky"
      ></Image>
    </div>
  );
};

export default AboutPage;
