<script type="text/javascript">
      // stop video
      function pauseVideo() {
        document.querySelectorAll(".video").forEach((video) => {
          video.pause();
          video.currentTime = 0;
        });
}

      // Function to hide the scenes in the background
      // document.querySelectorAll does the exact same thing than the another SelectorAll
      // in the previous function but now its function is to set the attribute
      // visible of every scene by false
      function hideScenes() {
        document.querySelectorAll(".scene").forEach((scene) => {
          scene.setAttribute("visible", "false");
        });
      }

      // This function will bring us back to scene1
      // It does it by calling pauseVideo() and hideScenes() functions.
      // then document.querySelector("#sceneX") will switch the attribute of visible from
      // false (give it by default when creating the scene) to true
      // document.querySelector("#videoX").play will play the desired video
      // being X in both cases the next scene/video that we would like to play.
      function toScene1() {
        pauseVideo();
        hideScenes();

        document.querySelector("#scene1").setAttribute("visible", "true");
        document.querySelector("#video1").play();
      }

      function toScene2() {
        pauseVideo();
        hideScenes();
        document.querySelector("#scene2").setAttribute("visible", "true");
        document.querySelector("#video2").play();
      }

      function toScene3() {
        pauseVideo();
        hideScenes();
        document.querySelector("#scene3").setAttribute("visible", "true");
        document.querySelector("#video3").play();
      }

      function toScene4() {
        pauseVideo();
        hideScenes();
        document.querySelector("#scene4").setAttribute("visible", "true");
        document.querySelector("#video4").play();
      }

      function toScene5() {
        pauseVideo();
        hideScenes();
        document.querySelector("#scene5").setAttribute("visible", "true");
        document.querySelector("#video5").play();
      }
    </script>
