$(document).ready(function() {

    $('#siteTable').children('.thing').each(function () {
        // console.log(this); // "this" is the current element in the loop
        let x = $(this).find('.entry > .top-matter > .flat-list > .save-button > a').get(0);

        let observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {

            var z = $(mutation.target).parent().parent().parent().parent().parent().find('.unvoted > .arrow.up').get(0).click();
            
          });
                });

        // Configuration of the observer
        var config = { childList: true  };
      
        // Pass in the target node, as well as the observer options
        observer.observe(x, config);
    });
  
  });