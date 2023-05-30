// projects=[
//     {
//       title:"SocialMedia",
//       image:"assets/facebook.jpg",
//       languages:".NET Core",
//       gitURL:"https://github.com/MirceaTalpau/SocialMedia"
//     },
//     {
//       title:"Movie Journal",
//       image:"assets/movie_journal.jpg",
//       languages:"Angular",
//       gitURL:"https://github.com/MirceaTalpau/Proiect-Practica-Angular"
//     },
//     {
//       title:"Gym",
//       image:"assets/gym.jpg",
//       languages:"Angular",
//       gitURL:"https://github.com/MirceaTalpau/Gym"
//     },
//     {
//       title:"Geometry",
//       image:"assets/geometry.jpg",
//       languages:"Java",
//       gitURL:"https://github.com/MirceaTalpau/Probleme-Geometrie-Computationala"
//     },
//     {
//       title:"Events Manager",
//       image:"assets/events_manager.jpg",
//       languages:"Java",
//       gitURL:"https://github.com/MirceaTalpau/eEvent"
//     },
//     {
//       title:"Turing Machine",
//       image:"assets/turing.jpg",
//       languages:"Java",
//       gitURL:"https://github.com/MirceaTalpau/MasinaTuring"
//     }
// ]

// function populates(){
//     $(document).ready(function(){
//         projects.forEach(function(project) {
//             $.ajax({
//               url: "card.html",
//               dataType: "html",
//               success: function(data) {
//                 const $card = $(data);
//                 const $img = $("<img>").attr("src", project.image).attr("width", "360").attr("height", "300");
//                 $card.find(".img-holder").append($img);
//                 $card.find(".title").text(project.title)
//                 $card.find(".language").text(project.languages)
//                 $card.find(".actions button").click(function() {
//                     window.location.href = project.gitURL;
//                   });
               
//                 $("#card-holder .card").append($card);
//               }
//             });
//           });
//         });
// }

function populate(){
  $(document).ready(function(){
    $.getJSON("projects.json",function(json){

   
      json.projects.forEach(function(project) {
          $.ajax({
            url: "card.html",
            dataType: "html",
            success: function(data) {
              const $card = $(data);
              const $img = $("<img>").attr("src", project.image).attr("width", "360").attr("height", "300");
              $card.find(".img-holder").append($img);
              $card.find(".title").text(project.title)
              $card.find(".language").text(project.languages)
              $card.find(".actions button").click(function() {
                  window.location.href = project.gitURL;
                });
             
              $("#card-holder .card").append($card);
            }
          });
        });
      });
    })
}


