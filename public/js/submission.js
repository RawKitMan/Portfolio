$( document ).ready(function() {

    $("#submit-button").on("click", function(event){
        event.preventDefault();

        let projectSubmit = {
            image_link: $("#image").val().trim(),
            image_description: $("#image-description").val().trim(),
            project_name: $("#project-name").val().trim(),
            project_url: $("#project-url").val().trim(),
            github_url: $("#github-url").val().trim(),
            project_description: $("#description").val().trim()
        };

        $.ajax({
            method: "POST",
            data: projectSubmit,
            url: "/api/projects"
        }).then(function(){

            //Clear the form
            $("#image").val("");
            $("#image_description").val("")
            $("#project-name").val("");
            $("#project-url").val("");
            $("#github-url").val("");
            $("#description").val("");

            //Redirect to the portfolio page to see the new project
            window.location = "/projects"
        })
    });

    //If we want to get rid of the project from the page, click the Delete button. 
    $(".delete-button").on("click", function(){
        console.log($(this).attr("button-index"));
        $.ajax({
            method: "DELETE",
            data: $(this).attr("button-index"),
            url: "/api/projects"
        })
        .then(function(){
            console.log("Ok");
            //Reload the page
            // location.reload();
        })
    })
});