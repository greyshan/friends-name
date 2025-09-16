// Image pairs (1↔2, 3↔4, 5↔6, 7↔8)
const imagePairs = [
  { images: ["project img 1.jpg","partner 2.jpg"], titles: ["GULSHAN","GULSHAN'S friend"], descs: ["Friendly, Creative, Reliable","Honest, Respectful, Supportive"] },
  { images: ["project img 2.jpg","partner 1.jpg"], titles: ["RIDDHI","RIDDHI'S friend"], descs: ["Calm, Thoughtful, Supportive","Brave, Calm, Dependable"] },
  { images: ["project img 3.jpg","partner 4.jpg"], titles: ["AMRIT","AMRIT'S GF"], descs: ["Energetic, Positive, Adaptable","Gentle, Wise, Steady"] },
  { images: ["project img 4.jpg","partner 3 updated.jpg"], titles: ["SNEHA","SNEHA'S BF"], descs: ["Focused, Kind, Honest","Positive, Loyal, Trustworthy"] },
  { images: ["project img 5.jpg","partner 6.jpg"], titles: ["AAKASH","AAKASH KI SAPNO KI RANI"], descs: ["Cheerful, Helpful, Dependable","Friendly, Patient, Caring"] },
  { images: ["project img 6.jpg","partner 5 updated.jpg"], titles: ["NISHITA","NISHITA'S TO BE BOYFRIEND"], descs: ["Patient, Warm, Organized","Friendly, Patient, Caring"] },
  { images: ["project img 7.jpg","partner 8.jpg"], titles: ["KISHORE","KISHORE'S LIFE"], descs: ["Curious, Bright, Caring","Reliable, Thoughtful, Bright"] },
  { images: ["project img 8.jpg","partner 7.jpg"], titles: ["SUBHRA","SUBHRA'S PATI JAISA DOST"], descs: ["Resourceful, Fair, Steady","Warm, Helpful, Sincere"] },
];

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

let currentIndex = null;
let toggleState = 0;

// Open modal on slider image click
document.querySelectorAll(".slider .item img").forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    toggleState = 0;
    const pair = imagePairs[index];
    modalImg.src = pair.images[toggleState];
    modalTitle.textContent = pair.titles[toggleState];
    modalDesc.textContent = pair.descs[toggleState];
    modal.style.display = "block";
  });
});

// Flip between partner images
modalImg.addEventListener("click", () => {
  if (currentIndex !== null) {
    const pair = imagePairs[currentIndex];
    toggleState = toggleState === 0 ? 1 : 0;
    modalImg.classList.add("fade-out");
    modalTitle.classList.add("fade-out");
    modalDesc.classList.add("fade-out");
    setTimeout(() => {
      modalImg.src = pair.images[toggleState];
      modalTitle.textContent = pair.titles[toggleState];
      modalDesc.textContent = pair.descs[toggleState];
      modalImg.classList.remove("fade-out");
      modalTitle.classList.remove("fade-out");
      modalDesc.classList.remove("fade-out");
      modalImg.classList.add("fade-in");
      modalTitle.classList.add("fade-in");
      modalDesc.classList.add("fade-in");
      setTimeout(() => {
        modalImg.classList.remove("fade-in");
        modalTitle.classList.remove("fade-in");
        modalDesc.classList.remove("fade-in");
      }, 300);
    }, 300);
  }
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
