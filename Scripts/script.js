Math.random() * 27;
var salam = Math.floor(Math.random() * 27);
const myList = ["امیرپارسا احمدلو", "آروین احمدی", "محمد ایلیا افلاکی", "پارسا اقدامی", "بردیا امیریان", "شایان آزادی", "محمدصدرا برهانی", "محمدرضا تبرکی",
    "امیرعلی حسین زاده", "داریوش حکیم", "پارسا رضایی", "علیرضا رمضانی راد", "یاسین زراعتی", "امیرطاها زمانزاده", "بهبد سلیمی", "محمدرضا شادالوئی",
    "آیدین صحرایی", "ابوالفضل طارمی", "یاسین طالبیان", "شایان عزیزی", "بهزاد عفیفی پور", "امیرعلی کاموس", "پارسا کرمی", "عرفان محمدزاده", "کسری موسی زاده",
    "امیرحسین میردامادی", "امیرمهدی نوری"]

document.getElementById("demo").innerHTML = myList[salam];

function felan () {
    var randomNumber = Math.floor(Math.random() * 27);
    var randomStudent = myList[randomNumber];
    document.getElementById("printRandomStudent").innerHTML = randomStudent
}

