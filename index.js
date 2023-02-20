import {imageSlider} from "./imageSlider.js"
// console.log(imageSlider);

const imageSliderlistEl = document.querySelector(".imageSliderList");
let imagesliderHtml = "";

imageSlider.forEach(el => {
  // console.log(el);
  imagesliderHtml += `
  <div class="imageSliderItem">
      <a href="${el.link}"> 
      <img src="${el.img1}"/>  
      </a>
  </div>
  `
})

imageSliderlistEl.innerHTML = imagesliderHtml;



/* ************************************** */
let renderProduct = '';
let cardProductContainer = document.getElementById('card-product-container');

const electronicsProductData = [
  {
      img : "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
      productName : "Monitor",
      discount : "From ₹8279",
      brand : "DELL",
      link : "https://www.flipkart.com/computers/computer-components/monitors/pr?sid=6bo%2Cg0i%2C9no&fm[]=neo%2Fmerchandising&fm[]=neo%2Fmerchandising&iid[]=M_ce1a6f68-d7d2-4ae1-875c-0d0877d9a11f_2_372UD5BXDFYS_MC.ECL5SFI77NSY&iid[]=M_6ad97ab4-df02-4176-9721-2e6fea12352c_3.BK9ZVR1JH3RT&otracker1[]=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all&otracker1[]=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_1_NA_view-all_3&cid[]=ECL5SFI77NSY&cid[]=BK9ZVR1JH3RT&p[]=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p[]=facets.brand%255B%255D%3DDELL&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTgyNzkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNb25pdG9yIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiTU9OR1lERlFFMkpKSE5GMyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&ssid=78n0zyd2gw0000001670247116621&otracker=hp_omu_Best%2Bof%2BElectronics_1_3.dealCard.OMU_BK9ZVR1JH3RT_3"
  },
  {
      img : "https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70",
      productName : "Top Mirrorless Cameras",
      discount : "Shop Now!",
      brand : "Canon, Sony, Fujifilm...",
      link : "https://www.flipkart.com/cameras/dslr-mirrorless/pr?sid=jek%2Cp31%2Ctrv&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.type%255B%255D%3DMirrorless&param=179&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTaG9wIE5vdyEiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgTWlycm9ybGVzcyBDYW1lcmFzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiRExMRjZRWlBOS1RRTVM4SiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_6ad97ab4-df02-4176-9721-2e6fea12352c_3.Q5LU1U8PHMK6&ssid=78n0zyd2gw0000001670247116621&otracker=hp_omu_Best%2Bof%2BElectronics_2_3.dealCard.OMU_Q5LU1U8PHMK6_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_2_NA_view-all_3&cid=Q5LU1U8PHMK6"
  },
  {
      img : "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      productName : "Printers",
      discount : "From ₹3999",
      brand : "HP",
      link : "https://www.flipkart.com/computers/computer-peripherals/printers-inks/printers/pr?sid=6bo%2Ctia%2Cffn%2Ct64&fm=neo%2Fmerchandising&iid=M_2731d14e-2583-4664-a065-6fc7ea504a6d_2_372UD5BXDFYS_MC.ES1XN5J8PT49&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L2_view-all&cid=ES1XN5J8PT49&p%5B%5D=facets.fulfilled_by%255B%255D%3DFlipkart%2BAssured&p%5B%5D=facets.brand%255B%255D%3DHP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTM5OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcmludGVycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBSTkRYSFpFNVI5SFVKSlkiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&fm=neo%2Fmerchandising&iid=M_6ad97ab4-df02-4176-9721-2e6fea12352c_3.D54DFY00C5JD&ssid=78n0zyd2gw0000001670247116621&otracker=hp_omu_Best%2Bof%2BElectronics_3_3.dealCard.OMU_D54DFY00C5JD_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_3_NA_view-all_3&cid=D54DFY00C5JD"
  },
  {
      img : "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
      productName : "Monitor",
      discount : "From ₹8279",
      brand : "One Plus",
      link : "https://www.flipkart.com/jek/~cs-w77jvamsdn/pr?sid=jek&collection-tab-name=Only+Camera+Accessories&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTaG9wIE5vdyEiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgRGVhbHMgb2YgQ2FtZXJhIEFjY2Vzc29yaWVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiR0lNRzVRR1pNWTRBWERKRyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX19fX0%3D&fm=neo%2Fmerchandising&iid=M_6ad97ab4-df02-4176-9721-2e6fea12352c_3.YDDB3BMWGV3J&ssid=78n0zyd2gw0000001670247116621&otracker=hp_omu_Best%2Bof%2BElectronics_4_3.dealCard.OMU_YDDB3BMWGV3J_3&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_4_NA_view-all_3&cid=YDDB3BMWGV3J"
  },
  {
      img : "https://rukminim1.flixcart.com/image/400/400/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      productName : "Printers",
      discount : "from ₹3369",
      brand : " For Top Models"
  },
  {
      img : "https://rukminim1.flixcart.com/image/400/400/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70",
      productName : "Power Bank",
      discount : "From ₹8279",
      brand : "DELL"
  },
  {
      img : "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
      productName : "Monitor",
      discount : "From ₹8279",
      brand : "DELL"
  },
  {
      img : "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
      productName : "Monitor",
      discount : "From ₹8279",
      brand : "DELL"
  },
]

for(let i = 0 ; i < electronicsProductData.length; i++){
  renderProduct +=
  `<li class="card-product">
    <img src="${electronicsProductData[i].img}">
    <h3 class="productName">${electronicsProductData[i].productName}</h3>
    <p class="productPrice">${electronicsProductData[i].discount}</p>
    <p class="productDesc">${electronicsProductData[i].brand}</p>
  </li>`

  // console.log(renderProduct);
}
cardProductContainer.innerHTML = renderProduct;


// top offers

let renderProduct1 = '';
const topProductContainer = document.getElementById('section-4-list');

const images1 = [
  {
    img1 : "https://rukminim1.flixcart.com/image/400/400/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
    productName1 : "Stationary",
    discount1 : "From ₹49",
    desc : "pens,notebooks and more",
  },
  {
    img1 : "https://rukminim1.flixcart.com/image/400/400/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70",
    productName1 : "String Instrument",
    discount1 : "Up to 40% Off",
    desc : "Guitars....",
  },
  {
    img1 : "https://rukminim1.flixcart.com/image/400/400/jjolt3k0/ball/j/b/6/400-22-5-country-colour-1-1360br-football-nivia-original-imaf746mud9cxqgh.jpeg?q=70",
    productName1 : "Premium Football",
    discount1 : "Up to 60% Off",
    desc : "Nivia,Cosco and more",
  },
  {
    img1 : "https://rukminim1.flixcart.com/image/400/400/jjolt3k0/ball/j/b/6/400-22-5-country-colour-1-1360br-football-nivia-original-imaf746mud9cxqgh.jpeg?q=70",
    productName1 : "Premium Football",
    discount1 : "Up to 60% Off",
    desc : "Nivia,Cosco and more",
  },
  {
    img1 : "https://rukminim1.flixcart.com/image/400/400/kbzergw0/instant-camera/m/h/u/instax-instant-camera-mini-11-fujifilm-original-imaft7fpfzkcsequ.jpeg?q=70",
    productName1 : "Instax camera",
    discount1 : "From ₹3,999",
    desc : "Capture your unique moments",
  },
  {
    img1 : "https://rukminim1.flixcart.com/image/400/400/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=70",
    productName1 : "Monitor",
    discount1 : "From ₹8279",
    desc : "DELL",
  },
  {
      img1 : "https://rukminim1.flixcart.com/image/400/400/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70",
      productName1 : "Soft Toys",
      discount1 : "Upto 70% off",
      desc : "Stuffed toys and plushed toys",
  }
];

for(let i = 0 ; i < images1.length; i++){
  renderProduct1 += `
  <li class="card-product">
    <img src="${images1[i].img1}">
    <h4 class="productName1">${images1[i].productName1}</h4>
    <p class="productPrice1">${images1[i].discount1}</p>
    <p class="productDesc1">${images1[i].desc}</p>
  </li>
  `
}

topProductContainer.innerHTML = renderProduct1;