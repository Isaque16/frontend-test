export default function Statics() {
  return (
    <section className="p-15 flex flex-col content-around md:flex-row md:justify-around gap-10 bg-dark-blue text-yellow-strong">
      <div className="flex flex-col items-center">
        <img src="src/assets/icons/heart.svg" alt="Heart" />
        <h6 className="text-7xl">195</h6>
        <p>User countries</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="src/assets/icons/diamond.svg" alt="Diamond" />
        <h6 className="text-7xl">1M</h6>
        <p>Valued teachers</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="src/assets/icons/hat.svg" alt="Hat" />
        <h6 className="text-7xl">17M</h6>
        <p>Happy students</p>
      </div>
    </section>
  );
}
