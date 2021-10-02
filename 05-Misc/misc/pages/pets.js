import Image from "next/image";

function Pets() {
  return (
    <div>
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            {/* <img src={`/${path}.jpeg`} alt="image" width="280" height="420" /> */}
            <Image src={`/${path}.jpeg`} alt="image" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
}

export default Pets;
