import { partner } from '../assets/partner';
const Partner = () => {
  console.log(partner);
  return (
    <div className="mt-10 mb-5">
      <h1 className="text-center text-3xl font-bold">Our Parthers</h1>
      <div>
        <marquee>
          <div className="flex flex-row gap-10 py-5 px-5 h-[50px] ">
            {partner.map((item, index) =>
              item !== 0 ? (
                <div key={index}>
                  <img src={item.img} alt="" />
                </div>
              ) : (
                'not found'
              ),
            )}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Partner;
