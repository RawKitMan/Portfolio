$( document ).ready(function() {
    $("#submit-button").on("click", function(event){
        event.preventDefault();

        let projectSubmit = {
            image_link: $("#image").val().trim(),
            image_description: $("#image_description").val().trim(),
            project_name: $("#project-name").val().trim(),
            project_url: $("#project-url").val().trim(),
            github_url: $("#github-url").val().trim(),
            project_description: $("#description").val().trim()
        };

        $.ajax({
            method: "POST",
            data: projectSubmit
        }).then(function(){
            $("#image").val("");
            $("#image_description").val("")
            $("#project-name").val("");
            $("#project-url").val("");
            $("#github-url").val("");
            $("#description").val("");
        })
    });
});