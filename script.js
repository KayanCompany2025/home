function myFunction(x) {
  x.classList.toggle("change");
}
const translation = {
  en: {
    Home:  "Home",
    Our_projects: "Our Projects",
    Type_of_floor: "Type of floor That we install",
    about_us: "About us",
    contact_us: "Contact us",
    p_1:"Welcome to kayan campany. \n A campany specialized in floors \n for major national projects.\nUnder the supervision \n of an engineer with 18 years of experience.\n Executive drawings are prepered according to the approved design.\n A team of the most skiled technicians \n specialized in the field of implementing floors.\n-only in Egypt -\n" },
    ar: {
    Home:  "الصفحة الرئيسية",
    Our_projects: "مشاريعنا",
    Type_of_floor: "نوع الأرضيات التي نقوم بتركيبها",
    about_us: "معلومات عنا",
    contact_us: "اتصل بنا",
    p_1:"مرحبا بكم في شركة كيان. \n شركة متخصصة في الأرضيات \n للمشاريع الوطنية الكبرى.\n تحت إشراف مهندس ذو خبرة 18 عامًا.\n يتم إعداد الرسومات التنفيذية وفقًا للتصميم المعتمد.\n فريق من أمهر الفنيين \n المتخصصين في مجال تنفيذ الأرضيات.\n- فقط في مصر -\n"
  },
};
const languageselectop = document.querySelector("select");

let home = document.getElementById("home");
let our_projects = document.getElementById("our_projects");
let type_of_floor = document.getElementById("type_of_floor");
let contact_us = document.getElementById("contact_us");
let about_us = document.getElementById("about_us");
let p_1 = document.getElementById("p_1");

languageselectop.addEventListener("change",(event) => {setlanguage(event.target.value)})
const setlanguage = (language) => {
  if(language == "ar"){
  
    Home.innerText = translation.ar.Home;
    Our_projects.innerText = translation.ar.Our_projects;
    Type_of_floor.innerText = translation.ar.Type_of_floor;
    contact_us.innerText = translation.ar.contact_us;
    about_us.innerText = translation.ar.about_us;
    p_1.innerText = translation.ar.p_1;
  }else if(language == "en"){
    Home.innerText = translation.en.Home;
    Our_projects.innerText = translation.en.Our_projects;
    Type_of_floor.innerText = translation.en.Type_of_floor;
    contact_us.innerText = translation.en.contact_us;
    about_us.innerText = translation.en.about_us;
    p_1.innerText = translation.en.p_1;
  }}