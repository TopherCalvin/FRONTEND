export const Card = () => {
  const input = [
    {
      a: "https://www.olx.co.id/item/honda-hrv-e-spesial-edition-2019-iid-888023425",
      url: "https://apollo-singapore.akamaized.net/v1/files/7ezrlwr0736c1-ID/image;s=300x600;q=60",
      price: "Rp 278.000.00",
      name: "Honda HRV E special edition 2019",
      loc: "Pancoran, Jakarta Selatan",
      posttime: "5 hari yang lalu",
    },
    {
      a: "https://www.olx.co.id/item/look-madison-875-rs-2022-iid-888683692",
      url: "https://apollo-singapore.akamaized.net/v1/files/bf0hgrldmg5j2-ID/image;s=300x600;q=60",
      price: "Rp 55.000.000",
      name: "LOOK Madison 875 RS 2022",
      loc: "Cilandak, Jakarta Selatan",
      posttime: "27 Feb",
    },
    {
      a: "https://www.olx.co.id/item/ducati-dessert-sled-blue-iid-888931786",
      url: "https://apollo-singapore.akamaized.net/v1/files/za4k4v26m7jb3-ID/image;s=300x600;q=60",
      price: "Rp 390.000.000",
      name: "Ducati Dessert Sled Blue",
      loc: "Kebayoran Lama, Jakarta Selatan",
      posttime: "02 Mar",
    },
    {
      a: "https://www.olx.co.id/item/nissan-livina-manual-2019-iid-890253974",
      url: "https://apollo-singapore.akamaized.net/v1/files/pxi79mzoc9r81-ID/image;s=300x600;q=60",
      price: "Rp 158.000.000",
      name: "Nissan Livina Manual 2019",
      loc: "Cilandak, Jakarta Selatan",
      posttime: "15 Mar",
    },
    {
      a: "https://www.olx.co.id/item/cashcredit-yamaha-lexi-125-2019dp-cuma-1-jt-iid-891583740",
      url: "https://apollo-singapore.akamaized.net/v1/files/ouycpbd48xmd3-ID/image;s=300x600;q=60",
      price: "Rp 17.500.000",
      name: "*CASH&CREDIT* YAMAHA LEXI 125 2019*DP CUMA 1 JT",
      loc: "Kebayoran Baru, Jakarta Selatan",
      posttime: "Hari ini",
    },
    {
      a: "https://www.olx.co.id/item/dijual-rukan-permata-senayan-jakarta-selatan-iid-874672247",
      url: "https://apollo-singapore.akamaized.net/v1/files/lltr4kag4hxl2-ID/image;s=300x600;q=60",
      price: "Rp 10.500.000.000",
      name: "Dijual Rukan Permata Senayan Jakarta Selatan",
      loc: "Kebayoran Lama, Jakarta Selatan",
      posttime: "Hari ini",
    },
  ];
  return (
    <ul className="cardspace">
      {input.map((val) => (
        <Item {...val} />
      ))}
    </ul>
  );
};
function Item(props) {
  return (
    <li>
      <a href={props.a}>
        <figure>
          <img src={props.url} alt="item" />
        </figure>
        <div className="pine">
          <span className="price">{props.price}</span>
          <span className="name">{props.name}</span>
          <div className="loti">
            <span className="loc">{props.loc}</span>
            <span className="posttime">{props.posttime}</span>
          </div>
        </div>
      </a>
    </li>
  );
}
