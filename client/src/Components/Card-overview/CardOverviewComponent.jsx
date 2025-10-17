import { CardNormalComponent } from "../CardNormal/CardNormalCompoent";
export function CardOverviewComponent({ title, Data }) {
  return (
    <div>
      <h1 className=" text-xl md:text-3xl font-bold my-6 lg:mt-10 lg:mb-8 text-white">
        {title}
      </h1>
      <div className="  w-full flex justify-center  gap-y-6 gap-x-3 sm:gap-x-6  lg:gap-x-8 xl:gap-x-10  items-center flex-wrap">
        {Data ? (
          Data.map((item) => {
            return <CardNormalComponent key={item._id} item={item} />;
          })
        ) : (
          <h1>tesss</h1>
        )}
      </div>
    </div>
  );
}
