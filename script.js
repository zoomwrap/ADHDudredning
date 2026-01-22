fetch("da.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("brand").textContent = data.brand;
    document.getElementById("navlink1").textContent = data.navlink1;
    document.getElementById("navlink2").textContent = data.navlink2;
    document.getElementById("navlink3").textContent = data.navlink3;
        document.getElementById("navlink4").textContent = data.navlink4;
        document.getElementById("navlink5").textContent = data.navlink5;
        document.getElementById("navlink6").textContent = data.navlink6;
        document.getElementById("navlink7").textContent = data.navlink7;
    document.getElementById("heroImage").style.backgroundImage =
      `url('${data.heroImage.src}')`;
    document.getElementById("heroImage").alt = data.heroImage.alt;
    document.getElementById("title").textContent = data.title;
    document.getElementById("subtitle").textContent = data.subtitle;
    document.getElementById("column1Title").textContent = data.column1Title;
    document.getElementById("column1Text").textContent = data.column1Text;
    document.getElementById("column2Title").textContent = data.column2Title;
    document.getElementById("column2Text").textContent = data.column2Text;
    document.getElementById("column3Title").textContent = data.column3Title;
    document.getElementById("column3Text").textContent = data.column3Text;
  })
  .catch((error) => console.error("Fejl ved indlæsning af JSON:", error));
