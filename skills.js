document.addEventListener("DOMContentLoaded", function () {
  var skillsIcons = document.querySelector(".skills-icons");

  function createCircularPath(radius, count) {
    var path = [];
    var angleIncrement = (2 * Math.PI) / count;

    for (var i = 0; i < count; i++) {
      var x = Math.cos(i * angleIncrement) * radius;
      var y = Math.sin(i * angleIncrement) * radius;
      path.push({ x: x, y: y });
    }

    return path;
  }

  function arrangeIcons() {
    var radius = 200; // Adjust the radius as needed
    var icons = Array.from(skillsIcons.querySelectorAll("img"));
    var path = createCircularPath(radius, icons.length);

    icons.forEach(function (icon, index) {
      var position = path[index];
      icon.style.transform = `translate(${position.x}px, ${position.y}px)`;
    });
  }

  // Initial arrangement
  arrangeIcons();

  // Update arrangement on window resize
  window.addEventListener("resize", arrangeIcons);
});
