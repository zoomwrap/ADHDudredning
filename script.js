fetch("da.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("brand").textContent = data.brand;
    document.getElementById("navlink1").textContent = data.navlink1;
    document.getElementById("navlink2").textContent = data.navlink2;
    document.getElementById("navlink3").textContent = data.navlink3;
    document.getElementById("heroImage").style.backgroundImage =
      `url('${data.heroImage.src}')`;
    document.getElementById("heroImage").alt = data.heroImage.alt;
    document.getElementById("title").textContent = data.title;
    document.getElementById("subtitle").textContent = data.subtitle;
    document.getElementById("column1Image").src = data.column1Image.src;
    document.getElementById("column1Image").alt = data.column1Image.alt;
    document.getElementById("column1Title").textContent = data.column1Title;
    document.getElementById("column1Text").textContent = data.column1Text;
    document.getElementById("column2Image").src = data.column2Image.src;
    document.getElementById("column2Image").alt = data.column2Image.alt;
    document.getElementById("column2Title").textContent = data.column2Title;
    document.getElementById("column2Text").textContent = data.column2Text;
    document.getElementById("column3Image").src = data.column3Image.src;
    document.getElementById("column3Image").alt = data.column3Image.alt;
    document.getElementById("column3Title").textContent = data.column3Title;
    document.getElementById("column3Text").textContent = data.column3Text;
  })
  .catch((error) => console.error("Fejl ved indlæsning af JSON:", error));
