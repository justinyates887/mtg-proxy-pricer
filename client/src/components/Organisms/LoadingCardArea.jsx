import { LoadingCard } from "../Molecules";

export function LoadingCardArea() {
  const numLoadingCards = 12;

  return (
    <div className="row justify-content-center p-0 m-0" style={{ maxWidth: "100vw"}}>
      {Array.from({ length: numLoadingCards }).map((_, index) => (
        <div key={index} className="col-lg-3 col-md-3 col-sm-6 p-0 m-0" style={{width: "250px"}}>
          <LoadingCard />
        </div>
      ))}
    </div>
  );
}
