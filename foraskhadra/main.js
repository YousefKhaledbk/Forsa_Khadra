
/* ===========================
   Initial Render
=========================== */

renderCards(opportunities);

const burgerBtn =
document.getElementById("burgerBtn");

const navLinks =
document.querySelector(".navbar__links");

burgerBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// card content
const opportunities = [
{
    id:1,
    title:"منحة القيادة البيئية 2026",
    type:"منحة",
    country:"ألمانيا",
    deadline:"15 أغسطس 2026",
    funding:"ممولة بالكامل"
},

{
    id:2,
    title:"برنامج التدريب الأخضر الدولي",
    type:"تدريب",
    country:"هولندا",
    deadline:"10 سبتمبر 2026",
    funding:"ممولة جزئياً"
},

{
    id:3,
    title:"مسابقة الابتكار المناخي",
    type:"مسابقة",
    country:"الإمارات",
    deadline:"30 يوليو 2026",
    funding:"غير ممولة"
},

{
    id:4,
    title:"منحة الاستدامة العالمية",
    type:"منحة",
    country:"كندا",
    deadline:"22 أكتوبر 2026",
    funding:"ممولة بالكامل"
},

{
    id:5,
    title:"تدريب الطاقة المتجددة",
    type:"تدريب",
    country:"السويد",
    deadline:"5 نوفمبر 2026",
    funding:"ممولة بالكامل"
},

{
    id:6,
    title:"مسابقة رواد البيئة",
    type:"مسابقة",
    country:"قطر",
    deadline:"18 أغسطس 2026",
    funding:"ممولة جزئياً"
},

{
    id:7,
    title:"منحة الاقتصاد الأخضر",
    type:"منحة",
    country:"فرنسا",
    deadline:"12 ديسمبر 2026",
    funding:"ممولة بالكامل"
},

{
    id:8,
    title:"برنامج تدريب المناخ والشباب",
    type:"تدريب",
    country:"فنلندا",
    deadline:"1 أكتوبر 2026",
    funding:"ممولة جزئياً"
}
];

const opportunitiesContainer =
document.getElementById("opportunitiesContainer");

const searchInput =
document.getElementById("searchInput");

const typeFilter =
document.getElementById("typeFilter");

const fundingFilter =
document.getElementById("fundingFilter");

const resultsCount =
document.getElementById("resultsCount");

const emptyState =
document.getElementById("emptyState");

/* ===========================
   Render Cards
=========================== */

function renderCards(data){

    opportunitiesContainer.innerHTML = "";

    if(data.length === 0){

        emptyState.classList.remove("hidden");

        resultsCount.textContent =
        "عدد الفرص المتاحة: 0";

        return;
    }

    emptyState.classList.add("hidden");

    resultsCount.textContent =
    `عدد الفرص المتاحة: ${data.length}`;

    data.forEach(opportunity => {

        let badgeClass = "";

        if(opportunity.funding === "ممولة بالكامل"){
            badgeClass = "full";
        }

        else if(opportunity.funding === "ممولة جزئياً"){
            badgeClass = "partial";
        }

        else{
            badgeClass = "none";
        }

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        
            <h3 class="card-title">
                ${opportunity.title}
            </h3>

            <div class="card-info">
                <span>📌</span>
                <span>${opportunity.type}</span>
            </div>

            <div class="card-info">
                <span>🌍</span>
                <span>${opportunity.country}</span>
            </div>

            <div class="card-info">
                <span>📅</span>
                <span>${opportunity.deadline}</span>
            </div>

            <div class="card-footer">

                <span class="badge ${badgeClass}">
                    ${opportunity.funding}
                </span>

            </div>

        `;

        opportunitiesContainer.appendChild(card);

    });

}

/* ===========================
   Filters
=========================== */

function filterOpportunities(){

    const searchValue =
    searchInput.value.toLowerCase().trim();

    const selectedType =
    typeFilter.value;

    const selectedFunding =
    fundingFilter.value;

    const filteredData =
    opportunities.filter(item => {

        const matchesSearch =
        item.title
        .toLowerCase()
        .includes(searchValue);

        const matchesType =
        selectedType === "all" ||
        item.type === selectedType;

        const matchesFunding =
        selectedFunding === "all" ||
        item.funding === selectedFunding;

        return (
            matchesSearch &&
            matchesType &&
            matchesFunding
        );

    });

    renderCards(filteredData);

}

/* ===========================
   Events
=========================== */

searchInput.addEventListener(
    "input",
    filterOpportunities
);

typeFilter.addEventListener(
    "change",
    filterOpportunities
);

fundingFilter.addEventListener(
    "change",
    filterOpportunities
);

